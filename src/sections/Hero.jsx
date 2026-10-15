import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Send, Sparkles, Terminal, Shield, Code, Database } from 'lucide-react';
import { personalData } from '../data/personal';

export const Hero = () => {
  // Typing animation state
  const roles = personalData.animatedRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Profile image fallback state
  const [imgSrc, setImgSrc] = useState(personalData.actualProfileImage);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length + 1 === currentRole.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting backward
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Mesh & Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-sky-500/10 dark:bg-electric-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider mb-5 bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalData.introLabel}</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hello, World! <br className="hidden sm:inline" />
              I'm <span className="bg-gradient-to-r from-electric-500 via-accent-purple to-pink-500 bg-clip-text text-transparent">Anjali</span>.
            </h1>

            {/* Animated Tagline */}
            <p className="mt-3 text-lg sm:text-xl font-mono font-semibold text-slate-800 dark:text-slate-200">
              {personalData.tagline}
            </p>

            {/* Dynamic Rotating Typing Headline */}
            <div className="mt-2 h-8 sm:h-9 flex items-center justify-center lg:justify-start">
              <span className="text-base sm:text-lg font-mono text-purple-600 dark:text-electric-400 font-medium">
                &gt; {displayedText}
              </span>
              <span className="w-2 h-5 bg-purple-500 ml-1 animate-pulse" />
            </div>

            {/* Introduction Paragraph */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              {personalData.heroBio}
            </p>

            {/* Hero Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              {/* 1. Explore My Work */}
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-electric-500 to-accent-purple hover:from-electric-600 hover:to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. Get In Touch */}
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white dark:bg-navy-850 hover:bg-slate-50 dark:hover:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-navy-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4 text-purple-500" />
                <span>Get In Touch</span>
              </a>

              {/* 3. Download Resume */}
              <a
                href={personalData.resumeUrl}
                download="Anjali_Hiremath_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-navy-900 hover:bg-slate-200 dark:hover:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800 transition-all duration-200 hover:-translate-y-0.5"
                title="Download Anjali Hiremath's Resume (PDF)"
              >
                <Download className="w-4 h-4 text-electric-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Tech Highlights Badge Strip */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-navy-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Code className="w-4 h-4 text-electric-400" /> Full Stack
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-purple-400" /> Data Analytics
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-emerald-400" /> Cybersecurity Learner
              </span>
            </div>
          </div>

          {/* Right Column: Portrait Component (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[280px] sm:w-[320px] md:w-[340px] h-[360px] sm:h-[410px] md:h-[440px] max-w-full">
              
              {/* Subtle Glowing Orbit Rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-electric-500/20 via-accent-purple/20 to-pink-500/20 blur-xl transform -rotate-3" />
              
              {/* Portrait Container Frame */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-white/80 to-white/20 dark:from-navy-800/80 dark:to-navy-900/60 border border-slate-200 dark:border-navy-700/80 shadow-2xl backdrop-blur-xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-navy-950 relative flex items-center justify-center">
                  <img
                    src={imgSrc}
                    onError={() => setImgSrc(personalData.placeholderImage || '/images/profile-placeholder.svg')}
                    alt="Anjali Hiremath - Professional Portrait"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.01]"
                    loading="eager"
                  />
                  {/* Subtle vignette shadow at bottom of portrait */}
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-navy-950/50 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Pill: Status (Top Right) */}
              <div className="absolute -top-3 -right-3 sm:-right-4 px-3 py-1.5 rounded-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-lg flex items-center gap-2 backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
                <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                  Open to Opportunities
                </span>
              </div>

              {/* Floating Chip: Tech Stack (Bottom Left) */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 px-3.5 py-2 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-xl flex items-center gap-2.5 backdrop-blur-md">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Terminal className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400">Specialization</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">B.Tech CSE '27</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
