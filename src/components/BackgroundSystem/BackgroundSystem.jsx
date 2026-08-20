import { useEffect, useRef } from 'react';
import './BackgroundSystem.css';

const MATRIX_CHARS = [
  'SYS.FH_2026', 'PROJECTS:02', 'STATUS:ONLINE', 'NODE_ACTIVE',
  '01001110', '11001010', 'PORTFOLIO_SYS', 'LOADING_MODULE',
  'DATA_STREAM', 'RPL_ACTIVE', 'FH//2026', '0xFEBRI',
  'FLUTTER:OK', 'GIT:SYNC', 'BUILD_PASS', 'NULL_PTR',
  '0xFF2A3D', '0x00E5FF', 'INIT_DONE', 'MODULE_OK',
  'STACK_TRACE', 'NODE_LINK', 'ASYNC_CALL', 'PROMISE_OK',
];

function createParticle(container) {
  const el = document.createElement('div');
  el.className = 'bg-particle';
  el.textContent = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

  const x = Math.random() * 100;
  const duration = 18 + Math.random() * 25;
  const delay = Math.random() * 20;
  const size = 8 + Math.random() * 3;
  const opacity = 0.03 + Math.random() * 0.07;

  el.style.cssText = `
    left: ${x}%;
    font-size: ${size}px;
    animation-duration: ${duration}s;
    animation-delay: -${delay}s;
    opacity: ${opacity};
  `;

  container.appendChild(el);
  return el;
}

export default function BackgroundSystem() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const COUNT = window.innerWidth < 768 ? 12 : 24;
    const particles = [];

    for (let i = 0; i < COUNT; i++) {
      particles.push(createParticle(container));
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />
      <div className="bg-particles" ref={containerRef} aria-hidden="true" />
      <div className="bg-scan-beam" aria-hidden="true" />
    </>
  );
}
