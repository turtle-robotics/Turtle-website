import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import SponsorTicker from "./SponsorTicker";
import ButtonLink from "./ButtonLink";

const Layout = ({ children }) => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/development-programs", label: "Development Programs" },
    { path: "/showcase", label: "Showcase" },
    { path: "/apply", label: "Apply" },
  ];

  const sponsorItem = { path: "/sponsorship", label: "Looking to Sponsor?" };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      {!showHeader && (
        <button
          className="fixed top-4 left-4 z-[100] text-black rounded-full p-3 shadow-lg md:hidden animate-bounce"
          style={{ fontSize: 22, lineHeight: 1 }}
          onClick={() => setShowHeader(true)}
          aria-label="Open header"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}
      {showHeader && (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col sm:flex-row w-full items-center sm:items-center justify-between min-h-20 gap-2 sm:gap-0">
              <Link
                to="/"
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-gray-200 min-w-0"
              >
                {/* Logo spot */}
                <img
                  src="/assets/white_logo.png"
                  alt="Logo"
                  className="h-8 w-auto sm:h-12 align-middle"
                />
                <span className="text-yellow-400 text-base sm:text-2xl tracking-tight align-middle leading-none ml-0 sm:ml-2 whitespace-nowrap">
                  TURTLE
                </span>
              </Link>
              <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-8 w-full sm:w-auto px-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center text-xs sm:text-sm font-light tracking-wide transition-all duration-300 ${location.pathname === item.path ||
                      (item.path === "/development-programs" &&
                        (location.pathname === "/hatchling" ||
                          location.pathname === "/workshop-series"))
                      ? "text-yellow-400 border-b-2 border-yellow-400"
                      : "text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400/50"
                      }`}
                    style={{
                      minWidth: 0,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Special Sponsor Link */}
                <ButtonLink
                  to="/sponsorship"
                  style="primary"
                  sizeVariant="small"
                >
                  Looking to Sponsor?
                </ButtonLink>
              </div>
            </div>
            {/* Mobile Header Close Button */}
            <button
              className="absolute top-2 right-4 z-[100] bg-gray-800 text-gray-200 rounded-full p-2 shadow-lg md:hidden"
              style={{ fontSize: 24, lineHeight: 1 }}
              onClick={() => setShowHeader(false)}
              aria-label="Close header"
            >
              ×
            </button>
          </div>
        </nav>
      )}

      {/* ...existing code... */}

      {/* Main Content */}
      <main className="pt-16 pb-16 md:pb-0">{children}</main>

      {/* Sponsor Ticker - above Footer */}
      {(location.pathname === "/" || location.pathname === "/sponsorship") && (
        <div
          className={`w-full flex justify-center ${location.pathname === "/" ? "mt-0" : "mt-6"} mb-6`}
        >
          <SponsorTicker />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
