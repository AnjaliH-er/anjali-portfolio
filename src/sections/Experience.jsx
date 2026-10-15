import React from 'react';
import { Briefcase, Calendar, Clock, CheckCircle2, ArrowRight, Building2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TechBadge from '../components/TechBadge';
import { experiences } from '../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50/50 dark:bg-navy-950/50 border-t border-slate-200/60 dark:border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Practical Industry Exposure"
          title="Internship Experience"
          subtitle="Real-world software engineering internships focused on full stack development workflows and practical application building."
        />

        {/* Timeline / Experience Cards Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Track Line (hidden on very small screens, visible on sm+) */}
          <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-500 via-electric-400 to-transparent" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative sm:pl-20">
                
                {/* Timeline Node Icon (sm+) */}
                <div className="hidden sm:flex absolute left-5 top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-navy-900 border-2 border-purple-500 items-center justify-center text-purple-600 dark:text-purple-400 shadow-md">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-950/20 transition-all duration-300">
                  
                  {/* Top Header: Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-slate-700 dark:text-slate-300 font-semibold text-sm sm:text-base">
                        <Building2 className="w-4 h-4 text-electric-500" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Duration Pill */}
                    <div className="flex flex-col sm:items-end">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-700">
                        <Clock className="w-3.5 h-3.5 text-purple-500" />
                        <span>Duration: {exp.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Responsibilities List */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
                      Key Contributions:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Project Highlights (if any) */}
                  {exp.projectHighlights && exp.projectHighlights.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-100 dark:border-navy-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block mb-2">
                        Project Involvements:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.projectHighlights.map((proj, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-navy-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-navy-700"
                          >
                            <span>{proj}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies Used */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Tech Areas:</span>
                      {exp.technologies.map((tech, idx) => (
                        <TechBadge key={idx} variant="default">
                          {tech}
                        </TechBadge>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
