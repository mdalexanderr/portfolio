import {
  ShoppingCart,
  MonitorSmartphone,
  CreditCard,
  LayoutDashboard,
  Plug2,
  Gauge,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const SERVICES = [
  {
    icon: ShoppingCart,
    title: 'Custom E-commerce',
    desc: 'Tailored online stores with powerful features to grow your business.',
    tint: 'bg-[#FFF4D6] text-[#C88A08]',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    desc: 'Mobile-first, fully responsive websites for all devices.',
    tint: 'bg-[#EAF2FF] text-[#3B6FD4]',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    desc: 'Secure payment gateway integration with multiple options.',
    tint: 'bg-[#EAF8F0] text-[#2E9E5B]',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    desc: 'Powerful admin panels to manage products, orders & users.',
    tint: 'bg-[#F3EDFF] text-[#7C5CD6]',
  },
  {
    icon: Plug2,
    title: 'API Integration',
    desc: 'Third-party API integration & custom API development.',
    tint: 'bg-[#FFF0E5] text-[#EA580C]',
  },
  {
    icon: Gauge,
    title: 'SEO & Performance',
    desc: 'Optimized websites for speed, SEO and best performance.',
    tint: 'bg-[#FDEDF4] text-[#DB2777]',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#FDFBF4]">
      <div className="container-site py-[88px] lg:py-[104px]">
        <SectionHeading
          label="What I Do"
          title="Services I Provide"
          subtitle="End-to-end solutions to help your business succeed online."
        />

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="reveal card group relative flex flex-col gap-4 overflow-hidden p-5 transition-all duration-1000! ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#E7C88A] hover:shadow-[0_16px_36px_-14px_rgba(200,138,8,0.3)]"
          >
            {/* Sweeping gold top accent */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#C88A08] to-[#E7C87B] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />
            {/* Soft warm glow */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-7 -top-7 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(200,138,8,0.16),transparent_70%)] opacity-0 blur-lg transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
            />

            {/* Icon chip — fills with a gold gradient + lifts on hover */}
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-black/[0.04] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#F2CE7A] group-hover:to-[#C88A08] group-hover:text-white group-hover:shadow-[0_10px_22px_-8px_rgba(200,138,8,0.55)] ${service.tint}`}
            >
              <service.icon className="h-5 w-5 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-110" aria-hidden="true" />
            </div>

            {/* Title — slides right ever so slightly */}
            <h3 className="text-[15px] font-semibold text-ink transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">
              {service.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-muted">{service.desc}</p>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}
