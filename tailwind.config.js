/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'sans': ['var(--font-sans)'],
        'heading': ['var(--font-heading)'],
      },
      colors: {
        /* Semantic tokens wired to CSS variables (light/dark runtime theming) */
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',

        brand: {
          primary: 'var(--color-brand-primary)',
          secondary: 'var(--color-brand-secondary)',
          dark: 'var(--color-brand-dark)',
          light: 'var(--color-brand-light)',
        },

        /* Accent/secondary keep semantic names for utilities */
        accent: 'var(--color-accent)',
        secondary: 'var(--color-secondary)',

        gray: {
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },

        gradients: {
          turtle: 'linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))',
        },
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'reveal-text': 'revealText 1.5s ease-out',
        'dots': 'dots 1.5s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(166, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(166, 0, 0, 0.6)' },
        },
        revealText: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        dots: {
          '0%, 20%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-8px)' },
          '60%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 