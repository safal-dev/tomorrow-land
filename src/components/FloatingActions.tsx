import React from 'react';
import { MessageCircle, Calendar, Phone, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface FloatingActionsProps {
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsBookingOpen: (open: boolean) => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  cart,
  setIsCartOpen,
  setIsBookingOpen,
}) => {
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col sm:flex-row items-end sm:items-center gap-2.5">
      {/* Call Hotline Quick Link */}
      <a
        href="tel:+9779806919349"
        className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-noir/90 backdrop-blur-md border border-white/15 text-gray-200 hover:text-white text-xs font-semibold shadow-lg hover:border-brand-gold transition-all"
        title="Call Hotline"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400" />
        <span>+977 9806919349</span>
      </a>

      {/* Path B: Table RSVP */}
      <button
        onClick={() => setIsBookingOpen(true)}
        className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-brand-noir/95 backdrop-blur-md border border-brand-gold/60 text-brand-gold hover:text-white hover:bg-brand-gold/20 text-xs font-bold uppercase tracking-wider shadow-xl transition-all"
      >
        <Calendar className="w-4 h-4 text-brand-gold" />
        <span className="hidden sm:inline">Book Table / RSVP</span>
        <span className="sm:hidden">RSVP</span>
      </button>

      {/* Path A: WhatsApp Pre-Order Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 text-white font-extrabold text-xs sm:text-sm tracking-wide uppercase hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-emerald-500/30"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>Pre-Order on WhatsApp</span>
        {totalCartCount > 0 && (
          <span className="ml-1 w-5 h-5 flex items-center justify-center rounded-full bg-white text-emerald-700 text-[11px] font-black animate-pulse">
            {totalCartCount}
          </span>
        )}
      </button>
    </div>
  );
};
