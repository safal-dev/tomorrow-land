import React from 'react';
import { ArrowDown } from 'lucide-react';
import { CareersSection } from '../components/CareersSection';

export const CareersPage: React.FC = () => {
  const scrollToJobs = () => {
    document.getElementById('open-positions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-brand-obsidian min-h-screen">
      {/* Editorial Hero Section */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
        {/* Background Image with Warm Vignette */}
        <div className="absolute inset-0">
          <img
            src="/images/tomorrowland_interior_1.jpg"
            alt="TomorrowLand Cafe Ambiance"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/85 to-black/75" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content (Strict 2-Liner Heading, Strict 2-Liner Description, 1 Single CTA) */}
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            Careers at TomorrowLand
          </span>

          {/* Strict 2-Liner Heading */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] mt-3 drop-shadow-2xl">
            <span className="block whitespace-nowrap">Work Where Kawasoti</span>
            <span className="block mt-1 sm:mt-2 italic font-normal text-brand-gold whitespace-nowrap">
              Comes Alive Every Day.
            </span>
          </h1>

          {/* Strict 2-Liner Description Text */}
          <p className="mt-4 sm:mt-5 text-xs sm:text-base md:text-lg text-gray-200 max-w-3xl font-light leading-relaxed drop-shadow">
            <span className="block whitespace-nowrap">
              Join our kitchen, barista, craft bar, and guest service crew on College Line.
            </span>
            <span className="block whitespace-nowrap mt-1">
              Fair pay, transparent tip sharing, free shift meals, and flexible student hours.
            </span>
          </p>

          {/* 1 Single Clean CTA */}
          <div className="mt-7 sm:mt-8">
            <button
              onClick={scrollToJobs}
              className="px-8 py-3.5 rounded-full bg-brand-gold hover:bg-amber-400 text-brand-obsidian font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-2xl hover:shadow-neon-gold inline-flex items-center gap-2 group hover:scale-105 active:scale-95"
            >
              <span>Explore 5 Open Positions</span>
              <ArrowDown className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Team Perks & Job Listings Section */}
      <div id="open-positions" className="pb-16">
        <CareersSection />
      </div>
    </div>
  );
};
