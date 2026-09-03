import TechLogo from '../tech/TechLogo'

const TECH_ROW = [
  { name: 'Python', logo: 'python' },
  { name: 'Flask', logo: 'flask' },
  { name: 'JavaScript', logo: 'javascript' },
  { name: 'Tailwind CSS', logo: 'tailwind' },
  { name: 'PostgreSQL', logo: 'postgresql' },
]

/**
 * Hero — a clean, full-viewport cinematic opener over the scroll-video
 * background. The intro statement lives below the trust/stats bar, so
 * this section stays minimal: a themed signature lockup (bold name +
 * small normal tagline) sits above the tech stack, both anchored to
 * the bottom-right of the frame.
 */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="container-site flex min-h-[calc(100svh_-_205px)] flex-col justify-end gap-9 pt-[110px] pb-[30px] lg:min-h-[calc(100svh_-_132px)] lg:gap-10 lg:pt-[140px] lg:pb-[34px]">
        {/* ------- Signature lockup (above the tech row) ------- */}
        <div className="ml-auto flex flex-col items-end">
          <span
            aria-hidden="true"
            className="mb-3 block h-[3px] w-10 rounded-full bg-gradient-to-r from-[#F2CE7A] to-[#C88A08]"
          />
          <p className="text-[26px] font-extrabold leading-none tracking-tight text-[#101828] sm:text-[32px] lg:text-[36px]">
            MD Alexander
          </p>
          <p className="mt-2 text-[13px] font-normal tracking-[0.06em] text-[#475467] sm:text-[14px]">
            FULL STACK WEB DEVELOPER{' '}
            <span aria-hidden="true" className="text-[#C88A08]">·</span> COO @{' '}
            <a
              href="https://www.jupy.llc/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-[#C88A08] underline-offset-4 transition-colors hover:text-[#A96F05] hover:underline"
            >
              JUPY
            </a>
          </p>
        </div>

        {/* ------- Tech stack ------- */}
        <ul className="ml-auto flex flex-wrap items-center justify-end gap-x-7 gap-y-3">
          {TECH_ROW.map((tech) => (
            <li key={tech.name} className="flex items-center gap-2">
              <TechLogo name={tech.logo} className="h-[18px] w-[18px]" />
              <span className="text-[13px] font-medium text-[#344054]">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
