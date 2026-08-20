import { profile } from '../../data/profile';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export default function About() {
  useScrollReveal();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <header className="section-header reveal">
          <div className="section-label">PERSONAL_IDENTITY</div>
          <h2 className="section-title">ABOUT <span>SYSTEM</span></h2>
        </header>

        <div className="about-grid">
          {/* Left — Profile Panel */}
          <div className="about-profile-panel reveal-left">
            <div className="profile-id-card panel hud-bracket">
              <div className="profile-id-header">
                <span className="mono" style={{ fontSize: '9px', letterSpacing: '0.15em', color: 'var(--text-dim)' }}>
                  IDENTITY_RECORD // FH-2026
                </span>
                <span className="status-badge active">ACTIVE</span>
              </div>

              <div className="profile-avatar-area">
                <div className="avatar-placeholder">
                  <span className="avatar-initials">FH</span>
                  <div className="avatar-ring" aria-hidden="true" />
                  <div className="avatar-ring avatar-ring-2" aria-hidden="true" />
                </div>
              </div>

              <div className="profile-id-name">
                <div className="mono" style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  REGISTERED_NAME
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700, letterSpacing: '0.06em' }}>
                  FEBRI HAIKAL RABBANI
                </div>
              </div>

              <div className="profile-id-fields">
                {[
                  { label: 'ALIAS', value: 'Febri / Haikal' },
                  { label: 'INSTITUTION', value: 'SMKS Jakarta Pusat 1' },
                  { label: 'MAJOR', value: 'Rekayasa Perangkat Lunak' },
                  { label: 'PERIOD', value: '2024 – 2027' },
                  { label: 'LOCATION', value: 'Jakarta, Indonesia' },
                  { label: 'STATUS', value: '● AVAILABLE' },
                ].map(({ label, value }) => (
                  <div key={label} className="id-field">
                    <span className="id-field-label mono">{label}</span>
                    <span className={`id-field-value mono ${label === 'STATUS' ? 'text-cyan' : ''}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Info Panels */}
          <div className="about-info-panels">
            {/* Bio Panel */}
            <div className="about-info-card panel panel-cut reveal">
              <div className="about-card-label mono">SYSTEM_PROFILE.TXT</div>
              <p className="about-bio">
                Seorang siswa jurusan Rekayasa Perangkat Lunak yang memiliki minat besar dalam
                teknologi dan pengembangan perangkat lunak. Mampu membangun aplikasi dan website
                menggunakan berbagai teknologi modern — dari Flutter untuk mobile, hingga Node.js
                untuk backend.
              </p>
              <p className="about-bio">
                Berkarakter disiplin, cepat belajar, dan mampu bekerja baik dalam tim maupun secara
                mandiri. Memiliki kemampuan komunikasi dan public speaking yang baik.
              </p>
            </div>

            {/* Stats Row */}
            <div className="about-stats reveal">
              {[
                { num: '02', label: 'PROJECTS DEPLOYED', color: 'var(--red-primary)' },
                { num: '01', label: 'ACHIEVEMENT UNLOCKED', color: 'var(--amber)' },
                { num: '03', label: 'ORGANIZATIONS JOINED', color: 'var(--cyan)' },
                { num: '10+', label: 'TECH STACK MASTERED', color: 'var(--purple)' },
              ].map(({ num, label, color }) => (
                <div key={label} className="about-stat-card panel-cut-sm">
                  <div className="stat-num" style={{ color }}>{num}</div>
                  <div className="stat-label mono">{label}</div>
                </div>
              ))}
            </div>

            {/* Contact quick row */}
            <div className="about-contact-row panel panel-cut reveal">
              <div className="about-card-label mono">CONTACT_ENDPOINTS</div>
              <div className="contact-quick-links">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="contact-quick-item"
                  id="about-email-link"
                  aria-label="Send email to Febri Haikal"
                >
                  <span className="mono text-muted" style={{ fontSize: '10px' }}>EMAIL</span>
                  <span className="mono text-secondary" style={{ fontSize: '12px' }}>{profile.contact.email}</span>
                </a>
                <div className="contact-quick-sep" />
                <a
                  href={`https://github.com/${profile.social.github.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-quick-item"
                  id="about-github-link"
                  aria-label="Visit GitHub profile"
                >
                  <span className="mono text-muted" style={{ fontSize: '10px' }}>GITHUB</span>
                  <span className="mono text-cyan" style={{ fontSize: '12px' }}>
                    @{profile.social.github.username}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
