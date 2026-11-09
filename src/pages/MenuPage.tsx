import React from 'react';
import { InteractiveMenu } from '../components/InteractiveMenu';
import { CartItem, MenuItem } from '../types';

interface MenuPageProps {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  setIsCartOpen: (open: boolean) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  cart,
  addToCart,
  removeFromCart,
  setIsCartOpen,
}) => {
  return (
    <div className="pt-24 pb-16 bg-brand-obsidian min-h-screen">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
          Culinary Catalog • Kawasoti-2
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
          Our Digital Menu
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          Crafted from fresh Himalayan ingredients, artisan coffee beans, and high-heat wok sizzle. 
          Tap any item to add to your WhatsApp Pre-Order tray for lightning-fast 20-minute turnaround.
        </p>
      </div>

      {/* Interactive Menu Engine */}
      <InteractiveMenu
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        setIsCartOpen={setIsCartOpen}
      />
    </div>
  );
};
