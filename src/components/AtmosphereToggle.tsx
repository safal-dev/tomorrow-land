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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            The Hybrid Business Model
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">
            One Landmark Space. Two Distinct Souls.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-4 font-light">
            Designed to never compromise between the focused morning creator and the weekend 
            nightlife enthusiast. Toggle below to experience how TomorrowLand transforms from 
            first light to late midnight.
          </p>

          {/* Interactive Toggle Switch */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-black/60 border border-white/10 shadow-lg">
            <button
              onClick={() => setAtmosphereMode('day')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                atmosphereMode === 'day'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>Daytime Sanctuary (7 AM – 4 PM)</span>
            </button>
            <button
              onClick={() => setAtmosphereMode('night')}
              className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                atmosphereMode === 'night'
                  ? 'bg-gradient-to-r from-purple-600 to-brand-neonPurple text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>Nightlife Arena (4 PM – Late)</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Cards Comparison */}
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
                  <h3 className="text-xl font-bold text-white">The Daytime Sanctuary</h3>
                  <p className="text-xs text-amber-400 font-medium">Specialty Coffee & Fast-Casual Lounge</p>
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
                  Natural daylight pouring over custom wooden tables, lush hanging plants, and cozy booths.
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <Wifi className="w-4 h-4 text-amber-400 shrink-0" />
                <span>High-Speed 100 Mbps Wi-Fi & laptop-charging power points at tables</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Coffee className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Locally sourced single-origin Arabica espresso, pour-overs & velvet flat whites</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Lightning 15-minute quick-serve lunch menus tailored to tight college timetables</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Spacious booth layouts accommodating student study groups and highway travelers</span>
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
                  <h3 className="text-xl font-bold text-white">The Nightlife Arena</h3>
                  <p className="text-xs text-purple-300 font-medium">Pub, Acoustic Gigs & Live Sports</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                04:00 PM – 10:00 PM+
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
                  Custom neon installations, moody industrial lighting, and a buzzing evening crowd.
                </p>
              </div>
            </div>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <Music className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Weekly live acoustic Friday gigs and high-voltage Saturday DJ sets</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Tv className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Giant 4K projection match screenings for Nepal cricket, football & international leagues</span>
              </li>
              <li className="flex items-center gap-2.5">
                <GlassWater className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Full craft bar serving chilled draught beers, signature neon cocktails & mocktails</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Wind className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Dedicated ventilated hookah lounge floor with premium exotic shisha blends</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
