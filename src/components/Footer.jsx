import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-background text-text">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Left Column - Program Information & Social Media */}
          <div className="space-y-6">
            <Link 
              to="/hatchling" 
              className="inline-block bg-gradient-turtle text-gradient-foreground px-6 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300"
            >
              Explore Program
            </Link>
            
            <p className="text-muted text-sm leading-relaxed">
              Advancing the future of robotics through cutting-edge research and innovation at Texas A&M University.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/turtlerobotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-turtle rounded-full flex items-center justify-center text-gradient-foreground hover:scale-110 transition-all duration-300"
              >
                <span className="text-sm font-bold">f</span>
              </a>

              <a
                href="https://www.instagram.com/turtle_robotics/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-turtle rounded-full flex items-center justify-center text-gradient-foreground hover:scale-110 transition-all duration-300"
              >
                <span className="text-sm">📷</span>
              </a>

              <a
                href="https://www.linkedin.com/company/tamu-turtle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-turtle rounded-lg flex items-center justify-center text-gradient-foreground hover:scale-110 transition-all duration-300"
              >
                <span className="text-sm font-bold">in</span>
              </a>

              <a
                href="https://x.com/turtle_robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-turtle rounded-lg flex items-center justify-center text-gradient-foreground hover:scale-110 transition-all duration-300"
              >
                <span className="text-sm">🐦</span>
              </a>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-accent hover:brightness-110 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-accent hover:brightness-110 transition-colors duration-200">
                  Research Projects
                </Link>
              </li>
              <li>
                <Link to="/hatchling" className="text-accent hover:brightness-110 transition-colors duration-200">
                  Accelerator Program
                </Link>
              </li>
              <li>
                <a href="mailto:turtlerobotics@gmail.com?subject=General%20Inquiry&body=Hello,%20I%20have%20a%20question%20about%20TURTLE%20Robotics.%20Please%20contact%20me%20back." className="text-accent hover:brightness-110 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-text">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-accent hover:brightness-110 transition-colors duration-200">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-accent hover:brightness-110 transition-colors duration-200">
                  Research Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-accent hover:brightness-110 transition-colors duration-200">
                  Student Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="text-accent hover:brightness-110 transition-colors duration-200">
                  Industry Partnerships
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-text">Contact Info</h3>
            <div className="space-y-2 text-sm text-muted">
              <p>TURTLE Robotics</p>
              <p>Texas A&M University</p>
              <p>College Station, TX 77845</p>
              <p>
                Email: <a href="mailto:turtlerobotics@gmail.com" className="text-accent hover:brightness-110 transition-colors duration-200">
                  turtlerobotics@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section - Subtle */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-light text-text mb-4">
              Have a question or want to get involved?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a 
                href="mailto:turtlerobotics@gmail.com?subject=General%20Inquiry&body=Hello,%20I%20have%20a%20question%20about%20TURTLE%20Robotics.%20Please%20contact%20me%20back."
                className="inline-flex items-center gap-2 glass-card text-accent px-4 py-2 rounded-lg text-sm font-light transition-all duration-300 hover:!scale-105 will-change-transform"
              >
                <span>📧</span>
                Send us a message
              </a>
              <span className="text-muted text-sm">or</span>
              <a 
                href="mailto:turtlerobotics@gmail.com?subject=Join%20TURTLE%20Robotics&body=Hello,%20I'm%20interested%20in%20joining%20TURTLE%20Robotics.%20Please%20provide%20more%20information%20about%20how%20to%20get%20involved."
                className="inline-flex items-center gap-2 glass-card text-accent px-4 py-2 rounded-lg text-sm font-light transition-all duration-300 hover:!scale-105 will-change-transform"
              >
                <span>🤖</span>
                Join our team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-muted text-sm">
            © 2025 Turtle Robotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
