"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

const highlightImages = ["/banner1.png", "/banner2.png"];

export default function Highlights() {
  const [currentImg, setCurrentImg] = useState(0);

  // Automatic cinematic shift between banner1 and banner2 every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % highlightImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const highlightsList = [
    "11.8 Acres expansive luxury community layout",
    "8 Iconic Towers structured at 34 storeys high",
    "Spacious & meticulously planned 3 & 4 BHK residences",
    "1,00,000 Sq. Ft. Club Regalia (Multi-level clubhouse)",
    "5 Minutes proximity to Noida International Airport (Jewar)",
    "8 Acres of peacock-inspired landscape greens & gardens",
    "Masterminded by Hafeez Contractor & global consultants",
    "Exclusive pricing starting from ₹1.36 Cr* onwards",
  ];

  return (
    <section id="highlights" className="relative w-full py-20 sm:py-28 bg-[#fbf9f5] text-[#0b231e] overflow-hidden">
      
      {/* Subtle Gold Divider Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Key Distinctions</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            The Mark of Distinction
          </h2>
        </div>

        {/* Two Column Layout: Left Cinematic Image Slideshow / Right List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Side: Controlled Cinematic Image Slideshow (Using banner1 & banner2) */}
          <div className="lg:col-span-6 relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-lg bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImg}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={highlightImages[currentImg]}
                  alt="Gaur Alaris Highlight View"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b231e]/50 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Image Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
              {highlightImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImg(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentImg === idx ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/60"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Clean List Only */}
          <div className="lg:col-span-6 flex flex-col justify-center divide-y divide-[#c5a059]/25 border-y border-[#c5a059]/25">
            {highlightsList.map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="py-4 sm:py-5 flex items-center gap-4 group"
              >
                <span className="text-sm sm:text-base font-serif font-bold text-[#c5a059] min-w-[2rem]">
                  0{idx + 1}
                </span>
                <span className="text-sm sm:text-base font-sans text-[#0b231e]/90 font-medium group-hover:text-[#9a7b3c] transition-colors">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Button linking to Amenities */}
        <div className="flex justify-center">
          <a
            href="#amenities"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:opacity-95 transition-all font-sans group cursor-pointer"
          >
            <span>Explore Amenities</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

      </div>

    </section>
  );
}