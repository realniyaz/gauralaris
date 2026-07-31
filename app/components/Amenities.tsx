"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function Amenities() {
  const amenitiesList = [
    { src: "/a1.png", title: "Club Regalia (1 Lakh Sq.Ft. Clubhouse)", category: "Social & Leisure" },
    { src: "/a2.png", title: "Heated Swimming Pool & Cold Baths", category: "Wellness & Spa" },
    { src: "/a3.png", title: "State-of-the-Art Gymnasium & Fitness Studio", category: "Health & Sports" },
    { src: "/a4.png", title: "Indoor Badminton & Squash Courts", category: "Sports Arena" },
    { src: "/a5.png", title: "Private Bowling Alley & Gaming Arcade", category: "Entertainment" },
    { src: "/a6.png", title: "Grand Banquet Hall & Party Lawns", category: "Social Gathering" },
    { src: "/a7.png", title: "Exclusive Sky Veranda & Terrace Lounge", category: "Sky Amenities" },
    { src: "/a8.png", title: "Peacock-Inspired Landscape Gardens", category: "Nature & Greens" },
  ];

  return (
    <section id="amenities" className="relative w-full py-16 sm:py-24 bg-[#fbf9f5] text-[#0b231e] overflow-hidden">
      
      {/* Subtle Gold Divider Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Club Regalia & Lifestyle</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Unmatched World-Class Amenities
          </h2>

          <p className="text-xs sm:text-base text-[#0b231e]/75 font-sans leading-relaxed font-light max-w-xl mx-auto">
            Spread across 5 levels and distinct zones, Club Regalia defines the pinnacle of leisure, sports, and holistic wellness.
          </p>
        </div>

        {/* Amenities Grid: 2 columns on mobile, 4 columns on large screens (Reduced height/size) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {amenitiesList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-[#c5a059]/30 shadow-sm aspect-[16/11] sm:aspect-[4/3]"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b231e]/90 via-[#0b231e]/30 to-transparent opacity-80" />
              
              {/* Category & Title Tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 space-y-0.5">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#dfc184] font-sans font-semibold block">
                  {item.category}
                </span>
                <span className="text-[11px] sm:text-xs font-serif font-medium text-[#fbf9f5] block drop-shadow-md truncate">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
}