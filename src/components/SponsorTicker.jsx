/**
 * SponsorTicker Component
 *
 * Animated scrolling display of TURTLE Robotics corporate sponsors.
 * Features:
 * - Continuous horizontal scroll animation using Framer Motion
 * - Duplicates logos 6x for seamless infinite loop
 * - Responsive sizing
 * - Auto-play animation
 */
import { motion } from "framer-motion";

const SponsorTicker = () => {
  // Sponsor logos - logos on white background
  const logos = [
    {
      id: 1,
      name: "Williams",
      url: "assets/sponsors/williamslogo.png",
      alt: "Williams Logo",
    },
    {
      id: 2,
      name: "L3 Harris",
      url: "assets/sponsors/l3harrislogo.png",
      alt: "L3 Harris Logo",
    },
    {
      id: 3,
      name: "Phillips 66",
      url: "assets/sponsors/phillips66logo.png",
      alt: "Phillips 66 Logo",
    },
    {
      id: 4,
      name: "TC Energy",
      url: "assets/sponsors/tcenergylogo.png",
      alt: "TC Energy Logo",
    },
    {
      id: 5,
      name: "14ELMT",
      url: "assets/sponsors/14elmtlogo.png",
      alt: "14ELMT Logo",
    },
    {
      id: 6,
      name: "Polymaker",
      url: "assets/sponsors/polymakerlogo.svg",
      alt: "Polymaker Logo",
    },
  ];

  const duplicatedLogos = [
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
    ...logos,
  ];

  return (
    <div className="w-full py-8 overflow-hidden">
      <motion.div
        className="flex items-center gap-6"
        style={{ width: `${duplicatedLogos.length * 280}px` }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 250, ease: "linear" }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="flex-shrink-0">
            <div className="glass-card p-6 rounded-2xl h-32 w-48 flex items-center justify-center bg-white">
              <img
                src={logo.url}
                alt={logo.alt}
                className="object-contain"
                style={
                  !["Phillips 66"].includes(logo.name)
                    ? {}
                    : { maxWidth: "120%", maxHeight: "120%" }
                }
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default SponsorTicker;
