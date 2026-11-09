import React from 'react';
import { Sun, Moon, Wifi, Coffee, Music, Tv, Wind, GlassWater, Clock, Users } from 'lucide-react';

interface AtmosphereToggleProps {
  atmosphereMode: 'day' | 'night';
  setAtmosphereMode: (mode: 'day' | 'night') => void;
}

export const AtmosphereToggle: React.FC<AtmosphereToggleProps> = ({
  atmosphereMode,
  setAtmosphereMode,
}) => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-brand-noir/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Centered on Customer Desires */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            A Place for Every Hour
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            Your Morning Coffee. Your Evening Celebration.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 font-light">
            Whether you need a sunlit corner with fast Wi-Fi to focus on your studies, or a lively 
            table surrounded by friends, live acoustic music, and cold drinks.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-black/60 border border-white/10 shadow-lg">
            <button
              onClick={() => setAtmosphereMode('day')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                atmosphereMode === 'day'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Daytime Cafe (7 AM – 4 PM)</span>
            </button>
            <button
              onClick={() => setAtmosphereMode('night')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                atmosphereMode === 'night'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Evening Lounge (4 PM – Late)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Cards Focused on Customer Desires */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Day Mode Card */}
          <div
            onClick={() => setAtmosphereMode('day')}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-500 border relative overflow-hidden ${
              atmosphereMode === 'day'
                ? 'bg-gradient-to-br from-amber-950/30 via-brand-cardDark to-brand-noir border-amber-500/50 shadow-2xl scale-[1.01]'
                : 'bg-brand-cardDark/50 border-white/5 opacity-70 hover:opacity-90'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Coffee className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Morning Brews & Relaxed Dining</h3>
                  <p className="text-xs text-amber-400 font-medium">Specialty coffee, quiet booths & fresh food</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
                07:00 AM – 04:00 PM
              </span>
            </div>

            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6">
              <img
                src="/images/tomorrowland_interior_1.jpg"
                alt="Daytime cafe at Tomorrowland"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <p className="text-xs text-gray-200">
                  Natural sunlight, lush indoor plants, comfortable seating, and the aroma of fresh coffee.
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <Wifi className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Fast 100 Mbps Wi-Fi & laptop charging plugs at your table</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Single-origin espresso, velvet flat whites, and fresh fruit smoothies</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Quick-serve lunch menu ready in 15 minutes between college classes</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Cozy private booths for studying, friendly catchups, or a relaxing highway stop</span>
              </li>
            </ul>
          </div>

          {/* Night Mode Card */}
          <div
            onClick={() => setAtmosphereMode('night')}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-500 border relative overflow-hidden ${
              atmosphereMode === 'night'
                ? 'bg-gradient-to-br from-purple-950/40 via-brand-cardDark to-brand-noir border-brand-neonPurple/60 shadow-2xl scale-[1.01]'
                : 'bg-brand-cardDark/50 border-white/5 opacity-70 hover:opacity-90'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Music className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nightlife, Music & Group Feasts</h3>
                  <p className="text-xs text-purple-300 font-medium">Live acoustic gigs, match screenings & cold drinks</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                04:00 PM – Late
              </span>
            </div>

            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden mb-6">
              <img
                src="/images/tomorrowland_interior_2.jpg"
                alt="Nightlife pub at Tomorrowland"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                <p className="text-xs text-gray-200">
                  Warm neon glow, mood lighting, buzzing crowd, and live stage music.
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <Music className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Live acoustic sessions every Friday and high-energy DJ weekends</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Tv className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Giant 4K projector screens to cheer for Nepal national cricket and football</span>
              </li>
              <li className="flex items-center gap-2.5">
                <GlassWater className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Chilled draft beers, signature cocktails, mocktails, and sharing platters</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Wind className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Dedicated upper-floor lounge with fresh ventilation for premium hookah flavors</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
