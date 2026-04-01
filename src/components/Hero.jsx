import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL, MARQUEE_ITEMS_1, MARQUEE_ITEMS_2 } from '../data';

function RotatingBadge() {
  const text = "AVAILABLE FOR FREELANCE • DOWNLOAD CV • ";
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg viewBox="0 0 112 112" className="absolute inset-0 rotate-slow w-full h-full">
        <defs>
          <path id="circle" d="M 56,56 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
        </defs>
        <text className="fill-subtle text-[10px] font-mono tracking-widest" fontSize="9.5">
          <textPath href="#circle">{text}</textPath>
        </text>
      </svg>
      <span className="text-accent text-2xl">↓</span>
    </div>
  );
}

function TypedRole({ roles }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  useEffect(() => {
    const current = roles[index];
    if (!deleting && displayed.length < current.length) {
      timeout.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, index, roles]);

  return (
    <span className="text-accent">
      {displayed}
      <span className="animate-[blink_1s_step-end_infinite] text-accent">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* Marquee rows */}
      <div className="pt-28 pb-0 overflow-hidden">
        <div className="flex gap-8 py-2 overflow-hidden">
          <div className="marquee-track animate-marquee flex gap-8">
            {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, i) => (
              <span key={i} className="font-mono text-xs text-muted uppercase tracking-widest whitespace-nowrap">
                {item} <span className="text-accent mx-1">*</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-8 py-2 overflow-hidden">
          <div className="marquee-track animate-marquee-reverse flex gap-8">
            {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, i) => (
              <span key={i} className="font-mono text-xs text-muted uppercase tracking-widest whitespace-nowrap">
                {item} <span className="text-accent mx-1">*</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main hero */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="font-mono text-subtle text-sm tracking-widest uppercase mb-6 reveal visible">
              {PERSONAL.tagline}
            </p>

            <h1 className="font-display text-5xl md:text-7xl font-black text-text leading-[0.9] mb-8 reveal visible delay-100">
              <TypedRole roles={PERSONAL.roles} />
            </h1>

            <p className="font-body text-subtle text-base leading-relaxed max-w-md mb-10 reveal visible delay-200">
              {PERSONAL.bio}
            </p>

            <div className="flex items-center gap-4 reveal visible delay-300">
              <a
                href="#projects"
                className="mag-btn font-body text-sm px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-text transition-all"
              >
                see my work
              </a>
              <a
                href="#contact"
                className="mag-btn font-body text-sm px-6 py-3 border border-border rounded-full text-text hover:border-accent hover:text-accent transition-all"
              >
                get in touch
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-end items-center">
            <div className="relative">
              {/* Placeholder portrait box */}
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-2xl border border-border bg-surface flex items-center justify-center overflow-hidden relative">
                {/* Replace the div below with an <img> of yourself */}
                <div className="text-center text-subtle">
                  <p className="font-mono text-sm">[ your photo ]</p>
                  <p className="font-mono text-xs mt-1 opacity-50">replace me in Hero.jsx</p>
                </div>
                {/* Decorative corner lines */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-accent opacity-60" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-accent opacity-60" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8">
                <a href={PERSONAL.cvUrl} download>
                  <RotatingBadge />
                </a>
              </div>

              {/* Available dot */}
              {PERSONAL.available && (
                <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-surface border border-border rounded-full px-3 py-1.5">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="font-mono text-xs text-accent">available</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-3 reveal visible delay-500">
          <div className="w-6 h-10 border border-border rounded-full flex items-start justify-center pt-1.5">
            <span className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
          <span className="font-mono text-xs text-subtle tracking-widest uppercase">scroll for more</span>
        </div>
      </div>
    </section>
  );
}
