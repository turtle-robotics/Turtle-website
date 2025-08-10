import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import Footer from './Footer'

const Layout = ({ children }) => {
  const location = useLocation()

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/hatchling', label: 'Hatchling' },
    { path: '/apply', label: 'Apply' }
  ]

  const sponsorItem = { path: '/sponsorship', label: 'Looking to Sponsor?' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
              <span className="text-base md:text-lg font-light hidden sm:inline">TAMU</span>
              <span className="hidden sm:inline">|</span>
              <span className="text-2xl font-extralight tracking-tight">
                <span className="text-yellow-600 dark:text-yellow-400">TURTLE</span> ROBOTICS
              </span>
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-light tracking-wide transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-yellow-600 dark:text-yellow-400 border-b-2 border-yellow-600 dark:border-yellow-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-yellow-600 dark:hover:text-yellow-400 hover:border-b-2 hover:border-yellow-600/50 dark:hover:border-yellow-400/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Special Sponsor Link */}
              <Link
                to={sponsorItem.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 px-4 py-2 rounded-lg ${
                  location.pathname === sponsorItem.path
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg'
                    : 'bg-gradient-to-r from-yellow-400 to-amber-400 text-white hover:from-yellow-500 hover:to-amber-500 shadow-md hover:shadow-lg'
                }`}
              >
                {sponsorItem.label}
              </Link>
            </div>

            <ThemeToggleButton />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg md:hidden">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                location.pathname === item.path
                  ? 'bg-yellow-600 dark:bg-yellow-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              <span className="text-xs font-light">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-16 md:pb-0">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout 