import { ArrowDown, Mail, Sparkles, GraduationCap, Compass, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import type { PortfolioData } from '../types/portfolio';

interface HeroProps {
  personal: PortfolioData['personal'];
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ personal, onOpenResume }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle organic decorative background blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-beige/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-sage/15 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-latte/15 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Subtle decorative botanical SVG accent in background */}
      <div className="absolute top-20 right-8 lg:right-24 opacity-30 pointer-events-none -z-10">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10 C60 30 75 40 90 50 C75 60 60 70 50 90 C40 70 25 60 10 50 C25 40 40 30 50 10 Z" fill="#D6C3AE" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, Intro & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Welcoming Pill / Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-beige border border-taupe/60 shadow-sm text-xs font-medium text-cocoa mb-6 transition-transform hover:scale-102">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage-dark"></span>
              </span>
              <span>{personal.availability}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-cocoa tracking-tight leading-[1.15] mb-4">
              Hello, I'm{' '}
              <span className="relative inline-block text-coffee">
                {personal.name}
                <svg
                  className="absolute left-0 -bottom-1.5 w-full h-2.5 text-latte/40"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                >
                  <path d="M3 15 Q 50 5 97 14" />
                </svg>
              </span>
              <span className="text-latte">.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-cocoa-light font-medium mb-6 max-w-2xl leading-relaxed">
              "{personal.roleHeadline}"
            </p>

            {/* Introduction highlighting enthusiasm, adaptability, creativity & willingness to learn */}
            <p className="text-base sm:text-lg text-cocoa/80 leading-relaxed max-w-xl mb-8 font-sans">
              {personal.bioIntro}
            </p>

            {/* Prominent Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={() => scrollTo('work')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-coffee hover:bg-coffee-dark text-cream font-medium text-sm transition-all duration-300 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-cream/90" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-beige hover:bg-beige-dark text-cocoa font-medium text-sm border border-taupe hover:border-latte transition-all duration-300 shadow-sm hover:shadow hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-coffee" />
              </button>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/70 hover:bg-white text-cocoa-muted hover:text-cocoa font-medium text-sm border border-taupe/40 transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
                title="Preview Curriculum Vitae"
              >
                <Download className="w-4 h-4 text-latte" />
                <span>Resume CV</span>
              </button>
            </div>

            {/* Quick Links & Socials */}
            <div className="flex items-center gap-5 pt-6 border-t border-taupe/30 w-full justify-center lg:justify-start">
              <span className="text-xs uppercase tracking-wider text-cocoa-muted font-medium">Find me on:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-beige/60 hover:bg-beige border border-taupe/40 flex items-center justify-center text-cocoa hover:text-coffee transition-colors shadow-2xs"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-beige/60 hover:bg-beige border border-taupe/40 flex items-center justify-center text-cocoa hover:text-coffee transition-colors shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="w-9 h-9 rounded-full bg-beige/60 hover:bg-beige border border-taupe/40 flex items-center justify-center text-cocoa hover:text-coffee transition-colors shadow-2xs"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Aesthetic Profile Frame & Organic Badges */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square max-w-full">
              
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-taupe/60 animate-spin-slow pointer-events-none" style={{ animationDuration: '60s' }} />
              
              {/* Secondary Soft Background Glow */}
              <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-beige via-cream to-beige-light shadow-soft-xl" />

              {/* Main Circular Profile Frame */}
              <div className="absolute inset-5 rounded-full overflow-hidden border-4 border-white shadow-soft-lg bg-beige/80 group">
                {/* High quality portrait placeholder with fallback botanical styling */}
                <img
                  src={personal.avatarImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"}
                  alt={`Portrait of ${personal.name}`}
                  className="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Fallback to placeholder if custom image fails to load
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                  }}
                />

                {/* Gentle warm tint overlay */}
                <div className="absolute inset-0 bg-coffee/5 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Floating Badge 1: Academic / Fresh Graduate */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-taupe/60 shadow-soft flex items-center gap-2.5 transition-transform hover:-translate-y-1">
                <div className="w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center text-sage-dark">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-cocoa leading-tight">Class of 2026</div>
                  <div className="text-[10px] text-cocoa-muted"> Graduate</div>
                </div>
              </div>

              {/* Floating Badge 2: Ready to Learn & Adapt */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-2xl border border-taupe/60 shadow-soft flex items-center gap-2.5 transition-transform hover:translate-y-1">
                <div className="w-8 h-8 rounded-full bg-latte/20 flex items-center justify-center text-coffee">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-cocoa leading-tight">Growth Mindset</div>
                  <div className="text-[10px] text-latte-dark">Eager to contribute & learn</div>
                </div>
              </div>

              {/* Small Botanical Leaf Icon Decoration */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 hidden sm:flex w-10 h-10 rounded-full bg-beige border border-taupe items-center justify-center text-coffee/80 shadow-2xs">
                <Compass className="w-5 h-5 text-latte" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
