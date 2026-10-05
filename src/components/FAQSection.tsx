import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { ChevronDown, Plus, HelpCircle, Phone } from 'lucide-react';
import { getTelUrl, getWhatsAppUrl } from '../config/theme';

export const FAQSection: React.FC = () => {
  const { content, setIsAdminOpen } = useContent();
  const [openId, setOpenId] = useState<string | null>(content.faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Frequently Asked Questions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-display">
              Questions & Answers
            </h2>
          </div>

          <button
            onClick={() => setIsAdminOpen(true)}
            className="mt-4 sm:mt-0 self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-neutral-600 bg-neutral-50 hover:text-[#0A2540] border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-[#E11D74]" />
            <span>Manage FAQs</span>
          </button>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {content.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-neutral-200/90 rounded-xl overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/50 transition-colors"
                >
                  <span className="text-base font-bold text-neutral-900 font-display">
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center bg-neutral-100 text-neutral-600 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-[#0A2540] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Footer */}
        <div className="mt-10 p-6 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-neutral-700">
            <HelpCircle className="w-5 h-5 text-[#0A2540] shrink-0" />
            <span>Have a specific project question not answered above?</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={getWhatsAppUrl(content.brand.whatsappNumber, "Hello OjayGraphix, I have a quick question regarding your creative services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-700 hover:underline"
            >
              Ask on WhatsApp
            </a>
            <span className="text-neutral-300">·</span>
            <a
              href={getTelUrl(content.brand.primaryPhone)}
              className="font-bold text-[#0A2540] hover:underline"
            >
              Call {content.brand.primaryPhone}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
