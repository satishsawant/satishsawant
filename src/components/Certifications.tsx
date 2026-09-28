import { achievements } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { RevealItem } from './RevealItem'

export function Certifications() {
  return (
    <Reveal id="certifications" className="section">
      <SectionHeading title="Certifications & Achievements" />
      <div className="achievement-list">
        {achievements.map((item, i) => (
          <RevealItem index={i} className="achievement-item" key={i}>
            <span className="achievement-item__icon" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </RevealItem>
        ))}
      </div>
    </Reveal>
  )
}
