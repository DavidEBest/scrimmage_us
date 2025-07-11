const Work = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Case studies and portfolio showcasing real-world projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Case Studies</h3>
            <p className="text-gray-600 mb-6">
              Detailed project breakdowns with lessons learned and technical insights
            </p>
            <button className="btn-primary">
              View Case Studies
            </button>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Published Apps</h3>
            <p className="text-gray-600 mb-6">
              How Not To Say and Fearless Change - real apps in production
            </p>
            <button className="btn-secondary">
              View Apps
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;