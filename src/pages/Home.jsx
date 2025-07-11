const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Scrimmaging is about practicing how we play
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Approachable, experienced generalist who helps small businesses and creators 
            build their first production software products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-secondary">
              View My Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;