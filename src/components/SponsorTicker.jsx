import { motion } from 'framer-motion'

const SponsorTicker = () => {
  // Sponsor logos - white logos on black background
  const logos = [
    {
      id: 1,
      name: "Williams",
      url: "assets/sponsors/williamslogo.png",
      alt: "Williams Logo"
    },
    {
      id: 2,
      name: "L3 Harris", 
      url: "assets/sponsors/l3harrislogo.png",
      alt: "L3 Harris Logo"
    },
    {
      id: 3,
      name: "Phillips 66",
      url: "assets/sponsors/phillips66logo.png", 
      alt: "Phillips 66 Logo"
    },
    {
      id: 4,
      name: "TC Energy",
      url: "assets/sponsors/tcenergylogo.png",
      alt: "TC Energy Logo"
    }
  ]

  // Duplicate the logos array multiple times for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos]

  return (
    <div className="w-full py-8 overflow-hidden">
      <motion.div
        className="flex items-center gap-6"
        style={{ width: `${duplicatedLogos.length * 280}px` }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 250, ease: 'linear' }}  // Adjust duration as needed
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0"
          >
            <div className="glass-card p-6 rounded-2xl h-32 w-48 flex items-center justify-center hover:scale-105 transition-transform duration-300" style={{backgroundColor: 'var(--color-gray-300)'}}>
              <img
                src={logo.url}
                alt={logo.alt}
                style={!["L3 Harris", "Williams"].includes(logo.name) ? { maxWidth: '80%', maxHeight: '80%' } : {}}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SponsorTicker 