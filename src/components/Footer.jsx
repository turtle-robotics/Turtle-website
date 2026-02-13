import TextLink from "./TextLink";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Connect With Us */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-200">Connect With Us</h3>
            <ul className="space-y-2">
              <li>
                <TextLink to="mailto:turtlerobotics@gmail.com">
                  turtlerobotics@gmail.com
                </TextLink>
              </li>
              <li class="pt-4">
                {/* Social Media Icons */}
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/turtle_robotics/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <img
                      src="/assets/Instagram_Glyph_Gradient.png"
                      alt="Instagram"
                      className="w-7 h-7 object-contain"
                      style={{
                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.10))",
                      }}
                    />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/tamu-turtle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <img
                      src="/assets/LI-In-Bug.png"
                      alt="LinkedIn"
                      className="w-7 h-7 object-contain"
                      style={{
                        filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.10))",
                      }}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <TextLink to="/apply">Apply</TextLink>
              </li>
              <li>
                <TextLink to="https://docs.turtlerobotics.org/">
                  Knowledge Base
                </TextLink>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-200">Visit Us</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Haynes Engineering Building - Room 023</p>
              <p>727 Ross St</p>
              <p>College Station, TX 77840</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
