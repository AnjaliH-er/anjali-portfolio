import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import CertificateCard from '../components/CertificateCard';
import CertificateModal from '../components/CertificateModal';
import { certifications, certificationCategories } from '../data/certifications';

export const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState("All Certifications");
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const filteredCertifications = activeCategory === "All Certifications"
    ? certifications
    : certifications.filter(cert => cert.category === activeCategory || cert.secondaryCategory === activeCategory);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Credentials &amp; Learning"
          title="Certifications &amp; Training"
          subtitle="Verified learning credentials, industry job simulations, and technical training validating competencies across Full Stack Java and Cybersecurity."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {certificationCategories.map((category) => {
            const isSelected = activeCategory === category;
            const count = category === "All Certifications"
              ? certifications.length
              : certifications.filter(cert => cert.category === category || cert.secondaryCategory === category).length;

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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              onSelectCertificate={(cert) => setSelectedCertificate(cert)}
            />
          ))}
        </div>

        {/* Guidance Note */}
        <div className="mt-14 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Click on any certificate card or <strong>View Certificate</strong> to inspect credentials and verification details in high resolution.
          </p>
        </div>

      </div>

      {/* Lightbox / Modal Dialog */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};

export default Certifications;
