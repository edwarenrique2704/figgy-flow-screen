
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top section with logo and blue buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-2xl font-bold text-blue-400 mr-8">KLUG</div>
            <span className="text-gray-300 text-sm mr-8">Visit our others line products:</span>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white text-sm font-medium transition-colors">
                KLUG ELECTRIC
              </a>
              <a href="#" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white text-sm font-medium transition-colors">
                KLUG PNEUMATICS
              </a>
            </div>
          </div>
        </div>

        {/* Navigation and contact section */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <p className="text-gray-400 text-sm mb-4">Klug Company all rights reserved</p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">About</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Products</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Catalogs</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">Contact</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">PUMPS</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">VALVES</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">HYDRAULICS MOTORS</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">FILTERS</a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">ACCESSORIES</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">
                  <p>123 Industrial Ave</p>
                  <p>Manufacturing District</p>
                  <p>Tech City, TC 12345</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-lg mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">info@klug.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
