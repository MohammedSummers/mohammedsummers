import Footer from "../components/Footer.jsx";
import { projects } from "../data/content.js";

function MetaRow({ row }) {
  return (
    <div className="meta-row">
      <span className="meta-label">{row.label}</span>
      {row.type === "status" && <span className="status-active">{row.value}</span>}
      {row.type === "text" && <span className="meta-value">{row.value}</span>}
      {row.type === "tags" && (
        <div className="tag-row" style={{ marginTop: 4 }}>
          {row.value.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage({ nav }) {
  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label">// projects</div>
          <h1 className="section-title">Things I've built outside work.</h1>
          <p className="page-hero-sub">
            Personal projects are where I practice depth: proper testing, security, observability, and documentation from day one.
          </p>
        </div>
      </div>

      <div className="inner">
        {projects.map((p) => (
          <div className="project-full" key={p.title}>
            <div className="project-full-header">
              <div>
                <div className="project-badge">{p.badge}</div>
                <div className="project-full-title">{p.title}</div>
                <p className="project-full-sub">{p.subtitle}</p>
              </div>
              <div className="project-links">
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">GitHub →</a>
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo →</a>
              </div>
            </div>

            <div className="project-full-body">
              <div className="project-desc-full">
                {p.description.map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/building things properly/g, '<strong>building things properly</strong>') }} />
                ))}
                {p.sections.map((s) => (
                  <div key={s.heading}>
                    <h4>{s.heading}</h4>
                    <ul>
                      {s.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="project-meta-card">
                {p.meta.map((row) => <MetaRow key={row.label} row={row} />)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer nav={nav} />
    </div>
  );
}
