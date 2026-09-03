import { useEffect, useRef, useState } from 'react'
import desktopVideo from '../assets/video/ecosystem-web.mp4'
import mobileVideo from '../assets/video/ecosystem-mobile.mp4'
import posterSrc from '../assets/video/ecosystem-poster.jpg'

/**
 * ScrollVideoBackground
 *
 * A fixed, full-viewport video layer whose timeline is driven by the
 * homepage's scroll position (page top = frame 0, page bottom = final
 * frame). The video NEVER autoplays, loops or advances on its own clock.
 *
 * SCRUBBING ARCHITECTURE (performance-critical)
 * ---------------------------------------------
 * The scroll handler is intentionally trivial — it never touches
 * `video.currentTime`. It only schedules a requestAnimationFrame that
 * turns the current scroll position into a TARGET time.
 *
 * Seeking is COALESCED:
 *   - A single `pendingTime` holds the newest desired frame.
 *   - Only one seek is ever in flight (`isSeeking`).
 *   - While a seek is running, newer targets simply replace `pendingTime`;
 *     obsolete targets are discarded, never queued.
 *   - When the seek completes (`seeked`) we chase the newest pending time.
 *   - A watchdog releases the seek lock if `seeked` never fires (slow
 *     buffering), so scrolling can never wedge the video.
 */
const SEEK_EPSILON = 0.035 // ~1 frame — don't seek for sub-frame differences
const FINAL_FRAME_MARGIN = 0.01 // land just inside duration at the very bottom
const SEEK_WATCHDOG_MS = 350 // release lock if the browser never fires `seeked`

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/** Lower-powered / mobile devices get the smaller 720p encode. */
function useMobileSource() {
  const coarse = window.matchMedia('(pointer: coarse)').matches
  const small = window.matchMedia('(max-width: 767px)').matches
  const cores =
    typeof navigator.hardwareConcurrency === 'number' ? navigator.hardwareConcurrency : 8
  const mem = typeof navigator.deviceMemory === 'number' ? navigator.deviceMemory : 8
  return small || coarse || cores <= 4 || mem <= 4
}

export default function ScrollVideoBackground() {
  const videoRef = useRef(null)
  const [posterVisible, setPosterVisible] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    const reduceMotion = prefersReducedMotion()
    let destroyed = false

    // Duration is unknown until the metadata loads — never derive a seek
    // target from scroll before it exists.
    let duration = 0
    let rafId = 0
    let pendingTime = -1
    let isSeeking = false
    let seekWatchdog = 0
    let logCounter = 0
    let currentSrc = ''

    const measureMaxScroll = () => {
      const doc = document.documentElement
      return Math.max(1, doc.scrollHeight - window.innerHeight)
    }

    const progressFromScroll = (maxScroll) => {
      if (maxScroll <= 0) return 0
      return Math.min(1, Math.max(0, window.scrollY / maxScroll))
    }

    // Scroll event → schedule ONE rAF. Nothing else happens here, so the
    // handler stays extremely lightweight regardless of scroll frequency.
    const scheduleProcess = () => {
      if (rafId || !duration || reduceMotion) return
      rafId = window.requestAnimationFrame(processTarget)
    }

    const releaseSeek = () => {
      window.clearTimeout(seekWatchdog)
      isSeeking = false
      // If the user scrolled while we were seeking, chase the NEWEST target.
      // Old targets were never queued, so there is no backlog to drain.
      if (
        !destroyed &&
        duration &&
        Math.abs(video.currentTime - pendingTime) > SEEK_EPSILON
      ) {
        scheduleProcess()
      }
    }

    const beginSeek = (time) => {
      if (Math.abs(video.currentTime - time) < SEEK_EPSILON) {
        isSeeking = false
        return
      }

      if (import.meta.env.DEV && logCounter % 24 === 0) {
        const maxScroll = measureMaxScroll()
        console.log('[scroll-video] seek', {
          scrollProgress: progressFromScroll(maxScroll).toFixed(4),
          targetTime: time.toFixed(3),
          currentTime: video.currentTime.toFixed(3),
          duration: video.duration,
          readyState: video.readyState,
          seeking: video.seeking,
        })
      }
      logCounter += 1

      isSeeking = true
      try {
        video.currentTime = time
      } catch {
        isSeeking = false
        return
      }

      video.addEventListener('seeked', releaseSeek, { once: true })
      // Watchdog: if the browser stalls mid-seek (e.g. waiting for the
      // network to buffer), free the lock so we are never stuck.
      seekWatchdog = window.setTimeout(releaseSeek, SEEK_WATCHDOG_MS)
    }

    const processTarget = () => {
      rafId = 0
      if (!duration || video.readyState < 1) return

      const maxScroll = measureMaxScroll()
      const progress = progressFromScroll(maxScroll)

      // Clamp so the timeline never exceeds the final frame.
      let target = progress * duration
      if (progress >= 0.999) target = Math.max(0, duration - FINAL_FRAME_MARGIN)

      // Frame-quantized deadzone — small differences don't justify a new
      // decoder seek (this is what prevents seek flooding).
      if (Math.abs(video.currentTime - target) <= SEEK_EPSILON) return

      pendingTime = target
      if (isSeeking) return // coalesce: newest target replaces this one
      beginSeek(pendingTime)
    }

    const onLoadedMetadata = () => {
      duration = video.duration || 0
      if (!duration) return
      // Re-sync on mount (also covers a refresh that restores mid-page scroll).
      scheduleProcess()
    }

    const onLoadedData = () => {
      // First frame is decodable — swap the poster for real footage.
      if (!destroyed) setPosterVisible(false)
    }

    const onScroll = () => scheduleProcess()

    const pickSource = () => (useMobileSource() ? mobileVideo : desktopVideo)

    const onResize = () => {
      // Re-pick the encode when the device profile changes (e.g. a phone
      // rotated, or a tablet/desktop window crossed the mobile breakpoint).
      const next = pickSource()
      if (!reduceMotion && next !== currentSrc) {
        currentSrc = next
        duration = 0 // wait for the new media's metadata
        isSeeking = false
        window.clearTimeout(seekWatchdog)
        video.src = next
        video.load()
        return
      }
      // Only the page height / maxScroll needs recalculating — which happens
      // in processTarget. The video time itself is NOT reset.
      scheduleProcess()
    }

    const onVisibility = () => {
      if (document.hidden) {
        if (rafId) {
          window.cancelAnimationFrame(rafId)
          rafId = 0
        }
      } else {
        // Recalculate the current scroll position and sync immediately —
        // the timeline must never drift while the tab was hidden.
        scheduleProcess()
      }
    }

    // Reduced motion: show the static poster/first frame only — skip loading
    // the heavy video entirely.
    if (!reduceMotion) {
      currentSrc = pickSource()
      video.src = currentSrc
      video.load()
      video.addEventListener('loadedmetadata', onLoadedMetadata)
      video.addEventListener('loadeddata', onLoadedData)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      destroyed = true
      if (rafId) window.cancelAnimationFrame(rafId)
      window.clearTimeout(seekWatchdog)
      video.pause()
      video.removeAttribute('src')
      video.removeEventListener('loadedmetadata', onLoadedMetadata)
      video.removeEventListener('loadeddata', onLoadedData)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="scroll-video-bg" aria-hidden="true">
      {/* Static poster — instant paint while the video metadata loads */}
      <img
        className={`scroll-video-poster${posterVisible ? '' : ' is-hidden'}`}
        src={posterSrc}
        alt=""
        draggable={false}
      />
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
        disablePictureInPicture
      />
      {/* Soft warm veil keeps content readable without hiding the footage */}
      <div className="scroll-video-overlay" />
    </div>
  )
}
