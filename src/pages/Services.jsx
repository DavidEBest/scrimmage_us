import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Focused on <span className="text-yellow-300 font-semibold">0→1 projects</span> for small businesses and creators
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Grid */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Software Development */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-6">💻</div>
              <h3 className="text-2xl font-bold mb-4">Software Development</h3>
              <p className="text-blue-100 mb-6">
                From idea to production-ready application
              </p>
              <ul className="text-blue-100 space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Web application development (React, Vue, etc.)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Mobile app development (iOS/Android)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  MVP and prototype development
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  API development and integration
                </li>
              </ul>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-blue-100">
                  <strong>Perfect for:</strong> First-time founders, small businesses launching their first app, creators building digital products
                </p>
              </div>
            </div>
            
            {/* Technical Architecture */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-6">🏗️</div>
              <h3 className="text-2xl font-bold mb-4">Technical Architecture</h3>
              <p className="text-purple-100 mb-6">
                Expert guidance for technical decisions
              </p>
              <ul className="text-purple-100 space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  System architecture design
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Code review and technical audits
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Technology stack recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Scalability and performance planning
                </li>
              </ul>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-purple-100">
                  <strong>Perfect for:</strong> Existing projects needing technical review, teams making technology decisions, scaling challenges
                </p>
              </div>
            </div>
            
            {/* SDLC Process */}
            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
              <div className="text-4xl mb-6">⚙️</div>
              <h3 className="text-2xl font-bold mb-4">SDLC Process</h3>
              <p className="text-green-100 mb-6">
                Professional development processes
              </p>
              <ul className="text-green-100 space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Development workflow setup
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  CI/CD pipeline implementation
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Quality assurance processes
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">→</span>
                  Project management methodology
                </li>
              </ul>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-green-100">
                  <strong>Perfect for:</strong> Teams wanting professional practices, solo developers scaling up, organizations improving quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gradient-to-r from-orange-400 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              How I Work
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md">
              Simple, transparent process focused on your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">1. Discovery</h3>
              <p className="text-white/90">
                We start with a conversation about your goals, constraints, and timeline
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">2. Build</h3>
              <p className="text-white/90">
                Iterative development with regular check-ins and transparent progress
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-4">3. Launch</h3>
              <p className="text-white/90">
                Get to production with proper testing, monitoring, and handoff
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Common questions from small businesses and creators
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                What makes you different from other developers?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                20+ years of production code everywhere gives me a unique perspective. I've supported government research labs where collaboration and experimentation are key, and I bring that same iterative approach to startups and small businesses. I'm conversational but direct, and I view development as collaborative. Plus, I actually welcome feedback - the best products come from understanding your vision, not just following a spec.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                How do you handle pricing for small businesses?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Flexibility is key. I know early creators don't have huge budgets, so let's right-size the project and grow from there. I offer hourly consulting, project-based pricing, retainers, and even profit-sharing for mobile apps. The goal is finding what works for your situation.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Do you work with non-technical founders?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely. I've helped translate entrepreneur visions into technical architectures, turned card decks into mobile apps, and rebuilt community platforms from scratch. Discovery is the most important part - I need to understand your why before we talk about the how.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
            Let's discuss your project and find the right approach for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary transform hover:scale-105 transition-transform">
              Start a Project
            </Link>
            <Link to="/work" className="btn-secondary transform hover:scale-105 transition-transform">
              See Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;