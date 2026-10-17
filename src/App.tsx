import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import type { PortfolioData } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  // Load portfolio data
  const [data] = useState<PortfolioData>(() => {
    try {
      const saved = localStorage.getItem('fresh_grad_portfolio_data');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...initialPortfolioData,
          personal: {
            ...initialPortfolioData.personal,
            ...parsed.personal,
          },
        };
      }
    } catch {
      // Fallback to default
    }
    return initialPortfolioData;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Update document title dynamically
  useEffect(() => {
    document.title = `${data.personal.name} | Fresh Graduate Portfolio`;
  }, [data.personal.name]);

  return (
    <div className="min-h-screen bg-cream text-cocoa selection:bg-taupe/30 selection:text-cocoa flex flex-col font-sans">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        name={data.personal.name}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero / Home Section */}
        <Hero
          personal={data.personal}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Work / Projects Section */}
        <Work
          projects={data.projects}
        />

        {/* About / Academic Background Section */}
        <About
          data={data}
        />

        {/* Contact Section */}
        <Contact
          personal={data.personal}
        />
      </main>

      {/* Footer */}
      <Footer
        personal={data.personal}
      />

      {/* Printable Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        data={data}
      />

    </div>
  );
};

export default App;
