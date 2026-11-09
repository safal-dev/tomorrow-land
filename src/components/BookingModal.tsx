import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  Phone, 
  PartyPopper, 
  CheckCircle2, 
  MapPin,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledEvent?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledEvent,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('TomorrowLand Main Hub (Kumarwoti College Line)');
  const [guestCount, setGuestCount] = useState('4 Guests');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('06:00 PM');
  const [eventType, setEventType] = useState(prefilledEvent || 'Birthday Celebration');
  const [seatingPreference, setSeatingPreference] = useState('Indoor Industrial Booth (Non-Smoking)');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledEvent) {
      setEventType(prefilledEvent);
    }
  }, [prefilledEvent]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger celebratory confetti
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 },
    });

    setIsSubmitted(true);

    // Format WhatsApp reservation message
    const message = `🎉 *RESERVATION / EVENT RSVP INQUIRY*
━━━━━━━━━━━━━━━━━━━━
• *Name:* ${fullName}
• *Phone:* ${phone}
• *Venue:* ${branch}
• *Date:* ${date} at ${time}
• *Guest Count:* ${guestCount}
• *Occasion / Event:* ${eventType}
• *Seating Preference:* ${seatingPreference}
${specialRequests ? `• *Special Notes:* ${specialRequests}` : ''}
━━━━━━━━━━━━━━━━━━━━
Hi TomorrowLand team, please confirm table availability for my booking!`;

    const whatsappUrl = `https://wa.me/9779806919349?text=${encodeURIComponent(message)}`;

    // Open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="w-full max-w-xl bg-brand-cardDark rounded-3xl border border-brand-gold/40 shadow-2xl p-6 sm:p-8 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                Table Reservation & Event RSVP
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Reserve Your TomorrowLand Experience
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 font-light">
                Secure prime seating for birthday bashes, match screening nights, romantic dinners, 
                or student group reunions across our 2,660 sq. ft. venue.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Branch Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Select Location *
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-brand-noir border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                >
                  <option value="TomorrowLand Main Hub (Kumarwoti College Line, Kawasoti-2)">
                    TomorrowLand Main Hub (Kumarwoti College Line, Kawasoti-2)
                  </option>
                  <option value="Riverside Tomorrowland (Narayani Riverfront Scenic Branch)">
                    Riverside Tomorrowland (Narayani Riverfront Scenic Branch)
                  </option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Bijay Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 98XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>
              </div>

              {/* Date, Time & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Time *
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-noir border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="11:30 AM (Brunch / Lunch)">11:30 AM (Lunch)</option>
                    <option value="01:00 PM (Afternoon)">01:00 PM (Lunch)</option>
                    <option value="03:30 PM (Coffee / Study)">03:30 PM (Coffee)</option>
                    <option value="05:30 PM (Sunset / Happy Hour)">05:30 PM (Sunset)</option>
                    <option value="07:00 PM (Acoustic Night)">07:00 PM (Acoustic)</option>
                    <option value="08:00 PM (Dinner & Match)">08:00 PM (Dinner & Match)</option>
                    <option value="09:00 PM (DJ & Pub Late)">09:00 PM (Late Pub)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Estimated Guests
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-noir border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="1-2 Guests (Date / Solo)">1-2 Guests</option>
                    <option value="3-5 Guests (Friends / Family)">3-5 Guests</option>
                    <option value="6-10 Guests (Group Table)">6-10 Guests</option>
                    <option value="11-20 Guests (Party)">11-20 Guests</option>
                    <option value="20+ Guests (Full Floor Hire)">20+ Guests (Floor Hire)</option>
                  </select>
                </div>
              </div>

              {/* Event Type & Seating Preference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Occasion / Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-noir border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="Casual Dine-in">Casual Dine-in</option>
                    <option value="Birthday Celebration">Birthday Celebration 🎂</option>
                    <option value="Live Match Screening (Cricket / Football)">Live Match Screening 🏏⚽</option>
                    <option value="Friday Acoustic Session">Friday Acoustic Night 🎸</option>
                    <option value="Saturday DJ Party">Saturday DJ Night 🎧</option>
                    <option value="College Reunion / Student Hangout">College Reunion 🎓</option>
                    <option value="Highway Travel Pitstop">Highway Travel Pitstop 🚗</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Seating Floor Preference
                  </label>
                  <select
                    value={seatingPreference}
                    onChange={(e) => setSeatingPreference(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-brand-noir border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  >
                    <option value="Ground Floor (Family Non-Smoking)">Ground Floor (Family Non-Smoking)</option>
                    <option value="Upper Level (Ventilated Hookah & Pub)">Upper Level (Hookah & Pub Lounge)</option>
                    <option value="Outdoor Twinkling Garden Terrace">Outdoor Twinkling Garden Terrace</option>
                    <option value="Stage Front Booth (Best Match View)">Stage Front Booth (Screen View)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Special Requests (e.g., Birthday song, cake arrangement, dietary needs)
                </label>
                <textarea
                  rows={2}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  placeholder="Need special birthday song played, high chair for kids, or specific food platter ready..."
                  className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-brand-gold via-amber-400 to-brand-bronze text-brand-obsidian font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-xl hover:shadow-neon-gold flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4 text-black" />
                <span>Confirm Reservation via WhatsApp</span>
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-2">
                <span>Or direct call:</span>
                <a href="tel:+9779806919349" className="text-brand-gold font-bold underline">
                  +977 9806919349
                </a>
                <span>/</span>
                <a href="tel:+97778590239" className="text-gray-300 hover:underline">
                  +977 78-590239
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Reservation Transmitted!
            </h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{fullName}</strong>! We have routed your details 
              for <strong className="text-brand-gold">{guestCount}</strong> on <strong className="text-white">{date || 'selected date'}</strong>. 
              Redirecting you to WhatsApp to instantly lock in your venue booking...
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

