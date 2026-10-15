import React, { useEffect } from 'react';
import { X, Printer, Mail, MapPin, Globe, GraduationCap, Award, Code2, Briefcase } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-cocoa/50 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[92vh] bg-cream rounded-3xl border border-taupe shadow-soft-xl overflow-hidden flex flex-col z-10 animate-scaleUp">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-beige/60 border-b border-taupe/40 print:hidden">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-base text-cocoa">
              Curriculum Vitae Preview
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-coffee text-cream font-medium">
              Printable Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-coffee text-cream hover:bg-coffee-dark shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-taupe/50 flex items-center justify-center text-cocoa hover:text-coffee transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="overflow-y-auto p-8 sm:p-12 space-y-8 bg-white print:p-0 print:space-y-6 text-cocoa">
          
          {/* Header */}
          <div className="border-b-2 border-taupe/40 pb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h1 id="resume-title" className="font-serif text-3xl font-bold text-cocoa">
                {data.personal.name}
              </h1>
              <p className="text-sm font-semibold text-coffee mt-1">
                Entry-Level Software Developer & Web Specialist
              </p>
              <p className="text-xs text-cocoa-muted mt-1 max-w-lg">
                {data.personal.careerGoals}
              </p>
            </div>

            <div className="text-xs text-cocoa/80 space-y-1 sm:text-right">
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Mail className="w-3.5 h-3.5 text-latte" />
                <span>{data.personal.email}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <MapPin className="w-3.5 h-3.5 text-latte" />
                <span>{data.personal.location}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:justify-end">
                <Globe className="w-3.5 h-3.5 text-latte" />
                <span>Available immediately</span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="font-serif text-lg font-bold text-coffee uppercase tracking-wider border-b border-taupe/40 pb-1 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-coffee" />
              <span>Education</span>
            </h2>

            <div className="space-y-4">
              {data.education.map((edu, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-cocoa">{edu.degree}</span>
                    <span className="text-xs text-cocoa-muted font-medium">{edu.period}</span>
                  </div>
                  <div className="text-xs font-semibold text-latte-dark">{edu.institution}</div>
                  {edu.gpaOrHonors && (
                    <div className="text-xs text-cocoa/90 font-medium mt-0.5">{edu.gpaOrHonors}</div>
                  )}
                  {edu.relevantCoursework && (
                    <div className="text-xs text-cocoa-muted mt-1.5">
                      <span className="font-semibold text-cocoa">Coursework: </span>
                      {edu.relevantCoursework.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Featured Capstone & Projects */}
          <div>
            <h2 className="font-serif text-lg font-bold text-coffee uppercase tracking-wider border-b border-taupe/40 pb-1 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-coffee" />
              <span>Key Projects & Capstone</span>
            </h2>

            <div className="space-y-4">
              {data.projects.slice(0, 3).map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-sm text-cocoa">{proj.title}</span>
                    <span className="text-xs text-cocoa-muted font-medium">{proj.category}</span>
                  </div>
                  <p className="text-xs text-cocoa/85 mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="text-[11px] text-latte-dark mt-1 font-mono">
                    Tech Stack: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="font-serif text-lg font-bold text-coffee uppercase tracking-wider border-b border-taupe/40 pb-1 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-coffee" />
              <span>Technical Skills</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {data.skillCategories.map((cat) => (
                <div key={cat.name} className="p-2.5 rounded-lg bg-cream/60 border border-taupe/30">
                  <span className="font-bold text-cocoa block mb-1">{cat.name}:</span>
                  <span className="text-cocoa/85">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="font-serif text-lg font-bold text-coffee uppercase tracking-wider border-b border-taupe/40 pb-1 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-coffee" />
              <span>Certifications & Honors</span>
            </h2>

            <div className="space-y-2 text-xs">
              {data.certifications.map((c, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span className="font-medium text-cocoa">{c.title} — <span className="text-cocoa-muted">{c.issuer}</span></span>
                  <span className="text-cocoa-muted">{c.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
