import { useEffect, useRef } from 'react';
import './ProjectModal.css';

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`Project inspector: ${project.title}`}
      id="project-modal"
    >
      <div className="modal-panel">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <span className="mono modal-system-label">PROJECT_DATABASE // RECORD_OPEN</span>
          </div>
          <button
            className="modal-close"
            onClick={onClose}
            aria-label="Close project inspector"
            id="modal-close-btn"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="modal-body">
          {/* Project ID + status */}
          <div className="modal-meta-row">
            <span className="mono modal-project-id">PROJECT_ID: {project.id}</span>
            <span className={`status-badge ${project.status === 'ACTIVE' ? 'active' : 'project'}`}>
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h2 className="modal-title">{project.title}</h2>

          {/* Year + Category */}
          <div className="modal-year-cat">
            <span className="mono text-muted">YEAR: </span>
            <span className="mono text-red">{project.year}</span>
            <span className="mono text-muted" style={{ marginLeft: '20px' }}>CAT: </span>
            <span className="mono text-secondary">{project.category}</span>
          </div>

          {/* Divider */}
          <div className="modal-divider" aria-hidden="true" />

          {/* Description */}
          <div className="modal-section">
            <div className="modal-section-label mono">DESCRIPTION.TXT</div>
            <p className="modal-desc">{project.longDescription}</p>
          </div>

          {/* Tech Stack */}
          <div className="modal-section">
            <div className="modal-section-label mono">TECH_STACK.LOADOUT</div>
            <div className="modal-tech-list">
              {project.technologies.map((tech) => (
                <div key={tech} className="modal-tech-item">
                  <span className="mono modal-tech-bullet">▶</span>
                  <span className="mono modal-tech-name">{tech}</span>
                  <span className="status-badge active">ACTIVE</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && (
            <div className="modal-section">
              <div className="modal-section-label mono">FEATURE_MODULES</div>
              <div className="modal-features">
                {project.features.map((f) => (
                  <div key={f} className="modal-feature-item mono">
                    <span className="text-cyan">◈</span> {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="modal-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                id="modal-github-link"
                aria-label={`Open GitHub repository for ${project.title}`}
              >
                ↗ GITHUB_REPOSITORY
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                id="modal-live-link"
                aria-label={`Open live demo of ${project.title}`}
              >
                ● LIVE_PROJECT
              </a>
            ) : (
              <div className="modal-pending">
                <span className="mono text-dim">LIVE_URL: </span>
                <span className="mono" style={{ color: 'var(--amber)' }}>
                  {project.liveStatus || 'COMING_SOON'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Corner decorations */}
        <div className="modal-corner modal-corner-tl" aria-hidden="true" />
        <div className="modal-corner modal-corner-br" aria-hidden="true" />
      </div>
    </div>
  );
}
