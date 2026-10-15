import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, ExternalLink, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { personalData } from '../data/personal';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errors.message = 'Please enter your message.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    // Encode contents for reliable mail client dispatch
    const subject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const body = encodeURIComponent(
      `Hello Anjali,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    // Trigger user's mail client directly
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-navy-950/50 border-t border-slate-200/60 dark:border-navy-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Get In Touch"
          title="Let's Connect"
          subtitle="Interested in discussing opportunities, collaborating on projects, or connecting over technology? Feel free to reach out."
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Professional Email
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Direct inbox response
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-navy-850 border border-slate-100 dark:border-navy-800 flex items-center justify-between gap-2 mt-4">
                <span className="text-xs font-mono text-slate-700 dark:text-slate-300 truncate">
                  {personalData.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-electric-400 hover:bg-white dark:hover:bg-navy-750 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 font-sans">
                      <Check className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="mt-4 flex gap-2">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-electric-500 to-accent-purple text-white shadow-sm hover:opacity-95 transition-opacity"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Send Mail</span>
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex items-center justify-between hover:border-sky-400/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    LinkedIn Network
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Connect professionally
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm flex items-center justify-between hover:border-purple-400/50 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    GitHub Codebase
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Inspect repositories &amp; commits
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-colors" />
            </a>

          </div>

          {/* Right Column: Pre-filled Mail Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-800 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-purple-500" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 text-slate-900 dark:text-white border ${
                        formErrors.name ? 'border-red-500' : 'border-slate-200 dark:border-navy-750'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-[11px] mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 text-slate-900 dark:text-white border ${
                        formErrors.email ? 'border-red-500' : 'border-slate-200 dark:border-navy-750'
                      } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[11px] mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 text-slate-900 dark:text-white border ${
                      formErrors.subject ? 'border-red-500' : 'border-slate-200 dark:border-navy-750'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-[11px] mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your note or question here..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-navy-850 text-slate-900 dark:text-white border ${
                      formErrors.message ? 'border-red-500' : 'border-slate-200 dark:border-navy-750'
                    } focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none`}
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-[11px] mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-electric-500 to-accent-purple hover:from-electric-600 hover:to-purple-600 text-white shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Dispatch via Email Client</span>
                </button>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center pt-2">
                  Transparent dispatch: opens your default email client with your message cleanly formatted and ready to send directly to Anjali.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
