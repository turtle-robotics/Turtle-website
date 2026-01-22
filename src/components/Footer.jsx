import { Link } from 'react-router-dom'
import { useState } from 'react';
// import SponsorContactForm from './SponsorContactForm';

const Footer = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <footer className="bg-white dark:bg-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Left Column - Program Information & Social Media */}
          <div className="space-y-6">
            <Link 
              to="/hatchling" 
              className="inline-block bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300"
            >
              Explore Program
            </Link>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Advancing the future of robotics through cutting-edge research and innovation at Texas A&M University.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/turtle_robotics/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <img
                  src="/assets/Instagram_Glyph_Gradient.png"
                  alt="Instagram"
                  className="w-7 h-7 object-contain"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))' }}
                />
              </a>

              <a
                href="https://www.linkedin.com/company/tamu-turtle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <img
                  src="/assets/LI-In-Bug.png"
                  alt="LinkedIn"
                  className="w-7 h-7 object-contain"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))' }}
                />
              </a>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                  Research Projects
                </Link>
              </li>
              <li>
                <Link to="/hatchling" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                  Hatchling Program
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column - Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200">Resources</h3>
            <ul className="space-y-2">
              {/* Publications and Research Blog hidden */}
              <li style={{display: 'none'}}>
                <a href="#">Publications</a>
              </li>
              <li style={{display: 'none'}}>
                <a href="#">Research Blog</a>
              </li>
              <li>
                <Link to="/apply" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                  Student Opportunities
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                  Industry Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200">Visit Us</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>Haynes Engineering Building - Room 023</p>
              <p>727 Ross St</p>
              <p>College Station, TX 77840</p>
              {/* Email removed, use contact form instead */}
            </div>
          </div>
        </div>

        {/* Contact Section - Subtle */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-light text-gray-800 dark:text-gray-200 mb-4">
              Have a question or want to get involved?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                type="button"
                onClick={() => setShowContactForm(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 hover:from-yellow-500/20 hover:to-amber-500/20 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-lg text-sm font-light transition-all duration-300 border border-yellow-200 dark:border-yellow-700/30 hover:scale-105"
              >
                <span>📧</span>
                Send us a message
              </button>
                    {/* Contact Form Modal */}
                    {showContactForm && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4 py-8 overflow-y-auto" onClick={() => setShowContactForm(false)}>
                        <div 
                          className="relative bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12 max-w-3xl w-full mx-4 my-8 shadow-2xl border border-gray-200 dark:border-gray-700" 
                          onClick={(e) => e.stopPropagation()}
                        >
                          {/* Close button */}
                          <button
                            onClick={() => setShowContactForm(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors z-10"
                          >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                          <div className="text-center mb-8">
                            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                              </svg>
                            </div>
                            <h3 className="text-3xl font-extralight text-gray-800 dark:text-gray-200 mb-3">
                              Get In Touch
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-light">
                              Fill out the form below and we'll get back to you shortly.
                            </p>
                          </div>
                          {/*
                          <SponsorContactForm onClose={() => setShowContactForm(false)} />
                          */}
                          <div className="text-center my-8">
                            <a href="mailto:turtlerobotics@gmail.com" className="text-xl text-accent underline hover:text-accent/80 transition-colors duration-200">
                              turtlerobotics@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
              <span className="text-gray-400 dark:text-gray-500 text-sm">or</span>
              <Link 
                to="/apply"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 hover:from-yellow-500/20 hover:to-amber-500/20 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-lg text-sm font-light transition-all duration-300 border border-yellow-200 dark:border-yellow-700/30"
              >
                <span>🤖</span>
                Join our team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © 2026 TURTLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
