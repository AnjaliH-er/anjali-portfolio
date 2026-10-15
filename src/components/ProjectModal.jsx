import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Sparkles } from 'lucide-react';
import TechBadge from './TechBadge';

export const ProjectModal = ({ project, isOpen, onClose }) => {
  // ESC key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 transition-all my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-navy-800 bg-slate-50/50 dark:bg-navy-850/50">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
              {project.category}
            </span>
            {project.featured && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-500 dark:text-amber-400">
                <Sparkles className="w-3.5 h-3.5" /> Featured
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Mockup Preview */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-navy-800 bg-slate-900 shadow-inner group">
            <img
              src={project.image}
              alt={`${project.title} Interface Mockup`}
              className="w-full h-auto object-cover max-h-72"
              loading="lazy"
            />
          </div>

          {/* Title & Overview */}
          <div>
            <h3 id="project-modal-title" className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Key Capabilities & Architecture
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-navy-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-navy-700/50"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-400 mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              <Cpu className="w-4 h-4 text-purple-500" />
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <TechBadge key={idx} variant="default">
                  {tech}
                </TechBadge>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-t border-slate-200 dark:border-navy-800 bg-slate-50/50 dark:bg-navy-850/50">
          <div className="text-xs text-slate-500 dark:text-slate-400 italic">
            {project.highlights || "Modular Codebase • Clean Architecture"}
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-navy-800 dark:hover:bg-navy-700 border border-slate-700/50 transition-colors shadow-sm"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-gradient-to-r from-electric-500 to-accent-purple text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : null}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
