interface SoccerBallIconProps {
  size?: number
  color?: string
  className?: string
}

/** Soccer ball glyph — lucide-react doesn't ship one. */
function SoccerBallIcon({ size = 24, color = 'currentColor', className }: SoccerBallIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8.2l3.6 2.6-1.4 4.2H9.8L8.4 10.8z" fill={color} />
      <path d="M12 8.2V2.2M15.6 10.8l5.6-1.8M14.2 15l3.4 4.8M9.8 15l-3.4 4.8M8.4 10.8L2.8 9" />
    </svg>
  )
}

export default SoccerBallIcon
