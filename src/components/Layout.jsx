import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import ButtonLink from "./ButtonLink";
import { Analytics } from "@vercel/analytics/react";
import Banner from "./Banner";

const Layout = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSiteBanner, setShowSiteBanner] = useState(false);

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    {
      path: "/development-programs",
      label: "Development Programs",
      children: [
        { path: "/hatchling", label: "Hatchling" },
        { path: "/mechanical-incubator", label: "Mechanical Incubator" },
        { path: "/software-incubator", label: "Software Incubator" },
      ],
    },
    { path: "/showcase", label: "Showcase" },
    { path: "/apply", label: "Apply" },
  ];

  const isPathActive = (path) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(`${path}/`));

  const isItemActive = (item) =>
    isPathActive(item.path) ||
    item.children?.some((child) => isPathActive(child.path));

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleDismissBanner = () => {
    setShowSiteBanner(false);
  };

  const navTopClass = showSiteBanner ? "top-12" : "top-0";
  const mainTopPaddingClass = showSiteBanner ? "pt-32" : "pt-16";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Analytics />

      {showSiteBanner && (
        <Banner style="primary" onClose={handleDismissBanner}>
          See our 21 projects at Showcase on 4/17 in ZACH{" "}
          <Link
            to="/showcase"
            className={`text-black hover:text-white underline`}
          >
            click here for more information
          </Link>
        </Banner>
      )}

      {/* Navigation */}
      <nav
        className={`fixed ${navTopClass} left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50 shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-16 items-center justify-between gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 text-gray-200 min-w-0"
            >
              <img
                src="/assets/white_logo.png"
                alt="TURTLE logo"
                className="h-8 w-auto sm:h-12"
              />
              <span className="text-yellow-400 text-xl sm:text-2xl tracking-tight leading-none whitespace-nowrap">
                TURTLE
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.path} className="group relative">
                    <Link
                      to={item.path}
                      aria-haspopup="true"
                      aria-controls={`desktop-menu-${item.path.slice(1).replaceAll("/", "-")}`}
                      className={`flex items-center gap-1 text-sm font-light tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 ${
                        isItemActive(item)
                          ? "text-yellow-400"
                          : "text-gray-300 hover:text-yellow-400"
                      }`}
                    >
                      {item.label}
                      <span className="p-1 transition-transform group-hover:rotate-180 group-has-[:focus-visible]:rotate-180">
                        ▾
                      </span>
                    </Link>
                    <div
                      id={`desktop-menu-${item.path.slice(1).replaceAll("/", "-")}`}
                      className="invisible absolute left-0 top-full w-56 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-has-[:focus-visible]:visible group-has-[:focus-visible]:opacity-100"
                    >
                      <div className="rounded-lg border border-gray-700/70 bg-gray-900/95 p-2 shadow-xl">
                        {/* Repeat the parent page for accessibility and a clear, easy navigation target. */}
                        {[item, ...item.children].map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                              isPathActive(child.path)
                                ? "bg-yellow-500/15 text-yellow-400"
                                : "text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center text-sm font-light tracking-wide transition-all duration-300 ${
                      isItemActive(item)
                        ? "text-yellow-400 border-b-2 border-yellow-400"
                        : "text-gray-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <ButtonLink to="/sponsorship" style="primary" sizeVariant="small">
                Looking to Sponsor?
              </ButtonLink>
            </div>

            <button
              type="button"
              className="md:hidden rounded-md p-2 text-gray-200 hover:bg-gray-800 hover:text-yellow-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Menu</span>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-700/60 pb-4 pt-3">
              <div className="flex flex-col gap-1">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.path}>
                      <input
                        id={`mobile-${item.path.slice(1).replaceAll("/", "-")}`}
                        type="checkbox"
                        className="peer sr-only"
                        aria-label={`Toggle ${item.label} menu`}
                        aria-controls={`mobile-menu-${item.path.slice(1).replaceAll("/", "-")}`}
                      />
                      <label
                        htmlFor={`mobile-${item.path.slice(1).replaceAll("/", "-")}`}
                        className={`flex cursor-pointer items-center justify-between rounded-md px-3 py-3 text-sm tracking-wide peer-focus-visible:ring-2 peer-focus-visible:ring-yellow-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-gray-900 ${
                          isItemActive(item)
                            ? "text-yellow-400"
                            : "text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                        }`}
                      >
                        {item.label}
                        <span className="block transition-transform peer-checked:rotate-180">
                          ▾
                        </span>
                      </label>
                      <div
                        id={`mobile-menu-${item.path.slice(1).replaceAll("/", "-")}`}
                        className="ml-4 hidden border-l border-yellow-500/40 pl-3 peer-checked:block"
                      >
                        {/* Repeat the parent page for accessibility and user-friendly mobile navigation. */}
                        {[item, ...item.children].map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                              isPathActive(child.path)
                                ? "text-yellow-400"
                                : "text-gray-400 hover:bg-gray-800 hover:text-yellow-400"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block rounded-md px-3 py-3 text-sm tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                        isItemActive(item)
                          ? "text-yellow-400"
                          : "text-gray-300 hover:bg-gray-800 hover:text-yellow-400"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
                <ButtonLink
                  to="/sponsorship"
                  style="primary"
                  sizeVariant="small"
                  className="mt-3 text-center"
                >
                  Looking to Sponsor?
                </ButtonLink>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className={`${mainTopPaddingClass} pb-0 md:pb-0`}>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
