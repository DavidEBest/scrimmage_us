const Services = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Focused on 0→1 projects for small businesses and creators
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Development</h3>
            <p className="text-gray-600 mb-6">
              Web and mobile application development, MVP and prototype development
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Web application development</li>
              <li>• Mobile app development (iOS/Android)</li>
              <li>• MVP and prototype development</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Architecture</h3>
            <p className="text-gray-600 mb-6">
              System architecture design, code review, and technical audits
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• System architecture design</li>
              <li>• Code review and technical audits</li>
              <li>• Technology stack recommendations</li>
              <li>• Scalability planning</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SDLC Process</h3>
            <p className="text-gray-600 mb-6">
              Development process setup and quality assurance implementation
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Development process setup</li>
              <li>• CI/CD pipeline implementation</li>
              <li>• Quality assurance processes</li>
              <li>• Project management methodology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;