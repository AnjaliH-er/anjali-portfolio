import React from 'react';
import { Github, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import TechBadge from './TechBadge';

export const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <div className="group relative flex flex-col bg-white dark:bg-navy-900/90 rounded-2xl border border-slate-200 dark:border-navy-700/70 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1">
      {/* Image / Preview with overlay */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-100 dark:border-navy-800">
        <img
          src={project.image}
          alt={`${project.title} Preview`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-navy-950/80 text-electric-400 border border-electric-400/30">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-purple-950/80 text-purple-300 border border-purple-400/30">
              <Sparkles className="w-3 h-3 text-amber-400" /> Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-electric-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed flex-1">
          {project.shortDescription}
        </p>

        {/* Tech Stack Preview */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-navy-800">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 text-xs font-mono font-medium rounded bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-navy-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs font-mono text-slate-400 dark:text-slate-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="mt-5 pt-3 flex items-center justify-between border-t border-slate-100 dark:border-navy-800/80">
          <button
            onClick={() => onSelectProject(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-electric-400 hover:text-purple-700 dark:hover:text-electric-300 group-hover:translate-x-0.5 transition-all"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                title="View GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-electric-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                title="Open Live Demo"
                aria-label={`Open Live Demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
