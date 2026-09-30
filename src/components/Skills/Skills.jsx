import { useState } from 'react';
import { hardSkills, softSkills, languages } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Skills.css';

const CATEGORY_COLORS = {
  mobile:   'var(--cyan)',
  language: 'var(--red-primary)',
  web:      'var(--amber)',
  backend:  'var(--purple)',
  database: 'var(--cyan)',
  devops:   'var(--amber)',
  design:   'var(--purple)',
};

const LANG_LEVEL_WIDTH = { NATIVE: '100%', INTERMEDIATE: '65%', BASIC: '30%' };

export default function Skills() {
  const [activeTab, setActiveTab] = useState('hard');
  useScrollReveal();

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <header className="section-header reveal">
          <div className="section-label">TECH_STACK.LOADOUT</div>
          <h2 className="section-title">SKILL <span>MATRIX</span></h2>
        </header>

        {/* Tab selector */}
        <div className="skills-tabs reveal" role="tablist" aria-label="Skill categories">
          {[
            { key: 'hard', label: 'HARD_SKILLS' },
            { key: 'soft', label: 'SOFT_SKILLS' },
            { key: 'lang', label: 'LANGUAGE_CORE' },
          ].map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              className={`skills-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
              id={`skills-tab-${key}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Hard Skills */}
        {activeTab === 'hard' && (
          <div className="skills-loadout tab-panel-enter" role="tabpanel" aria-labelledby="skills-tab-hard">
            <div className="loadout-header">
              <span className="mono loadout-title">&gt; TECH_MODULES // ACTIVE_LOADOUT</span>
              <span className="mono" style={{ fontSize: '10px', color: 'var(--text-dim)' }}>
                {hardSkills.length} MODULES LOADED
              </span>
            </div>
            <div className="skills-grid">
              {hardSkills.map((skill, i) => (
                <div
                  key={skill.id}
                  className="skill-module panel-cut-sm"
                  style={{ animationDelay: `${i * 0.05}s` }}
                  data-cursor="pointer"
                >
                  <div className="skill-module-top">
                    <div
                      className="skill-cat-dot"
                      style={{ background: CATEGORY_COLORS[skill.category] || 'var(--red-primary)' }}
                    />
                    <span className="skill-id mono">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="skill-name mono">{skill.label}</div>
                  <div className="skill-footer">
                    <span className="status-badge active">{skill.status}</span>
                    <span className="skill-cat mono">{skill.category.toUpperCase()}</span>
                  </div>
                  <div
                    className="skill-glow-line"
                    style={{ background: CATEGORY_COLORS[skill.category] || 'var(--red-primary)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === 'soft' && (
          <div className="skills-soft tab-panel-enter" role="tabpanel" aria-labelledby="skills-tab-soft">
            <div className="loadout-header">
              <span className="mono loadout-title">&gt; BEHAVIORAL_MODULES // LOADED</span>
            </div>
            <div className="soft-skills-grid">
              {softSkills.map((skill, i) => (
                <div key={skill.id} className="soft-skill-item panel" style={{ animationDelay: `${i * 0.07}s` }}>
                  <div className="soft-skill-indicator" aria-hidden="true" />
                  <span className="soft-skill-label mono">{skill.label.toUpperCase()}</span>
                  <span className="status-badge active" style={{ marginLeft: 'auto' }}>ACTIVE</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {activeTab === 'lang' && (
          <div className="skills-lang tab-panel-enter" role="tabpanel" aria-labelledby="skills-tab-lang">
            <div className="loadout-header">
              <span className="mono loadout-title">&gt; LANGUAGE_CORE // COMMUNICATION_MODULES</span>
            </div>
            <div className="lang-grid">
              {languages.map((lang) => (
                <div key={lang.id} className="lang-card panel hud-bracket">
                  <div className="lang-code mono">{lang.code}</div>
                  <div className="lang-name">{lang.label}</div>
                  <div className="lang-level-bar">
                    <div
                      className="lang-level-fill"
                      style={{ width: LANG_LEVEL_WIDTH[lang.level] }}
                    />
                  </div>
                  <div className="lang-level-label mono">{lang.level}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
