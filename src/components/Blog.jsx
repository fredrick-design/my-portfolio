import React from 'react';
import { BLOG_POSTS } from '../data';

export default function Blog() {
  return (
    <section id="blog" className="py-28 max-w-7xl mx-auto px-6">
      <div className="section-line mb-16" />

      <div className="flex items-end justify-between mb-14 reveal">
        <div>
          <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">thoughts & notes</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text leading-tight">
            ideas &<br />
            <span className="text-accent italic">insights</span>
          </h2>
        </div>
        <p className="hidden md:block font-body text-subtle text-sm max-w-xs text-right leading-relaxed">
          ideas, experiments, and things i'm learning or building along the way.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 reveal delay-200">
        {BLOG_POSTS.map((post) => (
          <a
            key={post.id}
            href={post.url}
            className="project-card group block border border-border rounded-2xl overflow-hidden bg-surface hover:bg-[#141414] transition-all"
            data-hover
          >
            {/* Image placeholder — replace with real <img> */}
            <div className="w-full h-44 bg-muted/20 flex items-center justify-center border-b border-border">
              {post.image ? (
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
              ) : (
                <span className="font-mono text-xs text-muted">[ post image ]</span>
              )}
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="tech-pill font-mono text-xs text-subtle px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="font-body text-subtle text-sm leading-relaxed">
                {post.excerpt}
              </p>
              <p className="font-mono text-xs text-accent mt-4 group-hover:translate-x-1 transition-transform inline-block">
                read more →
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
