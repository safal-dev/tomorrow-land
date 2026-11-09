import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  // Official Vivid Interiors interior architecture + signature dishes
  const heroImages = [
    {
      url: '/images/tomorrowland_hero.jpg',
      caption: '2,660 Sq. Ft. Industrial-Chic Space • Vivid Interiors Design',
    },
    {
      url: '/images/tomorrowland_interior_1.jpg',
      caption: 'Warm Day Ambiance & Velvet Specialty Coffee',
    },
    {
      url: '/images/tomorrowland_interior_2.jpg',
      caption: 'Pulsing Neon Nightlife, Cocktails & Live Stage',
    },
    {
      url: '/images/jhol_momo.jpg',
      caption: 'The Famed Tomorrowland Spiced Jhol Momo',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Smooth Fade Transitions */}
      {heroImages.map((image, index) => (
        <div
          key={image.url}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[8000ms]`}
        >
          <img
            src={image.url}
            alt={image.caption}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/70 to-black/60" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Clean, Non-Cluttered Hero Content (Strict 2-Line Heading, Strict 2-Line Description, 1 Single CTA) */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10 pt-14">
        {/* Strict 2-Liner Heading */}
        <h1 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-2xl">
          <span className="block whitespace-nowrap">Where Daylight Conversations</span>
          <span className="block mt-1 sm:mt-2 italic font-normal text-brand-gold whitespace-nowrap">
            Melt Into Electric Nights.
          </span>
        </h1>

        {/* Strict 2-Liner Description Text */}
        <p className="mt-4 sm:mt-5 text-xs sm:text-base md:text-lg text-gray-200 max-w-3xl font-light leading-relaxed drop-shadow">
          <span className="block whitespace-nowrap">
            Kawasoti’s favorite gathering spot on Kumarwoti College Line.
          </span>
          <span className="block whitespace-nowrap mt-1">
            Fresh coffee & good food by day, live music & cold drinks by night.
          </span>
        </p>

        {/* Just 1 Single Clean CTA */}
        <div className="mt-8 sm:mt-9">
          <Link
            to="/menu"
            className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-brand-gold hover:bg-amber-400 text-brand-obsidian font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-2xl hover:shadow-neon-gold inline-flex items-center gap-2 group hover:scale-105 active:scale-95"
          >
            <span>Explore Digital Menu</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Minimal Subtle Carousel Dots */}
        <div className="mt-12 flex items-center gap-2">
          {heroImages.map((img, idx) => (
            <button
              key={img.url}
              onClick={() => setCurrentImageIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentImageIndex ? 'w-8 bg-brand-gold' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
