import type { LucideIcon } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
  color: string
  size?: number
  round?: boolean
}

/** White glyph on a solid colored tile — approximates "filled" icons like a solid calendar. */
function IconBadge({ icon: Icon, color, size = 22, round = false }: IconBadgeProps) {
  return (
    <span
      className={`icon-badge${round ? ' icon-badge--round' : ''}`}
      style={{ background: color, width: size, height: size }}
    >
      <Icon size={Math.round(size * 0.68)} strokeWidth={2.2} />
    </span>
  )
}

export default IconBadge
