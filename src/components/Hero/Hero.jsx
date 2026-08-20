import { useEffect, useState } from 'react';
import { useMagneticButton } from '../../hooks/useMagneticButton';
import './Hero.css';

const TYPEWRITER_TEXTS = [
  'SOFTWARE ENGINEERING STUDENT',
  'FLUTTER DEVELOPER',
  'WEB DEVELOPER',
  'PROBLEM SOLVER',
];

function useTypewriter(texts, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    } else if (deleting && charIdx > 0) {
      const t = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }
    setDisplay(current.slice(0, charIdx));
  }, [charIdx, deleting, idx, texts, speed, pause]);

  useEffect(() => {
    setDisplay(texts[idx].slice(0, charIdx));
  }, [charIdx, idx, texts]);

  return display;
}

export default function Hero() {
  const [booted, setBooted] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const btnPrimary = useMagneticButton(0.3);
  const btnSecondary = useMagneticButton(0.3);
  const typeText = useTypewriter(TYPEWRITER_TEXTS);

  useEffect(() => {
    const t1 = setTimeout(() => setBooted(true), 400);
    const t2 = setTimeout(() => setShowContent(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Boot sequence overlay */}
      {!booted && (
        <div className="hero-boot" aria-hidden="true">
          <span className="mono">INITIALIZING SYSTEM...</span>
        </div>
      )}

      {/* HUD frame corners */}
      <div className="hud-corner hud-tl" aria-hidden="true" />
      <div className="hud-corner hud-tr" aria-hidden="true" />
      <div className="hud-corner hud-bl" aria-hidden="true" />
      <div className="hud-corner hud-br" aria-hidden="true" />

      {/* Decorative data stream */}
      <div className="hero-data-stream" aria-hidden="true">
        {['FH_2026', 'NODE_01', 'PORTFOLIO_SYS', 'RPL_ACTIVE', 'STATUS:OK'].map((t, i) => (
          <span key={t} style={{ animationDelay: `${i * 1.2}s` }} className="mono">{t}</span>
        ))}
      </div>

      <div className={`hero-content ${showContent ? 'visible' : ''}`}>
        {/* System label */}
        <div className="hero-system-label">
          <span className="mono hero-sys-text">
            <span className="text-cyan">▶</span> PERSONAL_IDENTITY_SYSTEM // INITIALIZED
          </span>
        </div>

        {/* Name block */}
        <div className="hero-name" aria-label="Febri Haikal Rabbani">
          <div className="name-line name-first">
            <span className="name-block glitch-target" data-text="FEBRI">FEBRI</span>
            <div className="name-accent-line" aria-hidden="true" />
          </div>
          <div className="name-line name-middle">
            <div className="name-indent-bar" aria-hidden="true" />
            <span className="name-block name-block-mid glitch-target" data-text="HAIKAL">HAIKAL</span>
          </div>
          <div className="name-line name-last">
            <span className="name-block name-block-last" data-text="RABBANI">RABBANI</span>
            <div className="name-accent-line name-accent-right" aria-hidden="true" />
          </div>
        </div>

        {/* Typewriter subtitle */}
        <div className="hero-typewriter" aria-live="polite">
          <span className="mono text-secondary">&gt;&gt; </span>
          <span className="typewriter-text mono">{typeText}</span>
          <span className="cursor-char" aria-hidden="true">_</span>
        </div>

        {/* Meta info row */}
        <div className="hero-meta">
          <div className="hero-meta-item">
            <span className="mono text-muted" style={{ fontSize: '10px' }}>INSTITUTION</span>
            <span className="mono text-secondary" style={{ fontSize: '12px' }}>SMKS JAKARTA PUSAT 1</span>
          </div>
          <div className="hero-meta-sep" aria-hidden="true" />
          <div className="hero-meta-item">
            <span className="mono text-muted" style={{ fontSize: '10px' }}>MAJOR</span>
            <span className="mono text-secondary" style={{ fontSize: '12px' }}>REKAYASA PERANGKAT LUNAK</span>
          </div>
          <div className="hero-meta-sep" aria-hidden="true" />
          <div className="hero-meta-item">
            <span className="mono text-muted" style={{ fontSize: '10px' }}>STATUS</span>
            <span className="mono" style={{ fontSize: '12px', color: 'var(--cyan)' }}>● AVAILABLE</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-cta">
          <button
            ref={btnPrimary}
            className="btn btn-primary hero-btn"
            onClick={scrollToProjects}
            id="hero-btn-projects"
            aria-label="View project database"
          >
            <span>▶</span> VIEW PROJECT DATABASE
          </button>
          <button
            ref={btnSecondary}
            className="btn btn-outline hero-btn"
            onClick={scrollToAbout}
            id="hero-btn-about"
            aria-label="Initialize portfolio — scroll to about"
          >
            <span>◈</span> INITIALIZE PORTFOLIO
          </button>
        </div>

        {/* Coordinates — decorative only */}
        <div className="hero-coords" aria-hidden="true">
          <span className="mono">LAT: -6.2088° // LON: 106.8456°</span>
          <span className="mono">JAKARTA, INDONESIA</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-line" />
        <span className="mono">SCROLL</span>
      </div>
    </section>
  );
}
