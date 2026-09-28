import { coreExpertise, skills } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { RevealItem } from './RevealItem'
import { CodeIcon, NodesIcon, LayersIcon, CloudIcon, DbIcon } from './icons'
import type { CoreSkill } from '../data/profile'

const ICONS: Record<CoreSkill['icon'], (props: { className?: string }) => JSX.Element> = {
  code: CodeIcon,
  nodes: NodesIcon,
  layers: LayersIcon,
  cloud: CloudIcon,
  db: DbIcon,
}

export function Skills() {
  return (
    <Reveal id="skills" className="section">
      <SectionHeading title="Technical Skills" />

      <div className="core-stack">
        {coreExpertise.map((skill, i) => {
          const Icon = ICONS[skill.icon]
          return (
            <RevealItem index={i} className="core-card" key={skill.title}>
              <div className="core-card__icon">
                <Icon />
              </div>
              <div className="core-card__title">{skill.title}</div>
              <p className="core-card__desc">{skill.description}</p>
            </RevealItem>
          )
        })}
      </div>

      <div className="skills-grid">
        {skills.map((group, i) => (
          <RevealItem index={i} className="skill-group" key={group.label}>
            <h3>{group.label}</h3>
            <div>
              {group.items.map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </RevealItem>
        ))}
      </div>
    </Reveal>
  )
}
