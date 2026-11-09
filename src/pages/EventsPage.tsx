import React from 'react';
import { EventsCalendar } from '../components/EventsCalendar';

export const EventsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-brand-obsidian min-h-screen">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
          Live Entertainment & Sports Arena
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
          Live Gigs & Match Screenings
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          From soulful Friday acoustic melodies and Saturday DJ pulse sessions to roaring 
          stadium energy for Nepal National Cricket & Football matches on dual 4K projection screens.
        </p>
      </div>

      {/* Events Calendar Engine */}
      <EventsCalendar />
    </div>
  );
};
