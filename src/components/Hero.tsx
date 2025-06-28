
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Monoblock <span className="text-blue-400">Valves</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Monoblock directional control valve is designed for high pressure 
              hydraulic system such as drilling machine, sanitation, etc.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore Products
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg rounded-lg transition-all duration-300">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl p-8 backdrop-blur-sm border border-blue-500/30">
              <img 
                src="/lovable-uploads/c074f675-77ff-4361-89c4-1ab38d7bac8c.png" 
                alt="Monoblock Valves" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Premium Quality
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ISO Certified
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
