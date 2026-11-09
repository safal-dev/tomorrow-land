import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Music, 
  Tv, 
  Sparkles, 
  Users, 
  ArrowRight,
  Ticket,
  Share2,
  Check
} from 'lucide-react';
import { LiveEvent } from '../types';
import { UPCOMING_EVENTS } from '../data/eventsData';

interface EventsCalendarProps {
  onRSVPEvent: (eventTitle: string) => void;
}

export const EventsCalendar: React.FC<EventsCalendarProps> = ({ onRSVPEvent }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'acoustic' | 'dj' | 'screening'>('all');
  const [copiedEventId, setCopiedEventId] = useState<string | null>(null);

  const filteredEvents = UPCOMING_EVENTS.filter((ev) => {
    if (selectedFilter === 'all') return true;
    return ev.category === selectedFilter;
  });

  const handleShare = (event: LiveEvent) => {
    const shareText = `Join me at TomorrowLand Cafe & Restro for "${event.title}" on ${event.date} (${event.time}) in Kawasoti! Check it out!`;
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText);
      setCopiedEventId(event.id);
      setTimeout(() => setCopiedEventId(null), 2500);
    }
  };

  return (
    <section id="events" className="py-20 bg-brand-noir relative overflow-hidden">
      {/* Decorative Neon Ring */}
      <div className="absolute -bottom-32 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-neonPurple/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              Live Stage & Sports Arena
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
              Upcoming Events & Gigs
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-3 max-w-xl font-light">
              From intimate Friday acoustic candlelight jams to high-voltage Saturday neon DJ nights 
              and giant-screen cricket screenings, your weekends happen here.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 bg-brand-cardDark p-1.5 rounded-2xl border border-white/10 self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-brand-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Lineups
            </button>
            <button
              onClick={() => setSelectedFilter('acoustic')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedFilter === 'acoustic'
                  ? 'bg-brand-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Acoustic Gigs
            </button>
            <button
              onClick={() => setSelectedFilter('dj')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedFilter === 'dj'
                  ? 'bg-brand-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              DJ Pulse
            </button>
            <button
              onClick={() => setSelectedFilter('screening')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedFilter === 'screening'
                  ? 'bg-brand-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Match Screenings
            </button>
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`rounded-3xl bg-brand-cardDark border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:scale-[1.02] shadow-xl ${
                event.isFeatured
                  ? 'border-brand-gold/40 shadow-neon-gold/20'
                  : 'border-white/5 hover:border-white/20'
              }`}
            >
              {/* Event Image Cover */}
              <div className="relative h-56 w-full overflow-hidden bg-brand-obsidian">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-cardDark via-black/40 to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 text-center shadow-lg">
                  <span className="block text-[10px] font-extrabold uppercase tracking-widest text-brand-gold">
                    {event.dayOfWeek}
                  </span>
                  <span className="text-xs font-bold text-white">{event.date}</span>
                </div>

                {/* Entry Tag */}
                {event.entryFee && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-emerald-500/90 text-black text-[10px] font-extrabold uppercase tracking-wider">
                    {event.entryFee.includes('Free') ? 'Free Entry' : 'Cover Charge'}
                  </div>
                )}

                {/* Performer Headline */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1.5 text-brand-goldLight text-xs font-medium bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg w-fit">
                    <Music className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{event.performerOrMatch}</span>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors mb-1">
                    {event.title}
                  </h3>
                  <p className="text-xs text-brand-gold font-medium mb-3">
                    {event.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed mb-4">
                    {event.description}
                  </p>
                </div>

                {/* Meta info & tags */}
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-300 py-3 border-y border-white/5 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-gray-400">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      Table RSVP Active
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onRSVPEvent(event.title)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-gold to-amber-500 text-black text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      <Ticket className="w-3.5 h-3.5" />
                      <span>Reserve Table</span>
                    </button>

                    <button
                      onClick={() => handleShare(event)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                      title="Share gig details"
                    >
                      {copiedEventId === event.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Event Hosting Box */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-brand-cardDark via-brand-noir to-brand-cardDark p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-brand-gold font-bold">
              Private Venue Hire & Milestone Celebrations
            </span>
            <h4 className="text-2xl font-bold text-white mt-1">
              Host Your Birthday, College Reunion, or Corporate Function
            </h4>
            <p className="text-sm text-gray-300 mt-2 font-light">
              Enjoy dedicated floor allocation, customized music playlists (as celebrated in our reviews!), 
              curated group food packages, sparkler celebrations, and dedicated bar service.
            </p>
          </div>
          <button
            onClick={() => onRSVPEvent('Private Event & Milestone Celebration')}
            className="w-full md:w-auto px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-brand-gold transition-colors shrink-0 flex items-center justify-center gap-2"
          >
            <span>Inquire Venue Hire</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
