import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookCheck, School } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-50/50 dark:bg-navy-950/50 border-t border-slate-200/60 dark:border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal engineering education providing a strong foundation in computer science and software development."
        />

        {/* Education Card Container */}
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-950/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
                      {edu.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-purple-600 dark:text-electric-400">
                      {edu.field}
                    </p>
                  </div>
                </div>

                <div className="sm:text-right">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-navy-850 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-700">
                    <Calendar className="w-3.5 h-3.5 text-purple-500" />
                    <span>Graduation: {edu.expectedGraduation}</span>
                  </div>
                </div>
              </div>

              {/* Institutions */}
              <div className="space-y-2 mb-6 p-4 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-100 dark:border-navy-800">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <School className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>{edu.college}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-400 pl-6">
                  <span>Affiliated with <strong>{edu.university}</strong></span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 pl-6">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* CGPA display (only if confirmed) */}
              {edu.cgpa && (
                <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>Cumulative CGPA: <strong className="text-purple-600 dark:text-electric-400">{edu.cgpa}</strong></span>
                </div>
              )}

              {/* Core Academic Foundations */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-3">
                  Foundational Coursework &amp; Activities:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {edu.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <BookCheck className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
