import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { getWhatsAppUrl, getTelUrl } from '../config/theme';
import { Phone, Menu, X, Settings } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { content, setIsAdminOpen, setIsBriefModalOpen, setSelectedBriefService } = useContent();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'CAC Registration', href: '#cac-registration' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleStartProject = () => {
    setSelectedBriefService(null);
    setIsBriefModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-neutral-200/80 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-neutral-100 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark as per Top Bar Contract */}
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-[#0A2540] hover:text-[#06182B] transition-colors font-display"
              aria-label="OjayGraphix Homepage"
            >
              {content.brand.name}
            </a>

            {/* Zone 2: 4–6 text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#0A2540] transition-colors relative py-1 hover:border-b-2 hover:border-[#E11D74]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1–2 primary actions */}
            <div className="flex items-center gap-3">
              {/* Direct call pill for desktop */}
              <a
                href={getTelUrl(content.brand.primaryPhone)}
                className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A2540] bg-[#0A2540]/5 hover:bg-[#0A2540]/10 px-3 py-2 rounded-lg transition-colors"
                title={`Call ${content.brand.primaryPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#E11D74]" />
                <span className="tabular-nums">{content.brand.primaryPhone}</span>
              </a>

              {/* Primary CTA */}
              <button
                onClick={handleStartProject}
                className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#06182B] active:scale-[0.98] rounded-lg transition-all duration-150 shadow-sm whitespace-nowrap"
              >
                Start a Project
              </button>

              {/* Admin Content Toggle button */}
              <button
                onClick={() => setIsAdminOpen(true)}
                className="p-2 text-neutral-500 hover:text-[#0A2540] hover:bg-neutral-100 rounded-lg transition-colors"
                title="Studio Content Manager (Edit website content)"
                aria-label="Open Studio Content Manager"
              >
                <Settings className="w-4 h-4" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-black rounded-lg focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden pt-20 bg-white/98 backdrop-blur-xl border-b border-neutral-200 animate-in fade-in duration-200">
          <div className="px-6 py-6 flex flex-col space-y-4 max-w-sm mx-auto">
            <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-1">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-900 hover:text-[#0A2540] py-2 border-b border-neutral-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-neutral-400 text-sm">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <div className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                Direct Contact
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href={getTelUrl(content.brand.primaryPhone)}
                  className="flex items-center justify-between px-3 py-2.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-800"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E11D74]" />
                    <span>Call Primary</span>
                  </span>
                  <span className="tabular-nums font-semibold text-[#0A2540]">{content.brand.primaryPhone}</span>
                </a>
                <a
                  href={getTelUrl(content.brand.secondaryPhone)}
                  className="flex items-center justify-between px-3 py-2.5 bg-neutral-50 rounded-lg text-sm font-medium text-neutral-800"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E11D74]" />
                    <span>Call Secondary</span>
                  </span>
                  <span className="tabular-nums font-semibold text-[#0A2540]">{content.brand.secondaryPhone}</span>
                </a>
              </div>

              <div className="pt-2 grid grid-cols-2 gap-2">
                <button
                  onClick={handleStartProject}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-[#0A2540] rounded-lg shadow-sm"
                >
                  Start a Project
                </button>
                <a
                  href={getWhatsAppUrl(content.brand.whatsappNumber, content.brand.whatsappDefaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
