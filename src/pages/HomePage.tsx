import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Star, 
  Coffee, 
  Flame, 
  Music, 
  MapPin, 
  Layers, 
  ShoppingBag,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Hero } from '../components/Hero';
import { AtmosphereToggle } from '../components/AtmosphereToggle';
import { MENU_ITEMS } from '../data/menuData';
import { UPCOMING_EVENTS } from '../data/eventsData';
import { REVIEWS_DATA } from '../data/reviewsData';

interface HomePageProps {
  atmosphereMode: 'day' | 'night';
  setAtmosphereMode: (mode: 'day' | 'night') => void;
  setIsBookingOpen: (open: boolean) => void;
  onExploreMenu: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  atmosphereMode,
  setAtmosphereMode,
  setIsBookingOpen,
  onExploreMenu,
}) => {
  // Signature featured dishes for Home Teaser
  const featuredDishes = [
    MENU_ITEMS.find((i) => i.id === 'jhol-momo')!,
    MENU_ITEMS.find((i) => i.id === 'chicken-pizza')!,
    MENU_ITEMS.find((i) => i.id === 'gourmet-smash-burger')!,
    MENU_ITEMS.find((i) => i.id === 'specialty-latte')!,
  ].filter(Boolean);

  // Top 2 gigs
  const featuredGigs = UPCOMING_EVENTS.slice(0, 2);

  // Top 3 real reviews
  const topReviews = REVIEWS_DATA.slice(0, 3);

  return (
    <div className="bg-brand-obsidian">
      {/* 1. Hero: The Atmosphere Engine */}
      <Hero
        atmosphereMode={atmosphereMode}
        setIsBookingOpen={setIsBookingOpen}
        onExploreMenu={onExploreMenu}
      />

      {/* 2. Experiential Day-to-Night Dual Soul Toggle */}
      <AtmosphereToggle
        atmosphereMode={atmosphereMode}
        setAtmosphereMode={setAtmosphereMode}
      />

      {/* 3. Signature Taste Showcase (Visual-First, Clean) */}
      <section className="py-20 bg-brand-obsidian relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-brand-gold" />
                Crowd Obsessions
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-1">
                The Flavors Kawasoti Talks About
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-brand-gold hover:text-white transition-colors group"
            >
              <span>Explore Complete Digital Menu</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group rounded-3xl bg-brand-cardDark border border-white/5 hover:border-brand-gold/40 transition-all overflow-hidden flex flex-col justify-between shadow-lg"
              >
                <div className="relative h-48 w-full overflow-hidden bg-brand-noir">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-brand-gold/60 text-brand-gold font-mono font-bold text-xs">
                    Rs. {dish.price}
                  </div>
                  {dish.isPopular && (
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-brand-gold text-black text-[10px] font-extrabold uppercase">
                      #1 Pick
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-white text-base group-hover:text-brand-gold transition-colors">
                      {dish.name}
                    </h3>
                    {dish.nepaliName && (
                      <span className="text-xs text-brand-gold/80 font-serif block mb-2">
                        {dish.nepaliName}
                      </span>
                    )}
                    <p className="text-xs text-gray-400 line-clamp-2 font-light">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-gray-400 font-mono">
                      ~{dish.prepTime || '15 mins'}
                    </span>
                    <Link
                      to="/menu"
                      className="text-xs text-brand-gold font-semibold hover:underline flex items-center gap-1"
                    >
                      <span>Order</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Space & Architecture Spotlight (Vivid Interiors) */}
      <section className="py-20 bg-brand-noir relative border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                2,660 Sq. Ft. Industrial-Chic Architecture
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
                Designed by Vivid Interiors for True Sensory Domination
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                Raw exposed steel beams, warm reclaimed timber, lush cascading greens, and custom 
                neon typography. We engineered multiple distinct zones—from a quiet, air-conditioned 
                family ground floor to our high-energy upstairs hookah lounge and outdoor deck.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-brand-cardDark border border-white/5">
                  <span className="text-2xl font-display font-bold text-brand-gold block">2,660</span>
                  <span className="text-xs text-gray-400">Square Feet Footprint</span>
                </div>
                <div className="p-4 rounded-2xl bg-brand-cardDark border border-white/5">
                  <span className="text-2xl font-display font-bold text-emerald-400 block">2</span>
                  <span className="text-xs text-gray-400">Properties (Hub & Riverside)</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/the-space"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-gold text-brand-obsidian font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md"
                >
                  <span>Explore The Full Space & Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Architecture Preview Mosaic */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-56 rounded-3xl overflow-hidden bg-brand-cardDark border border-white/10 shadow-lg">
                  <img
                    src="/images/tomorrowland_hero.jpg"
                    alt="Tomorrowland Facade"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-40 rounded-3xl overflow-hidden bg-brand-cardDark border border-white/10 shadow-lg">
                  <img
                    src="/images/tomorrowland_interior_1.jpg"
                    alt="Interior dining"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="h-40 rounded-3xl overflow-hidden bg-brand-cardDark border border-white/10 shadow-lg">
                  <img
                    src="/images/tomorrowland_interior_2.jpg"
                    alt="Stage and Neon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-56 rounded-3xl overflow-hidden bg-brand-cardDark border border-white/10 shadow-lg">
                  <img
                    src="/images/riverside_tomorrowland.jpg"
                    alt="Riverside Tomorrowland"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Weekend Vibes & Live Gigs Teaser */}
      <section className="py-20 bg-brand-obsidian relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center gap-1.5">
                <Music className="w-4 h-4 text-brand-gold" />
                Live Stage & Sports Arena
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-1">
                Your Weekends Happen Here
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-1.5 text-xs uppercase font-bold text-brand-gold hover:text-white transition-colors group"
            >
              <span>View Full Lineup Schedule</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredGigs.map((gig) => (
              <div
                key={gig.id}
                className="rounded-3xl bg-brand-cardDark border border-white/10 overflow-hidden flex flex-col sm:flex-row group hover:border-brand-gold/40 transition-all shadow-xl"
              >
                <div className="sm:w-1/2 h-52 sm:h-auto relative overflow-hidden bg-brand-noir">
                  <img
                    src={gig.image}
                    alt={gig.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs font-bold text-brand-gold">
                    {gig.dayOfWeek}
                  </div>
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold block mb-1">
                      {gig.date} • {gig.time}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">
                      {gig.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-3 font-light">
                      {gig.description}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-400 font-semibold">
                      Free Entry
                    </span>
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="px-4 py-2 rounded-xl bg-brand-gold text-black text-xs font-bold uppercase tracking-wider hover:opacity-90"
                    >
                      Reserve Spot
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Real Verified Customer Praise Teaser */}
      <section className="py-20 bg-brand-noir border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-brand-gold text-xs font-bold uppercase tracking-widest mb-2">
              <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
              Rated 4.6★ by 278+ Verified Diners
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">
              Loved by Kawasoti
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topReviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-3xl bg-brand-cardDark border border-white/5 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex text-brand-gold mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 italic font-light leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <strong className="text-white font-bold">{rev.author}</strong>
                  <span className="text-gray-500 font-mono">{rev.dateText}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-gold hover:text-white transition-colors"
            >
              <span>Read all 278+ Google & Facebook Reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Bottom Call-to-Action Bar */}
      <section className="py-16 bg-gradient-to-r from-brand-cardDark via-black to-brand-cardDark border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-brand-gold">
            Step Into Tomorrow
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
            Ready to Experience TomorrowLand?
          </h2>
          <p className="text-gray-300 text-sm max-w-xl mx-auto font-light">
            Whether for your morning double shot flat white, afternoon jhol momo craving, 
            or high-voltage weekend lounge session.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-gold text-brand-obsidian font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-neon-gold"
            >
              Book Table / Event RSVP
            </button>
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/15"
            >
              Explore Digital Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
