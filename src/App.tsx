/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ContentProvider } from './context/ContentContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { ServicesSection } from './components/ServicesSection';
import { CACSection } from './components/CACSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProjectBriefModal } from './components/ProjectBriefModal';
import { PortfolioDetailModal } from './components/PortfolioDetailModal';
import { AdminManagerModal } from './components/AdminManagerModal';

export default function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-neutral-900 selection:bg-[#0A2540] selection:text-white antialiased">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          {/* Section 6: Hero */}
          <Hero />

          {/* Section 7: Trust / Service Introduction */}
          <TrustIntro />

          {/* Section 8: Services */}
          <ServicesSection />

          {/* Section 9: CAC Registration Feature */}
          <CACSection />

          {/* Section 10: Selected Work / Portfolio */}
          <PortfolioSection />

          {/* Section 11: Why Choose OjayGraphix */}
          <WhyChooseUs />

          {/* Section 12: Process */}
          <ProcessSection />

          {/* Section 13 & 14: About & Client Types */}
          <AboutSection />

          {/* Section 15: Testimonials (Authentic / Editable) */}
          <TestimonialsSection />

          {/* Section 16: FAQs */}
          <FAQSection />

          {/* Section 17 & 18: Contact & Brief Enquiry Form */}
          <ContactSection />
        </main>

        {/* Section 20: Footer */}
        <Footer />

        {/* Section 19: Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Modals & Interactive Overlays */}
        <ProjectBriefModal />
        <PortfolioDetailModal />
        <AdminManagerModal />
      </div>
    </ContentProvider>
  );
}
