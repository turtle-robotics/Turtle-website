import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ThemeToggleButton from './ThemeToggleButton'

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-2xl font-extralight tracking-tight text-gray-800 dark:text-gray-200">
              <span className="text-accent">TURTLE</span> ROBOTICS
            </Link>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-light tracking-wide transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-gray-600 dark:text-gray-300 hover:text-accent hover:border-b-2 hover:border-accent/50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <ThemeToggleButton />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200/50 dark:border-gray-700/50 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-light text-gray-600 dark:text-gray-400">
              © 2024 Turtle Robotics. All rights reserved.
            </p>
            <p className="text-xs font-light text-gray-500 dark:text-gray-500 mt-2">
              Student Robotics Research Lab at Texas A&M University
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 