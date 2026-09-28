import { profile } from '../data/profile'
import { ThemeToggle } from './ThemeToggle'
import type { Theme } from '../hooks/useTheme'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'tools', label: 'Tools & Workflow' },
  { id: 'contact', label: 'Contact' },
]

interface SidebarProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Sidebar({ theme, onToggleTheme }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__name">{profile.name}</div>
        <div className="sidebar__title">{profile.title}</div>
      </div>

      <nav className="sidebar__nav" aria-label="Section navigation">
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="sidebar__footer">
        <a className="btn btn-primary" href={profile.resumeFile} download>
          Download Resume
        </a>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <div className="sidebar__meta">{profile.location}</div>
      </div>
    </aside>
  )
}
