---
name: luxury-editorial-brand-site
description: >-
  Builds luxury, high-converting, editorial brand websites (Apricus Cafe & TomorrowLand grade) for ANY niche
  (hospitality, cafes, luxury dining, boutique hotels, wellness clubs, aesthetic clinics, creative studios,
  architecture firms, luxury retail, bespoke craftsmanship, private members clubs).
  Asks for or extracts the 8 core business parameters (Business Info, GMB Reviews, Socials, Reference Sites,
  Sitemap & Sections, Primary Purpose/Goals, Logo & Media Assets, Fonts/Spacing/Aesthetics) and builds a stunning,
  multi-page web application with strict editorial typography, zero AI clichés, customer-desire copy, and frictionless WhatsApp conversions.
---

# Universal Luxury Editorial Brand Website Engine

This skill guides the end-to-end creation of high-end, editorial, ultra-converting websites modeled after the world's most atmospheric luxury destinations (e.g., **Apricus Cafe**, **TomorrowLand**, **Aman Resorts**, **Aesop**, **Soho House**).

It is strictly **niche-agnostic**: whether the client is a boutique cafe, an eco-luxury resort, a wellness sanctuary, an architectural atelier, a bespoke fashion house, or a private members club, this engine delivers an unforgettable, high-converting digital experience based on **8 foundational parameters**.

---

## 1. The 8-Point Client Discovery & Input Protocol

When the user requests a website for any business or niche, the agent must ensure it has gathered or extracted these **8 foundational parameters** before generating the final application. If any are missing, ask the user or propose sensible editorial defaults for their approval:

```yaml
# ==============================================================================
# THE 8 FOUNDATIONAL PARAMETERS FOR ANY NICHE
# ==============================================================================

1. complete_business_info:
  brand_name: "Name of the business (e.g., TomorrowLand Cafe & Restro, Solis Retreat)"
  niche_category: "Hospitality | Boutique Stay | Wellness & Clinic | Creative Studio | Luxury Retail | Private Club"
  physical_address: "Exact location, street line, landmark, city, country"
  sub_branches: ["Secondary locations, scenic branches, or sister venues"]
  operational_phases:
    phase_one: "Morning/Day (e.g., 7 AM – 4 PM: Specialty coffee, study booths, quick lunch)"
    phase_two: "Evening/Night (e.g., 4 PM – Late: Craft bar, live music, screening lounge)"
  contact_numbers: ["Direct landline and mobile numbers"]
  whatsapp_number: "Primary WhatsApp Business number (for direct conversion)"

2. google_my_business_and_reviews:
  gmb_link: "Google Maps / GMB Profile URL"
  star_rating: "Aggregate rating (e.g., 4.6★, 4.9★)"
  review_count: "Total verified reviews (e.g., 278+ verified reviews)"
  customer_praise_quotes:
    - author: "Real guest/client name"
      quote: "Authentic feedback highlighting taste, atmosphere, hospitality, or craft"
      highlighted_item: "Signature item or service mentioned"

3. social_channels:
  instagram: "Handle and profile link"
  facebook: "Page link"
  tiktok: "Handle (for youth/video-first brands)"
  youtube_or_linkedin: "Channel or company page if applicable"

4. reference_websites:
  aesthetic_benchmarks:
    - "https://www.apricuscafe.com/ (Reference for luxury dark editorial dining)"
    - "Aesop / Aman Resorts / Kinfolk / Studio McGee (Reference for minimalism and craft)"
  key_takeaways: "What specific vibe to emulate (e.g., editorial serif titles, moody dark backgrounds, spacious cards)"

5. sitemap_and_sections:
  target_pages:
    - route: "/"
      page: "Home"
      sections: ["2-Line Hero", "Atmosphere Dual-Vibe Switcher", "Signature Highlights", "Spatial Preview", "Reviews Teaser"]
    - route: "/catalog" # or /menu, /suites, /treatments, /work
      page: "Catalog / Menu / Portfolio"
      sections: ["Category Tabs", "Dietary/Badge Filters", "Detail Modal", "Frictionless Order/Inquiry Tray"]
    - route: "/the-space" # or /craft, /sanctuary, /studio
      page: "The Space & Craft"
      sections: ["Architectural Story", "Curated Spatial Zones", "Authentic Photo Gallery"]
    - route: "/events" # or /experiences, /journal
      page: "Live Gigs & Experiences"
      sections: ["Event Calendar", "Upcoming Dates & Times", "Direct RSVP Hooks"]
    - route: "/reviews"
      page: "Social Proof"
      sections: ["Verified Rating Breakdown", "Topic Filter Pills", "Guest Quotes"]
    - route: "/careers" # or /team, /culture
      page: "Careers & Culture"
      sections: ["Single Editorial Hero", "Outline Icon Perks (No Emojis)", "Open Roles Accordion"]
    - route: "/contact"
      page: "Locations & Reservations"
      sections: ["Branch Selector", "Interactive RSVP Form (Confetti)", "Map Directions", "FAQ"]

6. basic_goal_and_primary_purpose:
  primary_conversion_action: "Instant WhatsApp Pre-Order / Table RSVP / Suite Booking / Project Inquiry"
  secondary_action: "Direct phone call / Google Maps navigation / Event ticket RSVP"
  business_outcome: "Eliminate wait times, secure group food bills before arrival, book high-ticket milestone events"

7. logo_and_relevant_media_sources:
  logo_source: "File path or URL to brand badge/mark"
  media_directory: "Directory or URLs of authentic high-res photography (interiors, dishes, craft, team)"
  image_treatment: "Vivid, high-contrast, moody lighting, authentic lifestyle framing"

8. fonts_spacing_and_aesthetics:
  display_font: "Cinzel or Cormorant Garamond (classic luxury editorial serif)"
  body_font: "Plus Jakarta Sans, Inter, or Manrope (clean geometric sans)"
  color_palette:
    background_dark: "#0B0C10 (Brand Obsidian) / #12131C (Brand Noir)"
    card_background: "#181926 (Brand Card Dark with subtle border)"
    accent_gold: "#E5B25D (Warm Amber Gold) / #D4AF37"
    text_primary: "#FFFFFF"
    text_secondary: "#A0A5B5 / #9CA3AF"
  spacing_and_rhythm: "Generous vertical breathing room (py-20 to py-28), rounded-3xl container cards, backdrop blur"
```

---

## 2. Universal Niche Translation Matrix

Once the 8 parameters are collected, map them into the client's specific industry:

| Component | 🍽️ Hospitality & Dining | 🏨 Boutique Hotels & Resorts | 🌿 Wellness, Spas & Clinics | 📐 Creative Studios & Architecture | 💎 Luxury Retail & Craft | 🍸 Private Clubs & Venues |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Catalog** (`/catalog`) | Digital Food & Bar Menu | Villa & Suite Collections | Treatment & Therapy Protocols | Selected Works & Case Studies | Curated Object / Fashion Catalog | Membership Tiers & Privileges |
| **Dual-Vibe Switcher** | Daytime Cafe vs. Nighttime Pub | Summer Retreat vs. Winter Chalet | Holistic Wellness vs. Clinical Protocol | Architecture vs. Interior Curation | Permanent Line vs. Seasonal Drop | Daytime Co-working vs. Evening Social |
| **Spatial / Craft Page** (`/craft`) | 2,660 Sq. Ft. Industrial Layout | Grounds & Scenic Views | Sanctuary Suites & Hydrotherapy | Material Palette, Atelier & Blueprint | Provenance & Raw Materials | Multi-Floor Zoning & Private Rooms |
| **Experiences Page** (`/events`) | Acoustic Gigs, DJ Sets, Matches | Treks, Wine Tastings, Yoga | Sound Baths & Detox Workshops | Design Talks & Monograph Releases | Private Showroom Viewings | Intimate Gigs & Guest Speaker Galas |
| **Social Proof** (`/reviews`) | Google Reviews (4.6★) | Condé Nast & Guest Reviews | Patient & Client Transformations | Architectural Awards (AIA, Dezeen) | Collector Quotes & Press | Member Endorsements & Press |
| **Careers / Team** (`/careers`) | Barista, Wok Chef, Host | Concierge, Guest Relations, Butler | Therapists, Estheticians, Nurses | Architects, 3D Artists, Directors | Master Tailors, Gemologists | Hospitality Hosts, Event Directors |
| **Frictionless Action** (`/contact`) | Instant WhatsApp Pre-Order & Table RSVP | Direct Suite RSVP & WhatsApp Concierge | Appointment Booking & WhatsApp Consult | Project Brief Transmission & Scope Call | Private Viewing RSVP & Concierge | Membership Application & Private Tour |

---

## 3. The "Anti-AI" Visual & Language Purity Standard

To guarantee the site looks like it was designed by an elite London/Tokyo agency rather than generated by an AI, **strictly enforce these 5 bans**:

| ❌ STRICTLY FORBIDDEN (AI Cliche) | ✅ REQUIRED REPLACEMENT |
| :--- | :--- |
| **4-Pointed Sparkle Icon** (`Sparkles` from Lucide) | Use domain-specific Lucide outline icons (`Coffee`, `Flame`, `UtensilsCrossed`, `Music`, `Wallet`, `Compass`, `Eye`, `Layers`, `Clock`). |
| **Pulsing Dots & Radar Pings** (`animate-ping`) | Clean, solid typography labels or subtle borders. |
| **Navigation Pills & Clutter** (`[HIRING]`, `(4.6★)`) | Clean text links only in the header: `Home`, `Menu/Catalog`, `The Space/Craft`, `Live Gigs/Experiences`, `Reviews`, `Careers`, `Contact`. |
| **Cheesy Emojis as Icons** (`🍛`, `💰`, `☕`, `🎉`, `🏨`, `🌿`) | Hand-picked Lucide outline icons inside frosted dark glass cards (`w-11 h-11 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center`). |
| **Corporate MBA / AI Jargon** (*"The Hybrid Business Model"*, *"Spatial Zoning"*, *"Conversion Pathways"*, *"Monetize Asset Footprint"*) | **Customer Desires**: *"Your Morning Focus. Your Evening Celebration."*, *"A Space For Every Mood"*, *"Reserve Your Table"*, *"Kawasoti’s Favorite Gathering Spot"*. |

---

## 4. The Golden Rules of Visual Hierarchy (The 2-2-1 Rule)

Every page hero across **any niche** must adhere to the **2-2-1 formula**:

1. **Strict 2-Line Heading**: Line 1 and Line 2 must each be wrapped in a `<span className="block whitespace-nowrap">` with fluid responsive font scales (`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl`). It must NEVER wrap into 3 lines on any screen.
2. **Strict 2-Line Description**: Balanced into 2 concise, human sentences wrapped in `<span className="block whitespace-nowrap">` on tablet/desktop. It must NEVER wrap into 4 lines.
3. **Exactly 1 Clean Primary CTA**: A single high-contrast pill button (`Explore Digital Menu →`, `Reserve A Table →`, `Book A Suite →`, `Inquire For Project →`).

### Canonical 2-Line Hero Examples Across Niches:

- **Hospitality / Cafe**:
  > **Heading:** `Where Daylight Conversations` / *`Melt Into Electric Nights.`*  
  > **Desc:** `Kawasoti’s favorite gathering spot on Kumarwoti College Line.` / `Fresh coffee & good food by day, live music & cold drinks by night.`  
  > **CTA:** `Explore Digital Menu →`

- **Boutique Eco-Resort / Hotel**:
  > **Heading:** `Where Himalayan Silence` / *`Meets Uncompromising Luxury.`*  
  > **Desc:** `Six private cedar-glass villas perched above the Pokhara valley ridge.` / `Farm-to-table dining by day, fireside stargazing and stillness by night.`  
  > **CTA:** `Reserve Your Villa →`

- **Aesthetic Clinic & Holistic Spa**:
  > **Heading:** `Where Clinical Precision` / *`Nurtures Timeless Vitality.`*  
  > **Desc:** `Kathmandu’s premier sanctuary for bespoke dermatology and thermal wellness.` / `Personalized skin protocols by morning, restorative hydrotherapy by dusk.`  
  > **CTA:** `Explore Treatment Menu →`

- **Architecture & Interior Atelier**:
  > **Heading:** `Where Raw Monolithic Form` / *`Frames Daily Human Life.`*  
  > **Desc:** `Bespoke residential and commercial architecture crafted across the Himalayas.` / `Thoughtful material honesty by design, enduring sensory spaces for generations.`  
  > **CTA:** `View Selected Works →`

- **Bespoke Luxury Tailoring / Jewelry**:
  > **Heading:** `Where Rare Heritage Craft` / *`Adorns Modern Individuality.`*  
  > **Desc:** `Hand-loomed cashmere, bespoke suiting, and conflict-free ceremonial jewelry.` / `Private atelier consultations in London, crafted for a lifetime of distinction.`  
  > **CTA:** `Explore Curated Collection →`

---

## 5. Frictionless WhatsApp Conversion Engine

Convert visitors instantly into paying customers or confirmed bookings via URI-encoded WhatsApp templates:

### A. Pre-Order & Catalog Tray Hook
```typescript
export const generateWhatsAppOrderUrl = (phone: string, brandName: string, items: Array<{ name: string; price: number; quantity: number }>, total: number) => {
  const itemsList = items.map(item => `• ${item.quantity}x ${item.name} (Rs. ${item.price * item.quantity})`).join('\n');
  const message = `👋 *NEW PRE-ORDER — ${brandName.toUpperCase()}*
━━━━━━━━━━━━━━━━━━━━
${itemsList}
━━━━━━━━━━━━━━━━━━━━
💰 *Estimated Total:* Rs. ${total}
⏰ *Preferred Time:* In 20-30 minutes
📍 *Pickup / Dine-In*

Please confirm receipt and begin preparation!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
```

### B. Table, Suite or Appointment RSVP Hook
```typescript
export const generateWhatsAppBookingUrl = (phone: string, brandName: string, data: {
  fullName: string;
  phone: string;
  serviceOrTier: string;
  date: string;
  time: string;
  guestOrScopeCount: string;
  notes?: string;
}) => {
  const message = `✨ *INQUIRY & RESERVATION — ${brandName.toUpperCase()}*
━━━━━━━━━━━━━━━━━━━━
• *Client Name:* ${data.fullName}
• *Phone:* ${data.phone}
• *Selected Service / Tier:* ${data.serviceOrTier}
• *Preferred Date:* ${data.date} at ${data.time}
• *Party Size / Project Scope:* ${data.guestOrScopeCount}
${data.notes ? `• *Special Notes:* ${data.notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━
Please confirm availability and next steps!`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
```

---

## 6. Technical Stack & Deployment Configuration

Always scaffold the project with:
- **Engine**: Vite + React 18 + TypeScript + `react-router-dom`.
- **Styling**: Tailwind CSS with custom palette (`brand-gold`, `brand-obsidian`, `brand-noir`, `brand-cardDark`).
- **Typography**: Google Fonts:
  - Display/Headings: `Cinzel` & `Cormorant Garamond` (editorial serif).
  - Body: `Plus Jakarta Sans`, `Inter`, or `Manrope` (clean geometric sans).
- **Icons**: `lucide-react` (outline style only, strictly curated).
- **Celebration Feedback**: `canvas-confetti` on form submissions.
- **Vercel SPA Configuration** (`vercel.json`):
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ],
    "headers": [
      {
        "source": "/images/(.*)",
        "headers": [
          { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
        ]
      }
    ]
  }
  ```

---

## 7. Execution Runbook & Verification Checklist

Before presenting the completed website to the user, run this mandatory audit:

1. **Parameter Audit**: Verify that all 8 discovery parameters have been faithfully incorporated.
2. **Build Verification**: Run `npm run build` to confirm zero TypeScript errors, zero missing imports, and successful Vite bundling.
3. **AI Cliché Sweep**:
   - `grep -rn "Sparkles" src/` must return `0` results.
   - `grep -rn "animate-ping" src/` must return `0` results.
   - Verify no green status pill badges exist in the navigation bar.
4. **Jargon Sweep**:
   - `grep -rni "hybrid business\|spatial zoning\|monetiz" src/` must return `0` results.
5. **Hero Line Count Verification**:
   - Render Home and Careers heroes:
     - Is the heading strictly 2 lines?
     - Is the description strictly 2 lines?
     - Is there strictly 1 CTA button?
6. **Mobile Responsiveness**:
   - Verify hamburger navigation opens smoothly, closes on route navigation, and locks background scrolling.
   - Test floating WhatsApp pre-order button.
