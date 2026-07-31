"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, ZoomIn } from "lucide-react";

export default function Overview() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const overviewImages = [
    { src: "/o1.png", alt: "Grand Entrance & Architecture" },
    { src: "/banner_1.png", alt: "Art Deco Tower Elevation" },
    { src: "/o_3.png", alt: "Peacock-Inspired Landscape" },
    { src: "/o_4.png", alt: "Luxury Living Spaces" },
  ];

  return (
    <section id="overview" className="relative w-full py-16 sm:py-24 bg-[#fbf9f5] text-[#0b231e] overflow-hidden">
      
      {/* Subtle Gold Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Alaris Logo */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Project Overview</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          {/* Official Alaris Logo Integration */}
          <div className="relative w-40 sm:w-52 h-12 mx-auto">
            <Image
              src="/logo-alaris.png"
              alt="Gaur Alaris Logo"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Where Architecture Meets Artistry
          </h2>

          <p className="text-xs sm:text-base text-[#0b231e]/75 font-sans leading-relaxed font-light max-w-2xl mx-auto">
            Inspired by the grace of the peacock, Gaur Alaris brings timeless Art Deco architecture and sprawling landscape greens to Sector 22D, Yamuna Expressway.
          </p>
        </div>

        {/* Core Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-sm text-center">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9a7b3c] mb-1 font-sans">Configuration</span>
            <span className="text-sm sm:text-lg font-serif font-bold text-[#0b231e]">3 & 4 BHK Luxury</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-sm text-center">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9a7b3c] mb-1 font-sans">Scale & Density</span>
            <span className="text-sm sm:text-lg font-serif font-bold text-[#0b231e]">8 Iconic Towers</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-sm text-center">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9a7b3c] mb-1 font-sans">Elevation</span>
            <span className="text-sm sm:text-lg font-serif font-bold text-[#0b231e]">34 Storeys</span>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#c5a059]/30 shadow-sm text-center">
            <span className="block text-[10px] sm:text-[11px] uppercase tracking-widest text-[#9a7b3c] mb-1 font-sans">Land Spread</span>
            <span className="text-sm sm:text-lg font-serif font-bold text-[#0b231e]">11.8 Acres</span>
          </div>
        </div>

        {/* 4 Images Gallery Grid: 2 columns on mobile, 4 columns on large screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {overviewImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(img.src)}
              className="relative group overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-[#c5a059]/30 shadow-md aspect-[4/5] cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Gradient Overlay & Zoom Icon on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b231e]/90 via-[#0b231e]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 bg-[#fbf9f5]/20 backdrop-blur-md p-2.5 sm:p-3 rounded-full border border-[#c5a059]/50 text-[#dfc184]">
                  <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
              
              {/* Image Title Tag */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-[#fbf9f5] font-sans font-medium block drop-shadow-md truncate">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal for Fullscreen Image Viewing */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-[#0b231e]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <div className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden border border-[#c5a059]/40 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain bg-black/40"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0b231e]/80 border border-[#c5a059] text-[#dfc184] hover:bg-[#0b231e] transition-colors shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}