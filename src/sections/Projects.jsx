import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects, projectCategories } from '../data/projects';

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Portfolio Showcase"
          title="Featured Projects"
          subtitle="Selected projects demonstrating my development skills, analytical thinking, and technical learning."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {projectCategories.map((category) => {
            const isSelected = activeCategory === category;
            const count = category === "All Projects"
              ? projects.length
              : projects.filter(p => p.category === category).length;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-electric-500 to-accent-purple text-white shadow-md shadow-purple-500/25 scale-105'
                    : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:bg-slate-100 dark:hover:bg-navy-850'
                }`}
              >
                <span>{category}</span>
                <span className={`ml-2 text-[11px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-navy-800 text-slate-500 dark:text-slate-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Empty state fallback (if ever filtered to 0) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 max-w-md mx-auto">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No projects found in this category currently.
            </p>
          </div>
        )}

        {/* Informative Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Click <strong>View Details</strong> on any project to explore features, architecture, and technology implementations.
          </p>
        </div>

      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;
