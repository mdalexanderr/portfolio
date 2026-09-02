import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading'
import { favonia, projects } from '../data/projects'

/**
 * Featured "recent work" cards — real projects pulled from data/projects.js.
 * Favonia Hobbies (the most recent build) leads with a real storefront
 * screenshot; the other two cards show each site's real brand mark until
 * their screenshots are added.
 */
const byName = (name) => projects.find((p) => p.name === name)

const PROJECTS = [
  {
    name: favonia.name,
    category: favonia.category,
    desc: favonia.tagline,
    image: favonia.storefrontShots[0].src,
    alt: favonia.storefrontShots[0].alt,
  },
  {
    name: byName('Practical Doctrinas PLT').name,
    category: byName('Practical Doctrinas PLT').category,
    desc: byName('Practical Doctrinas PLT').blurb,
    logo: byName('Practical Doctrinas PLT').logo,
    logoWide: byName('Practical Doctrinas PLT').logoWide,
  },
  {
    name: byName('Kazi Technical Systems').name,
    category: byName('Kazi Technical Systems').category,
    desc: byName('Kazi Technical Systems').blurb,
    logo: byName('Kazi Technical Systems').logo,
  },
]

export default function FeaturedProjects() {
  return (
    <section id="portfolio" className="container-site py-[88px] lg:py-[104px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading label="Featured Projects" title="My Recent Works" align="left" />
        <Link
          to="/projects"
          className="group inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-[#C88A08] transition-colors hover:text-[#A96F05]"
        >
          View All Projects
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <article
            key={project.name}
            className="reveal group relative flex flex-col overflow-hidden rounded-[16px] border border-[#EAECF0] bg-white shadow-[0_2px_12px_rgba(16,24,40,0.03)] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#E7C88A] hover:shadow-[0_26px_50px_-20px_rgba(16,24,40,0.2)]"
            style={{ animationDelay: `${i * 110}ms` }}
          >
            {/* ------- Media panel (photo or brand mark) ------- */}
            <Link
              to="/projects"
              aria-label={`${project.name} — ${project.category}`}
              className="group/image relative block aspect-[16/10] overflow-hidden bg-[#F5F2EA]"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-[1.07]"
                />
              ) : (
                <span className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,#FFF9EC_0%,#FBF2DD_48%,#F4E8CD_100%)] px-6">
                  <span
                    aria-hidden="true"
                    className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-[#C88A08]/[0.09] blur-2xl"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-white/60 blur-2xl"
                  />
                  <img
                    src={project.logo}
                    alt={`${project.name} brand logo`}
                    loading="lazy"
                    className="relative max-h-[52%] w-auto max-w-[72%] object-contain transition-transform duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:scale-[1.05]"
                  />
                </span>
              )}

              {/* Soft bottom shade + gold tint on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/40 via-transparent to-transparent opacity-0 transition-opacity duration-700 ease-out group-hover/image:opacity-100" />

              {/* Diagonal shine sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-[130%] -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-[1100ms] ease-out group-hover/image:translate-x-[130%]" />

              {/* Category chip */}
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/50 bg-white/85 px-3 py-1 text-[11px] font-semibold text-[#8a5c05] shadow-sm backdrop-blur-sm">
                {project.category}
              </span>

              {/* Editorial index */}
              <span className="absolute right-4 top-3.5 text-[12px] font-extrabold tracking-[0.25em] text-white/80 transition-colors duration-500 group-hover/image:text-white">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Gold arrow — slides up on hover */}
              <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-gradient-to-br from-[#F2CE7A] to-[#C88A08] text-white opacity-0 shadow-[0_10px_24px_-8px_rgba(200,138,8,0.6)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/image:translate-y-0 group-hover/image:opacity-100">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>

            {/* ------- Body ------- */}
            <div className="flex flex-1 flex-col p-5 pt-4">
              <h3 className="text-[17px] font-bold tracking-tight text-ink transition-colors duration-500 group-hover:text-[#A96F05]">
                <Link to="/projects">{project.name}</Link>
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{project.desc}</p>

              {/* Footer link */}
              <div className="mt-4 flex items-center justify-between border-t border-[#F1EFE9] pt-3.5">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#C88A08] transition-colors hover:text-[#A96F05]"
                >
                  <span className="relative">
                    View Case Study
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#C88A08] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#B9B4A6]">
                  {project.category}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
