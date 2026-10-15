import React from 'react';

export const TechBadge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-200 dark:bg-navy-800/80 dark:text-slate-300 dark:border-navy-700/80 hover:border-purple-400/50",
    accent: "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/50",
    electric: "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/50",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/50"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-medium border transition-colors duration-200 ${variants[variant] || variants.default} ${className}`}
    >
      {children}
    </span>
  );
};

export default TechBadge;
