
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About KLUG</h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              KLUG HYDRAULICS has been a leading manufacturer of hydraulic components and systems for over decades. 
              We specialize in providing high-quality pumps, valves, motors, and accessories for industrial applications.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our commitment to excellence and innovation has made us a trusted partner for businesses worldwide. 
              We continuously invest in research and development to deliver cutting-edge hydraulic solutions.
            </p>
            <p className="text-lg text-gray-600">
              With our comprehensive product line and expert technical support, we help our customers achieve 
              optimal performance and efficiency in their hydraulic systems.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
