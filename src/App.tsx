import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AtmosphereToggle } from './components/AtmosphereToggle';
import { BrandStory } from './components/BrandStory';
import { InteractiveMenu } from './components/InteractiveMenu';
import { EventsCalendar } from './components/EventsCalendar';
import { ReviewsShowcase } from './components/ReviewsShowcase';
import { CareersSection } from './components/CareersSection';
import { VenuesSection } from './components/VenuesSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { OrderDrawer } from './components/OrderDrawer';
import { FloatingActions } from './components/FloatingActions';
import { CartItem, MenuItem } from './types';

export const App: React.FC = () => {
  // Day / Night Atmosphere mode: default to night if evening, or day if morning/afternoon
  const [atmosphereMode, setAtmosphereMode] = useState<'day' | 'night'>(() => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 16 ? 'day' : 'night';
  });

  // WhatsApp Pre-Order Cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tomorrowland_order_tray');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledEvent, setPrefilledEvent] = useState<string | undefined>(undefined);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tomorrowland_order_tray', JSON.stringify(cart));
    } catch {
      // localStorage may fail in private mode
    }
  }, [cart]);

  // Cart operations
  const addToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === itemId);
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        return prev.filter((c) => c.item.id !== itemId);
      }
      return prev.map((c) =>
        c.item.id === itemId ? { ...c, quantity: c.quantity - 1 } : c
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleRSVPEvent = (eventTitle: string) => {
    setPrefilledEvent(eventTitle);
    setIsBookingOpen(true);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen ${atmosphereMode === 'day' ? 'mode-daylight' : 'mode-nightlife'}`}>
      {/* Navigation */}
      <Navbar
        atmosphereMode={atmosphereMode}
        setAtmosphereMode={setAtmosphereMode}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        setIsBookingOpen={setIsBookingOpen}
      />

      {/* Hero: Zero-Face Brand Engine */}
      <Hero
        atmosphereMode={atmosphereMode}
        setIsBookingOpen={setIsBookingOpen}
        onExploreMenu={scrollToMenu}
      />

      {/* Atmosphere Switcher & Hybrid Business Model */}
      <AtmosphereToggle
        atmosphereMode={atmosphereMode}
        setAtmosphereMode={setAtmosphereMode}
      />

      {/* The Space: 2,660 sq. ft. Architecture & Vivid Interiors Walkthrough */}
      <BrandStory />

      {/* Interactive Digital Menu with instant WhatsApp Tray */}
      <InteractiveMenu
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Live Event & Gig Calendar */}
      <EventsCalendar onRSVPEvent={handleRSVPEvent} />

      {/* 4.6★ / 278+ Verified Google Reviews Showcase */}
      <ReviewsShowcase />

      {/* Careers & Active Hiring Posts */}
      <CareersSection />

      {/* Locations: Main Flagship Hub + Riverside Tomorrowland */}
      <VenuesSection />

      {/* Editorial Footer */}
      <Footer setIsBookingOpen={setIsBookingOpen} />

      {/* Modals & Drawers */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setPrefilledEvent(undefined);
        }}
        prefilledEvent={prefilledEvent}
      />

      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />

      {/* Omnipresent Floating Action Buttons */}
      <FloatingActions
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        setIsBookingOpen={setIsBookingOpen}
      />
    </div>
  );
};

export default App;
