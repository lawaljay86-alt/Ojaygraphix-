import React from 'react';
import { useContent } from '../context/ContentContext';
import { X, MessageCircle, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { getWhatsAppUrl } from '../config/theme';

export const PortfolioDetailModal: React.FC = () => {
  const { activePortfolioModal, setActivePortfolioModal, setSelectedBriefService, setIsBriefModalOpen, content } = useContent();

  if (!activePortfolioModal) return null;

  const project = activePortfolioModal;

  const handleClose = () => {
    setActivePortfolioModal(null);
  };

  const handleRequestSimilar = () => {
    setSelectedBriefService(project.category);
    handleClose();
    setIsBriefModalOpen(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hello OjayGraphix, I saw your work on *${project.title}* (${project.category}) and I would like to request a similar design for my business.`;
    const cleanPhone = content.brand.whatsappNumber.replace(/^0/, '234').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 relative">
        
        {/* Top visual graphic header */}
        <div className="relative h-48 sm:h-56 bg-gradient-to-br from-neutral-900 via-[#0A2540] to-neutral-950 p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            {/* Zero-pill clean text metadata */}
            <div className="text-xs text-neutral-300 font-medium">
              <span>{project.category}</span>
              <span className="mx-1.5 text-neutral-500">·</span>
              <span>{project.clientType}</span>
            </div>
            <button
              onClick={handleClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#E11D74] mb-1 font-semibold">
              OJAYGRAPHIX ARCHIVE
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h4 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mb-8 pt-4 border-t border-neutral-100">
              <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Deliverables & Scope
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs text-neutral-600 bg-neutral-100 px-2.5 py-1 rounded-md"
                  >
                    <CheckCircle2 className="w-3 h-3 text-[#0A2540]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleRequestSimilar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A2540] hover:bg-[#06182B] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              <span>Request Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E11D74]" />
            </button>

            <button
              onClick={handleWhatsAppInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Discuss on WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
