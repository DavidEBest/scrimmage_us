import { Link } from 'react-router-dom';

const Writing = () => {
  const blogPosts = [
    {
      title: "Why Small Businesses Should Start with an MVP",
      excerpt: "Building a full-featured app is expensive and risky. Here's how to validate your idea with minimal investment and maximum learning.",
      category: "Strategy",
      readTime: "5 min read",
      date: "March 15, 2024",
      featured: true,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "React vs Vue: Which Should Small Teams Choose?",
      excerpt: "A practical comparison of React and Vue.js for small businesses and startups, focusing on team size, learning curve, and long-term maintenance.",
      category: "Technical",
      readTime: "8 min read",
      date: "March 8, 2024",
      featured: true,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "The Hidden Costs of 'Free' Development Tools",
      excerpt: "Free doesn't always mean cost-effective. Understanding the total cost of ownership for development tools and platforms.",
      category: "Business",
      readTime: "6 min read",
      date: "February 28, 2024",
      featured: true,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  const additionalPosts = [
    {
      title: "Setting Up CI/CD for Small Teams",
      excerpt: "Simple, effective continuous integration and deployment workflows that don't require a DevOps team.",
      category: "Process",
      readTime: "10 min read",
      date: "February 20, 2024",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Database Design for Non-Technical Founders",
      excerpt: "Understanding the basics of database design and why it matters for your application's future.",
      category: "Technical",
      readTime: "7 min read",
      date: "February 12, 2024",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      title: "When to Hire Your First Developer",
      excerpt: "Signs that it's time to bring development in-house and how to make your first technical hire.",
      category: "Business",
      readTime: "9 min read",
      date: "February 5, 2024",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "API-First Development: Why It Matters",
      excerpt: "Building your application with APIs from day one sets you up for mobile apps, integrations, and future growth.",
      category: "Architecture",
      readTime: "12 min read",
      date: "January 28, 2024",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      title: "Security Basics for Small Business Apps",
      excerpt: "Essential security practices that every small business application should implement from day one.",
      category: "Security",
      readTime: "8 min read",
      date: "January 20, 2024",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "The Real Cost of Technical Debt",
      excerpt: "How cutting corners in early development can cost you later, and strategies to avoid the worst pitfalls.",
      category: "Strategy",
      readTime: "6 min read",
      date: "January 12, 2024",
      gradient: "from-emerald-500 to-green-600"
    }
  ];

  const categories = [
    { name: "All", count: blogPosts.length + additionalPosts.length },
    { name: "Technical", count: 3 },
    { name: "Strategy", count: 2 },
    { name: "Business", count: 2 },
    { name: "Process", count: 1 },
    { name: "Architecture", count: 1 },
    { name: "Security", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Writing
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Technical insights, practical advice, and <span className="text-yellow-300 font-semibold">real-world lessons</span> for small business technology.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Posts */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              Popular posts that help small businesses make better technology decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className={`bg-gradient-to-br ${post.gradient} rounded-2xl p-8 text-white transform hover:scale-105 transition-transform`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-white/80 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4">{post.title}</h3>
                <p className="text-white/90 mb-6 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">{post.date}</span>
                  <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recent Posts
            </h2>
            <p className="text-xl text-gray-600">
              Latest insights and practical advice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className={`bg-gradient-to-r ${post.gradient} text-white px-3 py-1 rounded-full text-sm`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Get practical advice and insights delivered to your inbox. No spam, just useful content for small business tech decisions.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/80 text-sm mt-4">
              Typically 1-2 emails per month. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Topics & Resources */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Write About
            </h2>
            <p className="text-xl text-gray-600">
              Topics that matter for small business technology decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
                💻
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Deep-Dives</h3>
              <p className="text-gray-600 text-sm">Code examples, architecture patterns, and development best practices</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
                📊
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Business Strategy</h3>
              <p className="text-gray-600 text-sm">Technology decisions that impact your bottom line and growth</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Process & Methodology</h3>
              <p className="text-gray-600 text-sm">How to build software efficiently with small teams and tight budgets</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-white mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm">Real projects with challenges, solutions, and lessons learned</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Specific Question?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Let's discuss your specific technology challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary transform hover:scale-105 transition-transform">
              Ask a Question
            </Link>
            <Link to="/services" className="btn-secondary transform hover:scale-105 transition-transform">
              Work With Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;