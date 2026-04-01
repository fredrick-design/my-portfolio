import React from 'react';
import { PROJECTS } from '../data';

function ProjectCard({ project, index }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card group block border border-border rounded-2xl p-6 md:p-8 bg-surface hover:bg-[#141414] transition-all"
      data-hover
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-xs text-subtle">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex flex-wrap gap-2 justify-end">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-pill font-mono text-xs text-subtle px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <h3 className="font-display text-2xl md:text-3xl font-bold text-text mb-3 group-hover:text-accent transition-colors leading-tight">
        {project.title}
      </h3>
      <p className="font-body text-subtle text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted">{project.year}</span>
        <span className="font-mono text-xs text-accent group-hover:translate-x-1 transition-transform inline-block">
          view project →
        </span>
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 max-w-7xl mx-auto px-6">
      <div className="section-line mb-16" />

      <div className="flex items-end justify-between mb-14 reveal">
        <div>
          <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">
            selected work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight">
            featured<br />
            <span className="text-accent italic">projects</span>
          </h2>
        </div>
        <p className="hidden md:block font-body text-subtle text-sm max-w-xs text-right leading-relaxed">
          some stuff i've been working on, bits of code and ideas that found their way into something real.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4 reveal delay-200">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <div className="mt-10 text-center reveal delay-300">
        <a
          href="#contact"
          className="font-body text-sm text-subtle hover:text-accent transition-colors inline-flex items-center gap-2"
        >
          want to see more? let's talk
          <span className="text-accent">→</span>
        </a>
      </div>
    </section>
  );
}
