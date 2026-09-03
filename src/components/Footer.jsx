import { Link } from 'react-router-dom'
import { MessageCircle, Mail, MapPin } from 'lucide-react'
import { EMAIL, WHATSAPP_URL, GMAIL_URL, PHONE_DISPLAY, LOCATION } from '../lib/contact'

/** Inline LinkedIn glyph — lucide no longer ships brand icons. */
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Portfolio', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

const SERVICE_LINKS = [
  'Custom E-commerce',
  'Responsive Design',
  'Payment Integration',
  'Admin Dashboard',
  'API Integration',
  'SEO & Performance',
]

const SOCIALS = [
  { icon: MessageCircle, label: 'WhatsApp', href: WHATSAPP_URL },
  { icon: Mail, label: 'Email', href: GMAIL_URL },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/iamalexanderr/' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/70 bg-white/45 backdrop-blur-md">
      <div className="container-site py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-8">
          {/* Left — brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-baseline text-[20px] font-extrabold tracking-tight" aria-label="alexweb — home">
              <span className="text-gradient">alex</span>
              <span className="text-ink">web</span>
            </Link>
            <p className="max-w-[280px] text-[14px] leading-relaxed text-[#475467]">
              Full-stack developer building high-performance websites,
              e-commerce platforms, and custom web applications for growing
              businesses.
            </p>
            <ul className="flex items-center gap-3" aria-label="Social links">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#EAECF0] bg-[#FCFBF9] text-[#475467] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E0C58A] hover:text-[#C88A08]"
                  >
                    <s.icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-ink">Quick Links</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-[14px] text-[#344054] transition-colors hover:text-[#C88A08]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Services (plain text) */}
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-ink">Services</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s} className="text-[14px] text-[#344054]">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact info (plain text) */}
          <div>
            <h3 className="text-[14px] font-bold uppercase tracking-wider text-ink">Contact Info</h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#667085]" aria-hidden="true" />
                <a
                  href={GMAIL_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Email ${EMAIL} (opens Gmail)`}
                  className="text-[14px] text-[#344054] underline-offset-2 transition-colors hover:text-[#C88A08] hover:underline"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-[#667085]" aria-hidden="true" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`WhatsApp ${PHONE_DISPLAY} (opens WhatsApp)`}
                  className="text-[14px] text-[#344054] underline-offset-2 transition-colors hover:text-[#C88A08] hover:underline"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-[#667085]" aria-hidden="true" />
                <span className="text-[14px] text-[#344054]">{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[14px] font-medium text-emerald-600">Available for freelance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-9 flex flex-col items-center justify-between gap-3 border-t border-[#EAECF0] pt-5 sm:flex-row">
          <p className="text-[13px] text-[#475467]">© 2026 md.alexander. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[13px] text-[#475467]">
            Designed &amp; Developed with <span className="text-rose-500" aria-hidden="true">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
