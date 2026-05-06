import Footer from "../components/Footer.jsx";
import { contact } from "../data/content.js";

const channelIcons = {
  Email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  GitHub: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  ),
};

export default function ContactPage({ nav }) {
  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-inner">
          <div className="section-label">// contact</div>
          <h1 className="section-title">Let's talk.</h1>
          <p className="page-hero-sub">
            Whether it's a role, a collaboration, or a conversation about distributed systems. I'm open to it.
          </p>
        </div>
      </div>

      <div className="inner">
        <div className="contact-channels" style={{ maxWidth: "560px" }}>
          {contact.channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target={c.name !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <div className="contact-channel-icon">{channelIcons[c.name]}</div>
              <div className="contact-channel-meta">
                <div className="contact-channel-name">{c.name}</div>
                <div className="contact-channel-value">{c.value}</div>
              </div>
              <span className="contact-channel-arrow">→</span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: "2rem" }}>
          <div className="avail-badge">Open to opportunities</div>
        </div>
      </div>

      <Footer nav={nav} />
    </div>
  );
}
