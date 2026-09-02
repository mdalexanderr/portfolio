import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', to: '/', id: 'home' },
  { label: 'Services', to: '/#services', id: 'services' },
  { label: 'Portfolio', to: '/projects', id: 'portfolio' },
  { label: 'Technologies', to: '/#technologies', id: 'technologies' },
  { label: 'Contact', to: '/contact', id: 'contact' },
]

function Logo({ compact }) {
  return (
    <Link
      to="/"
      className={`flex items-baseline font-extrabold tracking-tight transition-[font-size] duration-300 ease-out ${
        compact ? 'text-[17px]' : 'text-[19px]'
      }`}
      aria-label="alexweb — home"
    >
      <span className="text-gradient">alex</span>
      <span className="text-ink">web</span>
    </Link>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const [active, setActive] = useState('home')

  const onHome = pathname === '/'

  // Keep the matching nav link highlighted on the sub-pages
  useEffect(() => {
    if (pathname === '/contact') setActive('contact')
    else if (pathname === '/projects') setActive('portfolio')
  }, [pathname])

  // Scrollspy + auto-compress on the home page (single rAF-throttled handler)
  const updateNav = useCallback(() => {
    setCompact(window.scrollY > 90)
    if (!onHome) return

    const probe = window.scrollY + 150
    let current = 'home'
    for (const link of NAV_LINKS) {
      const el = document.getElementById(link.id)
      if (!el) continue
      if (el.getBoundingClientRect().top + window.scrollY <= probe) {
        current = link.id
      }
    }
    const doc = document.documentElement
    if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
      current = 'contact'
    }
    setActive(current)
  }, [onHome])

  useEffect(() => {
    updateNav()
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(() => {
          updateNav()
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [updateNav])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (id) => active === id

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${
        compact ? 'bg-white/95 shadow-[0_1px_0_rgba(16,24,40,0.05)]' : 'bg-white/85'
      } border-b border-[#EAECF0]`}
    >
      <nav
        className={`container-site flex items-center justify-between gap-4 transition-[height] duration-300 ease-out will-change-[height] ${
          compact ? 'h-[56px]' : 'h-[68px]'
        }`}
      >
        {/* Left — logo */}
        <Logo compact={compact} />

        {/* Center — links (desktop) */}
        <ul
          className={`hidden items-center transition-[gap] duration-300 ease-out lg:flex ${
            compact ? 'gap-5' : 'gap-8'
          }`}
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                aria-current={isActive(link.id) ? 'true' : undefined}
                className={`relative inline-flex flex-col items-center text-[14px] font-medium leading-none transition-colors duration-200 ${
                  isActive(link.id)
                    ? 'text-[#C88A08]'
                    : 'text-[#475467] hover:text-[#101828]'
                }`}
              >
                {link.label}
                {/* Active dot — anchored under the label so it never jumps when the bar compresses */}
                <span
                  aria-hidden="true"
                  className={`absolute left-1/2 top-full mt-[7px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#C88A08] transition-opacity duration-200 ${
                    isActive(link.id) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — CTA (desktop) */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`group inline-flex items-center gap-2 rounded-[9px] bg-[#C88A08] font-semibold text-white shadow-[0_6px_18px_-8px_rgba(200,138,8,0.55)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#A96F05] ${
              compact ? 'px-4 py-2 text-[13px]' : 'px-5 py-2.5 text-[14px]'
            }`}
          >
            Let&apos;s Talk
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile — hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex items-center justify-center rounded-lg border border-[#E4E7EC] text-[#101828] transition-all duration-300 lg:hidden ${
            compact ? 'h-9 w-9' : 'h-10 w-10'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`lg:hidden overflow-hidden border-t border-[#EAECF0] bg-white backdrop-blur-xl transition-[max-height] duration-300 ease-out ${
          open ? 'max-h-[420px]' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="container-site flex flex-col gap-1 py-4" aria-label="Primary mobile">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                to={link.to}
                aria-current={isActive(link.id) ? 'true' : undefined}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-[15px] font-medium transition-colors ${
                  isActive(link.id)
                    ? 'text-[#C88A08]'
                    : 'text-[#475467] hover:bg-[#F7F4EC] hover:text-[#101828]'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mt-2 px-3 pb-2">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-[9px] bg-[#C88A08] px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-[#A96F05]"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
