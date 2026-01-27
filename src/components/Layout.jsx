import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './Footer'
import ButtonLink from './ButtonLink'

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
    { path: '/development-programs', label: 'Development Programs' },
    { path: '/showcase', label: 'Showcase' },
    { path: '/apply', label: 'Apply' }
  ]

  const sponsorItem = { path: '/sponsorship', label: 'Looking to Sponsor?' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row w-full items-center sm:items-center justify-between h-20 gap-2 sm:gap-0">
            <Link to="/" className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-gray-200 min-w-0">
              {/* Logo spot */}
              <img
                src="/assets/white_logo.png"
                alt="Logo"
                className="h-8 w-auto sm:h-12 align-middle"
              />
              <span className="text-yellow-400 text-base sm:text-2xl font-extralight tracking-tight align-middle leading-none ml-0 sm:ml-2 whitespace-nowrap">
                TURTLE
              </span>
            </Link>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-8 w-full sm:w-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center text-xs sm:text-sm font-light tracking-wide transition-all duration-300 ${
                    location.pathname === item.path || 
                    (item.path === '/development-programs' && (location.pathname === '/hatchling' || location.pathname === '/workshop-series'))
                      ? 'text-yellow-400 border-b-2 border-yellow-400'
                      : 'text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400/50'
                  }`}
                  style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {item.label}
                </Link>
              ))}
              {/* Special Sponsor Link */}
              <ButtonLink to="/sponsorship" style="primary" sizeVariant="small">Looking to Sponsor?</ButtonLink>
              {/* Admin Link */}
              <Link
                to="/admin"
                className={`flex items-center gap-1 text-xs sm:text-sm font-light tracking-wide transition-all duration-300 ${
                  location.pathname === '/admin'
                    ? 'text-yellow-400'
                    : 'text-gray-400 hover:text-yellow-400'
                }`}
                title="Admin Dashboard"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-xl border-t border-gray-700/50 shadow-lg md:hidden">
        <div className="flex justify-around items-center h-16 px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path ||
              (item.path === '/development-programs' && (location.pathname === '/hatchling' || location.pathname === '/workshop-series'));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 border-b-2 ${
                  isActive
                    ? 'text-yellow-400 border-yellow-400 bg-transparent'
                    : 'text-gray-300 border-transparent hover:text-yellow-400 hover:border-yellow-400/50 hover:bg-gray-800'
                }`}
              >
                <span className="text-xs font-light text-center">
                  {item.label === 'Development Programs' ? 'Dev' : item.label}
                </span>
              </Link>
            );
          })}
          {/* Admin Link for Mobile */}
          <Link
            to="/admin"
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 border-b-2 ${
              location.pathname === '/admin'
                ? 'text-yellow-400 border-yellow-400 bg-transparent'
                : 'text-gray-300 border-transparent hover:text-yellow-400 hover:border-yellow-400/50 hover:bg-gray-800'
            }`}
            title="Admin"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </Link>
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