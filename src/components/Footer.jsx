import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary-400 mb-4 block">
              Scrimmage
            </Link>
            <p className="text-gray-300 max-w-md">
              Approachable, experienced generalist helping small businesses and creators 
              build their first production software products.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Software Development</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">Technical Architecture</Link></li>
              <li><Link to="/services" className="hover:text-primary-400 transition-colors">SDLC Process</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/writing" className="hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link to="/work" className="hover:text-primary-400 transition-colors">Portfolio</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Scrimmage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;