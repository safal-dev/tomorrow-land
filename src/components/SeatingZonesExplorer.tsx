import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle2, 
  Calendar,
  Layers
} from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  tagline: string;
  capacity: string;
  type: 'Indoor Non-Smoking' | 'Night Pub & Stage' | 'Upper Ventilated' | 'Outdoor Garden' | 'Riverfront Deck';
  image: string;
  features: string[];
  description: string;
}

const VENUE_ZONES: Zone[] = [
  {
    id: 'ground-floor',
    name: 'Ground Floor Family & Dining Lounge',
    tagline: 'Quiet, air-conditioned, non-smoking haven designed with lush indoor greenery',
    capacity: '45 Seats',
    type: 'Indoor Non-Smoking',
    image: '/images/tomorrowland_interior_1.jpg',
    features: [
      'Strictly non-smoking zone ideal for families and students',
      'Plush booth seating with soft warm Edison lighting',
      'Air-conditioned comfort during warm Nawalpur days',
      'Direct service from both the kitchen and coffee bar',
    ],
    description: 'Designed for effortless comfort. Whether you are transiting the East-West Highway with family or meeting classmates for lunch, the ground floor delivers tranquil metropolitan dining.',
  },
  {
    id: 'stage-arena',
    name: 'The Acoustic Stage & Match Screening Arena',
    tagline: 'Dual 4K projection screens and pro acoustic audio setup for high-energy nights',
    capacity: '60 Seats',
    type: 'Night Pub & Stage',
    image: '/images/tomorrowland_interior_2.jpg',
    features: [
      'Dual 150-inch 4K sports projector walls',
      'Concert-grade sound balancing acoustic sets and DJ beats',
      'Cheering zone layout optimized for Nepal national matches',
      'Cocktail pitcher and beer bucket tables',
    ],
    description: 'When the Nepal cricket or football team plays, this floor roars. On Friday nights, candlelight softens the space for our featured acoustic duos and indie performers.',
  },
  {
    id: 'upper-hookah',
    name: 'Upper Floor Hookah & Cocktail Lounge',
    tagline: 'High-volume exhaust ventilation, custom neon typography & moody pub seating',
    capacity: '40 Seats',
    type: 'Upper Ventilated',
    image: '/images/tomorrowland_interior_4.jpg',
    features: [
      'Dedicated industrial air-extraction ventilation system',
      'Custom neon quote installations for social photos',
      'Intimate low-table cocktail seating',
      'Serving all premium double apple, mint and paan shisha blends',
    ],
    description: 'A completely separated floor ensuring shisha lovers enjoy dense, smooth clouds and cocktail vibes without infringing on the family dining experience below.',
  },
  {
    id: 'work-pods',
    name: 'The Specialty Espresso & Co-Working Pods',
    tagline: 'High-speed 100 Mbps fiber internet with dedicated power outlets for creators',
    capacity: '16 Seats',
    type: 'Indoor Non-Smoking',
    image: '/images/tomorrowland_interior_3.jpg',
    features: [
      'Dual power sockets installed at every table',
      'Fast 100 Mbps fiber Wi-Fi with zero lag',
      'Close proximity to the barista counter for fresh pour-overs',
      'Ergonomic seating suited for laptop study sessions',
    ],
    description: 'The preferred morning hub for students from neighboring institutions along the Kumarwoti College Line, freelancers, and highway business commuters.',
  },
  {
    id: 'garden-patio',
    name: 'Twinkling Garden Fairy-Light Patio',
    tagline: 'Open-air road frontage deck with lush foliage and evening ambient lights',
    capacity: '25 Seats',
    type: 'Outdoor Garden',
    image: '/images/tomorrowland_interior_6.jpg',
    features: [
      'Warm fairy-light canopy for romantic dates',
      'Pet-friendly outdoor garden seating',
      'Street-level buzz with generous front vehicle parking',
      'Refreshing evening cross-breezes',
    ],
    description: 'Experience Kawasoti’s cool evening breezes under twinkling string lights, enjoying crispy chicken chilli and craft mocktails.',
  },
  {
    id: 'riverside-deck',
    name: 'Riverside Tomorrowland Open Deck',
    tagline: 'Our scenic micro-branch on the Narayani riverbank with outdoor BBQ grills',
    capacity: '50+ Seats',
    type: 'Riverfront Deck',
    image: '/images/riverside_tomorrowland.jpg',
    features: [
      'Unobstructed sunset views over the river corridor',
      'Weekend live charcoal BBQ skewers and grills',
      'Sunday unplugged acoustic sundowner sessions',
      'Expansive green lawn for celebrations and private events',
    ],
    description: 'A scenic 10-minute escape from the town center. Riverside Tomorrowland brings natural serenity, barbecue aromas, and vacation relaxation.',
  },
];

export const SeatingZonesExplorer: React.FC = () => {
  const [activeZone, setActiveZone] = useState<Zone>(VENUE_ZONES[0]);

  return (
    <section className="py-20 bg-brand-noir relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4 text-brand-gold" />
            2,660 Sq. Ft. Spatial Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Explore Our Multi-Zone Venue
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 font-light">
            Every corner of TomorrowLand has been intentionally architected for a specific mood. 
            Select any zone below to preview the space and reserve your spot.
          </p>
        </div>

        {/* Zone Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {VENUE_ZONES.map((zone) => {
            const isSelected = activeZone.id === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-brand-gold text-brand-obsidian border-brand-gold shadow-neon-gold'
                    : 'bg-brand-cardDark text-gray-300 hover:text-white border-white/10 hover:border-white/25'
                }`}
              >
                <span>{zone.name.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Zone Interactive Card Showcase */}
        <div className="rounded-3xl bg-brand-cardDark border border-white/10 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Visual Banner */}
          <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[350px] overflow-hidden bg-brand-obsidian">
            <img
              src={activeZone.image}
              alt={activeZone.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-brand-gold/60 text-brand-gold text-xs font-bold uppercase tracking-wider">
                {activeZone.type}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 text-xs text-brand-gold font-mono mb-1">
                <Users className="w-4 h-4 text-brand-gold" />
                <span>Estimated Capacity: {activeZone.capacity}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif leading-tight">
                {activeZone.name}
              </h3>
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">
                Zone Overview
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                {activeZone.tagline}
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-6">
                {activeZone.description}
              </p>

              {/* Checklist */}
              <div className="space-y-2.5">
                {activeZone.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/5 space-y-3">
              <Link
                to="/contact"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-gold via-amber-400 to-brand-bronze text-brand-obsidian font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-xl hover:shadow-neon-gold flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Inquire Table in {activeZone.name.split('&')[0].trim()}</span>
              </Link>

              <p className="text-[11px] text-center text-gray-400">
                Floor reservation is free • Instant WhatsApp confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
