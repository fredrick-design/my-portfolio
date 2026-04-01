import React, { useState, useCallback } from 'react';
import Cursor from './components/Cursor';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';

function Main() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onDone = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Cursor />
      <Preloader onDone={onDone} />
      {loaded && <Main />}
    </>
  );
}
