import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles, Send } from 'lucide-react';

interface NavbarProps {
  name: string;
  onOpenPersonalize: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ name, onOpenPersonalize, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Get initials for elegant logo
  const initials = name
    .replace(/[\[\]]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase() || 'P';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-soft border-b border-taupe/30 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee rounded-lg"
          >
            <div className="w-10 h-10 rounded-full bg-beige border border-taupe flex items-center justify-center text-cocoa font-serif font-bold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-latte">
              {initials}
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-cocoa tracking-tight leading-none group-hover:text-coffee transition-colors">
                {name}
              </span>
              <span className="text-xs font-sans font-medium text-latte-dark tracking-wider uppercase mt-1">
                Fresh Graduate Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-beige/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-taupe/40 shadow-sm" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee ${
                    isActive
                      ? 'bg-coffee text-cream shadow-sm font-semibold'
                      : 'text-cocoa hover:text-coffee hover:bg-taupe/20'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Quick Personalize Button */}
            <button
              onClick={onOpenPersonalize}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-cocoa bg-beige/70 hover:bg-beige border border-taupe/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              title="Quickly customize placeholder details"
            >
              <Sparkles className="w-3.5 h-3.5 text-coffee" />
              <span>Personalize</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-cocoa bg-white/80 hover:bg-white border border-taupe hover:border-latte transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
            >
              <FileText className="w-3.5 h-3.5 text-latte" />
              <span>Resume</span>
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-cream bg-coffee hover:bg-coffee-dark transition-all duration-200 shadow-sm hover:shadow hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPersonalize}
              className="p-2 rounded-lg text-cocoa bg-beige/60 border border-taupe/40 focus:outline-none"
              title="Personalize"
              aria-label="Personalize"
            >
              <Sparkles className="w-4 h-4 text-coffee" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cocoa hover:bg-beige/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-taupe/40 shadow-soft-lg px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1 mb-4" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-coffee text-cream font-semibold'
                      : 'text-cocoa hover:bg-beige/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex flex-col gap-2 pt-3 border-t border-taupe/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-cocoa bg-beige border border-taupe"
            >
              <FileText className="w-4 h-4 text-coffee" />
              <span>View & Download Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-cream bg-coffee"
            >
              <Send className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
