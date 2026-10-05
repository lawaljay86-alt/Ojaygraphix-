import React, { useState, useEffect } from 'react';
import { useContent } from '../context/ContentContext';
import { X, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { getWhatsAppUrl } from '../config/theme';

export const ProjectBriefModal: React.FC = () => {
  const { isBriefModalOpen, setIsBriefModalOpen, selectedBriefService, setSelectedBriefService, content } = useContent();

  const services = [
    'Graphics Design',
    'Flyer & Poster Design',
    'Social Media Design',
    'Business Branding',
    'Logo Design',
    'Website Design',
    'School & Event Designs',
    'CAC Registration',
  ];

  const [activeService, setActiveService] = useState<string>(selectedBriefService || 'Graphics Design');
  const [details, setDetails] = useState('');
  const [clientName, setClientName] = useState('');

  useEffect(() => {
    if (selectedBriefService) {
      setActiveService(selectedBriefService);
    }
  }, [selectedBriefService]);

  if (!isBriefModalOpen) return null;

  const handleClose = () => {
    setIsBriefModalOpen(false);
    setSelectedBriefService(null);
  };

  const handleLaunchWhatsApp = () => {
    const text = `*New Project Enquiry — OjayGraphix*
• *Client Name:* ${clientName || 'Valued Client'}
• *Service Requested:* ${activeService}
• *Brief / Concept:* ${details || 'I would like to discuss design options and pricing.'}`;
    const cleanPhone = content.brand.whatsappNumber.replace(/^0/, '234').replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank');
    handleClose();
  };

  const handleJumpToForm = () => {
    handleClose();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Quick Project Launcher
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#0A2540] font-display">
            Start a Project
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1">
            Select your required service and send your brief directly to our creative team.
          </p>
        </div>

        {/* Service Picker */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-neutral-700 mb-2">
            Select Service:
          </label>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {services.map((svc) => (
              <button
                key={svc}
                type="button"
                onClick={() => setActiveService(svc)}
                className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                  activeService === svc
                    ? 'border-[#0A2540] bg-[#0A2540]/5 font-semibold text-[#0A2540]'
                    : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                }`}
              >
                <span className="truncate">{svc}</span>
                {activeService === svc && <Check className="w-3.5 h-3.5 text-[#E11D74] shrink-0" />}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div className="space-y-3 mb-6">
          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Your Name (Optional):
            </label>
            <input
              type="text"
              placeholder="e.g. Samuel"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Brief Project Notes:
            </label>
            <textarea
              rows={3}
              placeholder="Describe your design needs, preferred deadline, or questions..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-3 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            onClick={handleJumpToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-semibold text-xs sm:text-sm rounded-lg transition-colors"
          >
            <span>Full Form</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
