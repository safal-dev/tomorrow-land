# TomorrowLand Cafe & Restro — Official Web Platform

> **Where Daylight Conversations Melt Into Electric Nights**  
> 2,660 Sq. Ft. Industrial-Chic Day Specialty Cafe & Evening Nightlife Pub  
> Situated on Kumarwoti College Line, Kawasoti-2, Nawalpur (Nawalparasi), Nepal  
> Flagship Hub + Riverside Tomorrowland micro-branch  
> **Google Rating:** 4.6★ (278+ verified reviews) | **Facebook Rating:** 5.0/5.0  

---

## 🌟 Core Strategic Differentiators

1. **Architectural Vibe Domination:** Designed by **Vivid Interiors (Lalitpur)**, featuring exposed steel, industrial raw brick, mood Edison lighting, and custom neon installations across a 2,660 sq. ft. multi-zone space.
2. **True Day-to-Night Versatility:**
   - **☀️ The Daytime Sanctuary (7 AM – 4 PM):** High-speed 100 Mbps Wi-Fi, power outlets at every booth, artisanal single-origin Arabica espresso, pour-overs, fresh fruit smoothies, and fast 15-minute college-break menus.
   - **🌙 The Nightlife Arena (4 PM – 10 PM+):** High-energy pub, weekly live acoustic gigs, Saturday DJ pulse, giant-screen match screenings (Nepal cricket, football, Premier League), craft cocktails, chilled draft beer, and separate smoking/non-smoking floors.
3. **Dual Conversion Pipelines:**
   - **Pathway A (Instant WhatsApp Pre-Order):** Built for students and highway commuters on tight schedules. 1-click order generator routes directly to frontline WhatsApp (`+977 9806919349`) with pre-filled items, prep-time estimate (15–20 mins), and name.
   - **Pathway B (Venue Event Booking & Table RSVP):** Instant booking engine for birthdays (with custom song requests as praised in reviews!), match nights, and family dinners.

---

## 🚀 Key Feature Modules

- **Day/Night Mood Switcher:** Interactive toggle in header and banner that transforms the UI ambience between daylight cafe and neon nightlife.
- **Interactive Digital Menu:**
  - Categorized into *Signature Momo & Bites* (Jhol Momo, Buff C-Momo, Kothey Momo, Chicken Chilli), *Specialty Coffee & Daytime*, *Pizzas & Gourmet Burgers*, *Heavy Mains & Asian Wok*, *Craft Bar & Cocktails*, and *Hookah Lounge*.
  - Live search, dietary filter pills (*Pure Veg*, *Spicy*, *Crowd Favorites*), and live NPR pricing (`Rs.`).
  - Pre-order cart tray synced with `localStorage`.
- **Live Event & Gig Calendar:** Filterable schedule for Friday Acoustic Unplugged, Saturday DJ Nights, Nepal Cricket Screenings, and Wednesday College Jams, with direct table reservation hooks.
- **Careers & Hiring Board:** Published live vacancies for *Senior Specialty Barista*, *Chinese Wok & Fast-Food Chef*, *Craft Bartender & Mixologist*, *Floor Captain & Hospitality Host*, and *Social Media Creator*, complete with duties, perks, and 1-click WhatsApp application modal.
- **Social Proof & Verified Reviews Showcase:** Curated from the 278+ real Google reviews with 4.6★ rating and 5/5 on Facebook, filterable by dish (*Jhol Momo*, *Chicken Pizza*, *Gourmet Burger*, *Live Music*, *Ambience*).
- **Dual Venue Showcase:** Detailed cards for the Kawasoti Main Flagship Hub and Riverside Tomorrowland scenic micro-branch with GPS directions and direct hotlines (`+977 9806919349` / `+977 78-590239`).

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 18 + Vite 5 + TypeScript
- **Styling:** Tailwind CSS with custom neon palettes, Cormorant Garamond, Cinzel, and Plus Jakarta Sans typography
- **Icons:** Lucide React
- **Celebration Effects:** Canvas Confetti
- **Images:** Official high-resolution architectural photography from Vivid Interiors + appetizing food photography

---

## 📦 How to Deploy on Vercel

### Option 1: Deploy via GitHub (Recommended)
1. Push this project folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TomorrowLand Cafe & Restro website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log into [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your website will be live globally on a custom `.vercel.app` domain (or your custom domain like `tomorrowlandcafe.com`)!

### Option 2: Deploy via Vercel CLI
```bash
npm i -g vercel
vercel
```
Follow the interactive prompts to deploy directly from your local terminal.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

