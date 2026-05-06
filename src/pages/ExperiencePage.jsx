import Footer from "../components/Footer.jsx";
import { experienceFull, skillGroups } from "../data/content.js";

export default function ExperiencePage({ nav }) {
  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label">// experience</div>
          <h1 className="section-title">Where I've built.</h1>
          <p className="page-hero-sub">
            3+ years building mission-critical data infrastructure in financial markets, from contractor to Senior Developer.
          </p>
        </div>
      </div>

      <div className="inner">
        {/* TIMELINE */}
        <div className="timeline">
          {experienceFull.map((r, i) => (
            <div className="tl-item" key={i}>
              <div className="tl-date">{r.date}</div>
              <div className={`tl-dot${r.current ? " current" : ""}`} />
              <div className="tl-content">
                <div className="tl-role">{r.role}</div>
                <div className="tl-company">{r.company}</div>
                <span className="tl-type">{r.type}</span>
                <p className="tl-desc">{r.desc}</p>
                <ul className="tl-highlights">
                  {r.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                <div className="tag-row">
                  {r.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SKILLS GRID */}
        <div className="skills-section">
          <div className="section-label">// technical skills</div>
          <h2 className="section-title" style={{ marginBottom: 0 }}>Full stack of tools.</h2>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.title}>
                <div className="skill-group-title">{g.title}</div>
                <div className="tag-row">
                  {g.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer nav={nav} />
    </div>
  );
}
