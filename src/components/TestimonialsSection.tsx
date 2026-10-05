import React from 'react';
import { useContent } from '../context/ContentContext';
import { MessageSquareQuote, Plus, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { content, setIsAdminOpen } = useContent();

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Client Feedback
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-display">
              Client Experiences
            </h2>
          </div>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="mt-4 md:mt-0 self-start md:self-auto inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-600 bg-white hover:text-[#0A2540] border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors shadow-2xs"
          >
            <Plus className="w-3.5 h-3.5 text-[#E11D74]" />
            <span>Manage Feedback</span>
          </button>
        </div>

        {/* If no testimonials, display the exact requested elegant placeholder */}
        {content.testimonials.length === 0 ? (
          <div className="p-12 sm:p-16 rounded-2xl bg-white border border-neutral-200/90 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mx-auto mb-4 text-[#0A2540]">
              <MessageSquareQuote className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-neutral-800 mb-2">
              Client testimonials will be added here.
            </h3>
            <p className="text-xs text-neutral-500 max-w-md mx-auto mb-6">
              Verified client reviews and design feedback are documented authentically as projects conclude.
            </p>
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A2540] hover:text-[#E11D74] transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add verified testimonial via Content Manager</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.testimonials.map((t) => (
              <div
                key={t.id}
                className="p-7 rounded-xl bg-white border border-neutral-200 flex flex-col justify-between"
              >
                <div>
                  <MessageSquareQuote className="w-6 h-6 text-[#E11D74] mb-4" />
                  <p className="text-sm text-neutral-700 leading-relaxed mb-6 italic">
                    "{t.feedback}"
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#0A2540]">{t.clientName}</div>
                    <div className="text-xs text-neutral-500">{t.clientRole}</div>
                  </div>
                  {t.projectType && (
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {t.projectType}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
