import { profile } from '../data/profile'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function Contact() {
  const { links } = profile

  return (
    <Reveal id="contact" className="section">
      <SectionHeading title="Contact" />
      <p>
        Open to new roles and freelance engagements. The fastest way to reach me is by email — I typically reply
        within a day.
      </p>

      <div className="contact__actions">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          Email me
        </a>
        <a className="btn btn-outline" href={profile.resumeFile} download>
          Download Resume
        </a>
      </div>

      <div className="contact__row">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <a href={`tel:${profile.phone}`}>{profile.phone}</a>
        <span>{profile.location}</span>
        {links.upwork && (
          <a href={links.upwork} target="_blank" rel="noreferrer">
            Upwork profile ↗
          </a>
        )}
        {links.github && (
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        )}
        {links.website && (
          <a href={links.website} target="_blank" rel="noreferrer">
            Website ↗
          </a>
        )}
      </div>
    </Reveal>
  )
}
