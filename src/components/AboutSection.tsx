import React from 'react';
import { useContent } from '../context/ContentContext';
import { Check, ShieldCheck, Sparkles, Building2, Phone } from 'lucide-react';
import { getTelUrl, getWhatsAppUrl } from '../config/theme';

export const AboutSection: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: Brand Story & Values (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Studio Profile
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight font-display mb-6">
              {content.about.title}
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 font-normal">
              {content.about.description}
            </p>

            <div className="space-y-3 mb-8">
              {content.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0A2540]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#0A2540]" />
                  </div>
                  <span className="text-sm text-neutral-600">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm font-semibold text-[#0A2540]">
              <a
                href={getTelUrl(content.brand.primaryPhone)}
                className="hover:text-[#E11D74] transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E11D74]" />
                <span className="tabular-nums">{content.brand.primaryPhone}</span>
              </a>
              <span className="text-neutral-300">/</span>
              <a
                href={getTelUrl(content.brand.secondaryPhone)}
                className="hover:text-[#E11D74] transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E11D74]" />
                <span className="tabular-nums">{content.brand.secondaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-neutral-900 text-white border border-neutral-800 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0A2540] rounded-full blur-2xl opacity-40 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="text-xs uppercase font-mono tracking-widest text-[#E11D74] mb-2">
                  OUR COMMITMENT
                </div>
                <h3 className="text-2xl font-bold font-display mb-4 text-white">
                  Clarity Over Clutter.
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                  In a market filled with generic templates and confusing noise, OjayGraphix designs intentional visual communication that commands respect and drives genuine business growth.
                </p>

                <div className="pt-6 border-t border-neutral-800 grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-neutral-400">Headquarters</div>
                    <div className="text-white font-medium mt-0.5">Nigeria (National Coverage)</div>
                  </div>
                  <div>
                    <div className="text-neutral-400">Direct Contact</div>
                    <div className="text-white font-medium mt-0.5">WhatsApp & Direct Calls</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section 14: Client Types ("Who We Work With") */}
        <div className="pt-12 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                Collaboration Scope
              </div>
              <h3 className="text-2xl font-bold text-[#0A2540] font-display">
                Who We Work With
              </h3>
            </div>
            <p className="text-sm text-neutral-600 max-w-md">
              Tailoring custom creative design, branding and documentation for diverse entities.
            </p>
          </div>

          {/* Clean typography layout rather than oversized cards as requested */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {content.clientTypes.map((client, index) => (
              <div
                key={index}
                className="px-4 py-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs sm:text-sm font-medium text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100/80 transition-colors flex items-center justify-between"
              >
                <span>{client}</span>
                <span className="text-neutral-300 text-xs">/</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
