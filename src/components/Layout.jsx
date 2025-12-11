/**
 * Layout Component
 *
 * Main application layout wrapper providing:
 * - Fixed navigation bar with logo, menu items, and theme toggle
 * - Responsive mobile menu with hamburger toggle
 * - Dropdown navigation for Development Programs section
 * - Footer with social links and contact info
 * - Auto-scroll to top on route changes
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content to render
 */
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top when navigating between pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Main navigation structure
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    {
      label: "Development Programs",
      dropdown: [
        { path: "/hatchling", label: "Hatchling" },
        { path: "/workshop-series", label: "Workshop Series" },
      ],
    },
    { path: "/showcase", label: "Showcase" },
    { path: "/apply", label: "Apply" },
  ];

  // Special sponsor CTA link
  const sponsorItem = { path: "/sponsorship", label: "Looking to Sponsor?" };

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <nav className="nav-shell fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20 relative">
            <Link to="/" className="flex items-center gap-3 text-text h-full">
              {/* Logo spot */}
              <img
                src="/assets/black_logo-removebg-preview.png"
                alt="Logo"
                className="h-8 sm:h-12 w-auto dark:hidden align-middle"
              />
              <img
                src="/assets/white_logo.png"
                alt="Logo"
                className="h-8 sm:h-12 w-auto hidden dark:inline align-middle"
              />
              <span className="text-sm sm:text-2xl font-normal tracking-tight align-middle leading-none ml-1 sm:ml-2 lg:inline hidden">
                <span className="text-accent">TURTLE</span>
              </span>
            </Link>

            <span className="md:hidden absolute left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl font-normal tracking-tight">
              <span className="text-accent">TURTLE</span>
            </span>

            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div
                    key={item.label}
                    className="relative group flex items-center"
                  >
                    <button className="flex items-center text-sm font-normal tracking-wide transition-colors duration-300 text-secondary-2 hover:text-primary-1 hover:border-b-2 hover:border-primary-1/70">
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 nav-shell rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className={`block px-4 py-3 text-sm font-normal transition-all duration-300 ${
                            location.pathname === dropdownItem.path
                              ? "text-primary-1"
                              : "text-secondary-2 hover:text-primary-1"
                          }`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center text-sm font-normal tracking-wide transition-all duration-300 ${
                      location.pathname === item.path
                        ? "text-primary-1 border-b-2 border-primary-1"
                        : "text-secondary-2 hover:text-primary-1 hover:border-b-2 hover:border-primary-1/70"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}

              {/* Special Sponsor Link */}
              <Link
                to={sponsorItem.path}
                className={`text-sm font-medium tracking-wide transition-all duration-300 px-4 py-2 rounded-lg text-white hover:scale-110 hover:px-6 ${
                  location.pathname === sponsorItem.path
                    ? "bg-accent-1 shadow-lg scale-110"
                    : "bg-accent-1 shadow-md hover:shadow-lg"
                }`}
              >
                {sponsorItem.label}
              </Link>

              {/* Admin Link */}
              <Link
                to="/admin"
                className={`flex items-center gap-1 text-sm font-light tracking-wide transition-all duration-300 ${
                  location.pathname === "/admin"
                    ? "text-primary-1"
                    : "text-secondary-2 hover:text-primary-1"
                }`}
                title="Admin Dashboard"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </Link>
            </div>

            <ThemeToggleButton />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="nav-shell-bottom fixed bottom-0 left-0 right-0 z-50 shadow-lg md:hidden">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) =>
            item.dropdown ? (
              // For dropdown items, show the first dropdown item as the main link
              <Link
                key={item.dropdown[0].path}
                to={item.dropdown[0].path}
                className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                  location.pathname === item.dropdown[0].path
                    ? "bg-accent text-gradient-foreground"
                    : "text-muted hover:bg-gray-100"
                }`}
                title={`${item.label}: ${item.dropdown.map((d) => d.label).join(", ")}`}
              >
                <span className="text-xs font-light">DP</span>
              </Link>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-accent text-gradient-foreground"
                    : "text-muted hover:bg-surface"
                }`}
              >
                <span className="text-xs font-light">{item.label}</span>
              </Link>
            ),
          )}

          {/* Admin Link for Mobile */}
          <Link
            to="/admin"
            className={`flex flex-col items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
              location.pathname === "/admin"
                ? "bg-accent text-gradient-foreground"
                : "text-muted hover:bg-surface"
            }`}
            title="Admin"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 pb-16 md:pb-0">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
