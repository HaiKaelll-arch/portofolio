import { useState } from 'react';
import { timelineItems } from '../../data/experiences';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

const TYPE_COLORS = {
  EDUCATION:   'var(--cyan)',
  ACTIVITY:    'var(--red-primary)',
  PROJECT:     'var(--amber)',
  ACHIEVEMENT: 'var(--purple)',
};

const TYPE_ICONS = {
  EDUCATION:   '◈',
  ACTIVITY:    '◆',
  PROJECT:     '▶',
  ACHIEVEMENT: '★',
};

export default function Experience() {
  const [activeItem, setActiveItem] = useState(null);
  useScrollReveal();

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <header className="section-header reveal">
          <div className="section-label">EXPERIENCE.LOG</div>
          <h2 className="section-title">TIMELINE <span>CIRCUIT</span></h2>
        </header>

        <div className="timeline-layout">
          {/* Timeline rail */}
          <div className="timeline-rail" aria-hidden="true" />

          {/* Items */}
          <div className="timeline-items">
            {timelineItems.map((item, i) => (
              <div
                key={item.id}
                className={`timeline-node reveal ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} ${activeItem === item.id ? 'expanded' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Year marker */}
                {(i === 0 || timelineItems[i - 1].year !== item.year) && (
                  <div className="timeline-year" aria-label={`Year ${item.year}`}>
                    <span className="mono">{item.year}</span>
                  </div>
                )}

                {/* Node connector */}
                <button
                  className="timeline-dot"
                  style={{ '--dot-color': TYPE_COLORS[item.type] }}
                  onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                  aria-expanded={activeItem === item.id}
                  aria-label={`${item.title} — click to ${activeItem === item.id ? 'collapse' : 'expand'}`}
                  id={`timeline-node-${item.id}`}
                >
                  <span className="dot-icon">{TYPE_ICONS[item.type]}</span>
                  <span className="dot-ping" aria-hidden="true" />
                </button>

                {/* Card */}
                <div
                  className="timeline-card panel"
                  onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
                  data-cursor="pointer"
                >
                  <div className="timeline-card-header">
                    <span
                      className="timeline-type-badge mono"
                      style={{ color: TYPE_COLORS[item.type], borderColor: TYPE_COLORS[item.type] }}
                    >
                      {item.icon} {item.type}
                    </span>
                  </div>
                  <h3 className="timeline-card-title">{item.title}</h3>
                  <div className="timeline-card-subtitle mono">{item.subtitle}</div>

                  {/* Expanded content */}
                  <div className={`timeline-card-body ${activeItem === item.id ? 'open' : ''}`}>
                    <p className="timeline-card-desc">{item.description}</p>
                    <div className="timeline-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="timeline-tag mono">{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="timeline-expand-hint mono">
                    {activeItem === item.id ? '▲ COLLAPSE' : '▼ EXPAND'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
