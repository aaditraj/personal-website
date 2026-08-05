import { profile } from '../data/content'

const sections = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-mark">
          <span className="nav-mark-initials">AR</span>
          <span className="nav-mark-name">{profile.name}</span>
        </a>
        <ul className="nav-links">
          {sections.map((section) => (
            <li key={section.href}>
              <a href={section.href}>{section.label}</a>
            </li>
          ))}
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
