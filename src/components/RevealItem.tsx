import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealItemProps {
  index?: number
  className?: string
  children: ReactNode
}

/** Wraps a single card/list item and staggers its entrance based on `index`. */
export function RevealItem({ index = 0, className, children }: RevealItemProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const style: CSSProperties = { transitionDelay: `${Math.min(index, 8) * 70}ms` }

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal-item${inView ? ' reveal-item--visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
