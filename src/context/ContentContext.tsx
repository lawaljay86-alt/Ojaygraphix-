import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, defaultSiteContent, PortfolioItem, TestimonialItem, FaqItem, ServiceItem } from '../config/siteData';

interface ContentContextType {
  content: SiteContent;
  updateBrand: (brand: Partial<SiteContent['brand']>) => void;
  updateHero: (hero: Partial<SiteContent['hero']>) => void;
  updateCacSection: (cac: Partial<SiteContent['cacSection']>) => void;
  updateAbout: (about: Partial<SiteContent['about']>) => void;
  addPortfolioItem: (item: Omit<PortfolioItem, 'id'>) => void;
  updatePortfolioItem: (id: string, item: Partial<PortfolioItem>) => void;
  deletePortfolioItem: (id: string) => void;
  addService: (service: Omit<ServiceItem, 'id'>) => void;
  updateService: (id: string, service: Partial<ServiceItem>) => void;
  deleteService: (id: string) => void;
  addTestimonial: (item: Omit<TestimonialItem, 'id'>) => void;
  updateTestimonial: (id: string, item: Partial<TestimonialItem>) => void;
  deleteTestimonial: (id: string) => void;
  addFaq: (faq: Omit<FaqItem, 'id'>) => void;
  updateFaq: (id: string, faq: Partial<FaqItem>) => void;
  deleteFaq: (id: string) => void;
  updateSocialLinks: (links: Partial<SiteContent['socialLinks']>) => void;
  resetToDefaults: () => void;
  exportContentJson: () => string;
  importContentJson: (jsonString: string) => boolean;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  selectedBriefService: string | null;
  setSelectedBriefService: (service: string | null) => void;
  isBriefModalOpen: boolean;
  setIsBriefModalOpen: (open: boolean) => void;
  activePortfolioModal: PortfolioItem | null;
  setActivePortfolioModal: (item: PortfolioItem | null) => void;
}

const STORAGE_KEY = 'ojaygraphix_content_v1';

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...defaultSiteContent,
          ...parsed,
          brand: { ...defaultSiteContent.brand, ...(parsed.brand || {}) },
          hero: { ...defaultSiteContent.hero, ...(parsed.hero || {}) },
          cacSection: { ...defaultSiteContent.cacSection, ...(parsed.cacSection || {}) },
          about: { ...defaultSiteContent.about, ...(parsed.about || {}) },
          services: parsed.services || defaultSiteContent.services,
          portfolio: parsed.portfolio || defaultSiteContent.portfolio,
          testimonials: parsed.testimonials || defaultSiteContent.testimonials,
          faqs: parsed.faqs || defaultSiteContent.faqs,
          socialLinks: { ...defaultSiteContent.socialLinks, ...(parsed.socialLinks || {}) },
        };
      }
    } catch (e) {
      console.error('Failed to load content from localStorage', e);
    }
    return defaultSiteContent;
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);
  const [selectedBriefService, setSelectedBriefService] = useState<string | null>(null);
  const [activePortfolioModal, setActivePortfolioModal] = useState<PortfolioItem | null>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    } catch (e) {
      console.error('Failed to save content to localStorage', e);
    }
  }, [content]);

  const updateBrand = (brand: Partial<SiteContent['brand']>) => {
    setContent((prev) => ({
      ...prev,
      brand: { ...prev.brand, ...brand },
    }));
  };

  const updateHero = (hero: Partial<SiteContent['hero']>) => {
    setContent((prev) => ({
      ...prev,
      hero: { ...prev.hero, ...hero },
    }));
  };

  const updateCacSection = (cac: Partial<SiteContent['cacSection']>) => {
    setContent((prev) => ({
      ...prev,
      cacSection: { ...prev.cacSection, ...cac },
    }));
  };

  const updateAbout = (about: Partial<SiteContent['about']>) => {
    setContent((prev) => ({
      ...prev,
      about: { ...prev.about, ...about },
    }));
  };

  const addPortfolioItem = (item: Omit<PortfolioItem, 'id'>) => {
    const newItem: PortfolioItem = {
      ...item,
      id: `proj-${Date.now()}`,
    };
    setContent((prev) => ({
      ...prev,
      portfolio: [newItem, ...prev.portfolio],
    }));
  };

  const updatePortfolioItem = (id: string, updated: Partial<PortfolioItem>) => {
    setContent((prev) => ({
      ...prev,
      portfolio: prev.portfolio.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    }));
  };

  const deletePortfolioItem = (id: string) => {
    setContent((prev) => ({
      ...prev,
      portfolio: prev.portfolio.filter((p) => p.id !== id),
    }));
  };

  const addService = (service: Omit<ServiceItem, 'id'>) => {
    const newService: ServiceItem = {
      ...service,
      id: `svc-${Date.now()}`,
    };
    setContent((prev) => ({
      ...prev,
      services: [...prev.services, newService],
    }));
  };

  const updateService = (id: string, updated: Partial<ServiceItem>) => {
    setContent((prev) => ({
      ...prev,
      services: prev.services.map((s) => (s.id === id ? { ...s, ...updated } : s)),
    }));
  };

  const deleteService = (id: string) => {
    setContent((prev) => ({
      ...prev,
      services: prev.services.filter((s) => s.id !== id),
    }));
  };

  const addTestimonial = (item: Omit<TestimonialItem, 'id'>) => {
    const newTestimonial: TestimonialItem = {
      ...item,
      id: `test-${Date.now()}`,
    };
    setContent((prev) => ({
      ...prev,
      testimonials: [newTestimonial, ...prev.testimonials],
    }));
  };

  const updateTestimonial = (id: string, updated: Partial<TestimonialItem>) => {
    setContent((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((t) => (t.id === id ? { ...t, ...updated } : t)),
    }));
  };

  const deleteTestimonial = (id: string) => {
    setContent((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter((t) => t.id !== id),
    }));
  };

  const addFaq = (faq: Omit<FaqItem, 'id'>) => {
    const newFaq: FaqItem = {
      ...faq,
      id: `faq-${Date.now()}`,
    };
    setContent((prev) => ({
      ...prev,
      faqs: [...prev.faqs, newFaq],
    }));
  };

  const updateFaq = (id: string, updated: Partial<FaqItem>) => {
    setContent((prev) => ({
      ...prev,
      faqs: prev.faqs.map((f) => (f.id === id ? { ...f, ...updated } : f)),
    }));
  };

  const deleteFaq = (id: string) => {
    setContent((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((f) => f.id !== id),
    }));
  };

  const updateSocialLinks = (links: Partial<SiteContent['socialLinks']>) => {
    setContent((prev) => ({
      ...prev,
      socialLinks: { ...prev.socialLinks, ...links },
    }));
  };

  const resetToDefaults = () => {
    setContent(defaultSiteContent);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error(e);
    }
  };

  const exportContentJson = () => {
    return JSON.stringify(content, null, 2);
  };

  const importContentJson = (jsonString: string) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && parsed.brand && parsed.services) {
        setContent(parsed);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON import', e);
    }
    return false;
  };

  return (
    <ContentContext.Provider
      value={{
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
        updateSocialLinks,
        resetToDefaults,
        exportContentJson,
        importContentJson,
        isAdminOpen,
        setIsAdminOpen,
        selectedBriefService,
        setSelectedBriefService,
        isBriefModalOpen,
        setIsBriefModalOpen,
        activePortfolioModal,
        setActivePortfolioModal,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
