import { experience, openSource } from '../data/content'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <p className="meta">Where I&rsquo;ve worked</p>
        <h2>Short list, long hours.</h2>
      </div>

      <ul className="roles">
        {experience.map((role) => (
          <li className="role" key={`${role.org}-${role.role}`}>
            <a className="role-link" href={role.href} target="_blank" rel="noreferrer">
              <span className="role-org">{role.org}</span>
              <span className="role-title">{role.role}</span>
              <span className="meta role-period">{role.period}</span>
            </a>
            <p className="role-note">{role.note}</p>
          </li>
        ))}
      </ul>

      <div className="oss">
        <p className="meta">Open source</p>
        <p className="oss-line">
          <a className="link-underline" href={openSource.href} target="_blank" rel="noreferrer">
            {openSource.repo} {openSource.pr}
          </a>
        </p>
        <p className="oss-blurb">{openSource.blurb}</p>
      </div>
    </section>
  )
}
