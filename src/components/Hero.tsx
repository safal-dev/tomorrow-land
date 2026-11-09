import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Star, 
  Coffee, 
  Flame, 
  Music, 
  Clock, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface HeroProps {
  atmosphereMode: 'day' | 'night';
  setIsBookingOpen: (open: boolean) => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  atmosphereMode,
  setIsBookingOpen,
  onExploreMenu,
}) => {
  // Background images cycle: official Vivid Interiors interior architecture + signature dish
  const heroImages = [
    {
      url: '/images/tomorrowland_hero.jpg',
      caption: '2,660 Sq. Ft. Industrial-Chic Space • Vivid Interiors Design',
      tag: 'Flagship Venue',
    },
    {
      url: '/images/tomorrowland_interior_1.jpg',
      caption: 'Warm Day Ambiance & Velvet Specialty Coffee',
      tag: 'Daytime Lounge',
    },
    {
      url: '/images/tomorrowland_interior_2.jpg',
      caption: 'Pulsing Neon Nightlife, Cocktails & Live Sports Screenings',
      tag: 'Nightlife Pub',
    },
    {
      url: '/images/jhol_momo.jpg',
      caption: 'The Famed Tomorrowland Spiced Jhol Momo — #1 Crowd Favorite',
      tag: 'Signature Taste',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image Carousel with Atmospheric Gradients */}
      {heroImages.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[7000ms]`}
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Atmospheric Overlays based on Day/Night Mode */}
      <div 
        className={`absolute inset-0 transition-all duration-700 ${
          atmosphereMode === 'day'
            ? 'bg-gradient-to-t from-brand-obsidian via-brand-obsidian/75 to-black/55'
            : 'bg-gradient-to-t from-brand-obsidian via-brand-noir/85 to-purple-950/40'
        }`}
      />

      {/* Radial Neon Glow Accent */}
      <div 
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none transition-colors duration-1000 ${
          atmosphereMode === 'day' ? 'bg-amber-500/15' : 'bg-brand-neonPurple/20'
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        {/* Live Operational Status & Rating Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-gray-200 mb-6 shadow-glow-soft">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-white tracking-wide">OPEN DAILY 7:00 AM – 10:00 PM</span>
          <span className="text-gray-500">•</span>
          <div className="flex items-center gap-1 text-brand-gold font-bold">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <span>4.6</span>
            <span className="text-gray-400 font-normal text-[11px]">(278+ Reviews)</span>
          </div>
        </div>

        {/* Master Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.08] drop-shadow-xl">
          Where Daylight Conversations{' '}
          <span className="block mt-1 bg-gradient-to-r from-brand-gold via-amber-300 to-brand-goldLight bg-clip-text text-transparent italic font-normal">
            Melt Into Electric Nights.
          </span>
        </h1>

        {/* Sub-Copy & Strategic Positioning */}
        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
          Kawasoti’s premier 2,660 sq. ft. industrial-chic destination on Kumarwoti College Line. 
          A sunlit specialty coffee sanctuary by morning that transforms into a pulsing sports pub, 
          acoustic music lounge, and cocktail haven by dusk.
        </p>

        {/* Primary Frictionless Action Pipelines (Path A & Path B) */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          {/* Path B: Event Booking & Table RSVP */}
          <button
            onClick={() => setIsBookingOpen(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-brand-gold via-amber-400 to-brand-bronze text-brand-obsidian font-bold text-sm tracking-wide uppercase hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-neon-gold flex items-center justify-center gap-2 group"
          >
            <Calendar className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            <span>Book Table & Milestone RSVP</span>
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Path A: Explore Menu & Direct WhatsApp Pre-Order */}
          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 backdrop-blur-md text-white font-semibold text-sm tracking-wide border border-white/20 hover:border-brand-gold/60 transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Digital Menu</span>
            <ChevronRight className="w-4 h-4 text-brand-gold" />
          </button>
        </div>

        {/* Hero Features Strip (Social Proof & Assets) */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Space</span>
            </div>
            <p className="text-white font-bold text-sm sm:text-base">2,660 Sq. Ft. Layout</p>
            <p className="text-gray-400 text-xs">Designed by Vivid Interiors</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Flame className="w-3.5 h-3.5" />
              <span>Crowd Craving</span>
            </div>
            <p className="text-white font-bold text-sm sm:text-base">Legendary Jhol Momo</p>
            <p className="text-gray-400 text-xs">#1 Most Praised Dish</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-brand-neonPurple text-xs font-semibold uppercase tracking-wider mb-1">
              <Music className="w-3.5 h-3.5" />
              <span>Live Entertainment</span>
            </div>
            <p className="text-white font-bold text-sm sm:text-base">Acoustic & DJ Gigs</p>
            <p className="text-gray-400 text-xs">Big Screen Cricket Arenas</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Two Properties</span>
            </div>
            <p className="text-white font-bold text-sm sm:text-base">Hub + Riverside</p>
            <p className="text-gray-400 text-xs">Kawasoti & Narayani Deck</p>
          </div>
        </div>

        {/* Carousel Micro Navigation Dots */}
        <div className="mt-8 flex items-center gap-2">
          {heroImages.map((img, idx) => (
            <button
              key={img.url}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentImageIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Show slide ${idx + 1}: ${img.caption}`}
            />
          ))}
          <span className="ml-3 text-[11px] text-gray-400 hidden sm:inline font-mono">
            {heroImages[currentImageIndex].tag}
          </span>
        </div>
      </div>
    </section>
  );
};
