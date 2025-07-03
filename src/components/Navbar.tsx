
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">KLUG</div>
            <div className="text-xs text-gray-500 font-medium">HYDRAULICS</div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right Side Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V19C3 20.11 3.89 21 5 21H11V19H5V3H13V9H21Z"/>
                </svg>
              </div>
              <span className="text-xs">About</span>
            </div>
            
            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span className="text-xs">Products</span>
            </div>

            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20Z"/>
                </svg>
              </div>
              <span className="text-xs">Catalogs</span>
            </div>

            <div className="flex flex-col items-center text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">
              <div className="w-6 h-6 mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M20 18H4V8L12 13L20 8V18M20 6L12 11L4 6H20Z"/>
                </svg>
              </div>
              <span className="text-xs">Contact</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="hidden md:flex items-center justify-center border-t border-gray-100 py-3">
          <div className="flex items-center space-x-12">
            <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors border-b-2 border-blue-600 pb-1">
              PUMPS
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              VALVES
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              HYDRAULIC MOTORS
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              FILTERS
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              POWER UNITS
            </a>
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              ACCESSORIES
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2">
            <div className="flex flex-col space-y-3 pt-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              {/* Mobile Navigation Links */}
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">PUMPS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">VALVES</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">HYDRAULIC MOTORS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">FILTERS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">POWER UNITS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 py-2 transition-colors">ACCESSORIES</a>
              
              <div className="flex flex-col space-y-2 pt-2">
                <span className="text-gray-700">About</span>
                <span className="text-gray-700">Products</span>
                <span className="text-gray-700">Catalogs</span>
                <span className="text-gray-700">Contact</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
