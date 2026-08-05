import { experience, openSource } from '../data/content'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-head">
        <p className="meta">Experience</p>
        <h2>Where I&rsquo;ve worked.</h2>
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
        <div className="oss-top">
          <span className="oss-badge">{openSource.status}</span>
          <p className="meta">Open source &middot; {openSource.mergedOn}</p>
        </div>

        <h3 className="oss-title">{openSource.title}</h3>

        <p className="oss-repo">
          <a className="link-underline" href={openSource.repoHref} target="_blank" rel="noreferrer">
            <strong>{openSource.repo}</strong>
          </a>{' '}
          {openSource.pr}
        </p>

        <p className="oss-blurb">{openSource.blurb}</p>

        <ul className="oss-stats">
          {openSource.stats.map((stat) => (
            <li key={stat.label}>
              <span className="oss-stat-value">{stat.value}</span>
              <span className="meta oss-stat-label">{stat.label}</span>
            </li>
          ))}
        </ul>

        <a className="button oss-cta" href={openSource.href} target="_blank" rel="noreferrer">
          Read the pull request
        </a>
      </div>
    </section>
  )
}
