/**
 * Tailwind CSS Configuration
 *
 * Custom theme configuration for TURTLE Robotics website.
 * Features:
 * - CSS variable-based theming for dark/light mode switching
 * - Custom color palette (brand colors, semantic tokens)
 * - Extended spacing, typography, and animation utilities
 * - Gradient utilities (gradient-turtle)
 * - Custom plugins for aspect ratios and scrollbar styling\n * All colors use CSS variables (--color-*) for runtime theme switching.
 * See main.css for CSS variable definitions.
 */
/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },
      colors: {
        /* Semantic tokens wired to CSS variables (light/dark runtime theming) */
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",

        brand: {
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          dark: "var(--color-brand-dark)",
          light: "var(--color-brand-light)",
        },

        /* Accent/secondary keep semantic names for utilities */
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",

        gray: {
          100: "var(--color-gray-100)",
          200: "var(--color-gray-200)",
          300: "var(--color-gray-300)",
          400: "var(--color-gray-400)",
          500: "var(--color-gray-500)",
          600: "var(--color-gray-600)",
          700: "var(--color-gray-700)",
          800: "var(--color-gray-800)",
          900: "var(--color-gray-900)",
        },

        gradients: {
          turtle:
            "linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))",
        },
      },
      fontSize: {
        hero: [
          "clamp(3rem, 8vw, 8rem)",
          { lineHeight: "0.9", letterSpacing: "-0.02em" },
        ],
      },
      boxShadow: {
        premium: "0 20px 40px rgba(0, 0, 0, 0.1)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-turtle":
          "linear-gradient(135deg, var(--color-gradient-start), var(--color-gradient-end))",
        "gradient-premium": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      },
      textShadow: {
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.1)",
        lg: "0 4px 8px rgba(0, 0, 0, 0.15)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "reveal-text": "revealText 1.5s ease-out",
        dots: "dots 1.5s ease-in-out infinite",
        "bounce-slow": "bounce 2s infinite",
        "scroll-left": "scrollLeft 90s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(166, 0, 0, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(166, 0, 0, 0.6)" },
        },
        revealText: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        dots: {
          "0%, 20%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-8px)" },
          "60%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(0)" },
        },
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const shadows = theme("boxShadow");
      const darkModeShadows = {};

      // Add dark mode variants for shadows
      Object.keys(shadows).forEach((key) => {
        darkModeShadows[`.dark .shadow-${key}`] = {
          boxShadow: shadows[key].replace(
            /rgba\(0,\s*0,\s*0,\s*([0-9.]+)\)/g,
            "rgba(0, 0, 0, $1 * 2.5)",
          ),
        };
      });

      addUtilities(darkModeShadows);
    }),
    plugin(function ({ addUtilities, theme }) {
      const textShadows = theme("textShadow");
      const darkModeTextShadows = {};

      // Add dark mode variants for text shadows
      Object.keys(textShadows).forEach((key) => {
        darkModeTextShadows[
          `.dark .text-shadow${key === "DEFAULT" ? "" : "-" + key}`
        ] = {
          textShadow: textShadows[key].replace(
            /rgba\(0,\s*0,\s*0,\s*([0-9.]+)\)/g,
            "rgba(0, 0, 0, $1 * 2)",
          ),
        };
      });

      addUtilities(darkModeTextShadows);
    }),
  ],
};
