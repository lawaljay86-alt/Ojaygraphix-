import React from 'react';
import { useContent } from '../context/ContentContext';
import { getWhatsAppUrl } from '../config/theme';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { content } = useContent();

  const msg = "Hello OjayGraphix, I would like to make an enquiry.";
  const href = getWhatsAppUrl(content.brand.whatsappNumber, msg);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-5 right-5 z-40">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs sm:text-sm rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
        aria-label="Chat with OjayGraphix on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="hidden sm:inline font-medium">WhatsApp Us</span>
      </a>
    </aside>
  );
};
