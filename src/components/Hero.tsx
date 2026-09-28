import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__meta">available for new opportunities</div>
      <h1 className="hero__fade-in">
        {profile.name}
        <span className="hero__cursor" aria-hidden="true" />
      </h1>
      <p className="hero__tagline hero__fade-in">
        {profile.title} — {profile.yearsExperience} years building scalable web applications with .NET, C#, Node.js,
        React and AWS.
      </p>
      <div className="hero__actions hero__fade-in">
        <a className="btn btn-primary" href={profile.resumeFile} download>
          Download Resume
        </a>
        <a className="btn btn-outline" href="#contact">
          Get in touch
        </a>
      </div>
    </section>
  )
}
