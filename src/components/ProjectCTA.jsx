import { Rocket } from 'lucide-react'
import Button from './ui/Button'

/**
 * ProjectCTA — a banner-only block (no section wrapper) so it can be
 * embedded at the end of the Testimonials section and keep the page
 * compact. The CTA routes to the dedicated contact page.
 */
export default function ProjectCTA() {
  return (
    <div className="reveal relative overflow-hidden rounded-[18px] border border-white/70 bg-[linear-gradient(100deg,rgba(255,240,203,0.6)_0%,rgba(255,248,230,0.5)_55%,rgba(255,236,190,0.6)_100%)] px-7 py-10 shadow-[0_18px_44px_-30px_rgba(200,138,8,0.5)] backdrop-blur-md sm:px-12 lg:px-16">
      {/* Decorative soft circles */}
      <div className="pointer-events-none absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[#C88A08]/[0.06] blur-2xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-[#C88A08]/[0.05] blur-2xl" aria-hidden="true" />

      <div className="relative flex flex-col items-center gap-7 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-5 lg:items-center">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_20px_rgba(16,24,40,0.05)] ring-1 ring-[#EDD9A6]">
            <Rocket className="h-6 w-6 text-[#C88A08]" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-[24px] font-extrabold leading-tight tracking-tight text-ink sm:text-[28px]">
              Have a Project in Mind?
            </h2>
            <p className="mt-1.5 text-[15px] text-[#8A6A20]">
              Let&apos;s work together to build something amazing for your business.
            </p>
          </div>
        </div>

        <Button to="/contact" variant="primary" className="shrink-0">
          Start a Project
        </Button>
      </div>
    </div>
  )
}
