import { toolsWorkflow } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { RevealItem } from './RevealItem'

export function ToolsWorkflow() {
  return (
    <Reveal id="tools" className="section">
      <SectionHeading title="Tools & Workflow" />
      <div className="skills-grid">
        {toolsWorkflow.map((group, i) => (
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
