import { useState } from 'react';
import { activities, hobbies } from '../../data/activities';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Activity.css';

export default function Activity() {
  const [activeNode, setActiveNode] = useState(null);
  const [activeHobby, setActiveHobby] = useState(null);
  useScrollReveal();

  return (
    <section id="activity" className="section activity-section">
      <div className="container">
        {/* ── Organizations ── */}
        <header className="section-header reveal">
          <div className="section-label">AFFILIATION.NETWORK</div>
          <h2 className="section-title">ORGANIZATIONS <span>&amp; ACTIVITIES</span></h2>
        </header>

        <div className="affiliation-network reveal">
          {/* Central node */}
          <div className="network-center">
            <div className="center-node">
              <span className="center-node-label">FEBRI_HAIKAL</span>
              <span className="mono center-node-sub">CORE_NODE</span>
            </div>
            {/* Connecting lines */}
            {activities.map((_, i) => (
              <div
                key={i}
                className="connector-line"
                style={{ '--angle': `${(i * 120) - 60}deg` }}
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Org nodes */}
          <div className="org-nodes">
            {activities.map((org) => (
              <button
                key={org.id}
                className={`org-node ${activeNode === org.id ? 'active' : ''}`}
                style={{ '--node-color': org.color }}
                onClick={() => setActiveNode(activeNode === org.id ? null : org.id)}
                id={`org-node-${org.id}`}
                aria-expanded={activeNode === org.id}
                aria-label={`${org.label} — click to see details`}
              >
                <span className="org-node-label mono">{org.label}</span>
                <span className="org-node-type mono">{org.type}</span>
                <span className="status-badge active" style={{ fontSize: '8px', padding: '2px 6px' }}>
                  {org.status}
                </span>
                <div className="org-node-ping" aria-hidden="true" />
              </button>
            ))}
          </div>

          {/* Info panel */}
          {activeNode && (
            <div className="org-info-panel panel reveal">
              {activities.filter((a) => a.id === activeNode).map((org) => (
                <div key={org.id}>
                  <div className="org-info-header">
                    <span className="mono text-muted" style={{ fontSize: '9px', letterSpacing: '0.15em' }}>
                      NODE_INFO // {org.type}
                    </span>
                    <span className="status-badge active">{org.status}</span>
                  </div>
                  <h3 className="org-info-title">{org.label}</h3>
                  <div className="org-info-fullname mono">{org.fullName}</div>
                  <p className="org-info-desc">{org.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Hobbies ── */}
        <div className="hobby-section reveal">
          <header className="section-header" style={{ marginBottom: '32px' }}>
            <div className="section-label">PERSONAL_MODULES</div>
            <h2 className="section-title">OFF_DUTY <span>SYSTEM</span></h2>
          </header>

          <div className="hobby-grid">
            {hobbies.map((hobby) => (
              <button
                key={hobby.id}
                className={`hobby-module panel-cut ${activeHobby === hobby.id ? 'active' : ''}`}
                onClick={() => setActiveHobby(activeHobby === hobby.id ? null : hobby.id)}
                id={`hobby-module-${hobby.id}`}
                aria-expanded={activeHobby === hobby.id}
                aria-label={`${hobby.displayLabel} module — click to expand`}
              >
                <div className="hobby-icon" aria-hidden="true">{hobby.icon}</div>
                <div className="hobby-label mono">{hobby.label}</div>
                <div className="hobby-name">{hobby.displayLabel}</div>
                <span className="status-badge active hobby-status">
                  STATUS: {hobby.status}
                </span>
                {activeHobby === hobby.id && (
                  <div className="hobby-desc">{hobby.description}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
