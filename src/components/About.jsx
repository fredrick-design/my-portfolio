import React, { useEffect, useRef, useState } from 'react';
import { STATS, PERSONAL, EXPERIENCE, EDUCATION, STACK } from '../data';

function AnimatedCounter({ target, started }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [started, target]);
  return <>{count}</>;
}

function StatCard({ stat, started }) {
  return (
    <div className="border border-border rounded-2xl p-6 bg-surface">
      <div className="font-display text-5xl font-black text-text mb-2">
        <AnimatedCounter target={stat.value} started={started} />
        <span className="text-accent">+</span>
      </div>
      <p className="font-body text-subtle text-sm leading-snug">{stat.label}</p>
    </div>
  );
}

export default function About() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 max-w-7xl mx-auto px-6">
      <div className="section-line mb-16" />

      {/* Heading marquee */}
      <div className="overflow-hidden mb-16">
        <p className="font-display text-[18vw] font-black text-border/30 whitespace-nowrap leading-none select-none">
          ABOUT ME
        </p>
      </div>

      {/* Philosophy */}
      <div className="grid md:grid-cols-2 gap-16 mb-20 reveal">
        <div>
          <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">approach & philosophy</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text leading-snug">
            from thoughtful concepts<br />
            to <span className="text-accent italic">refined code</span>
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-body text-subtle leading-relaxed mb-6">
            every part of my work is shaped with intent to reach the highest level of craft. i believe in clean,
            purposeful design backed by solid engineering.
          </p>
          <div className="flex gap-3">
            <a
              href={PERSONAL.cvUrl}
              download
              className="mag-btn font-body text-sm px-5 py-2.5 border border-border rounded-full text-text hover:border-accent hover:text-accent transition-all"
            >
              download cv
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 reveal delay-200">
        {STATS.map((stat, i) => (
          <StatCard key={i} stat={stat} started={started} />
        ))}
      </div>

      {/* Experience */}
      <div className="mb-20">
        <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-10 reveal">experience</p>
        <div className="space-y-0">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="group border-t border-border py-8 grid md:grid-cols-3 gap-4 hover:bg-surface/50 transition-colors px-2 -mx-2 rounded-xl reveal delay-100">
              <div>
                <h3 className="font-body font-semibold text-text mb-1">{exp.role}</h3>
                <p className="font-mono text-xs text-accent">{exp.company}</p>
              </div>
              <p className="font-body text-subtle text-sm leading-relaxed md:col-span-1">{exp.description}</p>
              <p className="font-mono text-xs text-muted md:text-right self-start">{exp.period}</p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>

      {/* Tech stack */}
      <div className="mb-20 reveal">
        <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-8">my favourite stack</p>
        <div className="flex flex-wrap gap-3">
          {STACK.map((tech) => (
            <div key={tech.name} className="stack-item tech-pill flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface opacity-70 hover:opacity-100">
              <span className="text-base">{tech.icon}</span>
              <span className="font-body text-sm text-text">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="reveal delay-200">
        <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-10">education</p>
        <div className="space-y-0">
          {EDUCATION.map((edu, i) => (
            <div key={i} className="group border-t border-border py-8 grid md:grid-cols-3 gap-4 hover:bg-surface/50 transition-colors px-2 -mx-2 rounded-xl">
              <div>
                <h3 className="font-body font-semibold text-text mb-1">{edu.degree}</h3>
                <p className="font-mono text-xs text-accent">{edu.institution}</p>
              </div>
              <p className="font-body text-subtle text-sm leading-relaxed">{edu.description}</p>
              <p className="font-mono text-xs text-muted md:text-right self-start">{edu.period}</p>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
