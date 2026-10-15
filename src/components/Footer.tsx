import React from 'react';
import { ArrowUp, Heart, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import type { PortfolioData } from '../types/portfolio';

interface FooterProps {
  personal: PortfolioData['personal'];
}

export const Footer: React.FC<FooterProps> = ({ personal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-cream border-t border-taupe/40 pt-16 pb-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-taupe/30">
          
          {/* Brand & Mission Statement */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-block font-serif text-2xl font-bold text-cocoa tracking-tight hover:text-coffee transition-colors">
              {personal.name}
            </a>
            <p className="text-xs sm:text-sm text-cocoa-muted mt-1 max-w-sm">
              Fresh graduate portfolio designed with a warm, minimalist aesthetic. Dedicated to purposeful web design and continuous growth.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs sm:text-sm font-medium text-cocoa/80 hover:text-coffee transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personal.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-beige/60 hover:bg-beige border border-taupe/40 flex items-center justify-center text-cocoa hover:text-coffee transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-beige/60 hover:bg-beige border border-taupe/40 flex items-center justify-center text-cocoa hover:text-coffee transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="w-9 h-9 rounded-full bg-beige/60 hover:bg-beige border border-taupe/40 flex items-center justify-center text-cocoa hover:text-coffee transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-coffee text-cream hover:bg-coffee-dark flex items-center justify-center shadow-xs transition-transform hover:-translate-y-0.5 ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              title="Back to Top"
              aria-label="Back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cocoa-muted text-center sm:text-left">
          <p>© {new Date().getFullYear()} {personal.name}. Built with React, TypeScript & Tailwind CSS.</p>
          <p className="flex items-center justify-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-latte fill-latte/40 inline" />
            <span>and aesthetic light-brown tones.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
