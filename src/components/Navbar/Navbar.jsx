import { useState, useEffect } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'home',       label: 'HOME' },
  { id: 'about',      label: 'ABOUT' },
  { id: 'skills',     label: 'SKILLS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects',   label: 'PROJECTS' },
  { id: 'activity',   label: 'ACTIVITY' },
  { id: 'contact',    label: 'CONTACT' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (menuOpen) {
      const close = () => setMenuOpen(false);
      window.addEventListener('scroll', close, { passive: true });
      return () => window.removeEventListener('scroll', close);
    }
  }, [menuOpen]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="navbar-inner">
          {/* Logo */}
          <button
            className="nav-logo"
            onClick={() => scrollTo('home')}
            aria-label="Scroll to top"
            id="nav-logo"
          >
            <span className="logo-bracket">[</span>
            FH<span className="logo-slash">//</span>
            <span className="logo-bracket">]</span>
          </button>

          {/* Desktop links */}
          <div className="nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                role="listitem"
                className={`nav-link ${active === link.id ? 'active' : ''}`}
                onClick={() => scrollTo(link.id)}
                id={`nav-link-${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
                {active === link.id && <span className="nav-active-dot" aria-hidden="true" />}
              </button>
            ))}
          </div>

          {/* System status chip */}
          <div className="nav-status" aria-label="System status">
            <span className="status-dot" aria-hidden="true" />
            <span className="mono" style={{ fontSize: '10px', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
              SYS_ONLINE
            </span>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`nav-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            id="nav-menu-toggle"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Navigation menu"
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-header">
            <span className="mono" style={{ color: 'var(--text-muted)', fontSize: '10px', letterSpacing: '0.15em' }}>
              NAVIGATION_SYSTEM
            </span>
          </div>
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.id}
              className={`mobile-nav-link ${active === link.id ? 'active' : ''}`}
              onClick={() => scrollTo(link.id)}
              id={`mobile-nav-link-${link.id}`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="mobile-link-num mono">{String(i + 1).padStart(2, '0')}</span>
              {link.label}
            </button>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
