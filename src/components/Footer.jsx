import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <p className="meta">Get in touch</p>
      <a className="footer-email" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>

      <div className="footer-row">
        <ul className="footer-links">
          <li>
            <a className="link-underline" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="link-underline" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="link-underline" href="#top">
              Back to top
            </a>
          </li>
        </ul>
        <p className="meta footer-note">{profile.location}</p>
      </div>
    </footer>
  )
}
