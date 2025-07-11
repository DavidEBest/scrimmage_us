const Writing = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Writing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Technical articles, case studies, and insights on small business technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Articles</h3>
            <p className="text-gray-600 mb-4">
              Development insights and best practices
            </p>
            <div className="text-sm text-gray-500">Coming soon...</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Case Studies</h3>
            <p className="text-gray-600 mb-4">
              Project deep-dives and lessons learned
            </p>
            <div className="text-sm text-gray-500">Coming soon...</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Thoughts</h3>
            <p className="text-gray-600 mb-4">
              Small business tech perspectives
            </p>
            <div className="text-sm text-gray-500">Coming soon...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writing;