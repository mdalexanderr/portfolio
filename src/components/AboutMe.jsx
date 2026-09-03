import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'

const PRINCIPLES = [
  {
    title: 'Business-first thinking',
    desc: 'Every line of code maps back to a real business outcome.',
  },
  {
    title: 'Performance as a feature',
    desc: 'Fast pages that feel instant, load quickly and rank well.',
  },
  {
    title: 'Usable by real people',
    desc: 'Interfaces anyone can navigate without a manual.',
  },
  {
    title: 'Built to scale',
    desc: 'Foundations that grow with the business, not against it.',
  },
]

/**
 * AboutMe — an open, editorial statement (no boxed card) that breaks up
 * the page rhythm between the project cards and the stack section:
 * a large statement on the left and a hairline "principles" list on the
 * right.
 */
export default function AboutMe() {
  return (
    <section aria-label="About" className="container-site py-[88px] lg:py-[116px]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        {/* ------- Statement ------- */}
        <div>
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#C88A08]">
            <span aria-hidden="true" className="inline-block h-px w-8 bg-[#C88A08]" />
            About Me
          </p>

          <h2 className="mt-6 text-[34px] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[44px] lg:text-[54px]">
            <span className="block">More than</span>
            <span className="block">
              just <span className="text-gradient">code.</span>
            </span>
          </h2>

          <p className="mt-6 max-w-[500px] text-[16px] leading-[1.65] text-[#475467] sm:text-[17px]">
            I build with business goals in mind — performance, usability,
            scalability, and the people actually using the product.
          </p>

          <div className="mt-9">
            <Button to="/contact">More About Me</Button>
          </div>
        </div>

        {/* ------- Principles — frosted cards ------- */}
        <ul className="flex flex-col gap-3 sm:gap-4">
          {PRINCIPLES.map((principle, i) => (
            <li key={principle.title}>
              <div className="group rounded-[18px] border border-white/70 bg-white/45 p-5 shadow-[0_14px_30px_-26px_rgba(16,24,40,0.3)] backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-white hover:bg-white/60 hover:shadow-[0_20px_40px_-26px_rgba(16,24,40,0.35)] sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="pt-0.5 text-[13px] font-extrabold tabular-nums text-[#C88A08]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[16px] font-bold tracking-tight text-ink transition-colors duration-300 group-hover:text-[#A96F05] sm:text-[17px]">
                      {principle.title}
                    </span>
                    <span className="mt-1 text-[13.5px] leading-relaxed text-[#475467]">
                      {principle.desc}
                    </span>
                  </span>
                  <ArrowRight
                    className="mt-1 h-4 w-4 shrink-0 -translate-x-1 text-[#C9C2B0] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-[#C88A08] group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
