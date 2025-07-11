import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Scrimmaging is about
              <span className="block text-yellow-300">practicing how we play</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 drop-shadow-md">
              Approachable, experienced generalist who helps small businesses and creators 
              build their <span className="text-yellow-300 font-semibold">first production software products</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary transform hover:scale-105 transition-transform">
                Get Started
              </Link>
              <Link to="/work" className="btn-secondary transform hover:scale-105 transition-transform">
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600">
              Focused on 0→1 projects for small businesses and creators
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-blue-100 mb-6">
                Web and mobile apps, MVPs, and prototypes
              </p>
              <Link to="/services" className="text-yellow-300 font-semibold hover:text-yellow-200">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Technical Architecture</h3>
              <p className="text-green-100 mb-6">
                Code review, system design, and tech recommendations
              </p>
              <Link to="/services" className="text-yellow-300 font-semibold hover:text-yellow-200">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">SDLC Process</h3>
              <p className="text-purple-100 mb-6">
                Development processes, CI/CD, and quality assurance
              </p>
              <Link to="/services" className="text-yellow-300 font-semibold hover:text-yellow-200">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Personality Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">
              Why Work With Me?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Friendly & Approachable</h3>
                <p className="text-lg text-white/90">
                  Not intimidating or overly corporate. I speak plain English and focus on your business goals.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">0→1 Specialist</h3>
                <p className="text-lg text-white/90">
                  I focus on getting first versions to production quickly while maintaining quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's talk about your project and how I can help bring it to life.
          </p>
          <Link to="/contact" className="btn-accent transform hover:scale-105 transition-transform">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;