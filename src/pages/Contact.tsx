
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">Where to buy? We have global presence!</h1>
          </div>
          
          {/* World Map Section */}
          <div className="relative mb-16">
            <img 
              src="/lovable-uploads/921bfc20-10d1-411f-9043-5748f8fda47e.png" 
              alt="Global presence map" 
              className="w-full max-w-4xl mx-auto"
            />
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Our office</h3>
              <p className="text-gray-600">Yangming Mountain 144, China</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Our email</h3>
              <p className="text-gray-600">info@klugcompany.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Our phone number</h3>
              <p className="text-gray-600">+86 18138859780</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
