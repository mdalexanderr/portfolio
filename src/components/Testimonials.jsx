import { Star, Quote } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import ProjectCTA from './ProjectCTA'

/**
 * DEMO/PLACEHOLDER CONTENT — these testimonials are illustrative
 * sample content for the design mockup, NOT genuine client reviews.
 * Replace with real, verifiable testimonials (with permission) before
 * publishing to production.
 */
const TESTIMONIALS = [
  {
    name: 'John Smith',
    role: 'Business Owner',
    initials: 'JS',
    color: 'from-[#F2CE7A] to-[#D39A18]',
    text: 'Excellent work! The website exceeded my expectations. Great communication and on-time delivery.',
  },
  {
    name: 'Sarah Johnson',
    role: 'E-commerce Entrepreneur',
    initials: 'SJ',
    color: 'from-[#AEC7F0] to-[#6C8CC7]',
    text: 'Very professional and skilled developer. Delivered a high-quality e-commerce website with all the features I needed.',
  },
  {
    name: 'Michael Brown',
    role: 'Startup Founder',
    initials: 'MB',
    color: 'from-[#B9D6C0] to-[#7AA88A]',
    text: 'Amazing experience! The admin panel is super user-friendly and the performance is outstanding.',
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-1" role="img" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

function TestimonialCard({ t }) {
  return (
    <figure className="relative flex w-[300px] shrink-0 flex-col gap-3 rounded-[16px] border border-[#EAECF0] bg-white p-5 shadow-[0_4px_20px_rgba(16,24,40,0.04)] transition-colors duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#E0C58A] sm:w-[340px] lg:w-[360px]">
      <Quote
        className="absolute right-4 top-4 h-5 w-5 text-[#101828]/[0.07]"
        aria-hidden="true"
      />
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-[13px] font-bold text-white shadow-sm`}
          aria-hidden="true"
        >
          {t.initials}
        </span>
        <figcaption className="flex flex-col">
          <span className="text-[14px] font-semibold leading-tight text-ink">{t.name}</span>
          <span className="text-[12px] text-muted">{t.role}</span>
        </figcaption>
      </div>
      <Stars />
      <blockquote className="text-[13.5px] leading-relaxed text-[#475467]">
        &ldquo;{t.text}&rdquo;
      </blockquote>
    </figure>
  )
}

export default function Testimonials() {
  return (
    <section className="container-site py-[88px] lg:py-[104px]">
      <SectionHeading
        label="What Clients Say"
        title="Client Testimonials"
        subtitle="Feedback from people I have worked with."
      />

      {/* Auto-sliding marquee (duplicated set for a seamless loop) */}
      <div className="testi-marquee mt-14">
        <div className="testi-viewport">
          <div className="testi-track">
            <div className="testi-group">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={t.name} t={t} />
              ))}
            </div>
            <div className="testi-group" aria-hidden="true">
              {TESTIMONIALS.map((t) => (
                <TestimonialCard key={`${t.name}-dup`} t={t} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project CTA — same section, keeps the page compact */}
      <div className="mt-14 lg:mt-16">
        <ProjectCTA />
      </div>
    </section>
  )
}
