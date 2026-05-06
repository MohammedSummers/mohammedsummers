import Footer from "../components/Footer.jsx";
import { hero, experienceSummary, projects } from "../data/content.js";

export default function HomePage({ nav }) {
  return (
    <div className="home-page">
      {/* Grid background */}
      <div className="home-bg" />
      <div className="home-grid-overlay" />

      {/* Two-column layout */}
      <div className="home-columns">
        {/* LEFT: Hero */}
        <div className="home-left">
          <div className="hero-inner">
            <div className="hero-tag">
              <span className="pulse" />&nbsp;{hero.badge}
            </div>

            <div className="hero-author-block">
              <h2 className="hero-author">Mohammed Summers</h2>
              <div className="hero-meta">
                <span className="hero-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                  </svg>
                  Software Developer · Java & Spring Boot
                </span>
                <span className="hero-meta-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Dallas, TX
                </span>
              </div>
            </div>
    

            <div className="hero-middle">
              <h1 className="hero-name">
                {hero.headline[0]}<br />
                {hero.headline[1]}<span>{hero.headline[2]}</span>{hero.headline[3]}
              </h1>
              <p className="hero-desc">{hero.description}</p>
              <div className="hero-skills">
                {hero.skills.map((s) => (
                  <span className="hero-skill" key={s}>
                    <span className="hero-skill-dot" />{s}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-cta">
              <button className="btn-primary" onClick={() => nav("experience")}>View Experience →</button>
              <button className="btn-outline" onClick={() => nav("contact")}>Get in Touch</button>
            </div>
          </div>
        </div>

        {/* RIGHT: Experience + Projects + Contact */}
        <div className="home-right">
          {/* Experience + Projects row */}
          <div className="home-cards-row">
            {/* Experience Column */}
            <div className="home-col">
              <div className="home-col-header">
                <span className="section-label">// experience</span>
                <button className="btn-ghost-sm" onClick={() => nav("experience")}>View all →</button>
              </div>
              {experienceSummary.map((e) => (
                <div className="home-card home-exp-card" key={e.role}>
                  <div className={`home-exp-dot${e.current ? " current" : ""}`} />
                  <div>
                    <div className="home-exp-role">{e.role}</div>
                    <div className="home-exp-co">{e.co}</div>
                    <div className="home-exp-date">{e.date}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Projects Column */}
            <div className="home-col">
              <div className="home-col-header">
                <span className="section-label">// projects</span>
                <button className="btn-ghost-sm" onClick={() => nav("projects")}>View all →</button>
              </div>
              {projects.slice(0, 2).map((p) => (
                <div className="home-card home-project-card" key={p.title} onClick={() => nav("projects")}>
                  <div className="home-project-header">
                    <div className="home-project-title">{p.title}</div>
                    <span className="home-project-status">{p.summary.status}</span>
                  </div>
                  <p className="home-project-desc">{p.summary.desc}</p>
                  <div className="tag-row">
                    {p.summary.stack.slice(0, 3).map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="home-contact">
            <div className="section-label">// contact</div>
            <h2 className="home-contact-title">Let's talk.</h2>
            <div className="home-contact-box">
              <div>
                <div className="home-contact-heading">Open to senior engineering roles.</div>
                <p className="home-contact-desc">HealthTech, GovTech, Enterprise SaaS: anywhere production-grade Java and systems thinking matter.</p>
              </div>
              <div className="home-contact-actions">
                <button className="btn-primary" onClick={() => nav("contact")}>Get in Touch →</button>
                <button className="btn-outline" onClick={() => nav("about")}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (full width) */}
      <Footer nav={nav} />
    </div>
  );
}
