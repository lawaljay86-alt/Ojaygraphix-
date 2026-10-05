import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { 
  X, 
  Save, 
  Trash2, 
  Plus, 
  RotateCcw, 
  Download, 
  Upload, 
  Check, 
  Edit3, 
  Briefcase, 
  Layers, 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  ShieldCheck 
} from 'lucide-react';
import { PortfolioItem, ServiceItem, FaqItem, TestimonialItem } from '../config/siteData';

export const AdminManagerModal: React.FC = () => {
  const {
    isAdminOpen,
    setIsAdminOpen,
    content,
    updateBrand,
    updateHero,
    updateCacSection,
    updateAbout,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem,
    addService,
    updateService,
    deleteService,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    addFaq,
    updateFaq,
    deleteFaq,
    resetToDefaults,
    exportContentJson,
    importContentJson,
  } = useContent();

  const [activeTab, setActiveTab] = useState<'brand' | 'portfolio' | 'services' | 'cac' | 'testimonials' | 'faqs' | 'export'>('brand');
  const [saveToast, setSaveToast] = useState(false);
  const [importText, setImportText] = useState('');
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // New Portfolio Item State
  const [newProject, setNewProject] = useState<Omit<PortfolioItem, 'id'>>({
    title: '',
    category: 'Branding',
    clientType: '',
    description: '',
    aspectRatio: 'landscape',
    tags: ['Brand Identity'],
  });

  // New Testimonial State
  const [newTestimonial, setNewTestimonial] = useState<Omit<TestimonialItem, 'id'>>({
    clientName: '',
    clientRole: '',
    feedback: '',
    projectType: 'Flyer Design',
  });

  // New FAQ State
  const [newFaq, setNewFaq] = useState<Omit<FaqItem, 'id'>>({
    question: '',
    answer: '',
  });

  if (!isAdminOpen) return null;

  const triggerSaveNotification = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportContentJson());
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ojaygraphix_content_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const success = importContentJson(importText);
    if (success) {
      setImportStatus('Content updated successfully from JSON!');
      triggerSaveNotification();
      setImportText('');
    } else {
      setImportStatus('Invalid JSON format. Please verify the structure.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full h-[90vh] flex flex-col shadow-2xl border border-neutral-200 overflow-hidden">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E11D74]" />
            <h3 className="text-lg font-bold text-[#0A2540] font-display">
              Studio Content Manager
            </h3>
            <span className="hidden sm:inline-block text-xs bg-neutral-200/80 text-neutral-600 px-2 py-0.5 rounded font-mono">
              Live Editor
            </span>
          </div>

          <div className="flex items-center gap-3">
            {saveToast && (
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Saved Live
              </span>
            )}
            <button
              onClick={() => setIsAdminOpen(false)}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors"
              aria-label="Close Admin Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-neutral-200 bg-white flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0 text-xs font-medium">
          <button
            onClick={() => setActiveTab('brand')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'brand' ? 'border-[#0A2540] text-[#0A2540] font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Brand & Hero</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'portfolio' ? 'border-[#0A2540] text-[#0A2540] font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Portfolio ({content.portfolio.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'services' ? 'border-[#0A2540] text-[#0A2540] font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Services ({content.services.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('cac')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'cac' ? 'border-[#0A2540] text-[#0A2540] font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CAC Content</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'testimonials' ? 'border-[#0A2540] text-[#0A2540] font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Testimonials ({content.testimonials.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('faqs')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'faqs' ? 'border-[#0A2540] text-[#0A2540] font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQs ({content.faqs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('export')}
            className={`py-3 px-3 border-b-2 flex items-center gap-1.5 transition-colors whitespace-nowrap ${
              activeTab === 'export' ? 'border-[#0A2540] text-[#0A2540] font-bold' : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Backup / Reset</span>
          </button>
        </div>

        {/* Scrollable Editor Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-neutral-50/50">
          
          {/* TAB 1: BRAND & HERO */}
          {activeTab === 'brand' && (
            <div className="space-y-6 max-w-2xl">
              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display">Brand & Contact Information</h4>
                
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Brand Name</label>
                  <input
                    type="text"
                    value={content.brand.name}
                    onChange={(e) => {
                      updateBrand({ name: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0A2540]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Primary Phone Number</label>
                    <input
                      type="text"
                      value={content.brand.primaryPhone}
                      onChange={(e) => {
                        updateBrand({ primaryPhone: e.target.value });
                        triggerSaveNotification();
                      }}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0A2540]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Secondary Phone Number</label>
                    <input
                      type="text"
                      value={content.brand.secondaryPhone}
                      onChange={(e) => {
                        updateBrand({ secondaryPhone: e.target.value });
                        triggerSaveNotification();
                      }}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0A2540]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">WhatsApp Dedicated Number</label>
                  <input
                    type="text"
                    value={content.brand.whatsappNumber}
                    onChange={(e) => {
                      updateBrand({ whatsappNumber: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0A2540]"
                  />
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display">Hero Section Headline & Copy</h4>
                
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Hero Badge Label</label>
                  <input
                    type="text"
                    value={content.hero.badge}
                    onChange={(e) => {
                      updateHero({ badge: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0A2540]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Main Headline</label>
                  <input
                    type="text"
                    value={content.hero.headline}
                    onChange={(e) => {
                      updateHero({ headline: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0A2540]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Subheadline / Description</label>
                  <textarea
                    rows={3}
                    value={content.hero.subheadline}
                    onChange={(e) => {
                      updateHero({ subheadline: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg focus:outline-none focus:border-[#0A2540]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PORTFOLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              {/* Add New Project Card */}
              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#E11D74]" /> Add New Portfolio Project
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Project Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Sterling Royal Brand Suite"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Category</label>
                    <select
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value as any })}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                    >
                      {['Branding', 'Flyers', 'Social Media', 'Business', 'Events', 'Schools', 'Websites'].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Client / Entity Type</label>
                    <input
                      type="text"
                      placeholder="e.g. Fintech Startup, Educational Group"
                      value={newProject.clientType}
                      onChange={(e) => setNewProject({ ...newProject, clientType: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      placeholder="e.g. Logo, Stationery, Guidelines"
                      onChange={(e) => setNewProject({ ...newProject, tags: e.target.value.split(',').map(s => s.trim()) })}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Short Description</label>
                  <textarea
                    rows={2}
                    placeholder="Brief description of the work and deliverables..."
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!newProject.title.trim()) return;
                    addPortfolioItem(newProject);
                    setNewProject({
                      title: '',
                      category: 'Branding',
                      clientType: '',
                      description: '',
                      aspectRatio: 'landscape',
                      tags: ['Design Work'],
                    });
                    triggerSaveNotification();
                  }}
                  className="px-4 py-2 bg-[#0A2540] hover:bg-[#06182B] text-white text-xs font-semibold rounded-lg"
                >
                  Publish Project
                </button>
              </div>

              {/* Current Projects List */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-neutral-800">Current Projects ({content.portfolio.length})</h4>
                {content.portfolio.map((proj) => (
                  <div key={proj.id} className="p-4 bg-white rounded-xl border border-neutral-200 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-0.5">
                        <span className="font-semibold text-[#0A2540]">{proj.category}</span>
                        <span>·</span>
                        <span>{proj.clientType}</span>
                      </div>
                      <div className="text-sm font-bold text-neutral-900 truncate">{proj.title}</div>
                      <div className="text-xs text-neutral-500 line-clamp-1">{proj.description}</div>
                    </div>
                    <button
                      onClick={() => {
                        deletePortfolioItem(proj.id);
                        triggerSaveNotification();
                      }}
                      className="p-2 text-neutral-400 hover:text-rose-600 rounded-lg hover:bg-neutral-100 transition-colors shrink-0"
                      title="Delete Project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SERVICES */}
          {activeTab === 'services' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-neutral-800">Services Configuration ({content.services.length})</h4>
              {content.services.map((svc) => (
                <div key={svc.id} className="p-4 bg-white rounded-xl border border-neutral-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-[#0A2540]">{svc.title}</div>
                    <button
                      onClick={() => {
                        deleteService(svc.id);
                        triggerSaveNotification();
                      }}
                      className="text-xs text-rose-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="text-neutral-500 block mb-1">Tagline</label>
                      <input
                        type="text"
                        value={svc.tagline}
                        onChange={(e) => {
                          updateService(svc.id, { tagline: e.target.value });
                          triggerSaveNotification();
                        }}
                        className="w-full px-2.5 py-1.5 border border-neutral-200 rounded"
                      />
                    </div>
                    <div>
                      <label className="text-neutral-500 block mb-1">Description</label>
                      <input
                        type="text"
                        value={svc.description}
                        onChange={(e) => {
                          updateService(svc.id, { description: e.target.value });
                          triggerSaveNotification();
                        }}
                        className="w-full px-2.5 py-1.5 border border-neutral-200 rounded"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: CAC SECTION */}
          {activeTab === 'cac' && (
            <div className="space-y-4 max-w-2xl">
              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display">CAC Registration Section Copy</h4>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Section Headline</label>
                  <input
                    type="text"
                    value={content.cacSection.headline}
                    onChange={(e) => {
                      updateCacSection({ headline: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Overview Description</label>
                  <textarea
                    rows={3}
                    value={content.cacSection.description}
                    onChange={(e) => {
                      updateCacSection({ description: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Legal Disclaimer / Distinction</label>
                  <textarea
                    rows={3}
                    value={content.cacSection.disclaimer}
                    onChange={(e) => {
                      updateCacSection({ disclaimer: e.target.value });
                      triggerSaveNotification();
                    }}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#E11D74]" /> Add Authentic Client Testimonial
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Client Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Dr. Kelechi Nwosu"
                      value={newTestimonial.clientName}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, clientName: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">Role / Business</label>
                    <input
                      type="text"
                      placeholder="e.g. Principal, Apex High School"
                      value={newTestimonial.clientRole}
                      onChange={(e) => setNewTestimonial({ ...newTestimonial, clientRole: e.target.value })}
                      className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Client Feedback Text</label>
                  <textarea
                    rows={3}
                    placeholder="What did the client say about OjayGraphix's work?"
                    value={newTestimonial.feedback}
                    onChange={(e) => setNewTestimonial({ ...newTestimonial, feedback: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!newTestimonial.clientName.trim() || !newTestimonial.feedback.trim()) return;
                    addTestimonial(newTestimonial);
                    setNewTestimonial({
                      clientName: '',
                      clientRole: '',
                      feedback: '',
                      projectType: 'Graphic Design',
                    });
                    triggerSaveNotification();
                  }}
                  className="px-4 py-2 bg-[#0A2540] hover:bg-[#06182B] text-white text-xs font-semibold rounded-lg"
                >
                  Save Testimonial
                </button>
              </div>

              {content.testimonials.length === 0 ? (
                <div className="p-8 text-center bg-white rounded-xl border border-neutral-200 text-xs text-neutral-500">
                  No testimonials currently published. The website will display the elegant placeholder: "Client testimonials will be added here."
                </div>
              ) : (
                <div className="space-y-3">
                  {content.testimonials.map((t) => (
                    <div key={t.id} className="p-4 bg-white rounded-xl border border-neutral-200 flex items-start justify-between gap-4">
                      <div>
                        <div className="text-sm font-bold text-[#0A2540]">{t.clientName}</div>
                        <div className="text-xs text-neutral-500 mb-2">{t.clientRole}</div>
                        <p className="text-xs text-neutral-700 italic">"{t.feedback}"</p>
                      </div>
                      <button
                        onClick={() => {
                          deleteTestimonial(t.id);
                          triggerSaveNotification();
                        }}
                        className="p-1.5 text-neutral-400 hover:text-rose-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 6: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-[#E11D74]" /> Add New FAQ
                </h4>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Question</label>
                  <input
                    type="text"
                    placeholder="e.g. What is the typical turnaround time for a flyer?"
                    value={newFaq.question}
                    onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">Answer</label>
                  <textarea
                    rows={3}
                    placeholder="Clear and helpful response..."
                    value={newFaq.answer}
                    onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-neutral-200 rounded-lg"
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!newFaq.question.trim() || !newFaq.answer.trim()) return;
                    addFaq(newFaq);
                    setNewFaq({ question: '', answer: '' });
                    triggerSaveNotification();
                  }}
                  className="px-4 py-2 bg-[#0A2540] hover:bg-[#06182B] text-white text-xs font-semibold rounded-lg"
                >
                  Save FAQ
                </button>
              </div>

              <div className="space-y-3">
                {content.faqs.map((f) => (
                  <div key={f.id} className="p-4 bg-white rounded-xl border border-neutral-200 flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-neutral-900">{f.question}</div>
                      <div className="text-xs text-neutral-600 leading-relaxed">{f.answer}</div>
                    </div>
                    <button
                      onClick={() => {
                        deleteFaq(f.id);
                        triggerSaveNotification();
                      }}
                      className="p-1.5 text-neutral-400 hover:text-rose-600 transition-colors shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: EXPORT & RESET */}
          {activeTab === 'export' && (
            <div className="space-y-6 max-w-2xl">
              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display">Export / Backup Site Content</h4>
                <p className="text-xs text-neutral-600">
                  Download a complete JSON snapshot of all your portfolio items, services, FAQs, and contact settings.
                </p>
                <button
                  onClick={handleExport}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A2540] hover:bg-[#06182B] text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download content.json</span>
                </button>
              </div>

              <div className="bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
                <h4 className="text-sm font-bold text-[#0A2540] font-display">Import Site Content (JSON)</h4>
                <p className="text-xs text-neutral-600">
                  Paste content JSON below to restore or overwrite website content.
                </p>
                <textarea
                  rows={4}
                  placeholder="Paste valid SiteContent JSON here..."
                  value={importText}
                  onChange={(e) => setImportText(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-mono border border-neutral-200 rounded-lg"
                />
                {importStatus && (
                  <div className="text-xs font-medium text-emerald-600">{importStatus}</div>
                )}
                <button
                  onClick={handleImport}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-lg"
                >
                  <Upload className="w-4 h-4" />
                  <span>Apply JSON</span>
                </button>
              </div>

              <div className="bg-white p-5 rounded-xl border border-rose-200 space-y-3">
                <h4 className="text-sm font-bold text-rose-700 font-display">Reset to Default Content</h4>
                <p className="text-xs text-neutral-600">
                  Revert all customized edits, services, and portfolio back to original studio defaults.
                </p>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to reset all website content back to factory defaults?')) {
                      resetToDefaults();
                      triggerSaveNotification();
                    }
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-semibold rounded-lg"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset All to Defaults</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-6 py-3 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-xs text-neutral-500 shrink-0">
          <span>All changes persist automatically in browser storage.</span>
          <button
            onClick={() => setIsAdminOpen(false)}
            className="px-4 py-1.5 bg-[#0A2540] text-white font-semibold rounded-md"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
