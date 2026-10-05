export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Branding' | 'Flyers' | 'Social Media' | 'Business' | 'Events' | 'Schools' | 'Websites';
  clientType: string;
  description: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  imageUrl?: string;
  accentColor?: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  feedback: string;
  projectType?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContent {
  brand: {
    name: string;
    studioLabel: string;
    tagline: string;
    primaryPhone: string;
    secondaryPhone: string;
    whatsappNumber: string;
    whatsappDefaultMessage: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    statsNote: string;
  };
  trustIntro: {
    title: string;
    description: string;
  };
  services: ServiceItem[];
  cacSection: {
    headline: string;
    description: string;
    servicesOffered: string[];
    disclaimer: string;
    notice: string;
  };
  portfolio: PortfolioItem[];
  whyChooseUs: {
    title: string;
    subtitle: string;
    points: { title: string; description: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { number: string; title: string; description: string }[];
    cacSteps: { step: number; title: string; description: string }[];
  };
  about: {
    title: string;
    description: string;
    highlights: string[];
  };
  clientTypes: string[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

export const defaultSiteContent: SiteContent = {
  brand: {
    name: "OJAYGRAPHIX",
    studioLabel: "CREATIVE DIGITAL STUDIO",
    tagline: "Graphics Design • Branding • Websites • CAC Registration",
    primaryPhone: "07032282964",
    secondaryPhone: "07017681631",
    whatsappNumber: "07032282964",
    whatsappDefaultMessage: "Hello OjayGraphix, I would like to make an enquiry about your services.",
  },
  hero: {
    badge: "OJAYGRAPHIX — CREATIVE DIGITAL STUDIO",
    headline: "Designs That Make Your Business Stand Out.",
    subheadline: "Premium graphics, branding, websites and business registration services designed to help your brand look professional and get noticed.",
    primaryCtaText: "Start a Project",
    secondaryCtaText: "View Our Work",
    statsNote: "Direct WhatsApp & Phone Consultation Available",
  },
  trustIntro: {
    title: "Creative solutions for businesses, brands and organisations.",
    description: "OjayGraphix provides professional visual communication and digital services for businesses, schools, organisations, events and individuals across Nigeria and beyond.",
  },
  services: [
    {
      id: "graphics-design",
      title: "Graphics Design",
      tagline: "High-impact visual communication",
      description: "Professional visual designs for businesses, events, organisations and individuals tailored for clear message delivery.",
      deliverables: ["High-res print files", "Digital formats", "Custom layout revisions"],
      icon: "Palette",
    },
    {
      id: "branding",
      title: "Branding",
      tagline: "Memorable corporate identity",
      description: "Build a consistent and memorable visual identity for your business with stationery, style guidelines, and brand marks.",
      deliverables: ["Visual identity system", "Typography & color guide", "Stationery mockups"],
      icon: "Sparkles",
    },
    {
      id: "social-media-design",
      title: "Social Media Design",
      tagline: "Scroll-stopping campaign creatives",
      description: "Professional social media flyers, promotional graphics, carousels, and campaign creatives that engage your audience.",
      deliverables: ["Instagram/Facebook posts", "Story templates", "Product promo flyers"],
      icon: "Share2",
    },
    {
      id: "logo-design",
      title: "Logo Design",
      tagline: "Distinctive brand marks",
      description: "Simple, memorable and professional logos designed meticulously around your core brand identity and values.",
      deliverables: ["Vector source files", "Dark & light variations", "Monochrome badges"],
      icon: "Shapes",
    },
    {
      id: "website-design",
      title: "Website Design",
      tagline: "Fast & modern web presence",
      description: "Modern responsive websites and landing pages for businesses, organisations and personal brands optimized for conversion.",
      deliverables: ["Mobile-first layout", "Fast page speeds", "WhatsApp direct lead capture"],
      icon: "Globe",
    },
    {
      id: "advertising-design",
      title: "Advertising Design",
      tagline: "Commercial promotional materials",
      description: "Promotional flyers, product adverts, roll-up banners and campaign materials designed to capture audience attention.",
      deliverables: ["Billboard & banner formats", "Flyers & brochures", "Commercial packaging"],
      icon: "Megaphone",
    },
    {
      id: "school-event-designs",
      title: "School & Event Designs",
      tagline: "Academic & celebratory visuals",
      description: "Professional school banners, admission adverts, event flyers, certificates, programmes and related celebration designs.",
      deliverables: ["School admission adverts", "Event programmes & tickets", "Certificates & banners"],
      icon: "GraduationCap",
    },
    {
      id: "cac-registration",
      title: "CAC Registration",
      tagline: "Official business structuring",
      description: "Professional assistance with business registration and related CAC documentation to establish your enterprise legally.",
      deliverables: ["Business name assistance", "Company registration guide", "Certificate processing"],
      icon: "FileCheck",
    },
  ],
  cacSection: {
    headline: "Register Your Business. Build It Properly.",
    description: "Get professional assistance with CAC business registration and establish your business with the right documentation.",
    servicesOffered: [
      "Business Name Registration",
      "Company Registration (LTD)",
      "CAC Documentation Assistance",
      "Business Information Updates",
      "Registration Guidance & Pre-Check",
      "Other CAC-related support services",
    ],
    notice: "We guide you step-by-step through the requirements, information preparation, and document processing so your business can operate with legal recognition.",
    disclaimer: "OjayGraphix is an independent creative and business registration service provider and is not a government agency. Professional service/processing fees are distinct from official government statutory filing fees where applicable. No guaranteed approval is claimed.",
  },
  portfolio: [
    {
      id: "proj-1",
      title: "Meridian Capital Corporate Identity",
      category: "Branding",
      clientType: "Financial Services",
      description: "Comprehensive corporate brand manual, clean wordmark, luxury stationery and executive presentation deck.",
      aspectRatio: "portrait",
      accentColor: "#0A2540",
      tags: ["Brand Identity", "Stationery", "Typography"],
    },
    {
      id: "proj-2",
      title: "Annual Tech Horizon Summit",
      category: "Flyers",
      clientType: "Tech Conference",
      description: "Striking event posters, keynote flyers, speaker announcements and digital display graphics.",
      aspectRatio: "landscape",
      accentColor: "#E11D74",
      tags: ["Event Flyer", "Editorial Poster", "Keynote"],
    },
    {
      id: "proj-3",
      title: "Korede Heritage High School",
      category: "Schools",
      clientType: "Educational Institution",
      description: "Official admission campaign flyers, graduation celebration banners, certificates, and student yearbooks.",
      aspectRatio: "portrait",
      accentColor: "#0A2540",
      tags: ["Admission Campaign", "Certificates", "Banners"],
    },
    {
      id: "proj-4",
      title: "Verve Logistics & Commerce Web Platform",
      category: "Websites",
      clientType: "Logistics Enterprise",
      description: "High-performance responsive business website with instant quote requests and mobile lead flows.",
      aspectRatio: "landscape",
      accentColor: "#0A2540",
      tags: ["Landing Page", "Responsive Web", "Lead Flow"],
    },
    {
      id: "proj-5",
      title: "Radiance Skincare Campaign Series",
      category: "Social Media",
      clientType: "Beauty & Wellness Brand",
      description: "Editorial social media promotion suite, seasonal campaign carousels and product feature spotlights.",
      aspectRatio: "square",
      accentColor: "#E11D74",
      tags: ["Social Media", "Product Promo", "Carousels"],
    },
    {
      id: "proj-6",
      title: "Aura Premium Food Products",
      category: "Business",
      clientType: "FMCG Brand",
      description: "Product packaging labels, commercial launch posters, promotional roll-up stands, and dealer cards.",
      aspectRatio: "square",
      accentColor: "#0A2540",
      tags: ["Packaging", "Adverts", "Business Cards"],
    },
  ],
  whyChooseUs: {
    title: "Why OjayGraphix?",
    subtitle: "A serious creative studio focused on clean aesthetics and reliable execution.",
    points: [
      {
        title: "Professional Finish",
        description: "Clean and polished designs created for professional presentation and high visual credibility.",
      },
      {
        title: "Custom Design",
        description: "Every project is thoughtfully designed around the client's specific vision, market, and practical goals.",
      },
      {
        title: "Business-Focused",
        description: "Designs are created to communicate clearly, attract attention, and support real commercial outcomes.",
      },
      {
        title: "Multiple Creative Services",
        description: "Graphics, branding, modern websites and CAC business registration support unified in one dependable partner.",
      },
      {
        title: "Direct Communication",
        description: "Direct contact with OjayGraphix through WhatsApp or phone with fast response times and clear updates.",
      },
      {
        title: "Attention to Detail",
        description: "Typography, spacing, hierarchy, color harmony, and visual consistency are meticulously crafted.",
      },
    ],
  },
  process: {
    title: "How It Works",
    subtitle: "A straightforward, structured workflow from concept to final delivery.",
    steps: [
      {
        number: "01",
        title: "Tell Us What You Need",
        description: "Send your project details, objectives, deadlines, and preferred requirements via WhatsApp or our enquiry form.",
      },
      {
        number: "02",
        title: "Discuss the Direction",
        description: "We clarify the concept, required deliverables, style, and content to align perfectly before starting design.",
      },
      {
        number: "03",
        title: "Design / Build",
        description: "The project is created with meticulous typography, composition, and professional finish according to the agreed plan.",
      },
      {
        number: "04",
        title: "Review & Deliver",
        description: "We review the design together, complete any final refinements, and hand over all high-resolution production assets.",
      },
    ],
    cacSteps: [
      { step: 1, title: "Contact OjayGraphix", description: "Reach out via WhatsApp or phone stating your business registration intent." },
      { step: 2, title: "Provide Required Information", description: "Submit proposed business names, proprietor/director details, and identification." },
      { step: 3, title: "Confirm Service & Fees", description: "Review and confirm service processing details and applicable fee breakdowns." },
      { step: 4, title: "Registration Processing", description: "Documentation is compiled, pre-checked, and submitted for official processing." },
      { step: 5, title: "Receive Completed Documents", description: "Receive your verified registration certificates and documents securely." },
    ],
  },
  about: {
    title: "About OjayGraphix",
    description: "OjayGraphix is a creative digital service brand focused on professional graphics design, branding, websites and business registration support. We help businesses, organisations, schools, events and individuals present themselves professionally through strong visual communication and practical digital solutions.",
    highlights: [
      "Dedicated to minimalist, clean, and intentional design systems.",
      "Clear direct communication and reliable project turnarounds.",
      "Serving diverse clients from local startups to established schools and organisations.",
    ],
  },
  clientTypes: [
    "Small Businesses",
    "Startups",
    "Schools & Academies",
    "Churches & Religious Organisations",
    "Event Planners",
    "Entrepreneurs",
    "Product Brands",
    "Personal Brands",
    "Individuals",
  ],
  testimonials: [], // Kept empty initially as instructed: "If no testimonials are available, display an elegant placeholder: Client testimonials will be added here. Make testimonials fully editable."
  faqs: [
    {
      id: "faq-1",
      question: "How do I start a design project?",
      answer: "Contact OjayGraphix through WhatsApp or phone (07032282964 / 07017681631) and provide your project requirements, or fill out the enquiry form on this website.",
    },
    {
      id: "faq-2",
      question: "Do you design social media graphics?",
      answer: "Yes. Social media flyers, promotional graphics, promotional carousels, and campaign designs are available for all major platforms.",
    },
    {
      id: "faq-3",
      question: "Do you design websites?",
      answer: "Yes. OjayGraphix offers modern business websites and landing pages built with fast loading speeds, mobile responsiveness, and direct WhatsApp contact channels.",
    },
    {
      id: "faq-4",
      question: "Do you handle CAC registration?",
      answer: "Yes. OjayGraphix provides professional assistance with CAC business registration and related documentation. Note: OjayGraphix is an independent service provider and is not a government agency.",
    },
    {
      id: "faq-5",
      question: "How do I contact OjayGraphix?",
      answer: "You can call or WhatsApp us directly at 07032282964 or 07017681631. We are available to answer your questions and guide you on your next creative project.",
    },
  ],
  socialLinks: {
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  },
};
