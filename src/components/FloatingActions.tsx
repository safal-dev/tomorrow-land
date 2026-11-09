import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Direct Call Quick Link */}
      <a
        href="tel:+9779806919349"
        className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-noir/90 backdrop-blur-md border border-white/15 text-gray-200 hover:text-white text-xs font-semibold shadow-lg hover:border-brand-gold transition-all"
        title="Call Hotline"
      >
        <Phone className="w-3.5 h-3.5 text-brand-gold" />
        <span>+977 9806919349</span>
      </a>

      {/* WhatsApp Hotline (Clean, No Shop Icon, No Book Table) */}
      <a
        href="https://wa.me/9779806919349?text=Hi%20TomorrowLand,%20I%20would%20like%20to%20inquire%20about%20visiting%20today!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-2xl transition-all hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
