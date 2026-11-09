import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  Calendar, 
  ShoppingBag, 
  Sun, 
  Moon, 
  Sparkles
} from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  atmosphereMode: 'day' | 'night';
  setAtmosphereMode: (mode: 'day' | 'night') => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setIsBookingOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  atmosphereMode,
  setAtmosphereMode,
  cart,
  setIsCartOpen,
  setIsBookingOpen,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const totalItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Digital Menu', path: '/menu' },
    { name: 'The Space', path: '/the-space' },
    { name: 'Live Gigs', path: '/events' },
    { name: 'Reviews (4.6★)', path: '/reviews' },
    { name: 'Careers', path: '/careers', badge: 'Hiring' },
    { name: 'Locations & Reserve', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-brand-obsidian/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-brand-gold/60 group-hover:border-brand-gold transition-all shadow-md group-hover:shadow-neon-gold">
              <img
                src="/images/logo.jpg"
                alt="TomorrowLand Cafe & Restro Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="font-display font-extrabold tracking-wider text-base sm:text-xl text-white flex items-center gap-1.5">
                TOMORROWLAND
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              </span>
              <span className="block text-[10px] tracking-widest text-brand-gold uppercase font-medium">
                Cafe & Restro • Kawasoti
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs uppercase tracking-wider font-semibold transition-all relative py-1 ${
                    active
                      ? 'text-brand-gold font-bold'
                      : 'text-gray-300 hover:text-brand-gold'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full" />
                  )}
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold uppercase rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Atmosphere Day/Night Mood Toggle */}
            <button
              onClick={() => setAtmosphereMode(atmosphereMode === 'day' ? 'night' : 'day')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
                atmosphereMode === 'day'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                  : 'bg-brand-neonPurple/20 text-purple-300 border-brand-neonPurple/40 hover:bg-brand-neonPurple/30'
              }`}
              title="Toggle Day Specialty Cafe or Night Pub Atmosphere"
            >
              {atmosphereMode === 'day' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
                  <span className="hidden sm:inline">Day Cafe</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-purple-400" />
                  <span className="hidden sm:inline">Night Pub</span>
                </>
              )}
            </button>

            {/* Pre-Order Tray Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 transition-colors"
              title="View WhatsApp Pre-Order Tray"
            >
              <ShoppingBag className="w-4 h-4 text-brand-gold" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center rounded-full bg-brand-gold text-black text-[11px] font-bold animate-bounce">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Direct RSVP Reservation CTA */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold via-amber-400 to-brand-bronze text-brand-obsidian text-xs font-bold tracking-wide uppercase hover:opacity-95 transition-all shadow-md hover:shadow-neon-gold"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10"
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-brand-obsidian border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Link to="/" className="flex items-center gap-2.5">
                  <img
                    src="/images/logo.jpg"
                    alt="TomorrowLand Logo"
                    className="w-10 h-10 rounded-full border border-brand-gold"
                  />
                  <div>
                    <h3 className="font-display font-bold text-white text-base">TOMORROWLAND</h3>
                    <p className="text-[10px] text-brand-gold uppercase tracking-wider">Kawasoti-2, Nawalpur</p>
                  </div>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Atmosphere Switcher for Mobile */}
              <div className="my-5 p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-gray-400 block text-[10px] uppercase tracking-wider">Atmosphere Mode</span>
                  <span className="font-semibold text-white">
                    {atmosphereMode === 'day' ? '☀️ Daytime Cafe & Study' : '🌙 Electric Nightlife Pub'}
                  </span>
                </div>
                <button
                  onClick={() => setAtmosphereMode(atmosphereMode === 'day' ? 'night' : 'day')}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-brand-gold text-black"
                >
                  Switch
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 py-2">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-colors ${
                        active
                          ? 'bg-brand-gold/15 text-brand-gold font-bold'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.badge && (
                        <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsBookingOpen(true);
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-gold to-amber-500 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                Book a Table / RSVP
              </button>

              <a
                href="https://wa.me/9779806919349?text=Hi%20TomorrowLand,%20I%20would%20like%20to%20inquire%20about%20visiting%20today!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-emerald-600/30 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Chat on WhatsApp (+977 9806919349)
              </a>

              <p className="text-[11px] text-center text-gray-400 pt-1">
                Kumarwoti College Line, Kawasoti-2
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
