import { education } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { RevealItem } from './RevealItem'

export function Education() {
  return (
    <Reveal id="education" className="section">
      <SectionHeading title="Education" />
      <div className="timeline">
        {education.map((entry, i) => (
          <RevealItem index={i} className="timeline-item" key={`${entry.degree}-${entry.year}`}>
            <div className="timeline-item__header">
              <div>
                <span className="timeline-item__role">
                  {entry.degree} — {entry.field}
                </span>
              </div>
              <div className="timeline-item__period">{entry.year}</div>
            </div>
            <ul>
              <li>
                {entry.institution}
                {entry.detail ? ` — ${entry.detail}` : ''}
              </li>
            </ul>
          </RevealItem>
        ))}
      </div>
    </Reveal>
  )
}
