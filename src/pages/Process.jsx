import { Link } from 'react-router-dom';

const Process = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      duration: "1-2 weeks",
      description: "We start with understanding your business goals, constraints, and timeline",
      activities: [
        "Initial consultation call",
        "Requirements gathering",
        "Technical feasibility assessment",
        "Project timeline and milestones",
        "Technology stack recommendations"
      ],
      deliverables: ["Project proposal", "Technical specification", "Timeline with milestones"],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      number: "02",
      title: "Design & Architecture",
      duration: "1-2 weeks",
      description: "Creating the blueprint for your application with user-centered design",
      activities: [
        "User experience design",
        "System architecture planning",
        "Database design",
        "API specification",
        "Security considerations"
      ],
      deliverables: ["Wireframes/mockups", "System architecture diagram", "API documentation"],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      number: "03",
      title: "Development",
      duration: "4-12 weeks",
      description: "Iterative development with regular check-ins and transparent progress",
      activities: [
        "Sprint-based development",
        "Weekly progress updates",
        "Continuous integration setup",
        "Code reviews and testing",
        "Regular demos and feedback"
      ],
      deliverables: ["Working application", "Test coverage reports", "Documentation"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      number: "04",
      title: "Testing & QA",
      duration: "1-2 weeks",
      description: "Comprehensive testing to ensure quality and reliability",
      activities: [
        "Automated testing setup",
        "Manual testing scenarios",
        "Performance optimization",
        "Security testing",
        "User acceptance testing"
      ],
      deliverables: ["Test reports", "Performance metrics", "Security audit"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      number: "05",
      title: "Deployment & Launch",
      duration: "1 week",
      description: "Get to production with proper monitoring and handoff",
      activities: [
        "Production environment setup",
        "Deployment automation",
        "Monitoring and logging",
        "Documentation handoff",
        "Training and support"
      ],
      deliverables: ["Live application", "Deployment guide", "Maintenance documentation"],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const principles = [
    {
      icon: "🎯",
      title: "0→1 Focus",
      description: "I specialize in getting first versions to production. No feature creep, just essential functionality that works."
    },
    {
      icon: "💬",
      title: "Transparent Communication",
      description: "Regular updates, honest about challenges, and always focused on your business goals."
    },
    {
      icon: "⚡",
      title: "Speed with Quality",
      description: "Fast iteration cycles without compromising on code quality or user experience."
    },
    {
      icon: "🔧",
      title: "Practical Solutions",
      description: "Technology choices based on your constraints, not the latest trends."
    },
    {
      icon: "📈",
      title: "Business-First",
      description: "Every technical decision is evaluated against your business objectives."
    },
    {
      icon: "🤝",
      title: "Collaborative Approach",
      description: "You're involved throughout the process, not just at the beginning and end."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              My Process
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              A proven <span className="text-yellow-300 font-semibold">5-step approach</span> that gets you from idea to production quickly and reliably.
            </p>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Idea to Production
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach that minimizes risk and maximizes value
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className={`bg-gradient-to-br ${step.gradient} rounded-2xl p-8 text-white`}>
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-6xl font-bold text-white/20 mb-4">{step.number}</div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{step.title}</h3>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm w-fit">
                      {step.duration}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-3">
                    <p className="text-lg text-white/90 mb-8">{step.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold mb-4">Key Activities</h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start text-sm">
                              <span className="text-yellow-300 mr-2">•</span>
                              <span className="text-white/90">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-4">Deliverables</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="flex items-start text-sm">
                              <span className="text-yellow-300 mr-2">✓</span>
                              <span className="text-white/90">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Principles
            </h2>
            <p className="text-xl text-gray-600">
              What guides every decision in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Communication Style */}
      <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              How We'll Work Together
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md">
              Clear communication and collaboration throughout the project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Regular Check-ins</h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">📅</span>
                  <div>
                    <strong>Weekly progress calls</strong><br />
                    Review progress, discuss blockers, plan next steps
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">💬</span>
                  <div>
                    <strong>Daily async updates</strong><br />
                    Brief written updates on what's completed and what's next
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">📱</span>
                  <div>
                    <strong>Working demos</strong><br />
                    See your application come to life with regular demos
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Tools & Collaboration</h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">🔧</span>
                  <div>
                    <strong>Project management</strong><br />
                    Shared project board with clear tasks and progress
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">📊</span>
                  <div>
                    <strong>Transparent reporting</strong><br />
                    Regular reports on time, budget, and scope
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-3">🎯</span>
                  <div>
                    <strong>Focused feedback</strong><br />
                    Structured feedback sessions to keep us on track
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Approach */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Choices
            </h2>
            <p className="text-xl text-gray-600">
              Practical, proven technologies that fit your constraints
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Proven & Stable</h3>
              <p className="text-blue-100 mb-6">
                I choose technologies with strong communities, good documentation, and long-term viability.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-blue-100">
                  <strong>Example:</strong> React, Node.js, PostgreSQL - battle-tested tools with great ecosystems
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Budget Conscious</h3>
              <p className="text-green-100 mb-6">
                Technology decisions factor in licensing costs, hosting expenses, and maintenance overhead.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-green-100">
                  <strong>Example:</strong> Open source solutions, cost-effective hosting, minimal vendor lock-in
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Scalable Foundation</h3>
              <p className="text-purple-100 mb-6">
                Built to handle growth without requiring a complete rewrite when you scale.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm text-purple-100">
                  <strong>Example:</strong> Modular architecture, API-first design, containerized deployment
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and see how this process can work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary transform hover:scale-105 transition-transform">
              Start Your Project
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

export default Process;