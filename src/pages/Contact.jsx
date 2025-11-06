import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    message: ''
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
        ? 'http://localhost:3001/api/contact'
        : '/api/contact';
        
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
        setFormData({ name: '', email: '', project: '', budget: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.error });
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-600">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
              Ready to build your <span className="text-yellow-300 font-semibold">first production software product</span>? Let's talk.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 rounded-2xl text-white">
                <h2 className="text-3xl font-bold mb-6">Let's Start a Conversation</h2>
                {submitStatus && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 border border-green-400 text-green-100' 
                      : 'bg-red-500/20 border border-red-400 text-red-100'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
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
                    <label htmlFor="project" className="block text-sm font-medium text-white mb-2">
                      Project Type
                    </label>
                    <select
                      id="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                    >
                      <option value="" className="text-gray-900">Select a project type</option>
                      <option value="web" className="text-gray-900">Web Application</option>
                      <option value="mobile" className="text-gray-900">Mobile App</option>
                      <option value="architecture" className="text-gray-900">Technical Architecture Review</option>
                      <option value="process" className="text-gray-900">SDLC Process Implementation</option>
                      <option value="mvp" className="text-gray-900">MVP Development</option>
                      <option value="other" className="text-gray-900">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                    >
                      <option value="" className="text-gray-900">Select budget range</option>
                      <option value="lt5k" className="text-gray-900">Less than $5,000</option>
                      <option value="5k-10k" className="text-gray-900">$5,000 - $10,000</option>
                      <option value="10k-25k" className="text-gray-900">$10,000 - $25,000</option>
                      <option value="25k-50k" className="text-gray-900">$25,000 - $50,000</option>
                      <option value="50k+" className="text-gray-900">$50,000+</option>
                      <option value="consulting" className="text-gray-900">Consulting/Hourly</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Tell me about your project *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
                      placeholder="What are you trying to build? What's your timeline? What challenges are you facing?"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-yellow-600 disabled:cursor-not-allowed text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info & Alternative Options */}
            <div className="space-y-8">
              {/* Quick Info */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">⚡</div>
                    <div>
                      <h4 className="font-semibold">Response Time</h4>
                      <p className="text-blue-100">I typically respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🚀</div>
                    <div>
                      <h4 className="font-semibold">Project Start</h4>
                      <p className="text-blue-100">Most projects can start within 1-2 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💬</div>
                    <div>
                      <h4 className="font-semibold">Communication</h4>
                      <p className="text-blue-100">Regular updates and transparent progress</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Call */}
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Prefer to Talk?</h3>
                <p className="text-orange-100 mb-6">
                  Sometimes it's easier to discuss your project over a call. Let's schedule a 30-minute discovery conversation.
                </p>
                <a 
                  href="https://cal.com/davidebest/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 text-center"
                >
                  Schedule a Call
                </a>
              </div>

              {/* What to Expect */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
                <div className="space-y-4 text-purple-100">
                  <div className="flex items-start">
                    <span className="text-yellow-300 mr-2">1.</span>
                    <p>I'll review your project details and get back to you within 24 hours</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-300 mr-2">2.</span>
                    <p>We'll schedule a discovery call to discuss your goals and constraints</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-300 mr-2">3.</span>
                    <p>I'll provide a detailed proposal with timeline and pricing</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-300 mr-2">4.</span>
                    <p>We'll kick off the project with clear milestones and regular check-ins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Before You Reach Out
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Common questions that might help you prepare
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                Do you work with non-technical founders?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes! I specialize in working with first-time founders and non-technical creators. I explain things in plain English.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                What's your minimum project size?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I take on projects starting around $5,000, but I also offer consulting calls for smaller questions or guidance.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                How do you handle project changes?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I expect changes! We'll build in flexibility and discuss scope changes transparently as the project evolves.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                What if I'm not ready to start yet?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                That's fine! Reach out anyway. I'm happy to discuss your ideas and help you plan for when you're ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;