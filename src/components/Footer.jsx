import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mb-6 block">
              Scrimmage
            </Link>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Scrimmaging is about practicing how we play. I help small businesses and creators 
              build their <span className="text-yellow-400 font-semibold">first production software products</span> with approachable expertise.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center text-xl">
                📧
              </div>
              <div>
                <div className="text-white font-semibold">Ready to build something?</div>
                <Link to="/contact" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Let's talk →
                </Link>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">Web Applications</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Technical Architecture</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">SDLC Process</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">MVP Development</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><Link to="/work" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">My Process</Link></li>
              <li><Link to="/writing" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-yellow-400">Resources</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Free Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Project Planner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tech Stack Guide</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; 2024 Scrimmage. Built with{' '}
                <span className="text-red-400">♥</span>{' '}
                for small businesses.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                Made with React + Tailwind
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">GitHub</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Fun tagline */}
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-500 italic">
              "Weird and colorful, just like great software should be." 🌈
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;