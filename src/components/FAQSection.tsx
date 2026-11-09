import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Dining & Menu' | 'Events & Parties' | 'Ordering';
}

const FAQS: FAQItem[] = [
  {
    category: 'General',
    question: 'Where exactly is TomorrowLand located, and is parking available?',
    answer: 'We are situated along the prominent Kumarwoti College Line in Kawasoti-2, Nawalpur (Nawalparasi), Nepal, just minutes from the East-West (Mahendra) Highway. We offer ample free, secure front-side parking that comfortably accommodates both motorbikes and large cars.',
  },
  {
    category: 'Dining & Menu',
    question: 'Is there a separation between smoking and non-smoking areas?',
    answer: 'Yes! TomorrowLand operates on a carefully planned multi-floor layout. Our ground floor is strictly non-smoking, family-friendly, and air-conditioned. Our second level features high-flow exhaust ventilation engineered specifically for our hookah lounge and evening pub crowd.',
  },
  {
    category: 'Events & Parties',
    question: 'Can we celebrate birthdays with custom song requests and decorations?',
    answer: 'Yes, absolutely! Milestone celebrations and birthday parties are a TomorrowLand tradition. Our floor team gladly cues your favorite celebration songs over our sound system (as celebrated in our customer reviews!), arranges table setups, and provides celebratory sparklers.',
  },
  {
    category: 'Ordering',
    question: 'How does the WhatsApp Pre-Order system work for fast turnaround?',
    answer: 'Simply browse our Digital Menu on this website, tap "+ Add to Tray", select your target arrival time (e.g., "Dine-in in 20 minutes"), and tap "Transmit Order to WhatsApp". Your message routes directly to frontline kitchen management at +977 9806919349, ensuring your meal is sizzling hot upon your arrival.',
  },
  {
    category: 'Dining & Menu',
    question: 'Do you offer pure vegetarian and dietary options?',
    answer: 'Yes, extensive vegetarian dishes are clearly marked on our menu with green leaf icons, including Paneer Chilli, Veg Kothey Momo, Farmhouse Margherita Pizza, Schezwan Veg Rice, French Fries, and fresh smoothies. Our kitchen maintains strict cross-contamination protocols.',
  },
  {
    category: 'Events & Parties',
    question: 'Do I need tickets or reservations for Friday Live Music & Cricket matches?',
    answer: 'Admission is typically free with any food or beverage order! However, because our Friday Acoustic Sessions, Saturday DJ Nights, and Nepal Cricket World Cup/Asia Cup match screenings regularly reach full capacity, we highly advise reserving a table via our booking form or WhatsApp.',
  },
  {
    category: 'General',
    question: 'What is the difference between TomorrowLand Main Hub and Riverside Tomorrowland?',
    answer: 'TomorrowLand Main Hub (Kawasoti-2) is our 2,660 sq. ft. flagship featuring specialty coffee, study booths, and the evening sports pub. Riverside Tomorrowland is our scenic open-air micro-branch along the Narayani Riverbank, featuring sunset cabanas, weekend charcoal BBQ grills, and Sunday acoustic chillouts.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-brand-obsidian relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-brand-gold" />
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mt-2">
            Everything You Need to Know
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3 font-light">
            Quick answers about parking, reservations, dietary preferences, and our day-to-night operations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-brand-cardDark border-brand-gold/40 shadow-lg'
                    : 'bg-brand-cardDark/60 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-white text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-lg bg-white/5 text-brand-gold shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-light border-t border-white/5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions card */}
        <div className="mt-12 p-6 rounded-3xl bg-brand-cardDark border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-white font-bold text-base">Still have questions?</h4>
            <p className="text-xs text-gray-400 mt-0.5">
              Our frontline team is online everyday from 7:00 AM to 10:00 PM.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/9779806919349"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-600/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat WhatsApp</span>
            </a>
            <a
              href="tel:+9779806919349"
              className="px-4 py-2 rounded-xl bg-brand-gold text-black text-xs font-bold flex items-center gap-1.5 hover:opacity-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
