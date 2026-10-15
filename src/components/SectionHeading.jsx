import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = ""
}) => {
  const alignmentClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-electric-400 via-accent-purple to-pink-500 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
