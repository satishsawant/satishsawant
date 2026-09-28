import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { RevealItem } from './RevealItem'

export function About() {
  return (
    <Reveal id="about" className="section about">
      <SectionHeading title="About" />
      <p>{profile.summary}</p>

      <div className="about__stats">
        <RevealItem index={0} className="stat">
          <div className="stat__value">{profile.yearsExperience}</div>
          <div className="stat__label">Years of experience</div>
        </RevealItem>
        <RevealItem index={1} className="stat">
          <div className="stat__value">6</div>
          <div className="stat__label">Production projects delivered</div>
        </RevealItem>
        <RevealItem index={2} className="stat">
          <div className="stat__value">3</div>
          <div className="stat__label">Companies &amp; client engagements</div>
        </RevealItem>
      </div>
    </Reveal>
  )
}
