"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Plane, Building, Compass, Car } from "lucide-react";

export default function Location() {
  const locationBenefits = [
    {
      icon: <Plane className="w-5 h-5 text-[#c5a059]" />,
      title: "Noida International Airport",
      desc: "Just 5 minutes away from the upcoming Jewar International Airport.",
    },
    {
      icon: <Car className="w-5 h-5 text-[#c5a059]" />,
      title: "Yamuna Expressway",
      desc: "Seamless connectivity via the 165-km expressway and Eastern Peripheral.",
    },
    {
      icon: <Building className="w-5 h-5 text-[#c5a059]" />,
      title: "Upcoming Film City",
      desc: "Proximity to the proposed International Film City & Tech Zones.",
    },
    {
      icon: <Compass className="w-5 h-5 text-[#c5a059]" />,
      title: "Medical & Toy Park",
      desc: "Surrounded by institutional clusters, Medical Device Park, and Toy Park.",
    },
  ];

  return (
    <section id="location" className="relative w-full py-20 sm:py-28 bg-[#fbf9f5] text-[#0b231e] overflow-hidden">
      
      {/* Subtle Gold Divider Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Strategic Address</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Location & Connectivity
          </h2>

          <p className="text-xs sm:text-base text-[#0b231e]/75 font-sans leading-relaxed font-light max-w-xl mx-auto">
            Positioned in Sector 22D, Yamuna Expressway—the high-growth epicenter of future infrastructure and global transit.
          </p>
        </div>

        {/* Two Column Layout: Map Image / Location Benefits List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Location Map Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-lg bg-white"
          >
            <Image
              src="/gaurlocationmap.jpg"
              alt="Gaur Alaris Location Map"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#0b231e]/80 backdrop-blur-md px-4 py-2 rounded-xl border border-[#c5a059]/40 flex items-center gap-2 text-[#fbf9f5]">
              <MapPin className="w-4 h-4 text-[#dfc184]" />
              <span className="text-xs uppercase tracking-wider font-sans">Sector 22D, Yamuna Expressway</span>
            </div>
          </motion.div>

          {/* Right Column: Location Benefits List */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {locationBenefits.map((item, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-sm flex items-start gap-4 hover:border-[#c5a059] transition-colors"
              >
                <div className="p-3 rounded-xl bg-[#c5a059]/10 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#0b231e] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#0b231e]/75 font-sans leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  );
}