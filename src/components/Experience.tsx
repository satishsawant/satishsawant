import { experience } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { RevealItem } from './RevealItem'

export function Experience() {
  return (
    <Reveal id="experience" className="section">
      <SectionHeading title="Professional Experience" />
      <div className="timeline">
        {experience.map((entry, i) => (
          <RevealItem index={i} className="timeline-item" key={`${entry.company}-${entry.period}`}>
            <div className="timeline-item__header">
              <div>
                <span className="timeline-item__role">{entry.role}</span>{' '}
                <span aria-hidden="true">·</span>{' '}
                <span className="timeline-item__company">{entry.company}</span>
              </div>
              <div className="timeline-item__period">{entry.period}</div>
            </div>
            <ul>
              {entry.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </div>
    </Reveal>
  )
}
