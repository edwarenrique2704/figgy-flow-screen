
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCarousel from "@/components/ProductCarousel";
import ServicesCards from "@/components/ServicesCards";
import WorldMap from "@/components/WorldMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductCarousel />
      <ServicesCards />
      <WorldMap />
      <Footer />
    </div>
  );
};

export default Index;
