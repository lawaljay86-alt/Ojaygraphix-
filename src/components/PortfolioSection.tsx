import React, { useState, useMemo } from 'react';
import { useContent } from '../context/ContentContext';
import { PortfolioItem } from '../config/siteData';
import { ArrowUpRight, Plus, Eye, Sparkles } from 'lucide-react';

const categories = [
  'All',
  'Branding',
  'Flyers',
  'Social Media',
  'Business',
  'Events',
  'Schools',
  'Websites',
] as const;

export const PortfolioSection: React.FC = () => {
  const { content, setActivePortfolioModal, setIsBriefModalOpen, setSelectedBriefService, setIsAdminOpen } = useContent();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return content.portfolio;
    return content.portfolio.filter((p) => p.category === selectedCategory);
  }, [content.portfolio, selectedCategory]);

  const handleProjectClick = (project: PortfolioItem) => {
    setActivePortfolioModal(project);
  };

  const handleRequestSimilar = (e: React.MouseEvent, project: PortfolioItem) => {
    e.stopPropagation();
    setSelectedBriefService(project.category);
    setIsBriefModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A2540] tracking-tight font-display mb-3">
              Selected Work
            </h2>
            <p className="text-base text-neutral-600 font-normal">
              A selection of creative work designed for brands, businesses and organisations.
            </p>
          </div>

          {/* Quick Admin Add Project Button */}
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-600 bg-white hover:text-[#0A2540] border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors shadow-2xs"
            >
              <Plus className="w-3.5 h-3.5 text-[#E11D74]" />
              <span>Manage Portfolio</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive filter buttons as permitted by zero-pill guidelines) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar text-xs font-medium border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#0A2540] text-white shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Asymmetric Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-xl border border-neutral-200">
            <p className="text-neutral-500 text-sm">No projects currently under this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 text-xs font-semibold text-[#0A2540] hover:text-[#E11D74]"
            >
              View all projects →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {filteredProjects.map((project, index) => {
              // Asymmetric editorial col-spans: alternating 7 and 5 cols for visual dynamics
              const isLarge = index % 3 === 0;
              const colSpanClass = isLarge ? 'lg:col-span-7' : 'lg:col-span-5';

              return (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className={`${colSpanClass} group cursor-pointer bg-white rounded-xl border border-neutral-200/90 overflow-hidden hover:border-neutral-400/80 transition-all duration-200 flex flex-col justify-between`}
                >
                  {/* Visual Mockup Container (Styled CSS/Vector editorial artwork) */}
                  <div className="relative w-full h-64 sm:h-72 bg-gradient-to-br from-neutral-900 via-[#0A2540] to-neutral-950 p-6 flex flex-col justify-between overflow-hidden">
                    
                    {/* Background Pattern */}
                    <div 
                      className="absolute inset-0 opacity-10 pointer-events-none"
                      style={{
                        backgroundImage: `radial-gradient(white 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}
                    />

                    {/* Top Row: Unboxed Category and Client Type */}
                    <div className="relative z-10 flex items-center justify-between text-xs text-neutral-300">
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="text-white">{project.category}</span>
                        <span aria-hidden="true" className="text-neutral-500">·</span>
                        <span className="text-neutral-400">{project.clientType}</span>
                      </div>
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-[#E11D74] transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Middle Graphic Identity Layout */}
                    <div className="relative z-10 py-4 my-auto">
                      <div className="max-w-md">
                        <div className="text-xs uppercase tracking-widest text-[#E11D74] font-semibold mb-1">
                          OJAYGRAPHIX CREATIVE ARCHIVE
                        </div>
                        <h4 className="text-xl sm:text-2xl font-extrabold text-white font-display tracking-tight leading-snug">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    {/* Bottom Metadata bar inside preview */}
                    <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-300">
                      <div className="flex items-center gap-2">
                        {project.tags.slice(0, 2).map((t, idx) => (
                          <span key={idx} className="text-neutral-400">{t}</span>
                        ))}
                      </div>
                      <span className="text-[#E11D74] font-medium flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>View Details</span>
                      </span>
                    </div>

                  </div>

                  {/* Text Details & Request Action */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      {/* Zero-Pill unboxed metadata */}
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.clientType}</span>
                      </div>

                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-[#0A2540] transition-colors font-display mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={(e) => handleRequestSimilar(e, project)}
                        className="text-xs font-semibold text-[#0A2540] hover:text-[#E11D74] transition-colors"
                      >
                        Request Similar Design →
                      </button>
                      <span className="text-xs text-neutral-400 font-mono">
                        OJAY #{index + 1}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Portfolio CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-neutral-600 mb-4">
            Need a custom design tailored for your company or upcoming event?
          </p>
          <button
            onClick={() => {
              setSelectedBriefService(null);
              setIsBriefModalOpen(true);
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0A2540] hover:bg-[#06182B] active:scale-[0.98] rounded-lg transition-all shadow-sm"
          >
            <span>Start a Project With Us</span>
            <ArrowUpRight className="w-4 h-4 text-[#E11D74]" />
          </button>
        </div>

      </div>
    </section>
  );
};
