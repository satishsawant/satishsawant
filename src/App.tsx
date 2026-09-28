import { useState } from 'react'
import { profile } from './data/profile'
import { useTheme } from './hooks/useTheme'
import { Sidebar } from './components/Sidebar'
import { ThemeToggle } from './components/ThemeToggle'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Education } from './components/Education'
import { Certifications } from './components/Certifications'
import { ToolsWorkflow } from './components/ToolsWorkflow'
import { Contact } from './components/Contact'

const MOBILE_NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'tools', label: 'Tools & Workflow' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const { theme, toggleTheme } = useTheme()
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="app">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="topbar">
          <span className="topbar__name">{profile.name}</span>
          <div className="topbar__actions">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              className="menu-btn"
              aria-label="Toggle navigation menu"
              aria-expanded={navOpen}
              onClick={() => setNavOpen((open) => !open)}
            >
              {navOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <nav className={`mobile-nav${navOpen ? ' open' : ''}`} aria-label="Section navigation">
          {MOBILE_NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={() => setNavOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <main className="content">
          <div className="content__inner">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <ToolsWorkflow />
            <Contact />
          </div>
        </main>

        <footer className="site-footer">
          © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript &amp; Vite.
        </footer>
      </div>
    </div>
  )
}

export default App
