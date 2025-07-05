
// import { Card, CardContent } from "@/components/ui/card";

// const ServicesCards = () => {
//   const services = [
//     {
//       icon: "/lovable-uploads/0efd5369-25ad-46b1-a075-b8492491427c.png",
//       title: "Durability",
//       description: "Components built to withstand extreme conditions and last longer."
//     },
//     {
//       icon: "/lovable-uploads/1c0de45c-89c0-4f24-9d9e-de79a2026fbb.png",
//       title: "Maximum performance",
//       description: "Maximum efficiency and power to take your machinery to the next level."
//     },
//     {
//       icon: "/lovable-uploads/53c627fc-bd28-47df-b1e6-2ff5eab9d3fb.png",
//       title: "Optimization",
//       description: "Solutions that reduce waste and enhance your system's productivity."
//     }
//   ];

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         {/* Header Section */}
//         <div className="mb-16">
//           <div className="bg-blue-500 text-white px-8 py-4 rounded-2xl inline-block mb-4">
//             <span className="text-2xl font-bold">Our</span>
//           </div>
//           <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
//             services
//           </h2>
          
//           <div className="max-w-4xl">
//             <h3 className="text-3xl font-bold text-gray-900 mb-6">
//               Powering Innovation in Hydraulic Systems
//             </h3>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               At Klug Hydraulics, we take hydraulic power to the next level with high-performance solutions for the global industry. With years of experience and an unwavering commitment to quality, we provide hydraulic components designed to optimize efficiency, precision, and durability in the most demanding systems.
//             </p>
//           </div>
//         </div>

//         {/* Services Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {services.map((service, index) => (
//             <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
//               <div className="bg-blue-500 p-4 rounded-xl inline-block mb-6">
//                 <img 
//                   src={service.icon} 
//                   alt={service.title}
//                   className="w-8 h-8"
//                 />
//               </div>
//               <h4 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h4>
//               <p className="text-gray-600 leading-relaxed">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Section */}
//         <div className="max-w-4xl">
//           <h3 className="text-xl font-bold text-gray-900 mb-4">
//             Who we help
//           </h3>
//           <h4 className="text-2xl font-bold text-gray-900 mb-4">
//             Power and precision for every industry
//           </h4>
//           <p className="text-gray-600 leading-relaxed">
//             Our products are designed to suit the most diverse applications. Wherever there's a challenge, there's a hydraulic solution from King Hydraulics.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesCards;


import React from 'react';

const ServicesSection = () => {
  return (
    <>
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mb-12">
          <div className="relative mb-8 lg:mb-0 lg:mr-12">
            <div className="bg-blue-500 text-white text-5xl font-bold py-4 px-8 rounded-xl shadow-lg transform -rotate-6 inline-block">
              Our
            </div>
            <div className="bg-white text-gray-800 text-5xl font-bold py-4 px-8 rounded-xl shadow-lg transform rotate-3 inline-block ml-4">
              services
            </div>
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powering Innovation in Hydraulic Systems
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At Klug Hydraulics, we take hydraulic power to the next level with high-performance solutions for the global industry. With years of experience and an unwavering commitment to quality, we provide hydraulic components designed to optimize efficiency, precision, and durability in the most demanding systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Durability Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <img
                src="../../public/lovable-uploads/Durability icon.svg" // Placeholder for Durability icon
                alt="Durability Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Durability
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Components built to withstand extreme conditions and last longer.
            </p>
          </div>

          {/* Maximum performance Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <img
                src="../../public/lovable-uploads/Performance icon.svg" // Placeholder for Maximum Performance icon
                alt="Maximum Performance Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Maximum performance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Maximum efficiency and power to take your machinery to the next level.
            </p>
          </div>

          {/* Optimization Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center">
            <div className="mb-6">
              <img
                src="../../public/lovable-uploads/Optimization icon.svg" // Placeholder for Optimization icon
                alt="Optimization Icon"
                className="w-24 h-24 mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Optimization
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Solutions that reduce waste and enhance your system's productivity.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-lg text-gray-700 font-medium mb-1">who we help</h4>
          <h2 className="text-3xl font-bold text-gray-900">
            Power and precision <br />
            <span className="font-semibold">for every industry</span>
          </h2>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-gray-600 text-lg leading-relaxed">
            Our products are designed to suit the most diverse applications. Wherever there's a challenge, there's a hydraulic solution from Klug Hydraulics.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;