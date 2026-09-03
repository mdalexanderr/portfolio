import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowUpRight, X, ChevronLeft, ChevronRight, ZoomIn, Rocket } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { favonia, projects } from '../data/projects'

/* Flatten all Favonia screenshots (with their group) for the lightbox */
const allShots = [
  ...favonia.storefrontShots.map((s) => ({ ...s, group: 'Storefront' })),
  ...favonia.adminShots.map((s) => ({ ...s, group: 'Admin panel' })),
]

/* Gallery groups for the tabbed screenshot section. Each maps to a slice of
   `allShots` so the lightbox index stays correct across tabs. */
const GALLERY_GROUPS = [
  { id: 'storefront', label: 'Storefront', shots: favonia.storefrontShots, offset: 0 },
  {
    id: 'admin',
    label: 'Admin panel',
    shots: favonia.adminShots,
    offset: favonia.storefrontShots.length,
  },
]

/* Fullscreen lightbox — Esc / arrows / backdrop close, prev & next */
function Lightbox({ shots, index, setIndex, onClose }) {
  const len = shots.length
  const shot = shots[index]
  const next = () => setIndex((index + 1) % len)
  const prev = () => setIndex((index - 1 + len) % len)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, len, onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${shot.label} — enlarged screenshot`}
      className="lbFade fixed inset-0 z-[130] flex flex-col bg-[#0B0906]/[0.93] backdrop-blur-[6px]"
      onClick={onClose}
    >
      {/* Top bar */}
      <div
        className="flex items-start justify-between gap-4 px-5 pt-5 sm:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="min-w-0">
          <p className="truncate text-[15px] font-bold text-white">{shot.label}</p>
          <p className="mt-0.5 text-[12px] font-medium text-white/55">
            {shot.group} · {String(index + 1).padStart(2, '0')} / {String(len).padStart(2, '0')}
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery (Esc)"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C87B]"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Stage */}
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-3 sm:px-20">
        {len > 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous screenshot (←)"
            className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C87B] sm:left-6 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
        <figure
          className="flex max-h-full flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="lbZoom max-h-[68vh] w-auto max-w-full rounded-xl object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          />
          <figcaption className="mt-4 hidden text-center text-[12.5px] leading-relaxed text-white/70 sm:block">
            {shot.alt}
          </figcaption>
        </figure>
        {len > 1 && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next screenshot (→)"
            className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7C87B] sm:right-6 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
      </div>

      {/* Hint */}
      <p className="pb-5 text-center text-[11px] font-medium tracking-wide text-white/40">
        Use ← → to browse · Esc to close
      </p>
    </div>
  )
}

function ShotGrid({ title, shots, offset = 0, onOpen, showHeader = true }) {
  return (
    <div className="reveal">
      {showHeader && (
        <div className="flex items-center justify-between gap-4">
          <h3 className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#344054]">
            <span aria-hidden="true" className="inline-block h-px w-6 bg-[#C88A08]" />
            {title}
          </h3>
          <span className="text-[12px] font-medium text-muted-2">{shots.length} screens</span>
        </div>
      )}
      <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${showHeader ? 'mt-5' : ''}`}>
        {shots.map((img, i) => (
          <figure
            key={img.src}
            className="group overflow-hidden rounded-[18px] border border-white/70 bg-white/45 shadow-[0_14px_30px_-26px_rgba(16,24,40,0.3)] backdrop-blur-md"
          >
            <button
              type="button"
              onClick={() => onOpen?.(offset + i)}
              aria-label={`View ${img.label} in the gallery`}
              title="Click to enlarge"
              className="relative block aspect-[16/11] w-full cursor-zoom-in overflow-hidden bg-[#F5F1E6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C88A08]"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101828]/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100"
              >
                <span className="flex translate-y-1.5 items-center gap-1.5 rounded-full bg-white/95 px-3.5 py-2 text-[12px] font-bold text-[#101828] shadow-lg transition-transform duration-500 group-hover:translate-y-0">
                  <ZoomIn className="h-3.5 w-3.5 text-[#A96F05]" aria-hidden="true" />
                  View
                </span>
              </span>
            </button>
            <figcaption className="flex items-center justify-between px-4 py-3">
              <span className="text-[12.5px] font-semibold text-[#344054]">{img.label}</span>
              <span className="text-[11px] font-medium text-[#B9B4A6]">
                {String(offset + i + 1).padStart(2, '0')}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [galleryIndex, setGalleryIndex] = useState(null)
  const [shotTab, setShotTab] = useState('storefront')

  useEffect(() => {
    document.title = 'Projects — alexweb'
  }, [])

  // Scroll-reveal — subtle fade-up on cards/sections
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-bg relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        {/* ---------- Page header — frosted band ---------- */}
        <section>
          <div className="container-site pt-[104px] lg:pt-[122px]">
            <div className="reveal relative overflow-hidden rounded-[26px] border border-white/70 bg-white/45 px-6 py-7 shadow-[0_20px_50px_-32px_rgba(16,24,40,0.35)] backdrop-blur-md sm:px-10 lg:px-14 lg:py-10">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#F2CE7A] via-[#C88A08] to-[#F2CE7A]"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(200,138,8,0.12),transparent_70%)] blur-2xl"
              />
              <div className="relative max-w-[840px]">
                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C88A08]">
                  <span aria-hidden="true" className="inline-block h-px w-8 bg-[#C88A08]" />
                  Selected Work
                </p>
                <h1 className="mt-4 text-[34px] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-[46px] lg:text-[54px]">
                  Projects &amp; case studies
                </h1>
                <p className="mt-4 max-w-[620px] text-[16px] leading-relaxed text-[#475467] sm:text-[17px]">
                  E-commerce platforms, course marketplaces and corporate systems —
                  built end-to-end with clean frontends, real admin tools and dependable deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Featured — Favonia Hobbies ---------- */}
        <section>
          <div className="container-site py-16 lg:py-24">
            {/* Intro row — editorial split */}
            <div className="reveal grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#F0DFAC] bg-[#FFF6E0]/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8A6A20]">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#C88A08]" />
                  Recent {favonia.category}
                </span>
                <h2 className="mt-5 text-[32px] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[42px] lg:text-[48px]">
                  {favonia.name}
                </h2>
                <p className="mt-3 text-[17px] font-semibold text-[#8A6A20]">{favonia.tagline}</p>
                <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.7] text-[#475467]">
                  {favonia.summary}
                </p>
              </div>
              <dl className="flex flex-col gap-3">
                {favonia.highlights.map((h) => (
                  <div
                    key={h.k}
                    className="flex items-center justify-between gap-4 rounded-[16px] border border-white/70 bg-white/45 px-5 py-4 shadow-[0_12px_26px_-24px_rgba(16,24,40,0.35)] backdrop-blur-md"
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#667085]">{h.k}</dt>
                    <dd className="text-[20px] font-extrabold tracking-tight text-ink">{h.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Screenshot galleries — grouped tabs */}
            <div className="mt-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#344054]">
                  <span aria-hidden="true" className="inline-block h-px w-6 bg-[#C88A08]" />
                  Screenshots
                </h3>
                <div
                  className="flex items-center gap-1 rounded-full border border-white/70 bg-white/45 p-1 backdrop-blur-md"
                  role="tablist"
                  aria-label="Favonia screenshot groups"
                >
                  {GALLERY_GROUPS.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      role="tab"
                      aria-selected={shotTab === g.id}
                      onClick={() => setShotTab(g.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[12.5px] font-semibold transition-all duration-300 ${
                        shotTab === g.id
                          ? 'bg-[#C88A08] text-white shadow-[0_6px_14px_-8px_rgba(200,138,8,0.7)]'
                          : 'text-[#475467] hover:bg-white/70'
                      }`}
                    >
                      {g.label}
                      <span
                        className={`text-[11px] font-bold ${
                          shotTab === g.id ? 'text-white/80' : 'text-[#98A2B3]'
                        }`}
                      >
                        {g.shots.length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {GALLERY_GROUPS.map((g) => (
                <div key={g.id} className={shotTab === g.id ? 'mt-6 block' : 'hidden'}>
                  <ShotGrid
                    title={g.label}
                    shots={g.shots}
                    offset={g.offset}
                    onOpen={setGalleryIndex}
                    showHeader={false}
                  />
                </div>
              ))}
            </div>

            {/* Capability lists */}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                { title: 'Storefront', items: favonia.storefront },
                { title: 'Platform & Admin', items: favonia.platform },
              ].map((col, ci) => (
                <div
                  key={col.title}
                  className="reveal rounded-[18px] border border-white/70 bg-white/45 p-6 shadow-[0_14px_30px_-26px_rgba(16,24,40,0.3)] backdrop-blur-md"
                  style={{ animationDelay: `${ci * 0.08}s` }}
                >
                  <h3 className="flex items-center gap-2.5 text-[13px] font-bold uppercase tracking-[0.14em] text-[#344054]">
                    <span aria-hidden="true" className="inline-block h-px w-6 bg-[#C88A08]" />
                    {col.title}
                  </h3>
                  <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-[#475467]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#98A2B3]" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Other projects ---------- */}
        <section>
          <div className="container-site py-16 lg:py-24">
            <div className="reveal max-w-[620px]">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C88A08]">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-[#C88A08]" />
                More Work
              </p>
              <h2 className="mt-4 text-[30px] font-extrabold tracking-tight text-ink sm:text-[38px]">
                Other projects
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#475467]">
                Marketplaces, corporate platforms and more — each with custom CMS or admin tooling.
                Screenshots are being added as each project is prepared for the portfolio.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <article
                  key={p.name}
                  className="reveal group relative flex flex-col overflow-hidden rounded-[18px] border border-white/70 bg-white/45 p-6 shadow-[0_14px_30px_-26px_rgba(16,24,40,0.3)] backdrop-blur-md transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-white hover:bg-white/60 hover:shadow-[0_24px_46px_-26px_rgba(16,24,40,0.35)]"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  {/* top accent */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#C88A08] to-transparent transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                  />
                  {/* Brand logo */}
                  <div className="flex h-[88px] items-center justify-center overflow-hidden rounded-[14px] border border-[#EFEAE0] bg-white/70 px-4 backdrop-blur-sm transition-colors duration-700 group-hover:border-[#E4D5AC]">
                    <img
                      src={p.logo}
                      alt={`${p.name} logo`}
                      loading="lazy"
                      className={`w-auto object-contain transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] ${
                        p.logoWide ? 'max-h-12' : 'max-h-14'
                      }`}
                    />
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-3">
                    <h3 className="text-[19px] font-bold tracking-tight text-ink transition-colors duration-500 group-hover:text-[#A96F05]">
                      {p.name}
                    </h3>
                    <span className="shrink-0 rounded-full border border-[#E5DFD0] bg-white/70 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-[#475467] backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-[#475467]">{p.blurb}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-md border border-[#EFE9DA] bg-white/70 px-2 py-1 text-[11px] font-medium text-[#475467] backdrop-blur-sm"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto flex items-center gap-1.5 pt-5 text-[11.5px] font-medium italic text-[#98A2B3]">
                    <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#D9C79A]" />
                    Screenshots coming soon
                  </p>
                </article>
              ))}
            </div>

            {/* CTA to contact — frosted, homepage style */}
            <div className="reveal relative mt-16 flex flex-col items-center gap-7 overflow-hidden rounded-[18px] border border-white/70 bg-[linear-gradient(100deg,rgba(255,240,203,0.6)_0%,rgba(255,248,230,0.5)_55%,rgba(255,236,190,0.6)_100%)] px-7 py-10 shadow-[0_18px_44px_-30px_rgba(200,138,8,0.5)] backdrop-blur-md sm:gap-8 sm:px-12 lg:flex-row lg:items-center lg:justify-between">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-20 h-48 w-48 rounded-full bg-[#C88A08]/[0.09] blur-2xl"
              />
              <div className="relative flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left lg:items-center lg:gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_-10px_rgba(200,138,8,0.5)] ring-1 ring-[#EFDBA9]">
                  <Rocket className="h-6 w-6 text-[#C88A08]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-[24px] font-extrabold tracking-tight text-ink sm:text-[28px]">
                    Want something built like this?
                  </h3>
                  <p className="mt-1.5 text-[15px] text-[#8A6A20]">
                    Let&apos;s talk about your project — from store to admin panel.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="group relative inline-flex shrink-0 items-center gap-2 rounded-[9px] bg-[#C88A08] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_8px_22px_-10px_rgba(200,138,8,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A96F05]"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox gallery */}
      {galleryIndex !== null && (
        <Lightbox
          shots={allShots}
          index={galleryIndex}
          setIndex={setGalleryIndex}
          onClose={() => setGalleryIndex(null)}
        />
      )}
    </div>
  )
}
