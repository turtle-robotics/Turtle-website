import { createContext, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  // Always return dark mode and a no-op toggle
  return { isDark: true, toggleTheme: () => {} }
}

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  const value = {
    isDark: true,
    toggleTheme: () => {}
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}