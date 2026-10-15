import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';

export const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative selection:bg-purple-500 selection:text-white">
        {/* Subtle page reading progress indicator */}
        <ScrollProgress />

        {/* Sticky responsive navigation bar */}
        <Navbar />

        {/* Semantic main content area */}
        <main className="flex-1" id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        {/* Global footer */}
        <Footer />

        {/* Back to top floating button */}
        <BackToTop />
      </div>
    </ThemeProvider>
  );
};

export default App;
