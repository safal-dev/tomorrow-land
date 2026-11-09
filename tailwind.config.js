/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          bronze: '#C5A059',
          amber: '#F59E0B',
          neonCyan: '#00F0FF',
          neonPink: '#FF007F',
          neonPurple: '#A855F7',
          obsidian: '#090A0F',
          noir: '#111319',
          cardDark: '#161922',
          cardLight: '#FFFFFF',
          cream: '#FAF7F2',
          warmGray: '#F3EFEA',
          espresso: '#2B1E16',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(0, 240, 255, 0.45)',
        'neon-gold': '0 0 25px rgba(212, 175, 55, 0.4)',
        'neon-pink': '0 0 25px rgba(255, 0, 127, 0.45)',
        'glow-soft': '0 10px 35px -5px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};
