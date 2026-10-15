import React, { useEffect } from 'react';
import { X, ExternalLink, Award, Calendar, CheckCircle2, ShieldCheck, Maximize2 } from 'lucide-react';

export const CertificateModal = ({ certificate, isOpen, onClose }) => {
  // ESC key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const encodedImagePath = encodeURI(certificate.image);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-navy-800 bg-slate-50/60 dark:bg-navy-850/60">
          <div className="flex items-center gap-2 sm:gap-3 pr-4">
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                {certificate.category}
              </span>
              <h3 id="certificate-modal-title" className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-1 mt-0.5">
                {certificate.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors shrink-0"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Image Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {/* High-Resolution Certificate View */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-navy-800 bg-slate-950/50 shadow-inner flex items-center justify-center group">
            <img
              src={encodedImagePath}
              alt={`Certificate for ${certificate.title} issued by ${certificate.issuer}`}
              className="w-full h-auto max-h-[62vh] object-contain rounded-lg"
              loading="eager"
            />
          </div>

          {/* Certificate Metadata Details */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2 border-t border-slate-100 dark:border-navy-800/80">
            <div className="md:col-span-8 space-y-2">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Issuing Organization: <strong className="text-slate-800 dark:text-slate-200 font-semibold">{certificate.issuer}</strong>
                {certificate.implementedBy && (
                  <span className="block mt-0.5 text-purple-600 dark:text-purple-400 font-medium">
                    Implemented by: {certificate.implementedBy}
                  </span>
                )}
              </div>
              {certificate.description && (
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {certificate.description}
                </p>
              )}
              {certificate.highlights && certificate.highlights.length > 0 && (
                <ul className="space-y-1.5 pt-1">
                  {certificate.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="md:col-span-4 flex flex-col justify-start md:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono">
              {certificate.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-purple-500" />
                  <span>{certificate.date}</span>
                </div>
              )}
              {certificate.duration && (
                <div className="text-slate-600 dark:text-slate-300">
                  Duration: {certificate.duration}
                </div>
              )}
              {certificate.credentialId && (
                <div className="text-[11px] text-slate-500 dark:text-slate-400 break-all md:text-right">
                  {certificate.credentialId}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-3.5 border-t border-slate-200 dark:border-navy-800 bg-slate-50/60 dark:bg-navy-850/60">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Verified Learning Credential</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Verify on Credly</span>
              </a>
            )}
            <a
              href={encodedImagePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-electric-500 to-accent-purple text-white shadow-sm hover:opacity-95 transition-opacity"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Open Full Size</span>
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
