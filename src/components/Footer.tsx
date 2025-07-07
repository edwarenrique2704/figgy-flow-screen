
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top section with logo and blue buttons */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-2xl font-bold text-blue-600 mr-8">KLUG</div>
            <span className="text-gray-600 text-sm mr-8">Visit our others line products:</span>
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

        {/* Navigation and company info section */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <p className="text-gray-600 text-sm">Klug Company all rights reserved</p>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Products</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Catalogs</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">Contact</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">PUMPS</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">VALVES</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">HYDRAULICS MOTORS</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">FILTERS</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">ACCESSORIES</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
