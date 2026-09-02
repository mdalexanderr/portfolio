import SectionHeading from './ui/SectionHeading'
import TechLogo from './tech/TechLogo'

const GROUPS = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', logo: 'python' },
      { name: 'JavaScript', logo: 'javascript' },
      { name: 'TypeScript', logo: 'typescript' },
    ],
  },
  {
    title: 'Frontend & Styling',
    items: [
      { name: 'HTML5', logo: 'html5' },
      { name: 'CSS3', logo: 'css3' },
      { name: 'Tailwind CSS', logo: 'tailwind' },
    ],
  },
  {
    title: 'Backend · Data · DevOps',
    items: [
      { name: 'Flask', logo: 'flask' },
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'Docker', logo: 'docker' },
      { name: 'Git', logo: 'git' },
    ],
  },
]

export default function Technologies() {
  return (
    <section id="technologies" className="bg-[#FDFBF4]">
      <div className="container-site py-[72px] lg:py-[88px]">
        <SectionHeading
          label="Technologies I Use"
          title="My Tech Stack"
          subtitle="The tools I use to build fast, secure and scalable web applications."
        />

      {/* Organized stack card */}
      <div className="reveal mt-12 overflow-hidden rounded-[20px] border border-[#EAECF0] bg-white shadow-[0_8px_30px_rgba(16,24,40,0.05)]">
        <div className="grid md:grid-cols-3 md:divide-x md:divide-[#F0EDE4]">
          {GROUPS.map((group, gi) => (
            <div
              key={group.title}
              className={`px-6 py-7 sm:px-8 ${gi > 0 ? 'border-t border-[#F0EDE4] md:border-t-0' : ''}`}
            >
              {/* Category header */}
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#B47A05]">
                <span aria-hidden="true" className="inline-block h-px w-6 bg-[#D9B45C]" />
                {group.title}
              </p>

              <ul className="mt-5 flex flex-col">
                {group.items.map((tech) => (
                  <li key={tech.name} className="-mx-2.5">
                    <span className="group/row flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-[#FFFBF2]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[#F0EDE4] bg-[#FCFAF4] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/row:border-[#EAD9A6] group-hover/row:bg-[#FFF6E0]">
                        <TechLogo name={tech.logo} className="h-[18px] w-[18px]" />
                      </span>
                      <span className="text-[14px] font-semibold text-[#1D2939] transition-colors duration-500 group-hover/row:text-[#A96F05]">
                        {tech.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Caption bar */}
        <p className="border-t border-[#F0EDE4] px-6 py-3.5 text-center text-[12.5px] leading-relaxed text-[#98A2B3]">
          A focused stack — Python &amp; Flask on the backend, a modern JavaScript /
          Tailwind frontend, PostgreSQL for data, and Docker + Git for dependable delivery.
        </p>
      </div>
      </div>
    </section>
  )
}
