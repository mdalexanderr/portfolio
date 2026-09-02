import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Button — two variants matching the reference:
 *  - primary: rich gold background, white text
 *  - secondary: white background, navy text, thin gold/neutral border
 * Pass `to` for an in-app route (react-router Link) or `href` for an anchor/external link.
 */
export default function Button({
  variant = 'primary',
  href = '#',
  to,
  children,
  icon = true,
  className = '',
  ...props
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-[9px] px-6 py-3 text-[15px] font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600'
  const styles = {
    primary:
      'bg-[#C88A08] text-white shadow-[0_8px_22px_-10px_rgba(200,138,8,0.55)] hover:bg-[#A96F05] hover:shadow-[0_12px_28px_-10px_rgba(200,138,8,0.6)] hover:-translate-y-0.5',
    secondary:
      'border border-[#E4D7B0] bg-white text-[#101828] hover:border-[#C88A08] hover:bg-[#FFFBF2] hover:-translate-y-0.5',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} className={cls} {...props}>
      {content}
    </a>
  )
}
