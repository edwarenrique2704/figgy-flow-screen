
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Catalogs = () => {
  const catalogs = [
    { name: "Hydraulic Pumps Catalog", description: "Complete range of hydraulic pumps" },
    { name: "Valves Catalog", description: "Industrial valves and control systems" },
    { name: "Motors Catalog", description: "Hydraulic motors and accessories" },
    { name: "Filters Catalog", description: "Filtration systems and components" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Product Catalogs</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {catalogs.map((catalog, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{catalog.name}</h3>
                <p className="text-gray-600 mb-4">{catalog.description}</p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Download PDF
                </Button>
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
