
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react";

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "Relief valve",
      image: "/lovable-uploads/5d2f4d51-23a7-4f2e-8879-add231ae9fa4.png"
    },
    {
      id: 2,
      name: "VBSE valve",
      image: "/lovable-uploads/b1ea9a91-3b37-4764-b5e4-d1be78e1094a.png"
    },
    {
      id: 3,
      name: "Monoblock directional control valve",
      image: "/lovable-uploads/409cfc27-0068-4d5e-9776-ee35419db084.png"
    },
    {
      id: 4,
      name: "Power unit filter",
      image: "/lovable-uploads/65ab577c-52a2-4d5f-9fee-446e7b306c39.png"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  // Calculate visible products based on current index
  const getVisibleProducts = () => {
    const visibleCount = 4;
    const visible = [];
    
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % products.length;
      visible.push(products[index]);
    }
    
    return visible;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <div className="flex space-x-1">
              {products.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    i === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured products</h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 -ml-6"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10 -mr-6"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-4 gap-6 transition-all duration-300 ease-in-out">
            {visibleProducts.map((product, index) => (
              <div key={`${product.id}-${currentIndex}-${index}`} className="relative">
                <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200">
                  <CardContent className="p-4">
                    <div className="relative bg-gray-50 rounded-lg p-6 mb-3 min-h-[200px] flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-contain max-h-[150px]"
                      />
                      <button className="absolute top-3 right-3 p-1 hover:bg-gray-200 rounded">
                        <Bookmark className="w-4 h-4 text-gray-500" />
                      </button>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 text-center">{product.name}</h3>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
