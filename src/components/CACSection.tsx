import React from 'react';
import { useContent } from '../context/ContentContext';
import { getWhatsAppUrl } from '../config/theme';
import { ShieldCheck, CheckCircle2, MessageCircle, FileText, ArrowRight, AlertCircle } from 'lucide-react';

export const CACSection: React.FC = () => {
  const { content, setIsBriefModalOpen, setSelectedBriefService } = useContent();

  const handleStartCac = () => {
    setSelectedBriefService('CAC Registration');
    setIsBriefModalOpen(true);
  };

  const cacMessage = "Hello OjayGraphix, I would like to make an enquiry about CAC Business Registration.";

  return (
    <section id="cac-registration" className="py-20 sm:py-28 bg-[#0A2540] text-white relative overflow-hidden">
      {/* Background architectural subtle accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E11D74] rounded-full blur-[140px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Proposition & Overview (7 cols) */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase mb-5">
              <ShieldCheck className="w-4 h-4 text-[#E11D74]" />
              <span>Official Business Structuring</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-6 [text-wrap:balance]">
              {content.cacSection.headline}
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {content.cacSection.description}
            </p>

            {/* Services Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {content.cacSection.servicesOffered.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-neutral-200">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={handleStartCac}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#0A2540] bg-white hover:bg-neutral-100 active:scale-[0.98] rounded-lg transition-all shadow-md"
              >
                <span>Start CAC Registration</span>
                <ArrowRight className="w-4 h-4 text-[#E11D74]" />
              </button>

              <a
                href={getWhatsAppUrl(content.brand.whatsappNumber, cacMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Important Legal & Transparent Fee Distinction (Mandatory Requirement) */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-300 leading-relaxed flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Transparent Service Disclosure: </span>
                <span>{content.cacSection.disclaimer}</span>
              </div>
            </div>

          </div>

          {/* Right Column: 5-Step Process Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                <div>
                  <h3 className="text-lg font-bold text-white font-display">CAC Process Workflow</h3>
                  <p className="text-xs text-neutral-300">Simple 5-step registration timeline</p>
                </div>
                <FileText className="w-6 h-6 text-[#E11D74]" />
              </div>

              <div className="space-y-4">
                {content.process.cacSteps.map((step) => (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono font-bold text-[#E11D74] shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                      <p className="text-xs text-neutral-300 leading-relaxed mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs text-neutral-300">
                <span>Questions regarding eligibility?</span>
                <a
                  href={`tel:${content.brand.primaryPhone}`}
                  className="text-white hover:text-[#E11D74] font-semibold underline underline-offset-4"
                >
                  Call {content.brand.primaryPhone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
