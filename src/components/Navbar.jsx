import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalData } from '../data/personal';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll state for styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navItems.map(item => document.querySelector(item.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-navy-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-navy-800/80 shadow-sm dark:shadow-navy-950/50 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Anjali Hiremath Home"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-electric-500 via-accent-purple to-purple-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
              AH
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-electric-400 transition-colors">
                {personalData.fullName}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-purple-600 dark:text-electric-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-navy-800/60'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-electric-400 to-accent-purple rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & Get in touch */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-electric-500 to-accent-purple hover:from-electric-600 hover:to-purple-600 text-white shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl border-b border-slate-200 dark:border-navy-800 shadow-xl px-4 py-6 transition-all duration-300 max-h-[calc(100vh-65px)] overflow-y-auto">
          <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-purple-50 dark:bg-navy-800 text-purple-600 dark:text-electric-400 font-bold border-l-4 border-purple-500'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-navy-800/60'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-electric-400" />}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-navy-800 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-electric-500 to-accent-purple text-white shadow-md"
              >
                <Send className="w-4 h-4" />
                <span>Get In Touch</span>
              </a>
              <a
                href={personalData.resumeUrl}
                download="Anjali_Hiremath_Resume.pdf"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-navy-700 hover:bg-slate-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
