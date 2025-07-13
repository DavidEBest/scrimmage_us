import { useState, useEffect } from 'react';

const LeadMagnet = () => {
  // SEO: Update document head for this page
  useEffect(() => {
    // Store original values
    const originalTitle = document.title;
    const originalDescription = document.querySelector('meta[name="description"]')?.getAttribute('content');
    
    // Set page-specific meta data
    document.title = 'Free Guide: From Static to Sticky Companion Apps | Scrimmage';
    
    // Update or create description meta tag
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.setAttribute('name', 'description');
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute('content', 'Download our free guide: 4 proven strategies to transform your static companion app into an engaging experience users love. By the developer behind successful apps How Not To Say and Fearless Change.');
    
    // Add keywords meta tag
    let keywordsTag = document.querySelector('meta[name="keywords"]');
    if (!keywordsTag) {
      keywordsTag = document.createElement('meta');
      keywordsTag.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsTag);
    }
    keywordsTag.setAttribute('content', 'companion app engagement, mobile app user retention, app engagement strategies, course companion app, book companion app development, mobile UX, app gamification');
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'From Static to Sticky: Companion App Engagement Guide' },
      { property: 'og:description', content: 'Learn 4 proven strategies to transform your static companion app into something users genuinely want to engage with daily.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://scrimmage.us/companion-app-guide' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
    
    // Cleanup function to restore original values
    return () => {
      document.title = originalTitle;
      if (originalDescription && descriptionTag) {
        descriptionTag.setAttribute('content', originalDescription);
      }
    };
  }, []);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    company: '',
    appStatus: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use different API URL for development vs production
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3001/api/lead-magnet'
        : '/api/lead-magnet';
        
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ email: '', firstName: '', company: '', appStatus: '' });
        
        // Track successful lead magnet signup in Google Analytics
        if (window.gtag) {
          window.gtag('event', 'lead_magnet_signup', {
            event_category: 'Lead Generation',
            event_label: 'Static to Sticky Guide',
            value: 1
          });
        }
      } else {
        setSubmitStatus({ type: 'error', message: result.error });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send request. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              From Static to Sticky
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md mb-8">
              Transform your static app into something users genuinely want to engage with using <span className="text-yellow-300 font-semibold">4 proven interactivity strategies</span>
            </p>
            <div className="bg-yellow-400/20 backdrop-blur-sm border border-yellow-300/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg text-yellow-100">
                🎯 <strong>Free Guide:</strong> The Companion App Engagement Strategies That Actually Work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Problem Statement */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  The Problem With Most Companion Apps
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Most companion apps today are essentially <strong>glorified PDFs</strong> - static versions of course materials or book supplements wrapped in an app shell. Users download them once, browse briefly, then forget they exist.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Sound familiar? You're not alone. But there's a better way.
                </p>
              </div>

              {/* Solution Preview */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  The Solution: 4 Proven Engagement Strategies
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  This guide explores 4 proven approaches to transform your companion app from a forgettable reference tool into something users genuinely want to engage with daily.
                </p>
              </div>

              {/* Guide Contents */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What You'll Learn</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Curation</h4>
                      <p className="text-gray-600 dark:text-gray-300">Let users make your app their own through personalization and favorites</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">User Generated Content</h4>
                      <p className="text-gray-600 dark:text-gray-300">Transform consumers into creators with notes, sharing, and contributions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Challenges</h4>
                      <p className="text-gray-600 dark:text-gray-300">Gamify the user experience with progress tracking and achievements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">AI Integration</h4>
                      <p className="text-gray-600 dark:text-gray-300">Create truly adaptive experiences that learn from user behavior</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">From the Developer Behind</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-500 text-white p-4 rounded-lg mb-3">
                      <h4 className="font-bold">How Not To Say</h4>
                      <p className="text-sm text-purple-100">Cancer support companion app</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">International success with Kickstarter supporters</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-500 text-white p-4 rounded-lg mb-3">
                      <h4 className="font-bold">Fearless Change</h4>
                      <p className="text-sm text-blue-100">Leadership strategies companion app</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Influenced physical card redesign based on mobile success</p>
                  </div>
                </div>
                <p className="text-center text-gray-600 dark:text-gray-300 mt-6 italic">
                  "Learn the engagement strategies that transformed static content into daily-use apps"
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">Get Your Free Guide</h3>
                <p className="text-orange-100 mb-6">
                  Download the complete "From Static to Sticky" guide and discover how to transform your companion app into an engaging experience users love.
                </p>

                {submitStatus && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-400 text-green-100' 
                      : 'bg-red-500/20 border border-red-400 text-red-100'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Company/Project Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                      placeholder="Your company or project"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="appStatus" className="block text-sm font-medium text-white mb-2">
                      Current App Status
                    </label>
                    <select
                      id="appStatus"
                      value={formData.appStatus}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                    >
                      <option value="" className="text-gray-900">Select your current situation</option>
                      <option value="planning" className="text-gray-900">Planning first app</option>
                      <option value="static" className="text-gray-900">Have static app</option>
                      <option value="improving" className="text-gray-900">Looking to improve existing app</option>
                      <option value="other" className="text-gray-900">Other</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-600 disabled:cursor-not-allowed text-gray-900 font-bold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
                  >
                    {isSubmitting ? 'Sending...' : '📱 Get My Free Guide'}
                  </button>
                </form>

                <p className="text-xs text-orange-200 mt-4 text-center">
                  I respect your privacy. Unsubscribe at any time. No spam, just valuable insights about building engaging apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Value Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Why This Guide Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Proven Strategies</h3>
              <p className="text-gray-600 dark:text-gray-300">Based on real apps with thousands of users, not theoretical frameworks</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Actionable Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Specific tactics you can implement, regardless of your technical background</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Immediate Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Start seeing increased engagement within weeks of implementation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadMagnet;