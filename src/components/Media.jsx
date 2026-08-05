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

  if (media.kind === 'figure-pair') {
    return (
      <div className="media-flow">
        <div className="media-flow-stage">
          <a className="frame frame-plot" href={media.from.src} target="_blank" rel="noreferrer">
            <img src={media.from.src} alt={media.from.alt} loading="lazy" />
          </a>
          <p className="meta media-label">{media.fromLabel}</p>
        </div>

        <div className="media-flow-arrow" aria-hidden="true">
          <span>feeds</span>
        </div>

        <div className="media-flow-stage">
          <a className="frame frame-plot" href={media.to.src} target="_blank" rel="noreferrer">
            <img src={media.to.src} alt={media.to.alt} loading="lazy" />
          </a>
          <p className="meta media-label">{media.toLabel}</p>
        </div>
      </div>
    )
  }

  return null
}
