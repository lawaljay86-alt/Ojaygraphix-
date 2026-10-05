import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { getWhatsAppUrl, getTelUrl } from '../config/theme';
import { ArrowUpRight, MessageCircle, Phone, CheckCircle2, Sparkles, Layers, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const { content, setIsBriefModalOpen, setSelectedBriefService, setActivePortfolioModal } = useContent();
  const [activeTab, setActiveTab] = useState<'branding' | 'flyer' | 'website' | 'cac'>('branding');

  const handleStartProject = (serviceName?: string) => {
    setSelectedBriefService(serviceName || null);
    setIsBriefModalOpen(true);
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-white">
      {/* Background Subtle Grid Accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#0A2540 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small uppercase label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2 h-2 rounded-full bg-[#E11D74]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-neutral-500 uppercase">
                {content.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A2540] tracking-tight font-display leading-[1.08] mb-6 [text-wrap:balance]">
              {content.hero.headline}
            </h1>

            {/* Supporting Line */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed mb-8 font-normal">
              {content.hero.subheadline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => handleStartProject()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#0A2540] hover:bg-[#06182B] active:scale-[0.98] rounded-lg transition-all duration-150 shadow-md hover:shadow-lg"
              >
                <span>{content.hero.primaryCtaText}</span>
                <ArrowUpRight className="w-4 h-4 text-[#E11D74]" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0A2540] bg-neutral-100 hover:bg-neutral-200/80 active:scale-[0.98] rounded-lg transition-colors"
              >
                <span>{content.hero.secondaryCtaText}</span>
              </a>

              <a
                href={getWhatsAppUrl(content.brand.whatsappNumber, content.brand.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm sm:text-base font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/80 rounded-lg transition-colors"
                title="Instant Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Prominently Displayed Phone Numbers as requested */}
            <div className="pt-6 border-t border-neutral-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
              <span className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                Direct Line:
              </span>
              <a
                href={getTelUrl(content.brand.primaryPhone)}
                className="inline-flex items-center gap-1.5 font-bold text-[#0A2540] hover:text-[#E11D74] transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#E11D74]" />
                <span>{content.brand.primaryPhone}</span>
              </a>
              <span className="text-neutral-300 hidden sm:inline">•</span>
              <a
                href={getTelUrl(content.brand.secondaryPhone)}
                className="inline-flex items-center gap-1.5 font-bold text-[#0A2540] hover:text-[#E11D74] transition-colors tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-[#E11D74]" />
                <span>{content.brand.secondaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Portfolio Visual Showcase (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-neutral-900 text-white p-6 sm:p-7 shadow-2xl border border-neutral-800 overflow-hidden">
              
              {/* Subtle accent light inside mockup */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#0A2540] rounded-full blur-3xl opacity-60 pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-[#E11D74] rounded-full blur-3xl opacity-20 pointer-events-none" />

              {/* Showcase Top Bar */}
              <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-400">STUDIO SHOWCASE</span>
                </div>
                <span className="text-xs text-[#E11D74] font-medium tracking-wide">OJAYGRAPHIX</span>
              </div>

              {/* Interactive Showcase Preview Selector Tabs */}
              <div className="relative z-10 grid grid-cols-4 gap-1 p-1 bg-neutral-800/80 rounded-lg mb-5 text-xs">
                <button
                  type="button"
                  onClick={() => setActiveTab('branding')}
                  className={`py-1.5 px-2 rounded-md font-medium transition-all ${
                    activeTab === 'branding'
                      ? 'bg-neutral-700 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Branding
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('flyer')}
                  className={`py-1.5 px-2 rounded-md font-medium transition-all ${
                    activeTab === 'flyer'
                      ? 'bg-neutral-700 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Flyers
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('website')}
                  className={`py-1.5 px-2 rounded-md font-medium transition-all ${
                    activeTab === 'website'
                      ? 'bg-neutral-700 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  Websites
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('cac')}
                  className={`py-1.5 px-2 rounded-md font-medium transition-all ${
                    activeTab === 'cac'
                      ? 'bg-neutral-700 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  CAC
                </button>
              </div>

              {/* Tab 1: Branding Mockup */}
              {activeTab === 'branding' && (
                <div className="relative z-10 space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
                      <span>Brand Identity Suite</span>
                      <span className="text-[#E11D74] font-medium">Design Mockup</span>
                    </div>
                    {/* Simulated stationery & typography layout */}
                    <div className="h-36 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-base font-bold text-white tracking-wider font-display">AURA LUXE</div>
                          <div className="text-[10px] text-neutral-400">Brand Manual & Visual System</div>
                        </div>
                        <div className="w-7 h-7 rounded-md bg-[#0A2540] border border-blue-500/30 flex items-center justify-center text-xs font-bold text-white">
                          AL
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-1.5 w-3/4 bg-neutral-700 rounded-full" />
                        <div className="h-1.5 w-1/2 bg-neutral-800 rounded-full" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-neutral-800/80">
                        <span>Palette: Deep Blue / Pure Ivory / Blush</span>
                        <span className="text-[#E11D74]">Stationery Ready</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                    <span>Clean identity systems that elevate business value.</span>
                    <button
                      onClick={() => handleStartProject('Branding')}
                      className="text-[#E11D74] hover:underline font-medium inline-flex items-center gap-1"
                    >
                      Request Branding →
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 2: Flyer & Poster Mockup */}
              {activeTab === 'flyer' && (
                <div className="relative z-10 space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
                      <span>Commercial Event Poster</span>
                      <span className="text-[#E11D74] font-medium">Print & Digital</span>
                    </div>
                    <div className="h-36 rounded-lg bg-gradient-to-br from-[#0A2540] to-neutral-950 border border-blue-900/40 p-4 flex flex-col justify-between relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="text-[10px] font-semibold tracking-widest text-[#E11D74] uppercase">ANNUAL SUMMIT 2026</div>
                        <div className="text-lg font-extrabold text-white font-display mt-0.5">LEADERSHIP & INNOVATION</div>
                      </div>
                      <div className="relative z-10 flex items-end justify-between">
                        <div className="text-[11px] text-neutral-300">
                          <div>High-res 300DPI Print + IG Reel Size</div>
                          <div className="text-neutral-400 text-[10px]">Typography Hierarchy & Balanced Space</div>
                        </div>
                        <div className="px-2 py-1 bg-white text-[#0A2540] text-[10px] font-bold rounded">
                          CONFIRMED
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                    <span>Church flyers, business promotions, school banners.</span>
                    <button
                      onClick={() => handleStartProject('Flyer & Poster Design')}
                      className="text-[#E11D74] hover:underline font-medium inline-flex items-center gap-1"
                    >
                      Order Flyer →
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 3: Website Design Mockup */}
              {activeTab === 'website' && (
                <div className="relative z-10 space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
                      <span>Responsive Web Experience</span>
                      <span className="text-emerald-400 font-medium">Fast & Mobile-First</span>
                    </div>
                    <div className="h-36 rounded-lg bg-neutral-900 border border-neutral-800 p-3 flex flex-col justify-between">
                      <div className="flex items-center gap-2 pb-2 border-b border-neutral-800 text-[10px] text-neutral-400">
                        <span className="text-emerald-400">https://</span>
                        <span>client-business.com</span>
                      </div>
                      <div className="space-y-2 py-1">
                        <div className="text-sm font-bold text-white">Modern High-Converting Landing Page</div>
                        <div className="text-xs text-neutral-400 line-clamp-1">Optimized for WhatsApp lead generation & fast page loads.</div>
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-neutral-800">
                        <span>Speed Index: 99/100</span>
                        <span className="text-[#E11D74]">Fully Responsive</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                    <span>Clean landing pages and business portfolios.</span>
                    <button
                      onClick={() => handleStartProject('Website Design')}
                      className="text-[#E11D74] hover:underline font-medium inline-flex items-center gap-1"
                    >
                      Build Website →
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 4: CAC Registration Preview */}
              {activeTab === 'cac' && (
                <div className="relative z-10 space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <div className="flex items-center justify-between mb-3 text-xs text-neutral-400">
                      <span>Corporate Affairs Commission Support</span>
                      <span className="text-amber-400 font-medium">Business Setup</span>
                    </div>
                    <div className="h-36 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 p-4 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm font-bold text-white flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>CAC Business Registration</span>
                          </div>
                          <div className="text-[10px] text-neutral-400 mt-0.5">Proprietorships & Limited Liability Assistance</div>
                        </div>
                      </div>
                      <div className="space-y-1 text-xs text-neutral-300">
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Name Availability & Pre-Check</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Documentation & Filing Guidance</span>
                        </div>
                      </div>
                      <div className="text-[10px] text-neutral-400 pt-1 border-t border-neutral-800">
                        Independent guidance service. Not a government agency.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
                    <span>Proper documentation for commercial credibility.</span>
                    <button
                      onClick={() => handleStartProject('CAC Registration')}
                      className="text-[#E11D74] hover:underline font-medium inline-flex items-center gap-1"
                    >
                      Start CAC Support →
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Feature Badges */}
              <div className="mt-5 pt-4 border-t border-neutral-800 grid grid-cols-2 gap-3 text-[11px] text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Prompt Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct Communication</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
