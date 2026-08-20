import { useState } from 'react';
import { profile } from '../../data/profile';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export default function Contact({ onShowToast }) {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  useScrollReveal();

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(fieldName);
      if (onShowToast) {
        onShowToast(`${fieldName.toUpperCase()} COPIED TO CLIPBOARD`);
      }
      setTimeout(() => setCopiedField(null), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSending(true);
    // Simulate terminal transmission
    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      if (onShowToast) {
        onShowToast('TRANSMISSION SENT SUCCESSFULLY');
      }
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSentSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <header className="section-header reveal">
          <div className="section-label">CONTACT_TERMINAL</div>
          <h2 className="section-title">ESTABLISH <span>CONNECTION</span></h2>
        </header>

        <div className="contact-grid">
          {/* Left: Terminal Info */}
          <div className="contact-terminal-panel panel hud-bracket reveal-left">
            <div className="terminal-bar">
              <span className="terminal-dot red" aria-hidden="true" />
              <span className="terminal-dot yellow" aria-hidden="true" />
              <span className="terminal-dot green" aria-hidden="true" />
              <span className="mono terminal-title">CONNECTION_REQUEST.SH</span>
            </div>

            <div className="terminal-content mono">
              <div className="terminal-line text-muted">&gt; INITIALIZING SECURE LINK...</div>
              <div className="terminal-line text-cyan">&gt; TARGET: FEBRI_HAIKAL</div>
              <div className="terminal-line text-secondary">&gt; STATUS: {profile.status}</div>
              <div className="terminal-line text-muted">&gt; LOCATION: {profile.location}</div>
              <div className="terminal-divider" />

              {/* Direct Info Blocks */}
              <div className="contact-info-block">
                <div className="info-label text-muted">EMAIL_ENDPOINT</div>
                <div className="info-val-row">
                  <span className="info-val text-primary">{profile.contact.email}</span>
                  <button
                    className="copy-btn btn-ghost"
                    onClick={() => handleCopy(profile.contact.email, 'Email address')}
                    id="copy-email-btn"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'Email address' ? '✓ COPIED' : 'COPY'}
                  </button>
                </div>
              </div>

              <div className="contact-info-block">
                <div className="info-label text-muted">PHONE_ENDPOINT</div>
                <div className="info-val-row">
                  <span className="info-val text-primary">{profile.contact.phone}</span>
                  <button
                    className="copy-btn btn-ghost"
                    onClick={() => handleCopy(profile.contact.phone, 'Phone number')}
                    id="copy-phone-btn"
                    aria-label="Copy phone number"
                  >
                    {copiedField === 'Phone number' ? '✓ COPIED' : 'COPY'}
                  </button>
                </div>
              </div>

              <div className="contact-info-block">
                <div className="info-label text-muted">SOCIAL_LOADOUT</div>
                <div className="social-links-row">
                  {profile.social.github.url ? (
                    <a
                      href={profile.social.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-tag text-cyan"
                      id="contact-github-link"
                    >
                      GITHUB: @{profile.social.github.username} ↗
                    </a>
                  ) : (
                    <span className="social-tag text-muted">GITHUB: LINK_PENDING</span>
                  )}
                  <span className="social-tag text-muted">INSTAGRAM: LINK_PENDING</span>
                  <span className="social-tag text-muted">LINKEDIN: LINK_PENDING</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="contact-form-panel panel panel-cut reveal-right">
            <div className="form-header mono">
              <span className="text-red">&gt;&gt;</span> SEND_DIRECT_TRANSMISSION
            </div>

            {sentSuccess ? (
              <div className="transmission-success mono">
                <div className="success-icon text-cyan">✔</div>
                <div className="success-title text-primary">TRANSMISSION_DELIVERED</div>
                <div className="success-desc text-secondary">
                  Pesan Anda telah berhasil terkirim ke sistem Febri Haikal. Terima kasih!
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label mono" htmlFor="sender-name">
                    SENDER_NAME <span className="text-red">*</span>
                  </label>
                  <input
                    type="text"
                    id="sender-name"
                    className="form-input mono"
                    placeholder="Nama / Organisasi Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mono" htmlFor="sender-email">
                    SENDER_EMAIL <span className="text-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="sender-email"
                    className="form-input mono"
                    placeholder="email@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label mono" htmlFor="transmission-body">
                    TRANSMISSION_BODY <span className="text-red">*</span>
                  </label>
                  <textarea
                    id="transmission-body"
                    className="form-textarea mono"
                    rows="4"
                    placeholder="Tuliskan pesan atau keperluan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary form-submit-btn ${sending ? 'sending' : ''}`}
                  disabled={sending}
                  id="contact-submit-btn"
                >
                  {sending ? 'TRANSMITTING...' : '▶ SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
