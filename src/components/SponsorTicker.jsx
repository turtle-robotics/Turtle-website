import { motion } from 'framer-motion'

const SponsorTicker = () => {
  // Sample sponsor logos - white logos on black background
  const logos = [
    {
      id: 1,
      name: "Discord",
      url: "https://picsum.photos/seed/discord/200/100",
      alt: "Discord Logo"
    },
    {
      id: 2,
      name: "TAMU", 
      url: "https://picsum.photos/seed/tamu/200/100",
      alt: "TAMU Logo"
    },
    {
      id: 3,
      name: "Instagram",
      url: "https://picsum.photos/seed/instagram/200/100", 
      alt: "Instagram Logo"
    },
    {
      id: 4,
      name: "LinkedIn",
      url: "https://picsum.photos/seed/linkedin/200/100",
      alt: "LinkedIn Logo"
    },
    {
      id: 5,
      name: "GitHub",
      url: "https://picsum.photos/seed/github/200/100",
      alt: "GitHub Logo"
    },
    {
      id: 6,
      name: "YouTube",
      url: "https://picsum.photos/seed/youtube/200/100",
      alt: "YouTube Logo"
    }
  ]

  // Duplicate the logos array multiple times for seamless infinite scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos]

  return (
    <div className="w-full py-4 overflow-hidden">
      <motion.div
        className="flex items-center"
        style={{ width: `${duplicatedLogos.length * 200}px` }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 250, ease: 'linear' }}  // Adjust duration as needed
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 px-8"
          >
            <div className="h-9 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300">
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-full w-auto object-contain filter brightness-0 dark:invert"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SponsorTicker 