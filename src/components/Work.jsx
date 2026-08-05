import { projects } from '../data/content'
import Media from './Media'

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="section-head">
        <p className="meta">Selected work</p>
        <h2>Four projects, with the demos and data behind them.</h2>
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
              <div className="work-heading">
                <h3 className="work-title">{project.title}</h3>
                {project.org ? (
                  <a
                    className="work-org"
                    href={project.org.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.org.label}
                  </a>
                ) : null}
              </div>

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
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
