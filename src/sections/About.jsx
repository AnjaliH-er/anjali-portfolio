import React from 'react';
import { Layers, BarChart2, ShieldAlert, ArrowUpRight, GraduationCap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/personal';

export const About = () => {
  const interestCards = [
    {
      id: "fullstack",
      title: "Full Stack Development",
      badge: "Core Focus",
      icon: Layers,
      color: "from-blue-500 to-indigo-600",
      description: "Building practical, responsive, and user-friendly web applications.",
      points: [
        "End-to-end component engineering with React and modern JavaScript",
        "Backend RESTful routing and structured database integration",
        "Responsive, accessible design principles"
      ]
    },
    {
      id: "analytics",
      title: "Data Analytics",
      badge: "Expanding Domain",
      icon: BarChart2,
      color: "from-purple-500 to-pink-600",
      description: "Exploring datasets, creating dashboards, and presenting useful insights through data visualization.",
      points: [
        "Interactive reporting with Power BI and Microsoft Excel",
        "Data modeling and visual storytelling for key business metrics",
        "Extracting actionable signals from operational datasets"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      badge: "Currently Learning",
      icon: ShieldAlert,
      color: "from-emerald-500 to-teal-600",
      description: "Building foundational cybersecurity knowledge and exploring networking, defensive security, and monitoring.",
      points: [
        "Deepening understanding of network protocols and the OSI model",
        "Exploring threat mitigation concepts and defensive foundations",
        "Studying security monitoring and system hygiene fundamentals"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 dark:bg-navy-950/50 border-t border-slate-200/60 dark:border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Background &amp; Direction"
          title="About Me"
          subtitle="A student technologist dedicated to building software that works, uncovering insights in data, and understanding security from the ground up."
        />

        {/* Professional Introduction Container */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm leading-relaxed">
            <div className="absolute top-0 left-8 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-electric-500 to-accent-purple text-white shadow-sm">
              Statement of Purpose
            </div>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed sm:leading-loose">
              {personalData.aboutBio}
            </p>

            {/* Academic Snapshot Pill */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-purple-500" />
                <span><strong>B.Tech in CSE</strong> &bull; Class of {personalData.expectedGraduation}</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300 font-medium">
                {personalData.college}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Professional Interest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {interestCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="group relative flex flex-col p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-md shadow-purple-500/10 group-hover:scale-105 transition-transform`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide ${
                    card.id === 'cybersecurity'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                  }`}>
                    {card.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-electric-400 transition-colors">
                  {card.title}
                </h3>

                {/* Card Primary Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Detailed Highlights */}
                <ul className="mt-auto pt-4 border-t border-slate-100 dark:border-navy-800 space-y-2 text-xs text-slate-500 dark:text-slate-400">
                  {card.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 dark:bg-electric-400 mt-1.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;
