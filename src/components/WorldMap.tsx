
const WorldMap = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Global Distributors</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our network spans across continents, bringing KLUG solutions to customers worldwide
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/30">
            {/* Simplified World Map with Connection Points */}
            <div className="relative h-96 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl overflow-hidden">
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Connection lines between points */}
                <path d="M 150 200 Q 300 100 450 180" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.6" filter="url(#glow)">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="3s" repeatCount="indefinite"/>
                </path>
                <path d="M 200 250 Q 400 200 600 220" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.6" filter="url(#glow)">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="4s" repeatCount="indefinite"/>
                </path>
                <path d="M 300 180 Q 500 120 700 160" stroke="#60A5FA" strokeWidth="2" fill="none" opacity="0.6" filter="url(#glow)">
                  <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="5s" repeatCount="indefinite"/>
                </path>
              </svg>

              {/* Location Points */}
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-lg text-gray-800 whitespace-nowrap">
                    North America
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-lg text-gray-800 whitespace-nowrap">
                    Europe
                  </div>
                </div>
              </div>

              <div className="absolute top-2/3 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-lg text-gray-800 whitespace-nowrap">
                    Asia Pacific
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white text-xs px-2 py-1 rounded shadow-lg text-gray-800 whitespace-nowrap">
                    Australia
                  </div>
                </div>
              </div>

              {/* Floating Data Points */}
              <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-sm text-white p-4 rounded-xl">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm opacity-90">Countries</div>
              </div>

              <div className="absolute bottom-4 left-4 bg-green-500/80 backdrop-blur-sm text-white p-4 rounded-xl">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm opacity-90">Partners</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "50+", label: "Countries Served" },
              { number: "1000+", label: "Projects Completed" },
              { number: "24/7", label: "Global Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
