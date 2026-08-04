import './App.css'
import featurePlotImg from './assets/BIONICS-1.png'
import tremorPlotImg from './assets/BIONICS-2.png'

const showcaseProjects = [
  {
    title: 'Spillbox',
    tag: 'Infrastructure + AI training',
    summary:
      'Built and optimized a Kubernetes-based AI training stack for on-prem to cloud workloads.',
    bullets: [
      'Integrated an AWS cluster with Spillbox and automated GPU access plus PyTorch training workflows.',
      'Trained a 1.5GB sentiment model in 7.3 minutes and improved distributed training speed by 40% from 1 to 2 GPUs.',
    ],
    accent: 'amber',
    mediaKind: 'video',
    videoSrc: 'https://youtu.be/Jk3v7Ytrxuw',
    poster: '',
    videoHint: 'Drop a demo video file or public URL here, then it will render automatically.',
    ctaLabel: 'Project link',
    ctaHref: 'https://www.spillbox.ai',
  },
  {
    title: 'Greenhouse Robot',
    tag: 'Robotics + perception',
    summary:
      'Developed an autonomous leaf-imaging robot with depth sensing, mapping, and motion planning.',
    bullets: [
      'Implemented collision-free path planning in ROS/MoveIt with an AgileX Piper arm and Intel RealSense D405.',
      'Integrated 3D reconstruction and computer vision for environmental mapping, point-cloud fusion, and segmentation.',
    ],
    accent: 'teal',
    mediaKind: 'video',
    videoSrc: 'https://youtu.be/XXWZRo8ODFQ',
    poster: '',
    videoHint: 'Replace this placeholder with a greenhouse robot video path or URL.',
    ctaLabel: 'Lab context',
    ctaHref: 'https://ucla.edu',
  },
  {
    title: 'Responsible Gambling Coach',
    tag: 'Product app + mobile',
    summary:
      'Built a cross-platform mobile product for UCLA Anderson from wireframes to deployment.',
    bullets: [
      'Developed the iOS and Android app in React Native (Expo) with SQLite-backed local data handling.',
      'Owned end-to-end delivery from business requirements and wireframes through EAS deployment.',
    ],
    accent: 'violet',
    mediaKind: 'video',
    videoSources: [
      {
        src: 'https://youtube.com/shorts/anm369Qhnfs?feature=share',
        label: 'App profile setup',
      },
      {
        src: 'https://youtube.com/shorts/FyZLQlT5xjc?feature=share',
        label: 'App usage',
      },
    ],
    poster: '',
    videoHint: 'Use this space for two portrait walkthrough videos: profile setup and app usage.',
    ctaLabel: 'Anderson context',
    ctaHref: 'https://www.anderson.ucla.edu',
  },
  {
    title: 'Autonomous Rehabilitation',
    tag: 'Computer vision + analysis',
    summary:
      'Built a machine-learning pipeline to evaluate stroke rehabilitation outcomes from motion data.',
    bullets: [
      'Analyzed 30+ stroke patients using CV and sensor streams and organized a 12GB training dataset with NumPy and Pandas.',
      'Improved tremor quantification accuracy by 5% using multi-joint features and targeted feature-ablation analysis.',
    ],
    accent: 'rose',
    mediaKind: 'rehab-flow',
    featurePlot: {
      src: '../assets/BIONICS-1.png',
      label: 'Feature plot: distance head to hand',
    },
    outputPlot: {
      src: '../assets/BIONICS-2.png',
      label: 'Aggregate model output plot',
    },
    ctaLabel: 'Research context',
    ctaHref: 'https://ucla.edu',
  },
]

const otherExperience = [
  { title: 'AI Intern, Nutanix', href: 'https://www.nutanix.com' },
  { title: 'Handshake AI Fellow, Project Helix', href: 'https://www.handshake.com' },
  { title: 'Software Intern, Spillbox', href: 'https://www.spillbox.ai' },
  { title: 'App Developer, UCLA Anderson School of Management', href: 'https://www.anderson.ucla.edu' },
]

function getYouTubeEmbedUrl(url) {
  if (!url) return null

  const trimmed = url.trim()
  const watchMatch = trimmed.match(/[?&]v=([a-zA-Z0-9_-]{11})/)
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`

  const shortMatch = trimmed.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/)
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`

  const shortsMatch = trimmed.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/)
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`

  const embedMatch = trimmed.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/)
  if (embedMatch) return `https://www.youtube.com/embed/${embedMatch[1]}`

  return null
}

function VideoSource({ src, title, poster }) {
  const youtubeEmbedUrl = getYouTubeEmbedUrl(src)

  if (!src) {
    return (
      <div className="media-placeholder video-placeholder">
        <span>{title}</span>
      </div>
    )
  }

  if (youtubeEmbedUrl) {
    return (
      <iframe
        className="showcase-video showcase-iframe"
        src={youtubeEmbedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  return <video className="showcase-video" controls playsInline poster={poster || undefined} src={src} />
}

function MediaPanel({ project }) {
  if (project.mediaKind === 'video') {
    const videoSources = project.videoSources || (project.videoSrc ? [{ src: project.videoSrc, label: 'Video' }] : [])
    const isDualVideoProject = videoSources.length > 1

    return (
      <div className="media-panel media-video">
        {/* <div className="media-hint">
          <p>{project.videoHint}</p>
          <p className="media-path">Edit <span>videoSrc</span> in <span>src/App.jsx</span> to add your video.</p>
        </div> */}
        {isDualVideoProject ? (
          <div className="dual-video-grid">
            {videoSources.map((video) => (
              <div className="dual-video-item" key={video.label}>
                <div className="media-subtitle">{video.label}</div>
                <div className="portrait-video-frame">
                  <VideoSource src={video.src} title={`${project.title} - ${video.label}`} poster={project.poster} />
                </div>
              </div>
            ))}
          </div>
        ) : videoSources.length > 0 ? (
          <VideoSource src={videoSources[0].src} title={`${project.title} demo video`} poster={project.poster} />
        ) : (
          <div className="media-placeholder">
            <span>Video slot</span>
          </div>
        )}
      </div>
    )
  }

  if (project.mediaKind === 'rehab-flow') {
    const featurePlot = project.featurePlot || { src: '', label: 'Feature plot' }
    const outputPlot = project.outputPlot || { src: '', label: 'Output plot' }

    return (
      <div className="media-panel media-rehab-flow">
        {/* <div className="media-hint">
          <p>Show how a single extracted feature contributes to the final analysis output.</p>
          <p className="media-path">
            Edit <span>featurePlot.src</span> and <span>outputPlot.src</span> in <span>src/App.jsx</span>.
          </p>
        </div> */}

        <div className="rehab-flow-grid">
          <div className="rehab-flow-stage">
            <p className="rehab-flow-title">Feature signal</p>
            <div className="rehab-flow-card">
              {featurePlotImg ? (
                <a href={featurePlotImg} target="_blank" rel="noreferrer" className="rehab-flow-image-link">
                  <div
                    className="rehab-flow-image"
                    role="img"
                    aria-label={featurePlot.label}
                    style={{ backgroundImage: `url(${featurePlotImg})` }}
                  />
                </a>
              ) : (
                <div className="media-placeholder rehab-flow-placeholder">
                  <span>{featurePlot.label}</span>
                </div>
              )}
            </div>
          </div>

          <div className="rehab-flow-arrow" aria-hidden="true">
            <span>Contributes to model features</span>
            <strong>→</strong>
          </div>

          <div className="rehab-flow-stage">
            <p className="rehab-flow-title">Combined output</p>
            <div className="rehab-flow-card">
              {tremorPlotImg ? (
                <a href={tremorPlotImg} target="_blank" rel="noreferrer" className="rehab-flow-image-link">
                  <div
                    className="rehab-flow-image"
                    role="img"
                    aria-label={outputPlot.label}
                    style={{ backgroundImage: `url(${tremorPlotImg})` }}
                  />
                </a>
              ) : (
                <div className="media-placeholder rehab-flow-placeholder">
                  <span>{outputPlot.label}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <p className="rehab-flow-tip">Tip: click either plot to open the full-resolution image.</p>

        <p className="rehab-flow-note">
          Distance from head to hand is one contributing signal among multiple engineered features used to generate the final
          stroke patient tremor analysis plot.
        </p>
      </div>
    )
  }

  return (
    <div className="media-panel media-images">
      {/* <div className="media-hint">
        <p>Drop in a few PNGs or JPGs of plots here.</p>
        <p className="media-path">Edit the `images` array in <span>src/App.jsx</span> to wire them up.</p>
      </div> */}
      <div className="plot-grid">
        {project.images.map((image) => (
          <div className="plot-slot" key={image.label}>
            {image.src ? <img src={image.src} alt={image.label} /> : <span>{image.label}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const profileImageSrc = '../assets/IMG_9510.jpeg'

  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-copy hero-copy-wide">
          <div className="hero-copy-top">
            <div className="hero-copy-main">
              <p className="eyebrow">UCLA CS • AI / ML • Robotics • Full-stack</p>
              <h1>Aaditya Raj</h1>
              <p className="hero-text">
                I build across AI infrastructure, robotics, and product work.
              </p>
            </div>

            <div className="hero-photo-slot">
              {profileImageSrc ? (
                <img src={profileImageSrc} alt="Aaditya Raj" className="hero-photo" />
              ) : (
                <div className="hero-photo-placeholder">
                  <span>Add photo</span>
                </div>
              )}
            </div>
          </div>

          <div className="hero-copy-actions">
            <div className="hero-actions">
              <a href="#showcase" className="primary-link">
                View showcase
              </a>
            </div>
            <div className="link-row hero-link-row">
              <a href="https://github.com/aaditraj" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/aadityadraj" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:adraj@ucla.edu">Email</a>
            </div>
            <div className="pill-row hero-pill-row">
              <span>Bay Area</span>
              <span>UCLA</span>
              <span>US Citizen</span>
            </div>
          </div>
        </div>
      </header>

      <main className="content-stack">
        <section className="section-card showcase-section" id="showcase">
          <div className="section-heading">
            <p className="eyebrow">Projects showcase</p>
            <h2>Four featured projects, each built to show the work instead of just describe it.</h2>
          </div>

          <div className="showcase-grid">
            {showcaseProjects.map((project) => (
              <article className={`showcase-card ${project.accent}`} key={project.title}>
                <div className="showcase-copy">
                  <div className="showcase-head">
                    <span className="project-category">{project.tag}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <p className="showcase-summary">{project.summary}</p>
                  <ul className="showcase-bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  {/* <a className="showcase-link" href={project.ctaHref} target="_blank" rel="noreferrer">
                    {project.ctaLabel}
                  </a> */}
                </div>

                <MediaPanel project={project} />
              </article>
            ))}
          </div>
        </section>

        {/* <section className="section-card experience-strip" id="more-experience">
          <div className="section-heading">
            <p className="eyebrow">More experience</p>
            <h2>Just the title and a link for the rest.</h2>
          </div>

          <div className="experience-links">
            {otherExperience.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="experience-link">
                <span>{item.title}</span>
                <span>Open</span>
              </a>
            ))}
          </div>
        </section> */}
      </main>
    </div>
  )
}

export default App