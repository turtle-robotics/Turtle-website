import { Link } from 'react-router-dom'

const Footer = () => {
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
                             <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
                 <span className="text-sm font-bold">f</span>
               </a>
               <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
                 <span className="text-sm">📷</span>
               </a>
               <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
                 <span className="text-sm font-bold">in</span>
               </a>
               <a href="#" className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300">
                 <span className="text-sm">🐦</span>
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
                   Accelerator Program
                 </Link>
               </li>
               <li>
                 <Link to="/apply" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                   Contact
                 </Link>
               </li>
            </ul>
          </div>
          
          {/* Third Column - Resources */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200">Resources</h3>
            <ul className="space-y-2">
                             <li>
                 <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                   Publications
                 </a>
               </li>
               <li>
                 <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                   Research Blog
                 </a>
               </li>
               <li>
                 <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                   Student Opportunities
                 </a>
               </li>
               <li>
                 <a href="#" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                   Industry Partnerships
                 </a>
               </li>
            </ul>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-gray-800 dark:text-gray-200">Contact Info</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>TURTLE Robotics</p>
              <p>Texas A&M University</p>
              <p>College Station, TX 77845</p>
              <p>
                Email: <a href="mailto:turtlerobotics@gmail.com" className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors duration-200">
                  turtlerobotics@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © 2024 Turtle Robotics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 