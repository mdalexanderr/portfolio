import { useEffect } from 'react'
import { Mail, MessageCircle, MapPin, Clock, ArrowUpRight, Send, Check } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/ui/Button'
import { EMAIL, WHATSAPP_URL, GMAIL_URL, LOCATION } from '../lib/contact'

const METHODS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+880 1603 231214',
    hint: 'Fastest — I usually reply within a couple of hours',
    badge: 'Preferred',
    href: WHATSAPP_URL,
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    hint: 'Opens a Gmail compose window',
    href: GMAIL_URL,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: LOCATION,
    hint: 'GMT+6 · remote-friendly',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Open for new projects',
    hint: 'Usually replies within 24 hours',
    live: true,
  },
]

const STEPS = [
  {
    n: '01',
    title: 'Tell me about it',
    text: 'Reach out on WhatsApp or email with a few lines about your idea, goals and timeline.',
  },
  {
    n: '02',
    title: 'Free consultation',
    text: 'We talk through requirements, scope, tech approach and what success looks like.',
  },
  {
    n: '03',
    title: 'Proposal & build',
    text: 'You get a clear proposal with timeline and pricing — then I start building.',
  },
]

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — alexweb'
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
        {/* ---------- Page header ---------- */}
        <section className="bg-white">
          <div className="container-site pb-10 pt-[104px] lg:pb-12 lg:pt-[122px]">
            <p className="reveal section-label">
              <span aria-hidden="true" className="h-px w-6 bg-[#C88A08]" />
              Get in Touch
            </p>
            <h1 className="reveal mt-3 max-w-[720px] text-[34px] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[44px] lg:text-[52px]">
              Let&apos;s build something{' '}
              <span className="text-gradient">great</span> together
            </h1>
            <p className="reveal mt-4 max-w-[560px] text-[15.5px] leading-relaxed text-[#475467]">
              Have a project in mind — a store, a platform or a complete web
              product? I&apos;m one message away. Prefer WhatsApp for the
              quickest reply.
            </p>
          </div>
        </section>

        {/* ---------- Contact methods ---------- */}
        <section className="bg-[#FDFBF4]">
          <div className="container-site py-16 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
              {/* Left — methods */}
              <div className="flex flex-col">
                <h2 className="reveal text-[22px] font-extrabold tracking-tight text-ink sm:text-[26px]">
                  Ways to reach me
                </h2>
                <p className="reveal mt-2 max-w-[440px] text-[14.5px] leading-relaxed text-muted">
                  Pick whichever channel you prefer — every enquiry gets a
                  personal reply.
                </p>

                <ul className="mt-8 flex flex-1 flex-col gap-4">
                  {METHODS.map((m, i) => {
                    const clickable = !!m.href
                    const cardCls = `group flex w-full items-center justify-between gap-3 rounded-[16px] border border-[#E9E4D8] bg-white p-5 shadow-[0_4px_20px_rgba(16,24,40,0.04)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      clickable
                        ? 'hover:-translate-y-1 hover:border-[#E0C58A] hover:shadow-[0_22px_44px_-18px_rgba(16,24,40,0.16)]'
                        : 'cursor-default'
                    }`
                    const info = (
                      <span className="flex min-w-0 items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] border border-[#F0E7D2] bg-[#FFF6E0] text-[#A96F05]">
                          <m.icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="flex flex-wrap items-center gap-2">
                            <span className="text-[12.5px] font-bold uppercase tracking-[0.12em] text-[#98A2B3]">
                              {m.label}
                            </span>
                            {m.badge && (
                              <span className="rounded-full bg-[#C88A08] px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-white">
                                {m.badge}
                              </span>
                            )}
                          </span>
                          <span className="mt-0.5 block break-words text-[16.5px] font-bold text-ink">
                            {m.value}
                          </span>
                          <span className="mt-0.5 block text-[13px] leading-snug text-[#98A2B3]">
                            {m.hint}
                          </span>
                        </span>
                      </span>
                    )

                    return (
                      <li key={m.label} className="reveal flex flex-1" style={{ animationDelay: `${i * 70}ms` }}>
                        {clickable ? (
                          <a
                            href={m.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label={`${m.label}: ${m.value} (opens in a new tab)`}
                            className={cardCls}
                          >
                            {info}
                            <ArrowUpRight
                              className="mt-1 h-5 w-5 shrink-0 text-[#D4B77E] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C88A08]"
                              aria-hidden="true"
                            />
                          </a>
                        ) : (
                          <div className={cardCls}>
                            {info}
                            {m.live && (
                              <span className="relative mt-1 flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                              </span>
                            )}
                          </div>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Right — CTA panel */}
              <div className="flex flex-col">
                <div className="reveal relative overflow-hidden rounded-[20px] bg-[linear-gradient(150deg,#FFF3D6_0%,#FFF9EC_60%,#FFF1D2_100%)] p-7 ring-1 ring-[#F0DFB8] sm:p-10">
                  <div
                    className="pointer-events-none absolute -right-12 -top-14 h-56 w-56 rounded-full bg-[#C88A08]/[0.08] blur-2xl"
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-white/50 blur-2xl"
                    aria-hidden="true"
                  />

                  <div className="relative">
                    <p className="section-label">
                      <span aria-hidden="true" className="h-px w-6 bg-[#C88A08]" />
                      Start a conversation
                    </p>
                    <h2 className="mt-3 text-[24px] font-extrabold leading-tight tracking-tight text-ink sm:text-[30px]">
                      Tell me about your project
                    </h2>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-[#8A6A20]">
                      A short message is enough to get started — I&apos;ll come
                      back with questions, ideas and honest advice.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 text-[14.5px] leading-relaxed text-[#8A6A20]">
                      <p>
                        The quickest way to reach me is{' '}
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-semibold text-[#A96F05] underline decoration-[#E3CB8E] underline-offset-2 transition-colors hover:text-[#C88A08]"
                        >
                          WhatsApp
                          <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                        .
                      </p>
                      <p>
                        For a full brief, email{' '}
                        <a
                          href={GMAIL_URL}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="font-semibold text-[#A96F05] underline decoration-[#E3CB8E] underline-offset-2 transition-colors hover:text-[#C88A08]"
                        >
                          {EMAIL}
                          <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5" aria-hidden="true" />
                        </a>{' '}
                        — it opens a Gmail compose window.
                      </p>
                    </div>

                    <p className="mt-6 flex items-center gap-2 text-[13px] text-[#8A6A20]">
                      <span className="relative flex h-2 w-2" aria-hidden="true">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Currently accepting new projects
                    </p>
                  </div>
                </div>

                {/* Elsewhere */}
                <div className="reveal mt-6 rounded-[20px] border border-[#E9E4D8] bg-white p-7 sm:p-8">
                  <h3 className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.14em] text-[#B47A05]">
                    <span aria-hidden="true" className="inline-block h-px w-5 bg-[#D9B45C]" />
                    What happens next
                  </h3>
                  <ol className="mt-5 flex flex-col gap-5">
                    {STEPS.map((s, i) => (
                      <li key={s.n} className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#EDD9A6] bg-[#FFF6E0] text-[13px] font-extrabold text-[#A96F05]">
                          {s.n}
                        </span>
                        <div>
                          <p className="flex items-center gap-1.5 text-[15px] font-bold text-ink">
                            {s.title}
                            {i < STEPS.length - 1 && (
                              <Check className="h-4 w-4 text-[#C88A08]" aria-hidden="true" />
                            )}
                          </p>
                          <p className="mt-0.5 text-[13.5px] leading-relaxed text-muted">{s.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Bottom email band */}
            <div className="reveal mt-14 flex flex-col items-start justify-between gap-5 rounded-[18px] border border-[#E9E4D8] bg-white px-7 py-9 sm:flex-row sm:items-center sm:px-10">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#F0E7D2] bg-[#FFF6E0]">
                  <Send className="h-5 w-5 text-[#A96F05]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[20px] font-extrabold tracking-tight text-ink">
                    Prefer email for the full brief?
                  </h3>
                  <p className="mt-1 text-[14px] text-[#475467]">
                    Send the details straight to{' '}
                    <a
                      href={GMAIL_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-[#A96F05] underline decoration-[#E3CB8E] underline-offset-2 transition-colors hover:text-[#C88A08]"
                    >
                      {EMAIL}
                      <ArrowUpRight className="ml-0.5 inline h-3.5 w-3.5" aria-hidden="true" />
                    </a>{' '}
                    — it opens a Gmail compose window. I reply within 24 hours.
                  </p>
                </div>
              </div>
              <Button
                href={GMAIL_URL}
                variant="primary"
                className="shrink-0"
                target="_blank"
                rel="noreferrer noopener"
              >
                Send an Email
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
