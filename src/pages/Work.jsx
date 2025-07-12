import { Link } from 'react-router-dom';

const Work = () => {
  const caseStudies = [
    {
      title: "E-commerce Platform MVP",
      client: "Small Business Retailer",
      type: "Web Application",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      description: "Built a complete e-commerce platform from concept to launch in 8 weeks, helping a local retailer move online during COVID.",
      challenge: "Tight timeline, limited budget, and need for payment processing integration",
      solution: "Focused MVP approach with essential features first, iterative development",
      results: ["40% increase in sales", "200+ online orders in first month", "Reduced operational costs"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Mobile Task Management App",
      client: "Startup Founder",
      type: "React Native App",
      tech: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      description: "Developed a cross-platform task management app for teams, focusing on simplicity and offline functionality.",
      challenge: "Offline-first architecture, real-time sync, and cross-platform compatibility",
      solution: "Firebase for real-time sync, Redux for state management, strategic caching",
      results: ["500+ downloads in first month", "4.7 star rating", "Featured in local startup showcase"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Legacy System Modernization",
      client: "Mid-size Manufacturing Company",
      type: "System Architecture",
      tech: ["React", "Python", "Docker", "AWS"],
      description: "Modernized a 10-year-old inventory management system with modern tech stack and improved UX.",
      challenge: "Data migration, minimal downtime, training non-technical users",
      solution: "Phased migration, comprehensive testing, user-friendly interface design",
      results: ["50% faster processing", "Zero data loss", "95% user satisfaction"],
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const publishedApps = [
    {
      name: "How Not To Say",
      description: "Communication improvement app helping users avoid common workplace communication mistakes",
      tech: ["React Native", "Node.js", "MongoDB"],
      status: "Live in App Store",
      users: "1,000+ downloads",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Fearless Change",
      description: "Personal development app for building confidence and managing change in professional settings",
      tech: ["React Native", "Firebase", "Redux"],
      status: "Live in App Store",
      users: "500+ downloads",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              My Work
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Real projects, real results. <span className="text-yellow-300 font-semibold">0→1 success stories</span> from small businesses and creators.
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Case Studies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Detailed breakdowns of real projects with challenges, solutions, and results
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className={`bg-gradient-to-br ${study.gradient} rounded-2xl p-8 text-white`}>
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl md:text-3xl font-bold">{study.title}</h3>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {study.type}
                      </span>
                    </div>
                    <p className="text-lg text-white/90 mb-6">{study.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">Challenge</h4>
                        <p className="text-white/80 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Solution</h4>
                        <p className="text-white/80 text-sm">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start text-sm">
                            <span className="text-yellow-300 mr-2">✓</span>
                            <span className="text-white/90">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Published Apps */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Published Apps
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real apps in production, available in app stores
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {publishedApps.map((app, index) => (
              <div key={index} className={`bg-gradient-to-br ${app.gradient} rounded-2xl p-8 text-white transform hover:scale-105 transition-transform`}>
                <h3 className="text-2xl font-bold mb-4">{app.name}</h3>
                <p className="text-white/90 mb-6">{app.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-white/20">
                    <div>
                      <div className="text-sm text-white/80">Status</div>
                      <div className="font-semibold">{app.status}</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/80">Users</div>
                      <div className="font-semibold">{app.users}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Samples */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Technologies and approaches I use to build great products
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• React & React Native</li>
                <li>• Vue.js & Nuxt.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl text-white">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <ul className="space-y-2 text-green-100">
                <li>• Node.js & Express</li>
                <li>• Python & FastAPI</li>
                <li>• PostgreSQL & MongoDB</li>
                <li>• REST & GraphQL APIs</li>
                <li>• Docker & AWS</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-4">Process</h3>
              <ul className="space-y-2 text-purple-100">
                <li>• Agile development</li>
                <li>• CI/CD pipelines</li>
                <li>• Test-driven development</li>
                <li>• Code review processes</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 dark:bg-gray-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 mb-8">
            Let's create a case study for your business. Every project starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary transform hover:scale-105 transition-transform">
              Start Your Project
            </Link>
            <Link to="/process" className="btn-secondary transform hover:scale-105 transition-transform">
              Learn My Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;