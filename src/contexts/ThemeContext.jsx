/**
 * Theme Context - Manages dark/light mode across the application
 *
 * Provides theme state and toggle function to all child components.
 * Persists theme preference to localStorage and respects system preferences.
 */
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

/**
 * Hook to access theme context
 * Must be used within ThemeProvider
 * @returns {Object} { isDark: boolean, toggleTheme: function }
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

/**
 * ThemeProvider Component
 * Wraps app to provide theme functionality
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Update localStorage
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update document class
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
