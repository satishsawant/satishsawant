import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  id?: string
  className?: string
  children: ReactNode
}

/** Wraps a <section> and fades/slides it in the first time it scrolls into view. */
export function Reveal({ id, className, children }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal${inView ? ' reveal--visible' : ''}${className ? ` ${className}` : ''}`}
    >
      {children}
    </section>
  )
}
