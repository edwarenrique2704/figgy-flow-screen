
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Products = () => {
  const productCategories = [
    {
      id: "pumps",
      name: "Pumps",
      subcategories: [
        "Solenoid directional valves",
        "Monoblock directional control valves",
        "Check valves",
        "Relief valves",
        "Piloted relief valves",
        "In-line check valves",
        "Reduction valves",
        "Brand type valves",
        "Control valves",
        "Union",
        "Fusible valves",
        "Manual valves for compact units",
        "Control valves",
        "Counterbalance valves",
        "VISE valves",
        "Coils"
      ],
      products: [
        {
          name: "CBK-F7.0",
          code: "CBK-F7.0",
          image: "/lovable-uploads/c074f675-77ff-4361-89c4-1ab38d7bac8c.png"
        }
      ]
    },
    {
      id: "valves",
      name: "Valves",
      subcategories: [],
      products: []
    },
    {
      id: "hydraulic-motors",
      name: "Hydraulic motors",
      subcategories: [],
      products: [
        {
          name: "BHP280D",
          variants: [
            { code: "BHP280C8T00D", image: "/lovable-uploads/409cfc27-0068-4d5e-9776-ee35419db084.png" },
            { code: "BHP280C28T00", image: "/lovable-uploads/1c0de45c-89c0-4f24-9d9e-de79a2026fbb.png" }
          ]
        }
      ]
    },
    {
      id: "filters",
      name: "Filters",
      subcategories: [],
      products: []
    },
    {
      id: "accessories",
      name: "Accessories",
      subcategories: [],
      products: [
        {
          name: "HGP",
          variants: [
            { code: "HGP-1A-F4R/2N / F6R/2N", image: "/lovable-uploads/65ab577c-52a2-4d5f-9fee-446e7b306c39.png" },
            { code: "HGP-1A-F2R/2B", image: "/lovable-uploads/0efd5369-25ad-46b1-a075-b8492491427c.png" },
            { code: "HGP-5A-F25-R/37288N", image: "/lovable-uploads/53c627fc-bd28-47df-b1e6-2ff5eab9d3fb.png" }
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/4 pr-8">
              <h2 className="text-2xl font-bold mb-6">Products</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {productCategories.map((category) => (
                  <AccordionItem key={category.id} value={category.id} className="border rounded-lg">
                    <AccordionTrigger className="px-4 py-2 text-left hover:no-underline">
                      <span className="flex items-center justify-between w-full">
                        {category.name}
                        <span className="text-lg">+</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      {category.subcategories.length > 0 ? (
                        <ul className="space-y-1">
                          {category.subcategories.map((sub, index) => (
                            <li key={index} className="text-sm text-gray-600 hover:text-blue-600 cursor-pointer">
                              {sub}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">No subcategories</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Right Content Area */}
            <div className="w-3/4">
              <div className="border-b mb-6">
                <h1 className="text-3xl font-bold mb-4">PUMPS</h1>
              </div>

              {/* CBK-F7.0 Product */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">CBK-F7.0</h2>
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/c074f675-77ff-4361-89c4-1ab38d7bac8c.png" 
                    alt="CBK-F7.0"
                    className="w-32 h-32 object-contain mr-4"
                  />
                  <div>
                    <p className="text-gray-600">CBK-F7.0</p>
                  </div>
                </div>
              </div>

              {/* BHP280D Product */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">BHP280D</h2>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/409cfc27-0068-4d5e-9776-ee35419db084.png"
                      alt="BHP280C8T00D"
                      className="w-32 h-32 object-contain mx-auto mb-2"
                    />
                    <p className="text-sm">BHP280C8T00D</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/1c0de45c-89c0-4f24-9d9e-de79a2026fbb.png"
                      alt="BHP280C28T00"
                      className="w-32 h-32 object-contain mx-auto mb-2"
                    />
                    <p className="text-sm">BHP280C28T00</p>
                  </div>
                </div>
              </div>

              {/* HGP Product */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">HGP</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/65ab577c-52a2-4d5f-9fee-446e7b306c39.png"
                      alt="HGP-1A-F4R/2N / F6R/2N"
                      className="w-24 h-24 object-contain mx-auto mb-2"
                    />
                    <p className="text-xs">HGP-1A-F4R/2N / F6R/2N</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/0efd5369-25ad-46b1-a075-b8492491427c.png"
                      alt="HGP-1A-F2R/2B"
                      className="w-24 h-24 object-contain mx-auto mb-2"
                    />
                    <p className="text-xs">HGP-1A-F2R/2B</p>
                  </div>
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/53c627fc-bd28-47df-b1e6-2ff5eab9d3fb.png"
                      alt="HGP-5A-F25-R/37288N"
                      className="w-24 h-24 object-contain mx-auto mb-2"
                    />
                    <p className="text-xs">HGP-5A-F25-R/37288N</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
