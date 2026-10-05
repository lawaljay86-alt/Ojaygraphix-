import React from 'react';
import { useContent } from '../context/ContentContext';

export const TrustIntro: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="py-14 sm:py-16 bg-neutral-100/60 border-y border-neutral-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0A2540] font-display mb-4 tracking-tight [text-wrap:balance]">
          {content.trustIntro.title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {content.trustIntro.description}
        </p>

        {/* Clean, unboxed service tags as per zero-pill discipline */}
        <div className="mt-8 pt-6 border-t border-neutral-200/70 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium text-neutral-500">
          <span>Graphics Design</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>Flyers & Posters</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>Social Media</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>Branding</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>Logos</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>Websites</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>CAC Registration</span>
        </div>
      </div>
    </section>
  );
};
