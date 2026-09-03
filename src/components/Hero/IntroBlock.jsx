import { Send } from 'lucide-react'
import Button from '../ui/Button'

/**
 * IntroBlock — the homepage's main statement, placed directly below the
 * trust/stats bar. Rendered in a wide "landscape" composition: a big
 * full-width headline, then a horizontal band (hairline) carrying the
 * supporting copy on the left and the CTAs on the right.
 */
export default function IntroBlock() {
  return (
    <section aria-label="Introduction" className="container-site py-[84px] lg:py-[116px]">
      {/* Headline — spans the full width */}
      <h1 className="reveal text-[34px] font-extrabold leading-[1.05] tracking-tight text-ink sm:text-[48px] lg:text-[60px]">
        <span className="block">
          I Build <span className="text-gradient">High-Performance</span>
        </span>
        <span className="block">Websites That Drive</span>
        <span className="block">Business Growth</span>
      </h1>

      {/* Landscape band — copy left, CTAs right */}
      <div className="reveal mt-10 flex flex-col gap-8 border-t border-[#E6E0CF]/70 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:mt-14 lg:pt-9">
        <p className="max-w-[520px] text-[16px] leading-[1.65] text-[#344054] sm:text-[17px]">
          I design and develop high-performance websites, e-commerce
          platforms, and custom web applications built for real-world
          business needs.
        </p>

        <div className="flex flex-wrap items-center gap-4 sm:shrink-0">
          <Button href="#portfolio" variant="frost-gold">
            View My Work
          </Button>
          <Button to="/contact" variant="frost-white" icon={false}>
            Contact Me
            <Send className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
