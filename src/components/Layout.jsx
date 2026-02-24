import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import SponsorTicker from "./SponsorTicker";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const sponsorItem = { path: "/sponsorship", label: "Looking to Sponsor?" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

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
