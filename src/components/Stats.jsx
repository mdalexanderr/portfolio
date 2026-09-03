import { Briefcase, Smile, Clock3, Star } from 'lucide-react'

const STATS = [
  { icon: Briefcase, value: '15+', label: 'Projects Completed', bg: 'bg-[#F1EEE6]', iconCls: 'text-[#667085]' },
  { icon: Smile, value: '10+', label: 'Happy Clients', bg: 'bg-[#EAF2FF]', iconCls: 'text-[#3B6FD4]' },
  { icon: Clock3, value: '2+', label: 'Years Experience', bg: 'bg-[#EAF8F0]', iconCls: 'text-[#2E9E5B]' },
  { icon: Star, value: '5★', label: 'Client Feedback', bg: 'bg-[#F1EEE6]', iconCls: 'text-[#667085]' },
]

export default function Stats() {
  return (
    <section aria-label="Key statistics" className="container-site mt-[-10px] pb-4">
      <div className="reveal grid grid-cols-2 divide-[#EAECF0]/80 overflow-hidden rounded-[18px] border border-white/70 bg-white/45 px-2 py-4 shadow-[0_14px_34px_-26px_rgba(16,24,40,0.28)] backdrop-blur-md md:grid-cols-4 md:divide-x md:py-0">
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
