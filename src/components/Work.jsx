import { projects } from '../data/content'
import Media from './Media'

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="meta">Selected work</p>
        <h2>Four things I built, with the receipts.</h2>
      </div>

      <div className="work-list">
        {projects.map((project, index) => (
          <article className="work" key={project.id} id={project.id}>
            <div className="work-aside">
              <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
              <p className="meta work-kind">{project.kind}</p>
              <p className="meta work-year">{project.year}</p>
            </div>

            <div className="work-main">
              <h3 className="work-title">{project.title}</h3>
              <p className="work-lede">{project.lede}</p>

              <ul className="work-points">
                {project.body.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <ul className="stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <Media media={project.media} title={project.title} />

              {project.caption ? <p className="caption">{project.caption}</p> : null}

              {project.link ? (
                <a
                  className="link-underline work-link"
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.link.label}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
