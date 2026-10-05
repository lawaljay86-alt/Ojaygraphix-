import React from 'react';
import { useContent } from '../context/ContentContext';
import { ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { content, setIsBriefModalOpen } = useContent();

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Structured Execution
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight font-display mb-4">
            {content.process.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            {content.process.subtitle}
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.process.steps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 rounded-xl bg-white border border-neutral-200/90 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-black text-[#0A2540] font-mono mb-4">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-xs font-semibold text-[#E11D74]">
                <span>Phase {step.number}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Process CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#0A2540] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold font-display">Ready to begin phase 01?</h4>
            <p className="text-sm text-neutral-300 mt-1">
              Send your project brief today and get a swift response.
            </p>
          </div>
          <button
            onClick={() => setIsBriefModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A2540] hover:bg-neutral-100 font-semibold text-sm rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Start Your Brief</span>
            <ArrowRight className="w-4 h-4 text-[#E11D74]" />
          </button>
        </div>

      </div>
    </section>
  );
};
