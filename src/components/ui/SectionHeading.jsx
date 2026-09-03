/**
 * SectionHeading — small uppercase label + heading + optional subtitle.
 * Used by Services, FeaturedProjects, Technologies, Testimonials.
 */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col ${alignCls} gap-3 ${className}`}>
      <span className="section-label">
        <span aria-hidden="true" className="h-px w-5 bg-[#D9D2C2]" />
        {label}
      </span>
      <h2 className="text-[30px] leading-tight font-extrabold tracking-tight text-ink sm:text-[36px]">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-[15px] leading-relaxed text-[#475467]">{subtitle}</p>
      )}
    </div>
  )
}
