import { Sparkles, Braces } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import TechLogo from './tech/TechLogo'

const GROUPS = [
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'TypeScript', logo: 'typescript' },
      { name: 'HTML5', logo: 'html5' },
      { name: 'CSS3', logo: 'css3' },
      { name: 'Tailwind CSS', logo: 'tailwind' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Python', logo: 'python' },
      { name: 'Flask', logo: 'flask' },
      { name: 'PostgreSQL', logo: 'postgresql' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Docker', logo: 'docker' },
      { name: 'Git', logo: 'git' },
      { name: 'REST APIs', icon: Braces },
    ],
  },
]

export default function Technologies() {
  return (
    <section id="technologies" className="bg-[#FDFBF4]">
      <div className="container-site py-[72px] lg:py-[88px]">
        <SectionHeading
          label="The Stack"
          title="My Core Stack"
          subtitle="One focused toolkit behind every build — chosen to ship fast, stay maintainable, and scale as you grow."
        />

      {/* Organized stack card */}
      <div className="reveal mt-12 overflow-hidden rounded-[20px] border border-[#EAECF0] bg-white shadow-[0_8px_30px_rgba(16,24,40,0.05)]">
        <div className="grid md:grid-cols-3 md:divide-x md:divide-[#F0EDE4]">
          {GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className={`flex flex-col justify-center px-6 py-7 sm:px-8 ${gi > 0 ? 'border-t border-[#F0EDE4] md:border-t-0' : ''}`}
            >
              {/* Category header */}
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#667085]">
                <span aria-hidden="true" className="inline-block h-px w-6 bg-[#D8D2C2]" />
                {group.title}
              </p>

              <ul className="mt-5 flex flex-col">
                {group.items.map((tech) => (
                  <li key={tech.name} className="-mx-2.5">
                    <span className="group/row flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#FFFBF2]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#F0EDE4] bg-[#FCFAF4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/row:border-[#DED8CA] group-hover/row:bg-[#F6F3EB]">
                        {tech.logo ? (
                          <TechLogo name={tech.logo} className="h-[18px] w-[18px]" />
                        ) : (
                          <tech.icon className="h-[18px] w-[18px] text-[#64748B]" aria-hidden="true" />
                        )}
                      </span>
                      <span className="text-[14px] font-semibold text-[#1D2939] transition-colors duration-500 group-hover/row:text-[#101828]">
                        {tech.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Preferred stack statement */}
        <div className="flex flex-col items-center gap-2.5 border-t border-[#F0E4C4] bg-[linear-gradient(100deg,#FFF7E3_0%,#FFF1CE_50%,#FFEDC0_100%)] px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-3">
          <Sparkles className="h-5 w-5 shrink-0 text-[#C88A08]" aria-hidden="true" />
          <p className="text-[13.5px] leading-relaxed text-[#6B5213]">
            <span className="font-bold text-[#101828]">My preferred stack:</span>{' '}
            Python + Flask on the backend, JavaScript + Tailwind on the frontend,
            and PostgreSQL for data-driven applications.
          </p>
        </div>
      </div>
      </div>
    </section>
  )
}
