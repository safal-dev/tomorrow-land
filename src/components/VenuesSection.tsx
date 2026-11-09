import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Car
} from 'lucide-react';
import { BRANCHES_DATA } from '../data/branchesData';

export const VenuesSection: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-brand-obsidian relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center justify-center gap-1.5">
            <MapPin className="w-4 h-4 text-brand-gold" />
            Our Properties
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Two Distinct Destinations in Kawasoti
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 font-light">
            Whether you seek urban industrial energy right on the Kumarwoti College corridor 
            or an open-air riverfront getaway along the Narayani breeze, TomorrowLand has your spot reserved.
          </p>
        </div>

        {/* Dual Branch Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {BRANCHES_DATA.map((branch) => (
            <div
              key={branch.id}
              className="rounded-3xl bg-brand-cardDark border border-white/10 hover:border-brand-gold/40 transition-all overflow-hidden flex flex-col justify-between shadow-2xl group"
            >
              {/* Branch Photo */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-noir">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cardDark via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-brand-gold text-black text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    {branch.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white font-serif">
                    {branch.name}
                  </h3>
                  <p className="text-xs text-brand-goldLight mt-0.5">
                    {branch.tagline}
                  </p>
                </div>
              </div>

              {/* Branch Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3 text-sm text-gray-300">
                    <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">{branch.address}</strong>
                      <span className="text-xs text-gray-400">{branch.landmark}</span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Opening Hours</span>
                      <strong className="text-white font-semibold">{branch.hours}</strong>
                    </div>
                  </div>

                  {/* Phone lines */}
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Direct Telephone & WhatsApp</span>
                      <div className="flex items-center gap-2">
                        <a href={`tel:${branch.phone}`} className="text-white font-bold hover:text-brand-gold">
                          {branch.phone}
                        </a>
                        <span>•</span>
                        <a href={`tel:${branch.altPhone}`} className="text-gray-300 hover:text-white">
                          {branch.altPhone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features Checklist */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">
                    Venue Amenities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                    {branch.features.slice(0, 6).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={branch.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Get GPS Directions</span>
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </a>

                  <a
                    href={`https://wa.me/9779806919349?text=${encodeURIComponent(
                      `Hi TomorrowLand! I am planning to visit ${branch.name}. Are tables available today?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
