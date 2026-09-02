import { Briefcase, Smile, Clock3, ThumbsUp } from 'lucide-react'

const STATS = [
  { icon: Briefcase, value: '15+', label: 'Projects Completed', bg: 'bg-[#FFF4D6]', iconCls: 'text-[#C88A08]' },
  { icon: Smile, value: '10+', label: 'Happy Clients', bg: 'bg-[#EAF2FF]', iconCls: 'text-[#3B6FD4]' },
  { icon: Clock3, value: '2+', label: 'Years Experience', bg: 'bg-[#EAF8F0]', iconCls: 'text-[#2E9E5B]' },
  { icon: ThumbsUp, value: '100%', label: 'Client Satisfaction', bg: 'bg-[#F3EDFF]', iconCls: 'text-[#7C5CD6]' },
]

export default function Stats() {
  return (
    <section aria-label="Key statistics" className="container-site mt-[-10px] pb-4">
      <div className="reveal card grid grid-cols-2 divide-[#EAECF0] overflow-hidden rounded-[16px] px-2 py-4 md:grid-cols-4 md:divide-x md:py-0">
        {STATS.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 px-3 py-3 sm:px-5 md:py-5">
            <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${stat.bg}`}>
              <stat.icon className={`h-[18px] w-[18px] ${stat.iconCls}`} aria-hidden="true" />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="text-[22px] font-extrabold leading-none tracking-tight text-ink sm:text-[25px]">
                {stat.value}
              </span>
              <span className="mt-1 text-[12px] font-medium leading-snug text-muted">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
