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
    desc: 'Conversion-focused online stores with product management, checkout, payments, and scalable architecture.',
    tint: 'bg-[#F1EEE6] text-[#667085]',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Design',
    desc: 'Websites that look sharp and work flawlessly on every screen — turning mobile visitors into customers.',
    tint: 'bg-[#EAF2FF] text-[#3B6FD4]',
  },
  {
    icon: CreditCard,
    title: 'Payment Integration',
    desc: 'Secure checkout experiences integrated with the payment gateways your customers already use.',
    tint: 'bg-[#EAF8F0] text-[#2E9E5B]',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    desc: 'A command center to manage products, orders, customers, and insights without touching code.',
    tint: 'bg-[#F3EDFF] text-[#7C5CD6]',
  },
  {
    icon: Plug2,
    title: 'API Integration',
    desc: 'Connect your platform to the tools you rely on — payments, shipping, CRMs — with data in sync automatically.',
    tint: 'bg-[#FFF0E5] text-[#EA580C]',
  },
  {
    icon: Gauge,
    title: 'SEO & Performance',
    desc: 'Fast, search-optimized sites that rank higher, load instantly, and convert more visitors.',
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
            className="reveal card group relative flex flex-col gap-4 overflow-hidden p-5 transition-all duration-1000! ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#D8D2C4] hover:shadow-[0_16px_36px_-14px_rgba(16,24,40,0.12)]"
          >
            {/* Sweeping neutral top accent */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-[2.5px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#98A2B3] to-transparent transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />
            {/* Soft neutral glow */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-7 -top-7 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(16,24,40,0.07),transparent_70%)] opacity-0 blur-lg transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100"
            />

            {/* Icon chip — fills with a gold gradient + lifts on hover */}
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-black/[0.04] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:bg-[#101828] group-hover:text-white group-hover:shadow-[0_10px_22px_-8px_rgba(16,24,40,0.35)] ${service.tint}`}
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
