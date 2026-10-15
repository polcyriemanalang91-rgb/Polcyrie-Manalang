import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, RotateCcw, Info, User, Mail, GraduationCap, MapPin } from 'lucide-react';
import type { PortfolioData } from '../types/portfolio';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onUpdatePersonal: (updated: Partial<PortfolioData['personal']>) => void;
  onReset: () => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  data,
  onUpdatePersonal,
  onReset,
}) => {
  const [name, setName] = useState(data.personal.name);
  const [headline, setHeadline] = useState(data.personal.roleHeadline);
  const [email, setEmail] = useState(data.personal.email);
  const [location, setLocation] = useState(data.personal.location);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    setName(data.personal.name);
    setHeadline(data.personal.roleHeadline);
    setEmail(data.personal.email);
    setLocation(data.personal.location);
  }, [data]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdatePersonal({
      name: name.trim() || 'Alex Morgan',
      roleHeadline: headline.trim() || 'A Fresh Graduate Ready to Learn, Grow, and Make an Impact.',
      email: email.trim() || 'alex.morgan.grad@example.com',
      location: location.trim() || 'Metro City / Open to Relocation & Remote',
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-cocoa/50 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="personalize-title"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-cream rounded-3xl border border-taupe shadow-soft-xl overflow-hidden z-10 animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-beige/60 border-b border-taupe/40">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-coffee text-cream flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 id="personalize-title" className="font-serif font-bold text-lg text-cocoa leading-tight">
                Personalize Your Details
              </h2>
              <p className="text-[11px] text-cocoa-muted font-sans">
                Preview your portfolio instantly with your actual information
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white border border-taupe/50 flex items-center justify-center text-cocoa hover:text-coffee transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content & Form */}
        <form onSubmit={handleSave} className="p-6 sm:p-7 space-y-4">
          
          <div className="p-3.5 rounded-2xl bg-beige/40 border border-taupe/40 text-xs text-cocoa/85 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-coffee flex-shrink-0 mt-0.5" />
            <p>
              Changes are saved to your browser session. To permanently configure your portfolio, simply edit <code className="bg-cream px-1.5 py-0.5 rounded text-cocoa font-mono font-medium">src/data/portfolioData.ts</code>!
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-latte" />
              <span>Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Pol Christian / Alex Morgan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-taupe/60 text-sm text-cocoa focus:outline-none focus:border-coffee focus:ring-1 focus:ring-coffee"
            />
          </div>

          {/* Role Headline */}
          <div>
            <label className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-latte" />
              <span>Headline / Subtitle</span>
            </label>
            <input
              type="text"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              placeholder="e.g. A Fresh Graduate Ready to Learn, Grow, and Make an Impact."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-taupe/60 text-sm text-cocoa focus:outline-none focus:border-coffee focus:ring-1 focus:ring-coffee"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-latte" />
              <span>Contact Email</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. yourname@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-taupe/60 text-sm text-cocoa focus:outline-none focus:border-coffee focus:ring-1 focus:ring-coffee"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-latte" />
              <span>Location / Remote Preference</span>
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Manila, Philippines / Remote Worldwide"
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-taupe/60 text-sm text-cocoa focus:outline-none focus:border-coffee focus:ring-1 focus:ring-coffee"
            />
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-taupe/30 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-cocoa-muted hover:text-cocoa transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-coffee hover:bg-coffee-dark text-cream shadow-sm flex items-center gap-2 transition-all focus:outline-none"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-cream" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Apply Changes</span>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
