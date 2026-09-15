import "./SponsorTicker.css";

const SponsorTicker = () => {
  const logos = [
    {
      id: 1,
      name: "14 & Elm",
      tier: "Bronze",
      url: "/assets/sponsors/14elmtlogo.jpeg",
      alt: "14 & Elm Logo",
      link: "https://14elmt.com",
    },
    {
      id: 2,
      name: "L3 Harris",
      tier: "Bronze",
      url: "/assets/sponsors/l3harrislogo.png",
      alt: "L3 Harris Logo",
      link: "https://www.l3harris.com/",
    },
    {
      id: 3,
      name: "Phillips 66",
      tier: "Bronze",
      url: "/assets/sponsors/phillips66logo.png",
      alt: "Phillips 66 Logo",
      link: "https://www.phillips66.com/",
    },
    {
      id: 4,
      name: "Polymaker",
      tier: "Silver",
      url: "/assets/sponsors/polymaker-full-logo.svg",
      alt: "Polymaker Logo",
      link: "https://www.polymaker.com/",
    },
    {
      id: 5,
      name: "TC Energy",
      tier: "Bronze",
      url: "/assets/sponsors/tcenergylogo.png",
      alt: "TC Energy Logo",
      link: "https://www.tcenergy.com/",
    },
    {
      id: 6,
      name: "Williams Energy Partners",
      tier: "Bronze",
      url: "/assets/sponsors/williams-energy-partners-logo-png-transparent.png",
      alt: "Williams Energy Partners Logo",
      link: "https://www.williams.com/",
    },
    {
      id: 7,
      name: "Send Cut Send",
      tier: "Silver",
      url: "/assets/sponsors/SendCutSendLogo.png",
      alt: "Send Cut Send Logo",
      link: "https://sendcutsend.com/",
    },
    {
      id: 8,
      name: "Ansys",
      tier: "Silver",
      url: "/assets/sponsors/Ansys_logo_(2019).png",
      alt: "Ansys Logo",
      link: "https://www.ansys.com/",
    },
    {
      id: 9,
      name: "TAMU SEC",
      tier: "Gold",
      url: "/assets/sponsors/tamuSEClogo.png",
      alt: "TAMU SEC Logo",
      link: "https://home.sec.tamu.edu/",
    },
    {
      id: 10,
      name: "TAMU Mechanical Engineering",
      tier: "Platinum",
      url: "/assets/sponsors/TAMUMEENLogo.jpg",
      alt: "TAMU Mechanical Engineering Logo",
      link: "https://engineering.tamu.edu/mechanical/",
    },
    {
      id: 11,
      name: "TAMU Engineering",
      tier: "Gold",
      url: "/assets/sponsors/TAMU Engineering.png",
      alt: "TAMU Engineering Logo",
      link: "https://engineering.tamu.edu/",
    },
    {
      id: 12,
      name: "TAMU Good Bull Fund",
      tier: "Silver",
      url: "/assets/sponsors/Good Bull Fund.png",
      alt: "TAMU Good Bull Fund Logo",
      link: "https://getinvolved.tamu.edu/org/goodbull/",
    },
    {
      id: 13,
      name: "TAMU Student Organization Funding Advisory Board",
      tier: "Bronze",
      url: "/assets/sponsors/SOFAB.png",
      alt: "TAMU Student Organization Funding Advisory Board Logo",
      link: "https://getinvolved.tamu.edu/org/sofab",
    },
  ];

  const tierOrder = ["Platinum", "Gold", "Silver", "Bronze"];

  return (
    <div className="sponsor-grid">
      {tierOrder.map((tier) => (
        <section
          className={`sponsor-tier sponsor-tier-${tier.toLowerCase()}`}
          key={tier}
        >
          <h3 className="sponsor-tier-heading">{tier} Sponsors</h3>
          <div className="sponsor-tier-grid">
            {logos
              .filter((logo) => logo.tier === tier)
              .map((logo) => (
                <a
                  key={logo.id}
                  className="sponsor-card"
                  href={logo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${logo.name} website`}
                >
                  <img src={logo.url} alt={logo.alt} className="sponsor-logo" />
                </a>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SponsorTicker;
