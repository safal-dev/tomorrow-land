import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Brand Quote Section */}
        <div className="text-center max-w-3xl mx-auto pb-14 border-b border-white/10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/60 p-0.5">
              <img
                src="/images/logo.jpg"
                alt="TomorrowLand Cafe & Restro"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <h3 className="font-display font-extrabold text-2xl text-white tracking-widest">
            TOMORROWLAND CAFE & RESTRO
          </h3>
          <p className="font-serif italic text-base sm:text-lg text-gray-300 mt-3 leading-relaxed">
            “We are not merely a restaurant; we are the cultural epicenter of Kawasoti. 
            A haven where morning caffeine powers ambitious minds, and where dusk awakens 
            acoustic chords, neon pub energy, and lifelong friendships.”
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a
              href="https://www.facebook.com/p/Tomorrowland-Cafe-and-Restro-100063796699771/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-gold hover:text-black flex items-center justify-center transition-all text-white border border-white/10"
              title="Tomorrowland Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-gold hover:text-black flex items-center justify-center transition-all text-white border border-white/10"
              title="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://wa.me/9779806919349"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-black flex items-center justify-center transition-all text-white border border-white/10"
              title="WhatsApp Hotline"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4 Column Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-white/10">
          {/* Col 1: Opening Times */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              Hours of Operation
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between pb-1 border-b border-white/5">
                <span className="text-gray-300">Mon – Sun (Flagship Hub):</span>
                <span className="text-white font-medium">07:00 AM – 10:00 PM</span>
              </li>
              <li className="flex justify-between pb-1 border-b border-white/5">
                <span className="text-gray-300">Specialty Coffee & Brunch:</span>
                <span className="text-amber-400 font-medium">07:00 AM – 04:00 PM</span>
              </li>
              <li className="flex justify-between pb-1 border-b border-white/5">
                <span className="text-gray-300">Night Pub & Cocktails:</span>
                <span className="text-purple-400 font-medium">04:00 PM – 10:00 PM</span>
              </li>
              <li className="flex justify-between pb-1 border-b border-white/5">
                <span className="text-gray-300">Riverside Tomorrowland:</span>
                <span className="text-white font-medium">Tue – Sun 11 AM – 8:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Col 2: Locations & Address */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-gold" />
              Find Our Spaces
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <strong className="text-white block font-semibold">TomorrowLand Flagship Hub</strong>
                <p className="text-gray-400">Kumarwoti College Line, Kawasoti-2, Nawalpur (Nawalparasi), Nepal</p>
                <p className="text-brand-gold mt-0.5">Near East-West (Mahendra) Highway</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                <strong className="text-white block font-semibold">Riverside Tomorrowland</strong>
                <p className="text-gray-400">Scenic Narayani Riverbank Corridor, Kawasoti</p>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Contacts & Booking */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-gold" />
              Direct Frontline Contacts
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-gray-400 block text-[11px]">Primary Mobile & WhatsApp:</span>
                <a href="tel:+9779806919349" className="text-white font-bold hover:text-brand-gold text-sm">
                  +977 9806919349
                </a>
              </li>
              <li>
                <span className="text-gray-400 block text-[11px]">Landline Hotline:</span>
                <a href="tel:+97778590239" className="text-white hover:text-brand-gold">
                  +977 78-590239
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block w-full text-center py-2 px-3 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30 hover:bg-brand-gold hover:text-black font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Locations & Table Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation & Legal */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              Quick Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/the-space" className="hover:text-brand-gold transition-colors">
                  The Space & Architecture (2,660 Sq. Ft.)
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-gold transition-colors">
                  Interactive Digital Menu & Prices
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-brand-gold transition-colors">
                  Upcoming Acoustic Gigs & Sports Screenings
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-brand-gold transition-colors">
                  Verified Google Reviews (4.6★ / 278 Reviews)
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                  <span>Careers & Open Positions</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    HIRING
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Verification */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} TomorrowLand Cafe & Restro. All Rights Reserved. 
            Proudly serving Kawasoti, Nawalpur, Nepal.
          </p>
          <div className="flex items-center gap-4 text-gray-400">
            <span>Interior Design: Vivid Interiors</span>
            <span>•</span>
            <span className="text-brand-gold">Ready for Vercel Deployment</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
