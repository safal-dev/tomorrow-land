import React from 'react';
import { CareersSection } from '../components/CareersSection';

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-brand-obsidian min-h-screen">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
          Careers & Opportunities
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
          Join the TomorrowLand Crew
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          We are cultivating the premier hospitality culture in Nawalpur. Explore open culinary, 
          barista, service, and creative media positions with competitive pay, shift meals, and growth.
        </p>
      </div>

      {/* Careers Section Engine */}
      <CareersSection />
    </div>
  );
};

