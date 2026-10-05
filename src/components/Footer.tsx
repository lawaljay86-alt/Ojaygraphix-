import React from 'react';
import { useContent } from '../context/ContentContext';
import { getTelUrl, getWhatsAppUrl } from '../config/theme';
import { Phone, MessageCircle, Settings, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { content, setIsAdminOpen } = useContent();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'CAC Registration', href: '#cac-registration' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white font-display block mb-3"
            >
              {content.brand.name}
            </a>
            <p className="text-sm text-neutral-300 font-medium mb-3">
              Graphics Design • Branding • Websites • Digital Creative Services • CAC Registration
            </p>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed mb-6">
              Helping businesses, schools, churches, organisations and individuals present themselves with distinction, clarity, and legal recognition.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsAdminOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 transition-colors"
                title="Studio Content Manager"
              >
                <Settings className="w-3.5 h-3.5 text-[#E11D74]" />
                <span>Studio Content Manager</span>
              </button>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-semibold mb-4">
              Quick Links
            </div>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{link.label}</span>
                    <span className="text-neutral-600 group-hover:text-[#E11D74] transition-colors text-xs">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Reach (4 cols) */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-semibold mb-4">
              Direct Contact
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-xs text-neutral-500 block">Primary Line / WhatsApp:</span>
                <a
                  href={getTelUrl(content.brand.primaryPhone)}
                  className="font-bold text-white hover:text-[#E11D74] transition-colors tabular-nums inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E11D74]" />
                  <span>{content.brand.primaryPhone}</span>
                </a>
              </div>

              <div>
                <span className="text-xs text-neutral-500 block">Secondary Line:</span>
                <a
                  href={getTelUrl(content.brand.secondaryPhone)}
                  className="font-bold text-white hover:text-[#E11D74] transition-colors tabular-nums inline-flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E11D74]" />
                  <span>{content.brand.secondaryPhone}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(content.brand.whatsappNumber, content.brand.whatsappDefaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="max-w-xl text-center md:text-left leading-relaxed">
            <span className="text-neutral-400 font-semibold">Disclaimer: </span>
            OjayGraphix is an independent creative and business registration service provider and is not a government agency.
          </p>
          <p className="whitespace-nowrap text-neutral-400">
            © 2026 OjayGraphix. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
