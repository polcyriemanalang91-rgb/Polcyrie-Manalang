import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Lightbulb, Layers, Calendar } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import type { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on ESC key and trap scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-cocoa/50 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-cream rounded-3xl border border-taupe shadow-soft-xl overflow-hidden flex flex-col z-10 animate-scaleUp">
        
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-beige/60 border-b border-taupe/40">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-coffee text-cream">
              {project.category}
            </span>
            {project.subtitle && (
              <span className="text-xs font-medium text-cocoa-muted flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-latte" />
                {project.subtitle}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-taupe/50 flex items-center justify-center text-cocoa hover:text-coffee transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          
          {/* Project Image */}
          <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-taupe/40 shadow-inner bg-beige">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Title & Overview */}
          <div>
            <h2 id="modal-project-title" className="font-serif text-2xl sm:text-3xl font-bold text-cocoa mb-3">
              {project.title}
            </h2>
            <p className="text-base text-cocoa/90 leading-relaxed font-sans">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cocoa-muted mb-3">
              <Layers className="w-4 h-4 text-latte" />
              <span>Technologies & Tools</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-beige border border-taupe/60 text-cocoa shadow-2xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="bg-beige/40 rounded-2xl p-5 border border-taupe/30">
              <h3 className="font-serif font-bold text-base text-cocoa mb-3">
                Key Features & Capabilities
              </h3>
              <ul className="space-y-2.5">
                {project.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-cocoa/85">
                    <CheckCircle2 className="w-4 h-4 text-sage-dark flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fresh Graduate Growth: What I Learned */}
          {project.learningOutcomes && project.learningOutcomes.length > 0 && (
            <div className="bg-white/80 rounded-2xl p-5 border border-taupe/40 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-latte/20 flex items-center justify-center text-coffee">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h3 className="font-serif font-bold text-base text-cocoa">
                  Key Learnings & Growth as a Fresh Graduate
                </h3>
              </div>
              <ul className="space-y-2">
                {project.learningOutcomes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-cocoa/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-latte flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 bg-beige/40 border-t border-taupe/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-coffee text-cream hover:bg-coffee-dark shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white text-cocoa border border-taupe hover:border-latte shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-cocoa-muted hover:text-cocoa transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
