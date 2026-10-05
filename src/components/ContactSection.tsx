import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { getWhatsAppUrl, getTelUrl } from '../config/theme';
import { Phone, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { content, selectedBriefService } = useContent();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: selectedBriefService || 'Graphics Design',
    projectDescription: '',
    preferredDeadline: '',
    budgetRange: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Graphics Design',
    'Logo Design',
    'Branding',
    'Social Media Design',
    'Flyer/Poster',
    'Website Design',
    'Landing Page',
    'CAC Registration',
    'Other',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formatWhatsAppBrief = () => {
    const text = `*New Project Enquiry — OjayGraphix*
• *Name:* ${formData.fullName || 'Not provided'}
• *Phone:* ${formData.phone || 'Not provided'}
• *Email:* ${formData.email || 'Not provided'}
• *Service:* ${formData.serviceRequired}
• *Deadline:* ${formData.preferredDeadline || 'Flexible'}
• *Budget:* ${formData.budgetRange || 'To be discussed'}
• *Description:* ${formData.projectDescription || 'No details specified'}`;
    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent, sendToWhatsApp = false) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Please provide a valid phone number for contact.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);

      if (sendToWhatsApp) {
        const cleanPhone = content.brand.whatsappNumber.replace(/^0/, '234').replace(/[^0-9]/g, '');
        window.open(`https://wa.me/${cleanPhone}?text=${formatWhatsAppBrief()}`, '_blank');
      }
    }, 400);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAFAFA] border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Conversion Banner */}
        <div className="rounded-2xl bg-[#0A2540] text-white p-8 sm:p-12 mb-16 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E11D74] rounded-full blur-3xl opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-white text-xs font-semibold tracking-wider uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E11D74]" />
              <span>Let's Build Something Exceptional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display mb-4">
              Have a Project in Mind?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              Let's turn your idea into something professional, clear and visually memorable. Reach out directly or submit your brief below.
            </p>

            {/* Direct Instant Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl(content.brand.whatsappNumber, content.brand.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-semibold text-sm rounded-lg transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href={getTelUrl(content.brand.primaryPhone)}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#E11D74]" />
                <span>Call {content.brand.primaryPhone}</span>
              </a>

              <a
                href={getTelUrl(content.brand.secondaryPhone)}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-semibold text-sm rounded-lg border border-white/20 transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#E11D74]" />
                <span>Call {content.brand.secondaryPhone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form & Studio Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Details & Info (5 cols) */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-[#0A2540] font-display mb-3">
              Direct Consultation
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
              Whether you need a full branding package, high-converting flyers, a professional business website, or CAC documentation guidance, we respond promptly.
            </p>

            <div className="p-6 rounded-xl bg-white border border-neutral-200 space-y-4 mb-6">
              <div>
                <div className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                  Primary Contact
                </div>
                <a
                  href={getTelUrl(content.brand.primaryPhone)}
                  className="text-base font-bold text-[#0A2540] hover:text-[#E11D74] transition-colors tabular-nums mt-0.5 inline-block"
                >
                  {content.brand.primaryPhone}
                </a>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <div className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                  Secondary Line
                </div>
                <a
                  href={getTelUrl(content.brand.secondaryPhone)}
                  className="text-base font-bold text-[#0A2540] hover:text-[#E11D74] transition-colors tabular-nums mt-0.5 inline-block"
                >
                  {content.brand.secondaryPhone}
                </a>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <div className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                  Location & Reach
                </div>
                <p className="text-sm text-neutral-700 mt-0.5">
                  Nigeria (Nationwide Remote & Digital Services)
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-neutral-100/80 border border-neutral-200 text-xs text-neutral-500 leading-relaxed">
              <span className="font-semibold text-neutral-700">Notice: </span>
              OjayGraphix operates with strict confidentiality. Your proposed business names and project concepts are handled with total professional discretion.
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#0A2540] font-display mb-2">
                  Enquiry Received
                </h4>
                <p className="text-sm text-neutral-600 max-w-md mx-auto mb-6">
                  Thank you, <span className="font-semibold text-neutral-900">{formData.fullName}</span>. Your brief has been captured. We will review your details and connect with you shortly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/2347032282964?text=${formatWhatsAppBrief()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send directly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        serviceRequired: 'Graphics Design',
                        projectDescription: '',
                        preferredDeadline: '',
                        budgetRange: '',
                      });
                    }}
                    className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold text-xs rounded-lg transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-5">
                <div className="border-b border-neutral-100 pb-3 mb-4">
                  <h4 className="text-lg font-bold text-[#0A2540] font-display">
                    Project Enquiry Form
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Fill in your project details to get a customized quotation or discussion.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 text-xs bg-rose-50 text-rose-700 border border-rose-200 rounded-lg">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Full Name <span className="text-[#E11D74]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Adeola Johnson"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Phone Number (Calls/WhatsApp) <span className="text-[#E11D74]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 08012345678"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. client@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-colors"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Service Required <span className="text-[#E11D74]">*</span>
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-colors"
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    Project Description & Requirements
                  </label>
                  <textarea
                    name="projectDescription"
                    rows={4}
                    placeholder="Briefly describe what you would like us to create (colors, content, references, style preference)..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-colors resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Deadline */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Preferred Deadline
                    </label>
                    <input
                      type="text"
                      name="preferredDeadline"
                      placeholder="e.g. Within 3 days, Next week"
                      value={formData.preferredDeadline}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-colors"
                    />
                  </div>

                  {/* Budget Range (Optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Budget Range (Optional)
                    </label>
                    <input
                      type="text"
                      name="budgetRange"
                      placeholder="e.g. Standard, Flexible, Specific"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0A2540]/20 focus:border-[#0A2540] transition-colors"
                    />
                  </div>
                </div>

                {/* Buttons: Submit & WhatsApp Option */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A2540] hover:bg-[#06182B] active:scale-[0.98] text-white text-xs sm:text-sm font-semibold rounded-lg transition-all shadow-sm"
                  >
                    <Send className="w-4 h-4 text-[#E11D74]" />
                    <span>{submitting ? 'Submitting...' : 'Submit Enquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs sm:text-sm font-semibold rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Submit via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
