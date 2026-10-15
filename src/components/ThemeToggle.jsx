import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`p-2 rounded-xl transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-purple-500 ${
        isDark
          ? 'bg-navy-800/80 border-navy-700 text-amber-300 hover:text-amber-200 hover:bg-navy-750 hover:border-amber-400/40'
          : 'bg-white border-slate-200 text-slate-700 hover:text-purple-600 hover:bg-slate-50 hover:border-purple-300 shadow-sm'
      } ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 rotate-0 hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
