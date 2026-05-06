import Footer from "../components/Footer.jsx";
import { about } from "../data/content.js";

export default function AboutPage({ nav }) {
  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label">// about me</div>
          <h1 className="section-title">Engineer, builder, problem-solver.</h1>
          <p className="page-hero-sub">A bit about who I am and how I work.</p>
        </div>
      </div>

      <div className="inner">
        <div className="about-body">

          {/* PROSE */}
          <div className="about-prose">
            <h3>Who I am</h3>
            <p>
              I'm a <strong>Senior Java Developer</strong> at the Options Clearing Corporation (OCC), where I
              build event-driven microservices and batch processing systems that handle financial data at scale.
              I studied <strong>Aerospace Engineering at Queen Mary University of London</strong>, graduating
              with First Class Honours: where I learned to think in systems, design for failure, and care about
              getting things right.
            </p>
            <p>
              I joined OCC in 2022 through FDM Group's graduate programme, converted to permanent in 2023,
              and was promoted to Senior Developer in 2025.
            </p>

            <h3>How I work</h3>
            <p>
              I care about code that a future engineer can actually read and extend. That means proper test
              coverage, clear structure, and production observability built in from the start: not bolted on
              after. I take reliability seriously because the systems I work on can't afford not to.
            </p>

            <h3>Beyond work</h3>
            <p>
              I'm building <strong>Dallas Muslim Hub</strong>, a community platform centralising halal
              restaurants, mosques, and local resources across the DFW area. It's where I practice the depth
              I don't always get to in sprint cycles: security, testing, documentation, CI/CD: done properly.
            </p>
          </div>

          {/* SIDEBAR */}
          <aside className="about-sidebar">
            <div className="sidebar-card">
              <h4>At a glance</h4>
              <div className="stat-grid">
                {about.stats.map(([n, l]) => (
                  <div className="stat-block" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Core stack</h4>
              <ul className="skill-list">
                {about.coreStack.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>

            <div className="sidebar-card">
              <h4>Education</h4>
              <div className="edu-degree">{about.education.degree}</div>
              <div className="edu-school">{about.education.school}</div>
              <span className="edu-result">{about.education.result}</span>
            </div>

            <div className="sidebar-card">
              <h4>Location</h4>
              <ul className="skill-list">
                {about.location.map((l) => <li key={l}>{l}</li>)}
              </ul>
            </div>
          </aside>

        </div>
      </div>

      <Footer nav={nav} />
    </div>
  );
}
