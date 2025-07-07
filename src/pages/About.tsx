
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Section 1: Who we are? */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who we are?</h2>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of experience in the industry, KLUG Hydraulics 
                is a company specialized in the manufacture and distribution of 
                high-performance hydraulic components. With engineering 
                inspired by German precision, we design smart, reliable and 
                efficient solutions for diverse industries, including construction, 
                industrial automation, agriculture and transportation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/9f33d984-f915-469f-97a8-c99c1a5cab7c.png" 
                alt="KLUG team working"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why choose KLUG? */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-white text-sm mb-2">Here's how it works</p>
            <h2 className="text-4xl font-bold text-white mb-6">Why choose KLUG?</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              From precision valves to energy-efficient hydraulic systems, our products deliver 
              superior performance, durability, and cost-effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/lovable-uploads/Performance icon.svg" alt="Performance" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Precision Engineering</h3>
              <p className="text-gray-600 text-sm">
                We base our designs on German standards, 
                guaranteeing maximum performance and reliability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/lovable-uploads/Optimization icon.svg" alt="Innovation" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation and Agility</h3>
              <p className="text-gray-600 text-sm">
                We adapt quickly to market needs, introducing new 
                technologies and efficient solutions.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/lovable-uploads/Performance icon.svg" alt="Personalized" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalized Approach</h3>
              <p className="text-gray-600 text-sm">
                We know each gains in the 
                industry, so we design solutions 
                tailored to the specific needs 
                of each customer.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/lovable-uploads/Durability icon.svg" alt="Sustainability" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Commitment to Sustainability</h3>
              <p className="text-gray-600 text-sm">
                We develop energy-efficient 
                components aligned with 
                industry 4.0 trends.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img src="/lovable-uploads/Optimization icon.svg" alt="Quality" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality - Price Ratio</h3>
              <p className="text-gray-600 text-sm">
                We offer high performance 
                products without the cost 
                overruns of the big brands.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
              Contact us!
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: Industry & Market Opportunities */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <p className="text-white/70 text-sm mb-2">Here are the benefits</p>
            <h2 className="text-4xl font-bold text-white mb-6">Industry & Market Opportunities</h2>
            <p className="text-white/90 max-w-3xl mx-auto">
              Hydraulic components are essential for multiple industrial sectors, ensuring efficiency 
              and durability under extreme conditions. Opportunities for Klug include:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Energy - Efficient Systems</h3>
              <p className="text-gray-600 text-sm">
                Companies have energy 
                consumption solutions to align 
                with global sustainability trends.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Expanding Aftermarket Services</h3>
              <p className="text-gray-600 text-sm">
                Building a strong service and 
                maintenance network can 
                enhance brand loyalty.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Global Expansion</h3>
              <p className="text-gray-600 text-sm">
                Entering emerging markets with 
                industrial growth could 
                provide new revenue streams.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Advanced Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                Implementing smart 
                manufacturing processes 
                can improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Join the Hydraulic Revolution */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/81b66148-b464-4fe7-8825-bbddb9dd7a53.png" 
                alt="KLUG team collaboration"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Join the Hydraulic Revolution with KLUG
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We have a team of highly trained professionals committed 
                to excellence. Our organizational culture fosters continuous 
                development and collaboration, allowing us to adapt to 
                market challenges and exceed our clients' expectations.
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full">
                Contact us!
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
