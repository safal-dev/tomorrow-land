import React, { useState } from 'react';
import { Flame, Ticket, X, ArrowRight } from 'lucide-react';

interface AnnouncementBarProps {
  onRSVP: (eventTitle: string) => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onRSVP }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Special Announcement" className="bg-gradient-to-r from-amber-600 via-brand-gold to-brand-bronze text-brand-obsidian px-4 py-2 text-xs font-semibold relative z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex items-center gap-1 bg-black text-brand-gold px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shrink-0">
            <Flame className="w-3 h-3 fill-brand-gold text-brand-gold animate-bounce" />
            THIS WEEKEND
          </span>
          <span className="truncate text-black font-bold">
            Live Nepal Cricket Match Screening & Friday Acoustic Night on Dual 4K Projectors!
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onRSVP('Nepal Cricket Match & Friday Acoustic Session')}
            className="hidden sm:inline-flex items-center gap-1 underline font-black text-black hover:text-black/80 transition-colors uppercase tracking-wider text-[11px]"
          >
            <span>Reserve Table</span>
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors"
            title="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
