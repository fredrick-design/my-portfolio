import React, { useState } from 'react';
import { PERSONAL } from '../data';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Replace with your form handler (Formspree, EmailJS, etc.)
    const mailto = `mailto:${PERSONAL.email}?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 max-w-7xl mx-auto px-6">
      <div className="section-line mb-16" />

      {/* Big CTA */}
      <div className="text-center mb-20 reveal">
        <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-4">let's collaborate</p>
        <h2 className="font-display text-5xl md:text-8xl font-black text-text leading-none mb-6">
          let's build<br />
          <span className="text-accent italic">something</span>
        </h2>
        <p className="font-body text-subtle text-base max-w-md mx-auto">
          worth talking about.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — info */}
        <div className="reveal delay-100">
          <div className="space-y-6 mb-10">
            <div>
              <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-1">email</p>
              <a href={`mailto:${PERSONAL.email}`} className="font-body text-text hover:text-accent transition-colors">
                {PERSONAL.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-1">phone</p>
              <a href={`tel:${PERSONAL.phone}`} className="font-body text-text hover:text-accent transition-colors">
                {PERSONAL.phone}
              </a>
            </div>
            <div>
              <p className="font-mono text-xs text-subtle uppercase tracking-widest mb-2">socials</p>
              <div className="flex gap-4">
                {Object.entries(PERSONAL.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-subtle hover:text-accent transition-colors capitalize"
                    data-hover
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={submit} className="space-y-4 reveal delay-200">
          <div>
            <input
              name="name"
              value={form.name}
              onChange={handle}
              placeholder="your name"
              required
              className="w-full bg-surface border border-border rounded-xl px-5 py-4 font-body text-text placeholder-muted focus:outline-none focus:border-accent transition-colors text-sm"
            />
          </div>
          <div>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handle}
              placeholder="your email"
              required
              className="w-full bg-surface border border-border rounded-xl px-5 py-4 font-body text-text placeholder-muted focus:outline-none focus:border-accent transition-colors text-sm"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={form.message}
              onChange={handle}
              placeholder="tell me about your project..."
              rows={5}
              required
              className="w-full bg-surface border border-border rounded-xl px-5 py-4 font-body text-text placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="mag-btn w-full py-4 bg-accent text-bg font-semibold font-body rounded-xl hover:bg-text transition-all text-sm"
          >
            {sent ? 'opening mail app...' : 'send message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
