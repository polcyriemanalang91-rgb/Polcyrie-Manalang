import React, { useState } from 'react';
import { 
  Send, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Clock, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/SocialIcons';
import confetti from 'canvas-confetti';
import type { PortfolioData } from '../types/portfolio';

interface ContactProps {
  personal: PortfolioData['personal'];
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ personal }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Copy email to clipboard helper
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  // Form Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please include a brief message.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters so I can understand your inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate sending with safe timeout and trigger email client / confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Trigger warm confetti
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#80634D', '#B89B7D', '#A9B5A0', '#FAF7F2']
        });
      } catch {
        // Safe fallback if confetti isn't supported
      }

      // Prepare mailto link as direct transparent delivery fallback
      const mailtoUrl = `mailto:${encodeURIComponent(personal.email)}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi ${personal.name},\n\nFrom: ${formData.fullName} (${formData.email})\n\n${formData.message}`
      )}`;

      // Open email client safely
      window.open(mailtoUrl, '_blank');
    }, 900);
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', subject: '', message: '' });
    setSubmitStatus('idle');
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-beige/30 relative">
      {/* Decorative separator line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-taupe/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-beige border border-taupe/60 text-xs font-semibold uppercase tracking-wider text-cocoa-muted mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-coffee" />
            <span>Open for Opportunities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cocoa tracking-tight mb-4">
            Let's Connect!
          </h2>
          
          <p className="text-base sm:text-lg text-cocoa/80 leading-relaxed font-sans">
            Whether you are a recruiter with an entry-level opening, an engineering team looking for a motivated junior developer, or a fellow learner who wants to talk code—my inbox is always open.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Direct Info & Social Profiles */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Contact Card */}
            <div className="bg-white rounded-3xl p-8 border border-taupe/40 shadow-soft">
              <h3 className="font-serif text-xl font-bold text-cocoa mb-6">
                Direct Contact Information
              </h3>

              <div className="space-y-5">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-cream/70 border border-taupe/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-latte-dark uppercase tracking-wider">
                      Email Address
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-coffee hover:text-coffee-dark transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3 h-3 text-sage-dark" />
                          <span className="text-sage-dark font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={`mailto:${personal.email}`}
                    className="font-medium text-cocoa hover:text-coffee text-sm sm:text-base break-all transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>

                {/* Location & Status */}
                <div className="p-4 rounded-2xl bg-cream/70 border border-taupe/40 space-y-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-coffee flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-cocoa block">Based In</span>
                      <span className="text-xs text-cocoa/80">{personal.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-taupe/20">
                    <Clock className="w-4 h-4 text-sage-dark flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-semibold text-cocoa block">Response Time</span>
                      <span className="text-xs text-cocoa/80">Typically replies within 24 hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Links */}
              <div className="mt-8 pt-6 border-t border-taupe/30">
                <span className="text-xs font-semibold text-cocoa-muted uppercase tracking-wider block mb-3">
                  Professional Profiles & Code
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-beige/50 hover:bg-beige border border-taupe/40 text-xs font-medium text-cocoa transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-coffee" />
                    <span>LinkedIn Profile</span>
                  </a>

                  <a
                    href={personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-xl bg-beige/50 hover:bg-beige border border-taupe/40 text-xs font-medium text-cocoa transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-coffee" />
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Recruiter Friendly Note */}
            <div className="bg-sage/15 rounded-3xl p-6 border border-sage/40">
              <div className="flex items-center gap-2 text-xs font-bold text-sage-dark uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>For Recruiters & Hiring Managers</span>
              </div>
              <p className="text-xs sm:text-sm text-cocoa/85 leading-relaxed">
                I am actively interviewing for entry-level Software Engineer, Associate Frontend Developer, and Web Developer positions. Available immediately for full-time employment or internships.
              </p>
            </div>

          </div>

          {/* Right Column (7 cols): Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-taupe/40 shadow-soft">
              
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-cocoa mb-1">
                  Send Me a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-cocoa-muted">
                  Fill out the form below to initiate an inquiry. A pre-filled draft will also be ready for your mail client.
                </p>
              </div>

              {/* Success Notification Alert */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-sage/20 border border-sage/50 text-cocoa flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-sage-dark flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-bold text-cocoa">Thank you for reaching out!</p>
                    <p className="text-xs sm:text-sm text-cocoa/85 mt-1 leading-relaxed">
                      Your message has been formatted and opened in your email client. I will review your note and respond as soon as possible.
                    </p>
                    <button
                      onClick={handleReset}
                      className="mt-2 text-xs font-semibold text-coffee underline underline-offset-2"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Full Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-2">
                      Full Name <span className="text-coffee">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-2xl bg-cream/60 border text-sm text-cocoa placeholder:text-cocoa-muted/60 transition-all duration-200 focus:outline-none focus:bg-white ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                          : 'border-taupe/50 focus:border-coffee focus:ring-2 focus:ring-coffee/20'
                      }`}
                      aria-invalid={errors.fullName ? 'true' : 'false'}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-2">
                      Email Address <span className="text-coffee">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@company.com"
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 rounded-2xl bg-cream/60 border text-sm text-cocoa placeholder:text-cocoa-muted/60 transition-all duration-200 focus:outline-none focus:bg-white ${
                        errors.email
                          ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                          : 'border-taupe/50 focus:border-coffee focus:ring-2 focus:ring-coffee/20'
                      }`}
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-2">
                    Subject <span className="text-coffee">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Entry-Level Developer Opportunity / Interview Invitation"
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-2xl bg-cream/60 border text-sm text-cocoa placeholder:text-cocoa-muted/60 transition-all duration-200 focus:outline-none focus:bg-white ${
                      errors.subject
                        ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                        : 'border-taupe/50 focus:border-coffee focus:ring-2 focus:ring-coffee/20'
                    }`}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-cocoa uppercase tracking-wider mb-2">
                    Message <span className="text-coffee">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your role, inquiry, or project..."
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 rounded-2xl bg-cream/60 border text-sm text-cocoa placeholder:text-cocoa-muted/60 transition-all duration-200 focus:outline-none focus:bg-white resize-y ${
                      errors.message
                        ? 'border-red-400 focus:ring-2 focus:ring-red-300'
                        : 'border-taupe/50 focus:border-coffee focus:ring-2 focus:ring-coffee/20'
                    }`}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-coffee hover:bg-coffee-dark text-cream font-medium text-sm transition-all duration-300 shadow-soft hover:shadow-soft-lg flex items-center justify-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-coffee disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-cream/40 border-t-cream rounded-full animate-spin" />
                        <span>Preparing Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cream/90" />
                      </>
                    )}
                  </button>
                  <p className="mt-2 text-center text-[11px] text-cocoa-muted">
                    Respects your privacy. No spam or unsolicited promotions.
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
