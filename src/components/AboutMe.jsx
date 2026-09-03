import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

/**
 * AboutMe — a compact philosophy band, not a biography.
 * Placed between Recent Work and the Tech Stack.
 */
export default function AboutMe() {
  return (
    <section aria-label="About" className="container-site py-[48px] lg:py-[64px]">
      <div className="reveal relative overflow-hidden rounded-[20px] bg-[#2E3A4E] px-7 py-8 shadow-[0_28px_60px_-32px_rgba(16,24,40,0.5)] sm:px-10 lg:px-14 lg:py-10">
        {/* Decorative glow accents */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#C88A08]/[0.1] blur-3xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-16 h-56 w-56 rounded-full bg-white/[0.05] blur-3xl"
        />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-[620px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#98A2B3]">
              About Me
            </p>
            <h2 className="mt-1.5 text-[24px] font-extrabold leading-[1.2] tracking-tight text-white sm:text-[30px]">
              More than just code.
            </h2>
            <p className="mt-2 text-[14px] leading-relaxed text-[#CBD5E1] sm:max-w-[560px]">
              I build with business goals in mind — performance, usability,
              scalability, and the people actually using the product.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-[9px] bg-[#C88A08] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-[0_10px_24px_-12px_rgba(200,138,8,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A96F05] sm:self-auto"
          >
            More About Me
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
