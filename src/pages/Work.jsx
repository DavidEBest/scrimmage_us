import { Link } from 'react-router-dom';

const Work = () => {
  const caseStudies = [
    {
      title: "Fearless Change Mobile App",
      client: "Published Authors with Established Book Series",
      type: "React Native App",
      tech: ["React Native", "iOS/Android Deployment"],
      description: "Transformed a physical card deck with whimsical design into a mobile-friendly experience while maintaining the authors' unique visual style.",
      challenge: "Transform physical card deck and whimsical design into mobile-friendly experience that works across device sizes",
      solution: "React Native app with responsive design that maintained the authors' unique visual style across all device sizes",
      results: ["Authors gave extremely positive feedback", "Physical card design was updated based on approved mobile interface", "Successful cross-platform deployment"],
      timeline: "Couple months to first release",
      gradient: "from-blue-500 to-cyan-600",
      links: [
        { type: "App Store", url: "https://apps.apple.com/il/app/fearless-change/id6451222986" },
        { type: "Google Play", url: "https://play.google.com/store/apps/details?id=com.fearlesschange&hl=en_US&pli=1" }
      ]
    },
    {
      title: "The Cancer Cards",
      client: "Kickstarter Creator with Physical Card Deck",
      type: "React Native App", 
      tech: ["React Native", "Cross-platform Deployment"],
      description: "Created more than just digitized cards - built an engaging mobile experience with notes, grouping, favoriting, and sharing features.",
      challenge: "Create more than just digitized cards - build engaging mobile experience that takes advantage of device capabilities",
      solution: "Mobile app with notes, grouping, favoriting, and sharing features that leverage mobile device capabilities beyond static cards",
      results: ["Included as free download for Kickstarter supporters", "Most successful internationally due to easy access vs shipping physical decks", "Leveraged similar flow from previous app for faster development"],
      timeline: "Accelerated development using proven patterns",
      gradient: "from-purple-500 to-pink-600",
      links: [
        { type: "App Store", url: "https://apps.apple.com/us/app/the-cancer-cards/id6478838548" },
        { type: "Google Play", url: "https://play.google.com/store/apps/details?id=com.cancercards" }
      ]
    },
    {
      title: "Ethnosh Dayton",
      client: "Local Nonprofit Organizing International Restaurant Meals",
      type: "Website Rebuild",
      tech: ["Wix", "Integrated Ticketing"],
      description: "Rebuilt web presence from scratch after COVID to restart a thriving community around locally owned international restaurant experiences.",
      challenge: "Rebuild web presence from scratch after COVID to restart thriving community with easy ticket purchasing",
      solution: "Story-focused website with beautiful restaurant features and integrated ticket purchasing system for seamless user experience",
      results: ["Meals consistently sell out", "Incredibly easy ticket purchasing for the community", "Successfully restarted post-COVID operations"],
      timeline: "Live website in around 2 weeks",
      gradient: "from-green-500 to-teal-600",
      links: [
        { type: "Website", url: "https://www.ethnoshdayton.org/" }
      ]
    }
  ];

  const publishedApps = [
    {
      name: "The Cancer Cards",
      description: "Cancer support communication app helping users navigate difficult conversations with notes, grouping, and sharing features",
      tech: ["React Native", "Cross-platform"],
      status: "Published",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Fearless Change",
      description: "Mobile transformation of physical card deck maintaining whimsical design across device sizes",
      tech: ["React Native", "iOS/Android"],
      status: "Published",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Godlight Movement",
      description: "Companion App to the Godlight Movement Community and Book.",
      tech: ["React Native", "iOS/Android"],
      status: "Published",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      name: "Ticket Tote",
      description: "A silly little app that acts as wallet for all those QR code tickets that don't have Apple Wallet Integration.",
      tech: ["React Native", "iOS"],
      status: "Published",
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
                    
                    {study.timeline && (
                      <div className="mt-4">
                        <h4 className="font-bold mb-2">Timeline</h4>
                        <p className="text-white/80 text-sm">{study.timeline}</p>
                      </div>
                    )}
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
                    
                    {study.links && (
                      <div>
                        <h4 className="font-bold mb-3">View Live</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.links.map((link, linkIndex) => (
                            <a 
                              key={linkIndex} 
                              href={link.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
                            >
                              {link.type === 'App Store' && '📱'}
                              {link.type === 'Google Play' && '🤖'}
                              {link.type === 'Website' && '🌐'}
                              {link.type}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
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
                  
                  <div className="pt-4 border-t border-white/20">
                    <div className="text-sm text-white/80">Status</div>
                    <div className="font-semibold">{app.status}</div>
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
                <li>• Python & Flask</li>
                <li>• PostgreSQL</li>
                <li>• REST APIs</li>
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
            <Link to="/services" className="btn-secondary transform hover:scale-105 transition-transform">
              Learn About Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;