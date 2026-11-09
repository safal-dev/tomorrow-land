import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  CheckCircle2, 
  MessageCircle,
  X,
  UtensilsCrossed,
  Wallet,
  Coffee
} from 'lucide-react';
import { HiringPost } from '../types';
import { HIRING_POSTS } from '../data/careersData';
import confetti from 'canvas-confetti';

export const CareersSection: React.FC = () => {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(HIRING_POSTS[0].id);
  const [applyingJob, setApplyingJob] = useState<HiringPost | null>(null);

  // Application form state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [experienceYears, setExperienceYears] = useState('1-2 Years');
  const [aboutCandidate, setAboutCandidate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);

    // Also offer WhatsApp quick transmission
    const text = `Hi TomorrowLand! I am applying for the *${applyingJob.title}* position. My name is ${fullName}, Phone: ${phone}, Experience: ${experienceYears}. Note: ${aboutCandidate}`;
    const whatsappUrl = `https://wa.me/9779806919349?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  const openWhatsAppDirectApply = (job: HiringPost) => {
    const text = `Hi TomorrowLand Management! I saw your hiring post for the *${job.title}* position on your website and would like to apply. Please let me know the interview schedule!`;
    window.open(`https://wa.me/9779806919349?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="careers" className="py-20 bg-brand-noir relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Team Perks Grid (Clean Lucide Icons, No Emojis, Luxury Editorial Glass Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl bg-brand-cardDark border border-white/5 text-center flex flex-col items-center hover:border-brand-gold/30 transition-all">
            <div className="w-11 h-11 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-3">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">Free Shift Meals</h4>
            <p className="text-gray-400 text-[11px] mt-1">Chef-prepared meals on every shift</p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-cardDark border border-white/5 text-center flex flex-col items-center hover:border-brand-gold/30 transition-all">
            <div className="w-11 h-11 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-3">
              <Wallet className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">Fair Pay & Tips</h4>
            <p className="text-gray-400 text-[11px] mt-1">On-time monthly salary + tip shares</p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-cardDark border border-white/5 text-center flex flex-col items-center hover:border-brand-gold/30 transition-all">
            <div className="w-11 h-11 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-3">
              <Coffee className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">Skill Training</h4>
            <p className="text-gray-400 text-[11px] mt-1">Hands-on espresso & bar crafting</p>
          </div>

          <div className="p-5 rounded-2xl bg-brand-cardDark border border-white/5 text-center flex flex-col items-center hover:border-brand-gold/30 transition-all">
            <div className="w-11 h-11 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold text-xs sm:text-sm">Student-Friendly Hours</h4>
            <p className="text-gray-400 text-[11px] mt-1">Flexible shifts for college students</p>
          </div>
        </div>

        {/* Section Heading for Open Positions */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-brand-gold font-bold">
            Available Positions
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1.5">
            Select a Role to Apply
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 font-light">
            Tap any role to view shift details, compensation, and apply in seconds.
          </p>
        </div>

        {/* Open Job Listings Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {HIRING_POSTS.map((job) => {
            const isExpanded = expandedJobId === job.id;

            return (
              <div
                key={job.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-brand-cardDark border-brand-gold/40 shadow-xl'
                    : 'bg-brand-cardDark/70 border-white/5 hover:border-white/15'
                }`}
              >
                {/* Header Bar */}
                <div
                  onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold border border-brand-gold/20 flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-brand-gold">
                          {job.department}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {job.title}
                      </h3>
                      <p className="text-xs text-gray-400 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-brand-gold" />
                          Kawasoti-2
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          {job.timing}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/5">
                    <div className="text-left sm:text-right">
                      <span className="block text-[11px] text-gray-400">Compensation</span>
                      <span className="text-sm font-bold text-brand-gold">
                        {job.salaryRange.split('+')[0]}
                      </span>
                    </div>
                    <div className="p-2 rounded-xl bg-white/5 text-gray-400 group-hover:text-white">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/5">
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light mb-6">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      {/* Responsibilities */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-2.5">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2.5">
                          Who We're Looking For:
                        </h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, i) => (
                            <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => {
                          setApplyingJob(job);
                          setIsSubmitted(false);
                        }}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-gold text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Quick Apply Online</span>
                      </button>

                      <button
                        onClick={() => openWhatsAppDirectApply(job)}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 border border-emerald-500/30 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Apply via WhatsApp Instant</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Inquiries Note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Prefer to talk to our hiring coordinator directly? Call us at{' '}
          <a href="tel:+9779806919349" className="text-brand-gold font-bold underline">
            +977 9806919349
          </a>{' '}
          or drop off your CV at the counter between 10:00 AM – 4:00 PM.
        </p>
      </div>

      {/* Quick Application Modal */}
      {applyingJob && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setApplyingJob(null)}
        >
          <div 
            className="w-full max-w-lg bg-brand-cardDark rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">
                    Application Form
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Apply for {applyingJob.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Fill in your details. We will respond within 24 hours to schedule an in-person trial.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Manish Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g., 98XXXXXXXX"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">
                      Relevant Experience
                    </label>
                    <select
                      value={experienceYears}
                      onChange={(e) => setExperienceYears(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-brand-noir border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                    >
                      <option value="Fresher / Eager to Learn">Fresher / Eager to Learn</option>
                      <option value="Under 1 Year">Under 1 Year</option>
                      <option value="1-2 Years">1-2 Years</option>
                      <option value="3+ Years">3+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">
                    Brief Note & Availability
                  </label>
                  <textarea
                    rows={3}
                    value={aboutCandidate}
                    onChange={(e) => setAboutCandidate(e.target.value)}
                    placeholder="Tell us about yourself, current location in Kawasoti/Nawalpur, and when you can start."
                    className="w-full px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-gold to-amber-500 text-black font-bold text-xs uppercase tracking-wider hover:opacity-95 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application via WhatsApp</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Application Sent!</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Thank you, {fullName}! Opening WhatsApp to connect you directly with TomorrowLand management...
                </p>
                <button
                  onClick={() => setApplyingJob(null)}
                  className="px-6 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

