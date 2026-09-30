import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectModal from '../ProjectModal/ProjectModal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Projects.css';

function ProjectCard({ project, onInspect }) {
  return (
    <article
      className="project-card panel"
      onClick={() => onInspect(project)}
      data-cursor="pointer"
      aria-label={`Project: ${project.title}. Click to inspect.`}
      id={`project-card-${project.id}`}
    >
      {/* Thumbnail area */}
      <div className="project-thumb">
        {project.thumbnail ? (
          <div className={`project-thumb-img-wrapper ${project.thumbnailFit === 'cover' ? 'fit-cover' : 'fit-contain'}`}>
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`project-thumb-img ${project.thumbnailFit === 'cover' ? 'fit-cover' : 'fit-contain'}`}
            />
          </div>
        ) : (
          <div className="project-thumb-bg">
            <div className="project-thumb-pattern" aria-hidden="true">
              {project.technologies.map((t) => (
                <span key={t} className="mono thumb-tech-label">{t}</span>
              ))}
            </div>
          </div>
        )}
        <div className="project-thumb-overlay">
          <span className="project-inspect-hint mono">[ INSPECT ]</span>
        </div>
      </div>

      {/* Card body */}
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-id mono">PROJECT_{project.id}</span>
          <span className="project-year mono">{project.year}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>

        <div className="project-tech-row">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tech-tag mono">{tech}</span>
          ))}
        </div>

        <p className="project-desc">{project.description}</p>

        <div className="project-card-footer">
          <span
            className={`status-badge ${project.status === 'ACTIVE' ? 'active' : 'project'}`}
          >
            {project.status}
          </span>
          <div className="project-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link mono"
                onClick={(e) => e.stopPropagation()}
                id={`project-github-${project.id}`}
                aria-label={`GitHub repository for ${project.title}`}
              >
                ↗ GITHUB
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-cyan mono"
                onClick={(e) => e.stopPropagation()}
                id={`project-live-${project.id}`}
                aria-label={`Live demo for ${project.title}`}
              >
                ● LIVE
              </a>
            ) : project.liveStatus ? (
              <span className="project-link-pending mono">{project.liveStatus}</span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="project-corner-tl" aria-hidden="true" />
      <div className="project-corner-br" aria-hidden="true" />
    </article>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  useScrollReveal();

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <header className="section-header reveal">
          <div className="section-label">PROJECT_DATABASE</div>
          <h2 className="section-title">DEPLOYED <span>PROJECTS</span></h2>
        </header>

        {/* Database header */}
        <div className="projects-db-header reveal">
          <div className="db-header-left mono">
            <span className="text-muted">DATABASE</span>
            <span className="text-secondary"> // {projects.length} RECORDS FOUND</span>
          </div>
          <div className="db-header-right mono text-dim">SORTED_BY: YEAR_DESC</div>
        </div>

        {/* Projects grid */}
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
              <ProjectCard project={project} onInspect={setSelectedProject} />
            </div>
          ))}
        </div>

        {/* Add project note */}
        <div className="projects-add-note reveal mono">
          <span className="text-dim">// NEW PROJECTS WILL BE ADDED HERE — UPDATE /src/data/projects.js</span>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
