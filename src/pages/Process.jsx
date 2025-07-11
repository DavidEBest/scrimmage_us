const Process = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How I approach projects and work with clients
          </p>
        </div>
        
        <div className="space-y-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Development Methodology</h3>
            <p className="text-gray-600">
              Practical, iterative approach focused on getting to production quickly while maintaining quality
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Communication Style</h3>
            <p className="text-gray-600">
              Regular updates, transparent about challenges, and focused on your business goals
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
            <p className="text-gray-600">
              Testing strategies, code review processes, and deployment best practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;