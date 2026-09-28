import { projects } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'
import { RevealItem } from './RevealItem'

export function Projects() {
  return (
    <Reveal id="projects" className="section">
      <SectionHeading title="Projects" />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <RevealItem index={i} className="project-card" key={project.name}>
            <div className="project-card__title">{project.name}</div>
            <div className="project-card__meta">
              {project.role} · {project.org} · {project.period}
            </div>
            <ul>
              {project.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
            <div className="project-card__tags">
              {project.stack.map((tech) => (
                <span className="tag tag--muted" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </RevealItem>
        ))}
      </div>
    </Reveal>
  )
}
