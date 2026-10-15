import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  BarChart3, 
  Wrench, 
  ShieldAlert,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { skillCategories } from '../data/skills';

// Mapping string icons to Lucide components
const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  BarChart3,
  Wrench,
  ShieldAlert
};

export const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredCategories = selectedFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedFilter);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Technical Competencies"
          title="Skills &amp; Technologies"
          subtitle="Categorized technical competencies acquired through academic coursework, engineering projects, and self-directed study."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedFilter === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:bg-slate-100 dark:hover:bg-navy-850'
            }`}
          >
            All Categories ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => {
            const isSelected = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-navy-800 hover:bg-slate-100 dark:hover:bg-navy-850'
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code2;
            const isLearning = category.badge === "Currently Learning";

            return (
              <div
                key={category.id}
                className={`flex flex-col p-6 rounded-2xl bg-white dark:bg-navy-900 border transition-all duration-300 hover:shadow-lg ${
                  isLearning
                    ? 'border-emerald-500/30 dark:border-emerald-500/20 bg-gradient-to-b from-white to-emerald-50/20 dark:from-navy-900 dark:to-emerald-950/10'
                    : 'border-slate-200 dark:border-navy-800 hover:border-purple-400/50 dark:hover:border-purple-500/30'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isLearning
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                        : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {category.skills.length} competencies
                      </p>
                    </div>
                  </div>

                  {category.badge && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <BookOpen className="w-3 h-3" />
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges List */}
                <div className="mt-auto space-y-2.5">
                  {category.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="group flex flex-col p-2.5 rounded-xl bg-slate-50 dark:bg-navy-850/60 border border-slate-100 dark:border-navy-800/80 hover:border-purple-300 dark:hover:border-navy-700 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 font-mono">
                          {skill.name}
                        </span>
                        <CheckCircle className={`w-3.5 h-3.5 ${
                          isLearning ? 'text-emerald-500' : 'text-purple-500'
                        } opacity-80`} />
                      </div>
                      {skill.focus && (
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {skill.focus}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Transparency Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Skills are organized based on verified hands-on coursework, projects, and active development practice without arbitrary percentage metrics.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
