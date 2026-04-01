import React, { useEffect, useState } from 'react';
import { PERSONAL } from '../data';

export default function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 18 + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setHidden(true);
          setTimeout(onDone, 600);
        }, 300);
      }
      setProgress(Math.floor(current));
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div className={`preloader ${hidden ? 'hidden' : ''}`}>
      <div className="text-center select-none">
        <p className="font-mono text-subtle text-sm mb-6 tracking-widest uppercase">
          loading
        </p>
        <div className="font-display text-8xl font-black text-text leading-none">
          {String(progress).padStart(2, '0')}
          <span className="text-accent">%</span>
        </div>
        <p className="font-body text-subtle text-sm mt-6 italic">
          crafted with intent
        </p>
      </div>
    </div>
  );
}
