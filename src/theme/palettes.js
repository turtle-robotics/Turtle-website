/**
 * Palette definitions for the entire site.
 *
 * Drop in any new palette here (e.g., copy hex values from Coolors or Adobe Color).
 * Only edit this file to theme the whole site. Keys map directly to CSS variables
 * consumed by Tailwind (see tailwind.config.js) and global styles (main.css).
 *
 * How to add your own palette in <60 seconds:
 * 1) Duplicate `defaultPalette` and rename it (e.g., `sunsetPalette`).
 * 2) Replace the hex values with your palette's colors (light + dark variants).
 * 3) In ThemeContext, swap `activePalette` to your new palette name.
 *
 * Required keys (match CSS vars):
 * - bg, surface, text, muted, border
 * - accent, secondary
 * - brandPrimary, brandSecondary, brandDark, brandLight
 * - gradientStart, gradientEnd, gradientForeground
 * - gray100 ... gray900
 */

export const defaultPalette = {
  light: {
    bg: "#d1d1d1",
    surface: "#f9f9f9",
    text: "#000000",
    muted: "#666666",
    border: "#e0e0e0",
    accent: "#500000",
    secondary: "#732f2f",
    brandPrimary: "#500000",
    brandSecondary: "#ffffff",
    brandDark: "#3c001c",
    brandLight: "#732f2f",
    gradientStart: "#500000",
    gradientEnd: "#732f2f",
    gradientForeground: "#e0e0e0",
    gray100: "#f6f6f6",
    gray200: "#eaeaea",
    gray300: "#d1d1d1",
    gray400: "#a7a7a7",
    gray500: "#707070",
    gray600: "#626262",
    gray700: "#535353",
    gray800: "#3e3e3e",
    gray900: "#202020",
  },
  dark: {
    bg: "#0a0f1a",
    surface: "#111a2b",
    text: "#f5f7fb",
    muted: "#c7d2e5",
    border: "#22314a",
    accent: "#f2c14f",
    secondary: "#1f3b73",
    brandPrimary: "#f2c14f",
    brandSecondary: "#0d1f3b",
    brandDark: "#0a0f1a",
    brandLight: "#456698",
    gradientStart: "#f6d365",
    gradientEnd: "#f2c14f",
    gradientForeground: "#0d1f3b",
    gray100: "#e8edf7",
    gray200: "#cfd9ed",
    gray300: "#a6b9da",
    gray400: "#7e99c5",
    gray500: "#5c7eaf",
    gray600: "#456698",
    gray700: "#344d76",
    gray800: "#23365a",
    gray900: "#141f36",
  },
};

// Map palette keys to CSS custom properties used across the site
const CSS_VAR_MAP = {
  bg: "--color-bg",
  surface: "--color-surface",
  text: "--color-text",
  muted: "--color-muted",
  border: "--color-border",
  accent: "--color-accent",
  secondary: "--color-secondary",
  brandPrimary: "--color-brand-primary",
  brandSecondary: "--color-brand-secondary",
  brandDark: "--color-brand-dark",
  brandLight: "--color-brand-light",
  gradientStart: "--color-gradient-start",
  gradientEnd: "--color-gradient-end",
  gradientForeground: "--color-gradient-foreground",
  gray100: "--color-gray-100",
  gray200: "--color-gray-200",
  gray300: "--color-gray-300",
  gray400: "--color-gray-400",
  gray500: "--color-gray-500",
  gray600: "--color-gray-600",
  gray700: "--color-gray-700",
  gray800: "--color-gray-800",
  gray900: "--color-gray-900",
};

/**
 * Apply a palette by setting CSS variables on :root.
 * @param {object} palette - Palette object with `light` and `dark` keys.
 * @param {"light"|"dark"} mode - Current mode.
 */
export function applyPalette(palette, mode = "light") {
  if (!palette || !palette[mode]) return;
  const theme = palette[mode];
  Object.entries(theme).forEach(([key, value]) => {
    const cssVar = CSS_VAR_MAP[key];
    if (!cssVar) return;
    document.documentElement.style.setProperty(cssVar, value);
  });
}
