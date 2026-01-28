import { motion } from 'framer-motion'
import './ProjectTicker.css';

const SponsorTicker = () => {
  // Actual sponsor logos from public/assets/sponsors
  const logos = [
    {
      id: 1,
      name: "14 & Elm",
      url: "/assets/sponsors/14elmtlogo.jpeg",
      alt: "14 & Elm Logo",
      link: "https://14elmt.com"
    },
    {
      id: 2,
      name: "L3 Harris",
      url: "/assets/sponsors/l3harrislogo.png",
      alt: "L3 Harris Logo",
      link: "https://www.l3harris.com/"
    },
    {
      id: 3,
      name: "Phillips 66",
      url: "/assets/sponsors/phillips66logo.png",
      alt: "Phillips 66 Logo",
      link: "https://www.phillips66.com/"
    },
    {
      id: 4,
      name: "Polymaker",
      url: "/assets/sponsors/polymaker-full-logo.svg",
      alt: "Polymaker Logo",
      link: "https://www.polymaker.com/"
    },
    {
      id: 5,
      name: "TC Energy",
      url: "/assets/sponsors/tcenergylogo.png",
      alt: "TC Energy Logo",
      link: "https://www.tcenergy.com/"
    },
    {
      id: 6,
      name: "Williams Energy Partners",
      url: "/assets/sponsors/williams-energy-partners-logo-png-transparent.png",
      alt: "Williams Energy Partners Logo",
      link: "https://www.williams.com/"
    }
  ];

  // smotoh lop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="project-ticker-wrapper" style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10, marginBottom: 0 }}>
      <div className="project-ticker-container">
        <div className="project-ticker-track" style={{ animationDuration: '90s' }}>
          {duplicatedLogos.map((logo, index) => {
            // Custom scaling and rectangle size for specific logos
            let customImgStyle = {
              maxHeight: 60,
              maxWidth: 180,
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              background: '#fff',
              borderRadius: '999px',
              padding: 2,
              margin: '0 auto',
              display: 'block',
            };
            if (logo.name === '14 & Elm') {
              customImgStyle.maxHeight = 72;
              customImgStyle.maxWidth = 220;
            }
            if (logo.name === 'L3 Harris') {
              customImgStyle.maxHeight = 170; // match Williams Energy Partners
              customImgStyle.maxWidth = 480;
            }
            if (logo.name === 'Williams Energy Partners') {
              customImgStyle.maxHeight = 170; // a bit more
              customImgStyle.maxWidth = 480;
            }
            return (
              <a
                key={`${logo.id}-${index}`}
                className="project-ticker-block glass-effect flex items-center justify-center"
                style={{
                  width: 200,
                  height: 110,
                  background: '#fff',
                  borderRadius: '999px',
                  padding: 0,
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
                  border: '1.5px solid #e5e7eb',
                  margin: '0 0.5rem',
                  transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundClip: 'padding-box',
                  overflow: 'hidden',
                }}
                href={logo.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                aria-label={`Visit ${logo.name} website`}
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  style={customImgStyle}
                  className="sponsor-logo"
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SponsorTicker 