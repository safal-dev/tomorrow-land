import React from 'react';
import { ReviewsShowcase } from '../components/ReviewsShowcase';

export const ReviewsPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-brand-obsidian min-h-screen">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
          Social Proof & Verified Voices
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
          Customer Reviews & Praise
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          Real feedback from local students, food connoisseurs, families, and highway commuters 
          who have rated TomorrowLand 4.6★ across 278+ verified Google reviews.
        </p>
      </div>

      {/* Reviews Showcase Engine */}
      <ReviewsShowcase />
    </div>
  );
};

