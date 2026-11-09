import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { OrderDrawer } from './components/OrderDrawer';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { SpacePage } from './pages/SpacePage';
import { EventsPage } from './pages/EventsPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';

import { CartItem, MenuItem } from './types';

const AppContent: React.FC = () => {
  const navigate = useNavigate();

  // Day / Night Atmosphere mode: default based on local hour
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
      // localStorage fallback
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

  const handleExploreMenu = () => {
    navigate('/menu');
  };

  return (
    <div className={`min-h-screen ${atmosphereMode === 'day' ? 'mode-daylight' : 'mode-nightlife'}`}>
      {/* Top Special Live Announcement Bar */}
      <AnnouncementBar onRSVP={handleRSVPEvent} />

      {/* Main Global Navigation */}
      <Navbar
        atmosphereMode={atmosphereMode}
        setAtmosphereMode={setAtmosphereMode}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        setIsBookingOpen={setIsBookingOpen}
      />

      {/* Page Routing */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                atmosphereMode={atmosphereMode}
                setAtmosphereMode={setAtmosphereMode}
                setIsBookingOpen={setIsBookingOpen}
                onExploreMenu={handleExploreMenu}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <MenuPage
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                setIsCartOpen={setIsCartOpen}
              />
            }
          />
          <Route
            path="/the-space"
            element={<SpacePage onReserveZone={handleRSVPEvent} />}
          />
          <Route
            path="/events"
            element={<EventsPage onRSVPEvent={handleRSVPEvent} />}
          />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route
            path="/contact"
            element={<ContactPage prefilledEvent={prefilledEvent} />}
          />
        </Routes>
      </main>

      {/* Shared Global Footer */}
      <Footer setIsBookingOpen={setIsBookingOpen} />

      {/* Shared Global Modals & Drawers */}
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

      {/* Omnipresent Floating Action Triggers */}
      <FloatingActions
        cart={cart}
        setIsCartOpen={setIsCartOpen}
        setIsBookingOpen={setIsBookingOpen}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
