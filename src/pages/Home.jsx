import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 dark:from-gray-900 dark:via-purple-900 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
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
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Focused on 0→1 projects for small businesses and creators
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-800 dark:to-blue-900 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-blue-100 dark:text-blue-200 mb-6">
              The right tool for the job, every time. For maintainable websites, I might recommend Wix. For web apps, React + JavaScript/Python. For mobile, React Native. After 20+ years with production code in everything from firmware to mobile apps, I know when to use enterprise solutions and when to keep it simple.
              </p>
              <Link to="/services" className="text-yellow-300 dark:text-yellow-400 font-semibold hover:text-yellow-200">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-green-600 dark:from-green-800 dark:to-green-900 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">Technical Architecture</h3>
              <p className="text-green-100 dark:text-green-200 mb-6">
              I recently helped an entrepreneur talk through his vision and created a notional architecture that he took to contractors for quotes. Sometimes you need someone to translate between the business vision and technical reality - that's where two decades of building systems comes in handy.
              </p>
              <Link to="/services" className="text-yellow-300 dark:text-yellow-400 font-semibold hover:text-yellow-200">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-800 dark:to-purple-900 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4">SDLC Process</h3>
              <p className="text-purple-100 dark:text-purple-200 mb-6">
              The one thing I never skip: Discovery. Understanding the why behind decisions helps ensure we're building the right thing in the right way. From government research labs to startup pivots, I've learned that the process is just as important as the code.
              </p>
              <Link to="/services" className="text-yellow-300 dark:text-yellow-400 font-semibold hover:text-yellow-200">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Personality Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 dark:from-yellow-800 dark:via-red-900 dark:to-pink-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow-lg">
              Why Work With Me?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Friendly & Approachable</h3>
                <p className="text-lg text-white/90">
                Conversational but direct. I view development as a collaborative and iterative process. I welcome feedback because the best products come from understanding your vision, not just following a spec.
                </p>
              </div>
              <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">0→1 Specialist</h3>
                <p className="text-lg text-white/90">
                I've helped turn card decks into mobile apps, research ideas into working prototypes, and entrepreneur visions into fundable architectures. The secret? Finding the balance between too much and not enough - making your MVP actually viable, not just minimal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
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