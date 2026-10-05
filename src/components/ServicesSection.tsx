import React from 'react';
import { useContent } from '../context/ContentContext';
import { 
  Palette, 
  Sparkles, 
  Share2, 
  Shapes, 
  Globe, 
  Megaphone, 
  GraduationCap, 
  FileCheck, 
  ArrowUpRight 
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5 text-[#0A2540]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#0A2540]" />,
  Share2: <Share2 className="w-5 h-5 text-[#0A2540]" />,
  Shapes: <Shapes className="w-5 h-5 text-[#0A2540]" />,
  Globe: <Globe className="w-5 h-5 text-[#0A2540]" />,
  Megaphone: <Megaphone className="w-5 h-5 text-[#0A2540]" />,
  GraduationCap: <GraduationCap className="w-5 h-5 text-[#0A2540]" />,
  FileCheck: <FileCheck className="w-5 h-5 text-[#0A2540]" />,
};

export const ServicesSection: React.FC = () => {
  const { content, setIsBriefModalOpen, setSelectedBriefService } = useContent();

  const handleServiceSelect = (serviceTitle: string) => {
    setSelectedBriefService(serviceTitle);
    setIsBriefModalOpen(true);
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Services & Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight font-display mb-4">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Creative services built around your brand. Clean visual communication and practical digital solutions designed for real-world impact.
          </p>
        </div>

        {/* Services Grid (Single-elevation, hairline borders, no nested cards-in-cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, index) => {
            const isCac = service.id === 'cac-registration';
            return (
              <div
                key={service.id}
                className={`group relative p-6 sm:p-7 rounded-xl border transition-all duration-200 flex flex-col justify-between ${
                  isCac
                    ? 'border-[#0A2540]/30 bg-neutral-50/80 hover:border-[#0A2540] hover:shadow-sm'
                    : 'border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-[#0A2540]/5 transition-colors">
                      {iconMap[service.icon] || <Palette className="w-5 h-5 text-[#0A2540]" />}
                    </div>
                    <span className="text-xs font-mono text-neutral-400">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#0A2540] transition-colors mb-1 font-display">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-[#E11D74] mb-3">
                    {service.tagline}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables & Action */}
                <div className="pt-4 border-t border-neutral-100">
                  <div className="space-y-1 mb-5">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="text-xs text-neutral-500 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-neutral-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleServiceSelect(service.title)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#0A2540] hover:text-[#E11D74] py-2 transition-colors border-b border-transparent hover:border-[#E11D74]"
                  >
                    <span>Get Started</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
