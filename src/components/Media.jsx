import { getYouTubeEmbedUrl } from '../lib/youtube'

function Player({ src, title }) {
  const embed = getYouTubeEmbedUrl(src)

  if (embed) {
    return (
      <iframe
        className="frame-fill"
        src={embed}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return <video className="frame-fill" controls playsInline src={src} title={title} />
}

export default function Media({ media, title }) {
  if (!media) return null

  if (media.kind === 'video') {
    return (
      <div className="frame frame-wide">
        <Player src={media.src} title={`${title} — demo`} />
      </div>
    )
  }

  if (media.kind === 'video-pair') {
    return (
      <div className="media-pair">
        {media.items.map((item) => (
          <div key={item.label}>
            <div className="frame frame-portrait">
              <Player src={item.src} title={`${title} — ${item.label}`} />
            </div>
            <p className="meta media-label">{item.label}</p>
          </div>
        ))}
      </div>
    )
  }

  if (media.kind === 'figure-flow') {
    return (
      <div className="flow">
        {media.steps.map((step, index) => (
          <div className="flow-item" key={step.title}>
            {index > 0 ? (
              <div className="flow-connector">
                <span className="flow-connector-line" aria-hidden="true" />
                <span className="flow-connector-label">{media.connector}</span>
                <span className="flow-connector-line" aria-hidden="true" />
              </div>
            ) : null}

            <figure className="flow-figure">
              <figcaption className="flow-head">
                <span className="flow-step">{step.step}</span>
                <span className="flow-title">{step.title}</span>
                <span className="flow-note">{step.note}</span>
              </figcaption>

              <a className="flow-plot" href={step.src} target="_blank" rel="noreferrer">
                <img src={step.src} alt={step.alt} loading="lazy" />
                <span className="flow-zoom" aria-hidden="true">
                  Open full size
                </span>
              </a>
            </figure>
          </div>
        ))}
      </div>
    )
  }

  return null
}
