import React from 'react';
import { BrandStory } from '../components/BrandStory';
import { SeatingZonesExplorer } from '../components/SeatingZonesExplorer';

interface SpacePageProps {
  onReserveZone: (zoneName: string) => void;
}

export const SpacePage: React.FC<SpacePageProps> = ({ onReserveZone }) => {
  return (
    <div className="pt-24 pb-16 bg-brand-obsidian min-h-screen">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
          The Architecture & Identity
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
          The 2,660 Sq. Ft. Space
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          A masterstroke of raw industrialism and warm hospitality crafted by Vivid Interiors. 
          Step into our zoning layout, explore authentic photographs, and select your preferred corner.
        </p>
      </div>

      {/* Brand Story & Architectural Gallery */}
      <BrandStory />

      {/* Interactive Seating Zones Explorer */}
      <SeatingZonesExplorer onReserveZone={onReserveZone} />
    </div>
  );
};
