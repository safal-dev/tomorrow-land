import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
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
  // Day / Night Atmosphere mode for theme
  const [atmosphereMode, setAtmosphereMode] = useState<'day' | 'night'>(() => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 16 ? 'day' : 'night';
  });

  // Pre-Order Tray Cart state for menu
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tomorrowland_order_tray');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tomorrowland_order_tray', JSON.stringify(cart));
    } catch {
      // fallback
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

  return (
    <div className={`min-h-screen ${atmosphereMode === 'day' ? 'mode-daylight' : 'mode-nightlife'}`}>
      {/* Clean Global Navigation */}
      <Navbar />

      {/* Main Page Routing */}
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                atmosphereMode={atmosphereMode}
                setAtmosphereMode={setAtmosphereMode}
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
          <Route path="/the-space" element={<SpacePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Shared Global Footer */}
      <Footer />

      {/* Clean WhatsApp Floating Quick Button */}
      <FloatingActions />
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
