import React from 'react';
import { Eye, ExternalLink, Award, Calendar, Sparkles, Maximize2 } from 'lucide-react';

export const CertificateCard = ({ certificate, onSelectCertificate }) => {
  const encodedImagePath = encodeURI(certificate.image);

  // Category badge colors
  const getBadgeStyle = (category) => {
    switch (category) {
      case 'Full Stack Development':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'Programming / Java':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'Cybersecurity':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'Employability Assessment':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      default:
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
    }
  };

  return (
    <div className="group relative flex flex-col bg-white dark:bg-navy-900/90 rounded-2xl border border-slate-200 dark:border-navy-700/70 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-purple-950/20 transition-all duration-300 hover:-translate-y-1">
      {/* Certificate Image Preview with Overlay */}
      <div
        className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-slate-100 dark:border-navy-800 cursor-pointer"
        onClick={() => onSelectCertificate(certificate)}
      >
        <img
          src={encodedImagePath}
          alt={`Certificate for ${certificate.title} issued by ${certificate.issuer}`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hover overlay with zoom hint */}
        <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/90 dark:bg-navy-900/90 text-slate-900 dark:text-white shadow-lg backdrop-blur-sm">
            <Eye className="w-3.5 h-3.5 text-purple-500" />
            <span>Click to Preview</span>
          </span>
        </div>

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${getBadgeStyle(certificate.category)}`}>
            {certificate.category}
          </span>
        </div>
      </div>

      {/* Card Details */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Organization / Issuer */}
        <div className="flex items-center justify-between text-xs font-medium text-purple-600 dark:text-electric-400 mb-1.5">
          <span className="font-semibold">{certificate.issuer}</span>
          {certificate.date && (
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {certificate.date}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelectCertificate(certificate)}
          className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-electric-400 transition-colors cursor-pointer"
        >
          {certificate.title}
        </h3>

        {/* Optional implementation note (e.g. Capgemini & FUEL) */}
        {certificate.implementedBy && (
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Project: <span className="font-medium text-slate-700 dark:text-slate-300">{certificate.implementedBy}</span>
          </p>
        )}

        {/* Short description */}
        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed flex-1">
          {certificate.description}
        </p>

        {/* Card Actions Footer */}
        <div className="mt-5 pt-3.5 flex items-center justify-between border-t border-slate-100 dark:border-navy-800/80 gap-2">
          {/* View Certificate Button */}
          <button
            onClick={() => onSelectCertificate(certificate)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-electric-400 hover:text-purple-700 dark:hover:text-electric-300 group-hover:translate-x-0.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View Certificate</span>
          </button>

          {/* Quick Action Links: External Full Size or Credly verify */}
          <div className="flex items-center gap-1.5">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-500 dark:text-slate-400 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                title="Verify on Credly"
                aria-label={`Verify ${certificate.title} on Credly`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href={encodedImagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-electric-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
              title="Open Full Size Certificate"
              aria-label={`Open Full Size Image of ${certificate.title}`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
