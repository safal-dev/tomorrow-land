import React, { useState } from 'react';
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink, 
  ThumbsUp,
  Quote,
  Filter
} from 'lucide-react';
import { REVIEWS_DATA, GOOGLE_REVIEWS_STATS } from '../data/reviewsData';

export const ReviewsShowcase: React.FC = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>('All');

  const filteredReviews = REVIEWS_DATA.filter((rev) => {
    if (selectedKeyword === 'All') return true;
    return rev.dishMention?.some((d) => d.toLowerCase().includes(selectedKeyword.toLowerCase())) ||
      rev.comment.toLowerCase().includes(selectedKeyword.toLowerCase());
  });

  return (
    <section id="reviews" className="py-20 bg-brand-obsidian relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center justify-center gap-1.5">
            <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
            Voice of the Guests
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Loved by 278+ Patrons in Kawasoti & Beyond
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 font-light">
            Real uncensored feedback from local students, highway transit travelers, families, 
            and food lovers who make TomorrowLand their second home.
          </p>
        </div>

        {/* Aggregate Ratings Scorecard */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-brand-cardDark border border-white/10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Big Score Block */}
          <div className="md:col-span-4 text-center md:text-left flex flex-col md:items-start items-center">
            <div className="flex items-center gap-2">
              <span className="text-5xl sm:text-6xl font-display font-extrabold text-white">4.6</span>
              <div className="text-left">
                <div className="flex text-brand-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium">Google Verified Score</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Based on <span className="text-white font-bold">278 verified Google reviews</span> + 
              <span className="text-brand-gold font-bold"> 5.0/5.0 on Facebook</span>
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>98% Positive Dining Sentiment</span>
            </div>
          </div>

          {/* Rating Breakdown Bars */}
          <div className="md:col-span-5 space-y-1.5">
            {GOOGLE_REVIEWS_STATS.ratingBreakdown.map((item) => (
              <div key={item.stars} className="flex items-center gap-3 text-xs">
                <span className="w-8 font-mono text-gray-400 text-right">{item.stars} ★</span>
                <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-400 to-brand-gold rounded-full transition-all duration-700"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="w-9 font-mono text-gray-400">{item.percentage}%</span>
              </div>
            ))}
          </div>

          {/* External Review CTA */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end justify-center gap-3">
            <a
              href="https://www.google.com/search?q=tomorrow+land+cafe+kawasoti"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-wide uppercase flex items-center justify-center gap-2 border border-white/15 transition-all text-center"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/p/Tomorrowland-Cafe-and-Restro-100063796699771/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-brand-gold hover:underline flex items-center gap-1"
            >
              <span>Facebook Official Page (5/5 Rating)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Filter Pills for Review Topics */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs text-gray-400 flex items-center gap-1 mr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-brand-gold" />
            Topic:
          </span>
          {GOOGLE_REVIEWS_STATS.popularKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setSelectedKeyword(kw)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedKeyword === kw
                  ? 'bg-brand-gold text-black font-bold shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Reviews Cards Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-brand-cardDark border border-white/5 hover:border-brand-gold/30 transition-all flex flex-col justify-between shadow-lg relative group"
            >
              <div>
                {/* Header: Avatar, Name, Local Guide tag, Stars */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${rev.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow`}>
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">
                        {rev.author}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        {rev.isLocalGuide && (
                          <span className="text-[10px] text-amber-400 font-medium">
                            Local Guide • {rev.reviewCount} reviews
                          </span>
                        )}
                        {!rev.isLocalGuide && (
                          <span className="text-[10px] text-gray-400">Verified Diner</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex text-brand-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Footer: Date, Meal Type & Dish Tag */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-400">
                <span className="font-mono text-gray-400">{rev.dateText}</span>
                {rev.dishMention && rev.dishMention.length > 0 && (
                  <span className="px-2 py-0.5 rounded-md bg-white/5 text-brand-gold text-[10px] font-semibold">
                    {rev.dishMention[0]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

