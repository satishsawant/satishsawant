interface IconProps {
  className?: string
}

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M8 6L3 12L8 18" />
      <path d="M16 6L21 12L16 18" />
    </svg>
  )
}

export function NodesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <circle cx="12" cy="5" r="1.7" />
      <circle cx="5" cy="17" r="1.7" />
      <circle cx="19" cy="17" r="1.7" />
      <path d="M12 6.7L5 15.3M12 6.7L19 15.3M6.5 17H17.5" />
    </svg>
  )
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="4" y="4.5" width="16" height="3" rx="1.5" />
      <rect x="4" y="10.5" width="16" height="3" rx="1.5" />
      <rect x="4" y="16.5" width="16" height="3" rx="1.5" />
    </svg>
  )
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M7 18h10a4 4 0 000-8 5.5 5.5 0 00-10.6-1.7A4.5 4.5 0 007 18z" />
    </svg>
  )
}

export function DbIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </svg>
  )
}
