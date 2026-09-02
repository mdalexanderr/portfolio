/**
 * Badge — small rounded pill used for hero badge and category tags.
 */
export default function Badge({ children, tone = 'gold', className = '' }) {
  const tones = {
    gold: 'border-[#EDD9A6] bg-[#FFF6E0] text-[#A96F05]',
    blue: 'border-[#D6E4F7] bg-[#F0F6FF] text-[#3B6FD4]',
    default: 'border-[#EAECF0] bg-[#F9FAFB] text-[#475467]',
  }
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-[13px] font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}
