import React from 'react';
import { PERSONAL, NAV_LINKS } from '../data';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <p className="font-display text-2xl font-bold text-text mb-2">
            {PERSONAL.name.split(' ')[0].toLowerCase()}
            <span className="text-accent">.</span>
          </p>
          <p className="font-body text-subtle text-sm">{PERSONAL.tagline}</p>
        </div>

        <div>
          <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">navigation</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-body text-sm text-subtle hover:text-accent transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">links</p>
          <ul className="space-y-2">
            {Object.entries(PERSONAL.socials).map(([platform, url]) => (
              <li key={platform}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-subtle hover:text-accent transition-colors capitalize">
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex items-center justify-between">
        <p className="font-mono text-xs text-muted">
          © {2026} {PERSONAL.name}. all rights reserved.
        </p>
        <p className="font-mono text-xs text-muted">
          made with <span className="text-accent">♥</span>
        </p>
      </div>
    </footer>
  );
}
