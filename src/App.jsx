import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          lenis.scrollTo(href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="portfolio-app">

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <Footer />
    </div>
  );
}

export default App;
