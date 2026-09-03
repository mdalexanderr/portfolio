import { useEffect, useState } from 'react'
import laptopImg from '../../../assets/web/hero-laptop.webp'
import phoneImg from '../../../assets/web/hero-phone.webp'
import desktopScreenImg from '../../../assets/web/site-desktop.webp'
import desktopScreen2Img from '../../../assets/web/site-desktop-2.webp'
import mobileScreenImg from '../../../assets/web/site-mobile.webp'
import mobileScreen2Img from '../../../assets/web/site-mobile-2.webp'

/**
 * Display regions (as % of each device frame canvas) where the website page
 * screenshots are shown. Each frame image already has a transparent display
 * area (a "hole") with the opaque bezel/notch/body drawn around it, so the
 * screenshots are placed BEHIND the frame and simply show through the hole —
 * the physical device stays completely unchanged and always on top.
 */
const LAPTOP_SCREEN = {
  left: '10.7%',
  top: '3.43%',
  width: '78.67%',
  height: '75%',
}

const PHONE_SCREEN = {
  left: '6.13%',
  top: '2.5%',
  width: '87.74%',
  height: '94.87%',
}

const DESKTOP_PAGES = [desktopScreenImg, desktopScreen2Img]
const MOBILE_PAGES = [mobileScreenImg, mobileScreen2Img]

/** How long each page is fully shown (ms). */
const SHOW_MS = 4600
/** Crossfade duration — the only thing that animates is opacity. */
const FADE_MS = 700

/**
 * Crossfading screen content for one device.
 *
 * All pages stay MOUNTED, stacked at the exact same fixed geometry inside the
 * static, clipped screen viewport. Only each image's `opacity` changes, so the
 * screenshots are never scaled, moved, filtered or GPU-composited — they stay
 * razor sharp before, during and after every transition.
 */
function ScreenSlides({ pages, region, active }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute overflow-hidden"
      style={{ left: region.left, top: region.top, width: region.width, height: region.height }}
    >
      {pages.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          draggable={false}
          className={`absolute inset-0 h-full w-full select-none object-cover object-top transition-opacity ease-in-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        />
      ))}
    </div>
  )
}

export default function ShopVerseMockup() {
  const [slide, setSlide] = useState(0)

  // Advance the shared slide counter; both devices crossfade in sync.
  // Respects prefers-reduced-motion (stays on the first page).
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setSlide((s) => s + 1), SHOW_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative mx-auto w-full max-w-[520px] select-none">
      {/* Soft warm glow behind the devices */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(200,138,8,0.16),transparent_65%)] blur-2xl"
      />

      {/* Laptop — STATIC device; screen content crossfades behind the frame */}
      <div className="relative">
        {/* Soft floor/contact shadows under the laptop (radial falloff) */}
        <div
          aria-hidden="true"
          className="absolute -bottom-[16px] left-[7%] right-[7%] h-[40px] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(16,24,40,0.14)_0%,rgba(16,24,40,0)_72%)]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-[5px] left-[17%] right-[17%] h-[22px] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(16,24,40,0.24)_0%,rgba(16,24,40,0)_70%)]"
        />

        <ScreenSlides
          pages={DESKTOP_PAGES}
          region={LAPTOP_SCREEN}
          active={slide % DESKTOP_PAGES.length}
        />
        <img
          src={laptopImg}
          alt="Responsive web pages previewed on a laptop"
          className="relative block w-full"
        />
      </div>

      {/* Phone overlay — gently floats up/down. The whole phone (frame +
          crossfading screen) is promoted to a single GPU layer via
          `will-change-transform`, so the motion is smooth and the screenshots
          never blur (their content only animates opacity). */}
      <div className="absolute -bottom-12 -right-2 w-[128px] animate-float will-change-transform sm:-right-4 sm:w-[148px]">
        <div className="relative">
          {/* Soft floor/contact shadows under the phone (outer glow + tight core) */}
          <div
            aria-hidden="true"
            className="absolute inset-x-[-6px] -bottom-[12px] mx-auto h-[26px] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(16,24,40,0.16)_0%,rgba(16,24,40,0)_72%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-[6%] -bottom-[7px] mx-auto h-[16px] rounded-[50%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(16,24,40,0.30)_0%,rgba(16,24,40,0)_70%)]"
          />

          <ScreenSlides
            pages={MOBILE_PAGES}
            region={PHONE_SCREEN}
            active={slide % MOBILE_PAGES.length}
          />
          <img
            src={phoneImg}
            alt="Responsive web pages previewed on a smartphone"
            className="relative block w-full"
          />
        </div>
      </div>
    </div>
  )
}
