import React, { useState } from 'react';
import { VenuesSection } from '../components/VenuesSection';
import { FAQSection } from '../components/FAQSection';
import { 
  Calendar, 
  Clock, 
  Users, 
  Phone, 
  MapPin, 
  Send,
  CheckCircle2
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactPageProps {
  prefilledEvent?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ prefilledEvent }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [branch, setBranch] = useState('TomorrowLand Main Hub (Kumarwoti College Line)');
  const [guestCount, setGuestCount] = useState('4 Guests');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('07:00 PM');
  const [eventType, setEventType] = useState(prefilledEvent || 'Dinner & Drinks');
  const [seatingPreference, setSeatingPreference] = useState('Indoor Industrial Booth (Non-Smoking)');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.5 },
    });

    setIsSubmitted(true);

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

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="pt-24 pb-16 bg-brand-obsidian min-h-screen">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
          Find Us & Book Tables
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mt-2">
          Locations & Reservations
        </h1>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto mt-3 font-light">
          Visit us along the Kumarwoti College Line in Kawasoti-2, or escape to our 
          Narayani riverfront deck. Reserve your table below or chat directly on WhatsApp.
        </p>
      </div>

      {/* Embedded Table Reservation Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="rounded-3xl bg-brand-cardDark border border-brand-gold/40 shadow-2xl p-6 sm:p-10 relative">
          {!isSubmitted ? (
            <div>
              <div className="mb-8 text-center sm:text-left">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                  Table & Event Reservations
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                  Book Your Table or Milestone Event
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-1 font-light">
                  Free table reservation with instant confirmation via WhatsApp or phone.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Branch Selector */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Select Property *
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Full Name *
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                      <option value="09:00 PM (DJ & Late Pub)">09:00 PM (Late Pub)</option>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Occasion / Event
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
                      Floor Preference
                    </label>
                    <select
                      value={seatingPreference}
                      onChange={(e) => setSeatingPreference(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-brand-noir border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                    >
                      <option value="Ground Floor (Family Non-Smoking)">Ground Floor (Family Non-Smoking)</option>
                      <option value="Upper Level (Ventilated Hookah & Pub)">Upper Level (Hookah & Pub Lounge)</option>
                      <option value="Outdoor Twinkling Garden Terrace">Outdoor Twinkling Garden Terrace</option>
                      <option value="Stage Front Booth (Screen View)">Stage Front Booth (Screen View)</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Special Requests (Birthday songs, dietary requirements, sparklers)
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Birthday song request, baby high chair, cake arrangement..."
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-gold via-amber-400 to-brand-bronze text-brand-obsidian font-extrabold text-xs sm:text-sm uppercase tracking-wider hover:opacity-95 transition-all shadow-xl hover:shadow-neon-gold flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Send Reservation Request to WhatsApp</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Reservation Transmitted!
              </h3>
              <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>! Opening WhatsApp to 
                confirm table allocation with TomorrowLand frontline management...
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold"
              >
                Make Another Booking
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Property Cards */}
      <VenuesSection />

      {/* Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
};

