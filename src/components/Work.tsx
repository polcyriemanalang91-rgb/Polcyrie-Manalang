import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, FolderGit2, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface WorkProps {
  projects: Project[];
}

export const Work: React.FC<WorkProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Capstone', 'Full-Stack', 'Frontend', 'UI/UX'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory || (selectedCategory === 'UI/UX' && p.category === 'Academic'));

  return (
    <section id="work" className="py-24 bg-beige/30 relative">
      {/* Decorative background border separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-taupe/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige border border-taupe/60 text-xs font-semibold uppercase tracking-wider text-cocoa-muted mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-coffee" />
            <span>Featured Portfolio Work</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa tracking-tight mb-4">
            Projects & Academic Milestones
          </h2>
          
          <p className="text-base sm:text-lg text-cocoa/80 leading-relaxed font-sans">
            A curated collection of my capstone development, academic coursework, and personal explorations—highlighting problem-solving, clean code, and user empathy.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee ${
                  isActive
                    ? 'bg-coffee text-cream shadow-soft font-semibold'
                    : 'bg-white/80 hover:bg-white text-cocoa border border-taupe/40 hover:border-latte'
                }`}
              >
                {category === 'All' ? 'All Projects' : category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-white rounded-3xl border border-taupe/40 overflow-hidden shadow-soft hover:shadow-soft-xl hover:border-latte transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-beige/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-cream/90 backdrop-blur-md text-cocoa border border-taupe/40 shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* Subtitle Badge if available */}
                {project.subtitle && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="inline-block text-[11px] font-medium text-cream/90 bg-cocoa/70 backdrop-blur-sm px-2.5 py-0.5 rounded-md truncate max-w-full">
                      {project.subtitle}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-bold text-cocoa group-hover:text-coffee transition-colors line-clamp-1 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-cocoa/80 leading-relaxed font-sans line-clamp-3 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-beige/60 text-cocoa border border-taupe/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-beige/40 text-cocoa-muted">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-taupe/30 flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-coffee text-cream hover:bg-coffee-dark transition-all duration-200 shadow-2xs group/btn"
                  >
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <div className="flex items-center gap-1">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-cocoa-muted hover:text-coffee hover:bg-beige/60 transition-colors"
                        title="Live Demo"
                        aria-label={`View live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-cocoa-muted hover:text-coffee hover:bg-beige/60 transition-colors"
                        title="GitHub Repository"
                        aria-label={`View GitHub repository for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Fresh Graduate Note / Easy Customization Callout */}
        <div className="mt-14 p-6 rounded-3xl bg-white/70 border border-taupe/40 max-w-2xl mx-auto text-center flex flex-col items-center shadow-xs">
          <div className="w-9 h-9 rounded-full bg-sage/20 text-sage-dark flex items-center justify-center mb-3">
            <Sparkles className="w-4 h-4" />
          </div>
          <h4 className="font-serif font-bold text-base text-cocoa mb-1">
            Looking for more course projects or technical reports?
          </h4>
          <p className="text-xs sm:text-sm text-cocoa/80 leading-relaxed mb-4">
            All code repositories include comprehensive README documentation, database schemas, and setup instructions.
          </p>
          <a
            href="https://github.com/polcyriemanalang91-rgb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-coffee hover:text-coffee-dark underline underline-offset-4"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Browse Complete GitHub Profile</span>
          </a>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
