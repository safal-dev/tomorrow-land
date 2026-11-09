import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Maximize2, 
  Flame, 
  Compass, 
  Award,
  Layers,
  CheckCircle2,
  X
} from 'lucide-react';

export const BrandStory: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const venueGallery = [
    {
      url: '/images/tomorrowland_hero.jpg',
      title: 'Exterior Facade & Entryway',
      desc: 'The striking street frontage along Kawasoti-2 Kumarwoti College Line with ample parking.',
      category: 'Architecture',
    },
    {
      url: '/images/tomorrowland_interior_1.jpg',
      title: 'Main Industrial Dining Hall',
      desc: 'Custom steel framing, warm wood accents, and lush cascading greenery designed by Vivid Interiors.',
      category: 'Dining Lounge',
    },
    {
      url: '/images/tomorrowland_interior_2.jpg',
      title: 'Electric Neon & Acoustic Stage Zone',
      desc: 'Mood lighting with neon quotes and state-of-the-art acoustic setups for weekend live acts.',
      category: 'Nightlife & Stage',
    },
    {
      url: '/images/tomorrowland_interior_3.jpg',
      title: 'Intimate Booths & Work Pods',
      desc: 'Ergonomic seating with charging outlets, popular among students and laptop creators.',
      category: 'Work & Study',
    },
    {
      url: '/images/tomorrowland_interior_4.jpg',
      title: 'Upper Floor & Ventilated Lounge',
      desc: 'Dedicated floor separating non-smoking family dining from our vibrant hookah lounge.',
      category: 'Lounge Level',
    },
    {
      url: '/images/tomorrowland_interior_5.jpg',
      title: 'Craft Beverage & Espresso Bar',
      desc: 'Commercial double-group espresso machine and craft mixology bar counter.',
      category: 'Bar & Coffee',
    },
    {
      url: '/images/tomorrowland_interior_6.jpg',
      title: 'Twinkling Nighttime Garden Terrace',
      desc: 'Open-air fairy-light canopy for romantic dates and late evening group conversations.',
      category: 'Outdoor Deck',
    },
    {
      url: '/images/tomorrowland_interior_7.jpg',
      title: 'Group Milestone & Birthday Hall',
      desc: 'Spacious 20+ person group banquet setups with personalized music & celebration themes.',
      category: 'Private Events',
    },
  ];

  return (
    <section id="the-space" className="py-20 relative bg-brand-obsidian overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Architectural Vibe Domination
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-3 leading-tight">
              A 2,660 Sq. Ft. Industrial-Chic Icon in Nawalparasi
            </h2>
          </div>
          <div className="lg:col-span-5 text-gray-300 text-sm sm:text-base font-light">
            <p>
              Conceived to deliver a high-caliber "metropolitan" lifestyle experience previously 
              exclusive to Kathmandu and Pokhara directly into Kawasoti. Crafted professionally by 
              renowned design studio <span className="text-brand-gold font-semibold">Vivid Interiors</span>, 
              every square foot is calculated for sensory immersion.
            </p>
          </div>
        </div>

        {/* Strategic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-3xl bg-brand-cardDark border border-white/5 relative group hover:border-brand-gold/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Multi-Floor Spatial Zoning</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Carefully engineered layout offering distinct zones: ground floor serene family dining, 
              cozy study corners, and a dedicated upstairs ventilated floor for shisha and evening pub crowds.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-brand-cardDark border border-white/5 relative group hover:border-brand-neonPurple/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-brand-neonPurple/10 text-brand-neonPurple flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Custom Neon & Raw Industrialism</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Exposed brickwork, matte black iron beams, ambient Edison bulbs, and custom neon installations 
              that turn everyday moments into organic social media capital.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-brand-cardDark border border-white/5 relative group hover:border-emerald-500/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Dual Property Footprint</h3>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Following explosive demand at our Kumarwoti College Line flagship, our second property 
              <strong> Riverside Tomorrowland</strong> brings scenic riverfront breezes and weekend BBQ retreats.
            </p>
          </div>
        </div>

        {/* Architectural Photo Gallery Showcase */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">Visual Walkthrough</h3>
              <p className="text-xs text-gray-400">Authentic interior photography captured at our Kawasoti venue</p>
            </div>
            <span className="text-xs text-brand-gold font-mono hidden sm:inline">
              CLICK ANY PHOTO TO EXPAND
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {venueGallery.map((photo, index) => (
              <div
                key={photo.title}
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden cursor-pointer bg-brand-noir border border-white/10 hover:border-brand-gold/60 transition-all shadow-md"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3.5 sm:p-4">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold">
                    {photo.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {photo.title}
                  </h4>
                </div>
                <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedPhotoIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className="max-w-4xl w-full bg-brand-cardDark rounded-3xl overflow-hidden border border-white/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={venueGallery[selectedPhotoIndex].url}
                  alt={venueGallery[selectedPhotoIndex].title}
                  className="w-full h-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-brand-gold uppercase tracking-wider font-semibold">
                    {venueGallery[selectedPhotoIndex].category} • Tomorrowland Kawasoti
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {venueGallery[selectedPhotoIndex].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    {venueGallery[selectedPhotoIndex].desc}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => setSelectedPhotoIndex((prev) => (prev! > 0 ? prev! - 1 : venueGallery.length - 1))}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setSelectedPhotoIndex((prev) => (prev! < venueGallery.length - 1 ? prev! + 1 : 0))}
                    className="px-3.5 py-1.5 rounded-xl bg-brand-gold text-black text-xs font-bold"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
