import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Target, 
  CheckCircle, 
  Users, 
  Code2, 
  Wrench, 
  Palette, 
  Database, 
  Layout, 
  ExternalLink,
  HeartHandshake
} from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('All');

  // Map icon names to Lucide icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Wrench': return <Wrench className="w-4 h-4" />;
      case 'Palette': return <Palette className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section id="about" className="py-24 bg-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige border border-taupe/60 text-xs font-semibold uppercase tracking-wider text-cocoa-muted mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-coffee" />
            <span>Academic Background & Growth</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa tracking-tight mb-4">
            About My Journey & Capabilities
          </h2>
          
          <p className="text-base sm:text-lg text-cocoa/80 leading-relaxed font-sans">
            A transparent overview of my academic foundation, continuous skill-building, and dedication to growing into an impactful software engineer.
          </p>
        </div>

        {/* Bio & Personal Career Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Friendly Introduction Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-taupe/40 shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-latte-dark mb-3">
                <BookOpen className="w-4 h-4 text-coffee" />
                <span>Personal Story & Academic Life</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-cocoa mb-4">
                Curious by Nature, Driven by Problem-Solving
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-cocoa/85 leading-relaxed font-sans">
                {data.personal.fullBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Core Values Chips */}
            <div className="mt-6 pt-6 border-t border-taupe/30 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-beige text-cocoa border border-taupe/40">
                <CheckCircle className="w-3.5 h-3.5 text-sage-dark" />
                Continuous Learner
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-beige text-cocoa border border-taupe/40">
                <CheckCircle className="w-3.5 h-3.5 text-sage-dark" />
                Empathetic Teammate
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-beige text-cocoa border border-taupe/40">
                <CheckCircle className="w-3.5 h-3.5 text-sage-dark" />
                Detail Oriented
              </span>
            </div>
          </div>

          {/* Personal Career Statement Card */}
          <div className="lg:col-span-5 bg-beige/60 rounded-3xl p-8 border border-taupe/50 shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-white border border-taupe/60 flex items-center justify-center text-coffee mb-4 shadow-2xs">
                <Target className="w-5 h-5 text-coffee" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-cocoa mb-3">
                Career Goals & Vision
              </h3>
              <p className="text-sm sm:text-base text-cocoa/85 leading-relaxed font-sans italic border-l-2 border-latte pl-4 mb-6">
                "{data.personal.careerGoals}"
              </p>
            </div>

            {/* What I Offer Entry Level Role */}
            <div className="space-y-2.5 bg-white/70 p-4 rounded-2xl border border-taupe/30 text-xs sm:text-sm text-cocoa/90">
              <div className="font-semibold text-cocoa text-xs uppercase tracking-wider mb-1">
                What I Bring to Your Team:
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-dark" />
                <span>Receptiveness to mentorship and code reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-dark" />
                <span>Strong foundational computer science concepts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-dark" />
                <span>Reliability, grit, and enthusiasm for building</span>
              </div>
            </div>
          </div>

        </div>

        {/* Two-Column Deep Dive: Education & Experience VS Skills & Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Education, Certifications & Activities */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Education Subsection */}
            <div className="bg-white rounded-3xl p-8 border border-taupe/40 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-beige border border-taupe/50 flex items-center justify-center text-coffee">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-cocoa">Education</h3>
                  <p className="text-xs text-cocoa-muted font-sans">Formal degree & academic distinctions</p>
                </div>
              </div>

              <div className="space-y-6">
                {data.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 pb-6 border-l-2 border-taupe/60 last:border-l-transparent last:pb-0"
                  >
                    {/* Timeline dot */}
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-coffee shadow-xs" />
                    
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-serif font-bold text-lg text-cocoa">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-beige text-cocoa border border-taupe/40">
                        {edu.period}
                      </span>
                    </div>

                    <div className="text-sm font-medium text-coffee mb-2">
                      {edu.institution}
                    </div>

                    {edu.gpaOrHonors && (
                      <div className="inline-block px-3 py-1 rounded-lg bg-sage/15 border border-sage/40 text-xs font-semibold text-cocoa mb-3">
                        {edu.gpaOrHonors}
                      </div>
                    )}

                    {edu.description && (
                      <p className="text-xs sm:text-sm text-cocoa/80 leading-relaxed mb-3">
                        {edu.description}
                      </p>
                    )}

                    {edu.relevantCoursework && (
                      <div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-cocoa-muted block mb-2">
                          Relevant Coursework:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.relevantCoursework.map((course, cIdx) => (
                            <span
                              key={cIdx}
                              className="px-2.5 py-0.5 rounded-md text-xs bg-beige/50 text-cocoa border border-taupe/30"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Specialized Training */}
            <div className="bg-white rounded-3xl p-8 border border-taupe/40 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-beige border border-taupe/50 flex items-center justify-center text-coffee">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-cocoa">Certifications & Training</h3>
                  <p className="text-xs text-cocoa-muted font-sans">Verified professional learning milestones</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-cream/70 border border-taupe/40 hover:border-latte transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] text-latte-dark font-medium mb-1.5">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-cocoa mb-2 leading-snug">
                        {cert.title}
                      </h4>
                    </div>

                    <div className="pt-2 flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-beige text-cocoa-muted">
                        {cert.badge}
                      </span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-medium text-coffee hover:text-coffee-dark flex items-center gap-1"
                        >
                          <span>Verify</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Activities & Leadership */}
            <div className="bg-white rounded-3xl p-8 border border-taupe/40 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-beige border border-taupe/50 flex items-center justify-center text-coffee">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-cocoa">Campus Leadership & Activities</h3>
                  <p className="text-xs text-cocoa-muted font-sans">Teamwork, student initiatives, and peer mentorship</p>
                </div>
              </div>

              <div className="space-y-4">
                {data.activities.map((act, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-cream/60 border border-taupe/30">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <h4 className="font-serif font-bold text-sm sm:text-base text-cocoa">
                        {act.role}
                      </h4>
                      <span className="text-xs text-cocoa-muted font-medium">{act.period}</span>
                    </div>
                    <div className="text-xs font-semibold text-latte-dark mb-2">
                      {act.organization}
                    </div>
                    <p className="text-xs sm:text-sm text-cocoa/80 leading-relaxed mb-2">
                      {act.description}
                    </p>
                    {act.highlight && (
                      <div className="inline-block text-[11px] font-medium text-coffee bg-beige/80 px-2.5 py-1 rounded-md border border-taupe/30">
                        ⭐ {act.highlight}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Organized Skills Subsection with Clean Badges */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            <div className="bg-white rounded-3xl p-8 border border-taupe/40 shadow-soft">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-cocoa">Skills & Competencies</h3>
                  <p className="text-xs text-cocoa-muted font-sans">Categorized by domain & proficiency</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-beige flex items-center justify-center text-coffee">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              {/* Skill filter pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                <button
                  onClick={() => setActiveSkillCategory('All')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                    activeSkillCategory === 'All'
                      ? 'bg-coffee text-cream'
                      : 'bg-beige/50 text-cocoa hover:bg-beige'
                  }`}
                >
                  All
                </button>
                {data.skillCategories.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => setActiveSkillCategory(c.name)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                      activeSkillCategory === c.name
                        ? 'bg-coffee text-cream'
                        : 'bg-beige/50 text-cocoa hover:bg-beige'
                    }`}
                  >
                    {c.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Skills Category List */}
              <div className="space-y-6">
                {(activeSkillCategory === 'All'
                  ? data.skillCategories
                  : data.skillCategories.filter((c) => c.name === activeSkillCategory)
                ).map((cat) => (
                  <div key={cat.name} className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cocoa-light">
                      <span className="text-coffee">{getCategoryIcon(cat.iconName)}</span>
                      <span>{cat.name}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`group relative px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
                            skill.isTop
                              ? 'bg-beige/90 text-cocoa border border-latte/60 font-semibold shadow-2xs'
                              : 'bg-cream text-cocoa/85 border border-taupe/40 hover:border-latte'
                          }`}
                        >
                          {skill.isTop && (
                            <span className="w-1.5 h-1.5 rounded-full bg-coffee flex-shrink-0" title="Key Strength" />
                          )}
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] text-cocoa-muted font-normal">
                              ({skill.level})
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-8 pt-6 border-t border-taupe/30 flex items-center justify-between text-[11px] text-cocoa-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-coffee" />
                  Key Academic Strength
                </span>
                <span>Continuously Expanding</span>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-6 rounded-3xl bg-beige/60 border border-taupe/50 text-center">
              <h4 className="font-serif font-bold text-base text-cocoa mb-1">
                Have a specific role or stack in mind?
              </h4>
              <p className="text-xs text-cocoa/80 mb-4">
                I am adaptable and excited to learn your company's proprietary workflows and tech stack.
              </p>
              <a
                href="#contact"
                className="inline-block px-5 py-2 rounded-full text-xs font-semibold bg-coffee text-cream hover:bg-coffee-dark shadow-xs transition-colors"
              >
                Inquire About Availability
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
