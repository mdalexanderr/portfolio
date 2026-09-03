import { Sparkles, Braces, Monitor, Server, Boxes } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import TechLogo from './tech/TechLogo'

const PREFERRED = ['Python', 'Flask', 'PostgreSQL', 'JavaScript', 'Tailwind CSS']

const GROUPS = [
  {
    title: 'Frontend',
    focus: 'Responsive, accessible interfaces — everything visitors see & touch.',
    icon: Monitor,
    iconCls: 'bg-[#EAF2FF] text-[#3B6FD4] ring-[#D6E4FF]',
    items: [
      { name: 'JavaScript', logo: 'javascript', tag: 'Interactive UI' },
      { name: 'TypeScript', logo: 'typescript', tag: 'Typed, scalable code' },
      { name: 'HTML5', logo: 'html5', tag: 'Semantic structure' },
      { name: 'CSS3', logo: 'css3', tag: 'Layout & animation' },
      { name: 'Tailwind CSS', logo: 'tailwind', tag: 'Rapid utility styling' },
    ],
  },
  {
    title: 'Backend',
    focus: 'Reliable logic, clean APIs & well-structured data.',
    icon: Server,
    iconCls: 'bg-[#EAF8F0] text-[#2E9E5B] ring-[#CBEBD7]',
    items: [
      { name: 'Python', logo: 'python', tag: 'Server-side logic' },
      { name: 'Flask', logo: 'flask', tag: 'Lightweight web framework' },
      { name: 'PostgreSQL', logo: 'postgresql', tag: 'Relational database' },
    ],
  },
  {
    title: 'Infrastructure',
    focus: 'Predictable shipping & operations, from commit to deploy.',
    icon: Boxes,
    iconCls: 'bg-[#F3EDFF] text-[#7C5CD6] ring-[#E0D7F5]',
    items: [
      { name: 'Docker', logo: 'docker', tag: 'Containerised delivery' },
      { name: 'Git', logo: 'git', tag: 'Version control' },
      { name: 'REST APIs', icon: Braces, tag: 'Client-server contracts' },
    ],
  },
]

export default function Technologies() {
  return (
    <section id="technologies">
      <div className="container-site py-[72px] lg:py-[96px]">
        <SectionHeading
          label="The Stack"
          title="My Core Stack"
          subtitle="One focused toolkit behind every build — chosen to ship fast, stay maintainable, and scale as you grow."
        />

        {/* ------- Frosted tier cards ------- */}
        <div className="mt-12 flex flex-col gap-5">
          {GROUPS.map((group) => {
            const GroupIcon = group.icon
            return (
              <div
                key={group.title}
                className="reveal rounded-[22px] border border-white/70 bg-white/45 px-6 py-7 shadow-[0_18px_40px_-30px_rgba(16,24,40,0.35)] backdrop-blur-md sm:px-8 lg:py-6"
              >
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-10">
                  {/* Identity — left */}
                  <div className="flex items-center gap-4 lg:w-[310px] lg:shrink-0">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[15px] ring-1 ${group.iconCls}`}
                    >
                      <GroupIcon className="h-[22px] w-[22px]" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[19px] font-bold tracking-tight text-ink">
                        {group.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] leading-snug text-[#475467]">
                        {group.focus}
                      </p>
                    </div>
                  </div>

                  {/* Soft divider (lg+) */}
                  <div
                    aria-hidden="true"
                    className="hidden h-14 w-px shrink-0 bg-gradient-to-b from-transparent via-[#D8CFB8]/60 to-transparent lg:block"
                  />

                  {/* Tools — plain content, right */}
                  <ul className="flex flex-1 flex-wrap items-center gap-x-7 gap-y-4">
                    {group.items.map((tech) => (
                      <li key={tech.name}>
                        <div className="group/tool flex items-center gap-2.5">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white/70 ring-1 ring-[#E9E1CD] backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/tool:scale-105">
                            {tech.logo ? (
                              <TechLogo name={tech.logo} className="h-5 w-5" />
                            ) : (
                              <tech.icon className="h-5 w-5 text-[#64748B]" aria-hidden="true" />
                            )}
                          </span>
                          <span className="flex flex-col">
                            <span className="text-[14px] font-bold leading-none text-[#101828] transition-colors duration-300 group-hover/tool:text-[#A96F05]">
                              {tech.name}
                            </span>
                            <span className="mt-1 text-[11px] leading-none text-[#475467]">
                              {tech.tag}
                            </span>
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* ------- Compact preferred-stack line ------- */}
        <div className="reveal mt-5 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-3 rounded-[22px] border border-white/70 bg-white/45 px-6 py-5 shadow-[0_18px_40px_-30px_rgba(16,24,40,0.35)] backdrop-blur-md">
          <span className="mr-1 inline-flex items-center gap-2 text-[13px] font-bold text-[#101828]">
            <Sparkles className="h-4 w-4 text-[#C88A08]" aria-hidden="true" />
            Preferred stack
          </span>
          {PREFERRED.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/70 bg-white/60 px-2.5 py-1 text-[12px] font-semibold text-[#6B5213] backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}



