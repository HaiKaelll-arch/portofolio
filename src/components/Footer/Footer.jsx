import { profile } from '../../data/profile';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="mono footer-logo">
              <span className="text-cyan">[</span>{profile.name.first}_{profile.name.middle}<span className="text-red">//</span><span className="text-cyan">]</span>
            </span>
            <span className="mono footer-subtitle text-muted">
              {profile.title} // SMKS JAKARTA PUSAT 1
            </span>
          </div>

          <button
            className="footer-top-btn mono"
            onClick={scrollToTop}
            id="footer-back-to-top"
            aria-label="Back to top"
          >
            ▲ BACK_TO_TOP
          </button>
        </div>

        <div className="footer-bottom mono">
          <div className="footer-copy text-dim">
            © 2026 {profile.name.first} {profile.name.middle} {profile.name.last}. ALL RIGHTS RESERVED.
          </div>
          <div className="footer-sys-info text-dim">
            SYSTEM_VER: 2.0.26 // SYSTEM_STATUS: ONLINE
          </div>
        </div>
      </div>
    </footer>
  );
}
