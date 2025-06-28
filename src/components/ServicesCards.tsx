
import { Card, CardContent } from "@/components/ui/card";

const ServicesCards = () => {
  const services = [
    {
      icon: "🔧",
      title: "Engineering",
      description: "Custom hydraulic system design and engineering solutions tailored to your specific requirements.",
      features: ["CAD Design", "System Analysis", "Performance Testing"]
    },
    {
      icon: "⚙️",
      title: "Manufacturing",
      description: "Precision manufacturing with state-of-the-art equipment and quality control processes.",
      features: ["CNC Machining", "Quality Control", "ISO Standards"]
    },
    {
      icon: "🛠️",
      title: "Maintenance",
      description: "Comprehensive maintenance and support services to keep your systems running optimally.",
      features: ["24/7 Support", "Preventive Care", "Quick Response"]
    },
    {
      icon: "📋",
      title: "Consultation",
      description: "Expert consultation to optimize your hydraulic systems for maximum efficiency and performance.",
      features: ["System Audit", "Optimization", "Training"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Providing Innovation in <span className="text-blue-600">Hydraulic Systems</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver comprehensive hydraulic solutions from initial design to ongoing maintenance. 
              Our expert team ensures your systems operate at peak performance with maximum reliability.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
              alt="Hydraulic Systems"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
