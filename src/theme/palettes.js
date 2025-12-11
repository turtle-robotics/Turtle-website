/**
 * Palette definitions for the entire site.
 *
 * Drop in any new palette here (e.g., copy hex values from Coolors or Adobe Color).
 * Only edit this file to theme the whole site. Keys map directly to CSS variables
 * consumed by Tailwind (see tailwind.config.js) and global styles (main.css).
 *
 * How to add your own palette in <60 seconds:
 * 1) Duplicate `defaultPalette` and rename it (e.g., `sunsetPalette`).
 * 2) Replace the hex values with your palette's 9 colors (light + dark variants).
 * 3) In ThemeContext, swap `activePalette` to your new palette name.
 *
 * Exact input: 9 colors per mode (light/dark):
 * - primary1, primary2             (2 primary colors)
 * - secondary1 through secondary5  (5 secondary colors)
 * - accent1, accent2               (2 accent colors)
 */

// Build a full palette from 9 core colors per mode
const buildPalette = ({ light, dark }) => {
  const buildMode = (core) => {
    return {
      primary1: core.primary1,
      primary2: core.primary2,
      secondary1: core.secondary1,
      secondary2: core.secondary2,
      secondary3: core.secondary3,
      secondary4: core.secondary4,
      secondary5: core.secondary5,
      accent1: core.accent1,
      accent2: core.accent2,
    };
  };

  return {
    light: buildMode(light),
    dark: buildMode(dark),
  };
};

// Default palette using 9 inputs per mode (2 primary, 5 secondary, 2 accent)
export const defaultPalette = buildPalette({
  light: {
    primary1: "#500000",
    primary2: "#ffffff",
    secondary1: "#202020",
    secondary2: "#3e3e3e",
    secondary3: "#707070",
    secondary4: "#d1d1d1",
    secondary5: "#d6d3c4",
    accent1: "#3c0000",
    accent2: "#732f2f",
  },
  dark: {
    primary1: "#ffffff",
    primary2: "#500000",
    secondary1: "#d6d3c4",
    secondary2: "#d1d1d1",
    secondary3: "#707070",
    secondary4: "#3e3e3e",
    secondary5: "#202020",
    accent1: "#732f2f",
    accent2: "#3c0000",
  },
});

// Map palette keys to CSS custom properties
const CSS_VAR_MAP = {
  primary1: "--color-primary-1",
  primary2: "--color-primary-2",
  secondary1: "--color-secondary-1",
  secondary2: "--color-secondary-2",
  secondary3: "--color-secondary-3",
  secondary4: "--color-secondary-4",
  secondary5: "--color-secondary-5",
  accent1: "--color-accent-1",
  accent2: "--color-accent-2",
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
