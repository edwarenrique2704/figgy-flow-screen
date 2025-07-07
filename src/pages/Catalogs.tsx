
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, RotateCcw } from "lucide-react";
import { useState } from "react";

const Catalogs = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Pumps", "Valves", "Hydraulics Motors", "Filters", "Power Units", "Accessories"];
  
  const catalogs = [
    { 
      name: "Air coolers Catalog", 
      category: "Accessories",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    },
    { 
      name: "Accumulators Catalog", 
      category: "Power Units",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    },
    { 
      name: "Gear Pump Catalog", 
      category: "Pumps",
      image: "/lovable-uploads/e6a67029-8879-455b-a1e7-37742ca6d04e.png"
    },
    { 
      name: "Air coolers Catalog", 
      category: "Accessories",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    },
    { 
      name: "Accumulators Catalog", 
      category: "Power Units",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    },
    { 
      name: "Air coolers Catalog", 
      category: "Accessories",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    },
    { 
      name: "Air coolers Catalog", 
      category: "Accessories",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    },
    { 
      name: "Accumulators Catalog", 
      category: "Power Units",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    },
    { 
      name: "Air coolers Catalog", 
      category: "Accessories",
      image: "/lovable-uploads/e1767b01-1040-452e-b0d7-556d5c391dab.png"
    }
  ];

  const filteredCatalogs = activeFilter === "All" 
    ? catalogs 
    : catalogs.filter(catalog => catalog.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      
      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 mr-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-sm text-gray-600">Filters:</span>
              </div>
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className={`text-sm ${
                    activeFilter === filter 
                      ? "bg-blue-500 hover:bg-blue-600 text-white" 
                      : "bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFilter("All")}
              className="flex items-center gap-2 text-gray-600 border-gray-300"
            >
              <RotateCcw className="w-4 h-4" />
              Reset filters
            </Button>
          </div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCatalogs.map((catalog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 relative">
                  <img 
                    src={catalog.image} 
                    alt={catalog.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{catalog.name}</h3>
                  <Button 
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Catalogs;
