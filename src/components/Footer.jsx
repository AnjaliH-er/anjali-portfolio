import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalData } from '../data/personal';
import { socialLinks } from '../data/socialLinks';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-navy-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                {personalData.fullName}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono">
                B.Tech CSE
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {personalData.headline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex items-center gap-6 text-sm" aria-label="Footer Navigation">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-electric-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-electric-400 transition-colors"
            >
              Projects
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-electric-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-electric-400 transition-colors"
            >
              GitHub
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-navy-800 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 hover:text-sky-500 dark:hover:text-sky-400 hover:bg-slate-200 dark:hover:bg-navy-800 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-navy-900 text-slate-600 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 hover:bg-slate-200 dark:hover:bg-navy-800 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-navy-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>
            Designed and developed by <span className="font-semibold text-slate-700 dark:text-slate-300">{personalData.fullName}</span>.
          </p>
          <p className="flex items-center gap-1 font-mono">
            <span>&copy; {currentYear}</span>
            <span>•</span>
            <span>Built with React &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
