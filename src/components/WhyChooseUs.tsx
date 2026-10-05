import React from 'react';
import { useContent } from '../context/ContentContext';
import { Check, Shield, Layers, MessageSquare, Target, Eye } from 'lucide-react';

const icons = [
  <Shield className="w-5 h-5 text-[#0A2540]" key="1" />,
  <Layers className="w-5 h-5 text-[#0A2540]" key="2" />,
  <Target className="w-5 h-5 text-[#0A2540]" key="3" />,
  <Eye className="w-5 h-5 text-[#0A2540]" key="4" />,
  <MessageSquare className="w-5 h-5 text-[#0A2540]" key="5" />,
  <Check className="w-5 h-5 text-[#0A2540]" key="6" />,
];

export const WhyChooseUs: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Our Principles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight font-display mb-4">
            {content.whyChooseUs.title}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            {content.whyChooseUs.subtitle}
          </p>
        </div>

        {/* 6 Concise Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.whyChooseUs.points.map((point, index) => (
            <div
              key={index}
              className="p-7 rounded-xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:border-neutral-300 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-5 shadow-2xs">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2 font-display">
                {point.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
