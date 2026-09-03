import { Code2, Send } from 'lucide-react'
import Button from '../ui/Button'
import TechLogo from '../tech/TechLogo'
import ShopVerseMockup from './ShopVerseMockup'

const TECH_ROW = [
  { name: 'Python', logo: 'python' },
  { name: 'Flask', logo: 'flask' },
  { name: 'JavaScript', logo: 'javascript' },
  { name: 'Tailwind CSS', logo: 'tailwind' },
  { name: 'PostgreSQL', logo: 'postgresql' },
]

export default function Hero() {
  return (
    <section id="home" className="hero-mobile-bg relative overflow-hidden pt-[100px] pb-[44px] lg:pt-[124px] lg:pb-[60px]">
      {/* Mobile-only decorative accents */}
      <span aria-hidden="true" className="hero-deco hero-dot-pattern hero-dot-1" />
      <span aria-hidden="true" className="hero-deco hero-dot-pattern hero-dot-2" />
      <span aria-hidden="true" className="hero-deco hero-circle" />

      <div className="container-site">
        <div className="hero-grid">
          {/* ------- Main content — badge / headline / description / CTAs ------- */}
          <div className="hgl max-w-[560px]">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-[#EDD9A6] bg-[#FFF6E0] px-4 py-2 text-[13px] font-medium text-[#101828]">
              <Code2 className="h-4 w-4 text-[#667085]" aria-hidden="true" />
              <span className="opacity-60">&lt;/&gt;</span>
              Full Stack Web Developer
            </div>

            {/* Headline */}
            <h1 className="reveal mt-5 text-[25px] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-[38px] lg:text-[46px]" style={{ animationDelay: '0.08s' }}>
              <span className="block">
                I Build <span className="text-gradient">High-Performance</span>
              </span>
              <span className="block">Websites That Drive</span>
              <span className="block">Business Growth</span>
            </h1>

            {/* Description */}
            <p className="reveal mt-5 max-w-[480px] text-[16px] leading-[1.55] text-[#475467]" style={{ animationDelay: '0.16s' }}>
              I design and develop high-performance websites, e-commerce
              platforms, and custom web applications built for real-world
              business needs.
            </p>

            {/* Buttons */}
            <div className="reveal mt-6 flex flex-wrap items-center gap-4" style={{ animationDelay: '0.24s' }}>
              <Button href="#portfolio">View My Work</Button>
              <Button to="/contact" variant="secondary" icon={false}>
                Contact Me
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* ------- ShopVerse mockup ------- */}
          <div className="hgm reveal relative" style={{ animationDelay: '0.2s' }}>
            <ShopVerseMockup />
          </div>

          {/* ------- Technologies (below the mockup on mobile, bottom-left on desktop) ------- */}
          <div className="hgt reveal" style={{ animationDelay: '0.32s' }}>
            <ul className="hero-tech-list flex items-center gap-x-6 gap-y-3 overflow-x-auto md:flex-wrap md:overflow-visible">
              {TECH_ROW.map((tech) => (
                <li key={tech.name} className="flex shrink-0 items-center gap-2">
                  <TechLogo name={tech.logo} className="h-[18px] w-[18px]" />
                  <span className="text-[13px] font-medium text-[#475467]">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
