import { profile } from '../data/content'
import portrait from '../assets/IMG_9510.jpeg'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="meta hero-meta">
            <span>{profile.role}</span>
            <span className="meta-dot" aria-hidden="true">
              /
            </span>
            <span>{profile.location}</span>
          </p>

          <h1 className="hero-title">
            Aaditya Raj builds <em>AI infrastructure</em>, robots that see, and software people
            actually keep using.
          </h1>

          <p className="hero-lede">
            I like the unglamorous middle of a system — the scheduler, the eval harness, the motion
            planner — where a good decision quietly makes everything downstream faster. Right now
            that means serving and benchmarking large models at Nutanix, and teaching a robot arm to
            photograph individual leaves at UCLA.
          </p>

          <div className="hero-actions">
            <a className="button" href="#work">
              See the work
            </a>
            <a className="link-underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>

          <p className="meta hero-status">
            <span className="status-dot" aria-hidden="true" />
            Currently: {profile.status}
          </p>
        </div>

        <figure className="hero-portrait">
          <img src={portrait} alt={profile.name} loading="eager" />
        </figure>
      </div>
    </header>
  )
}
