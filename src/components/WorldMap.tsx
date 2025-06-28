
const WorldMap = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hydraulic solutions reach customers worldwide, providing reliable service and support across continents.
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-xl p-8">
          {/* Placeholder for world map */}
          <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Worldwide Coverage</h3>
              <p className="text-gray-600">Serving customers in over 50 countries</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">99%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
