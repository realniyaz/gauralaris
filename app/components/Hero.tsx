"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const banners = ["/banner_1.png", "/banner2.png", "/banner3.png",];

export default function Hero() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  // Cinematic automatic background slideshow every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-[#0b231e] pt-20 pb-12 flex flex-col justify-center">
      
      {/* 1. Mobile: Full clean banner image first (No clutter) / Desktop: Absolute Cinematic BG */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] lg:absolute lg:inset-0 lg:h-full z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${banners[currentBanner]})` }}
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b231e] via-transparent to-black/20 lg:bg-gradient-to-r lg:from-[#0b231e]/90 lg:via-[#0b231e]/60 lg:to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Navigation Dots inside Banner for Mobile */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 lg:hidden">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentBanner(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentBanner === idx ? "w-6 bg-[#c5a059]" : "w-1.5 bg-white/50"
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Main Content Layout Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6 lg:pt-0">
        
        {/* Left Column: Project Text & Specs */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
          
          <span className="text-xs uppercase tracking-[0.4em] text-[#dfc184] font-sans">
            Gaurs Group Presents
          </span>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-gold-gradient font-normal tracking-wide">
              GAUR ALARIS
            </h1>
            <p className="text-sm sm:text-base text-[#fbf9f5]/80 font-sans max-w-lg italic font-light">
              &ldquo;Where the grace of the peacock shapes timeless luxury living.&rdquo;
            </p>
          </div>

          {/* Minimal Specs Bar */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-xs tracking-widest uppercase text-[#dfc184] font-sans pt-1">
            <span>3 & 4 BHK Residences</span>
            <span>•</span>
            <span>8 Iconic Towers (34 Storey)</span>
            <span>•</span>
            <span>Sector 22D, YEIDA</span>
          </div>

          {/* Sleek Price Highlight */}
          <div className="inline-flex items-baseline gap-3 px-6 py-3 rounded-2xl bg-[#fbf9f5]/10 backdrop-blur-md border border-[#c5a059]/40 shadow-xl">
            <span className="text-xs uppercase tracking-widest text-[#dfc184]">Price Starts From</span>
            <span className="text-3xl sm:text-4xl font-serif text-gold-gradient font-bold">₹1.36 Cr*</span>
          </div>

        </div>

        {/* Right Column: Center-aligned Contact Form */}
        <div className="lg:col-span-5 w-full flex justify-center mt-4 lg:mt-0">
          <div className="w-full max-w-md bg-[#fbf9f5] text-[#0b231e] p-6 sm:p-8 rounded-3xl shadow-2xl border border-[#c5a059]/40 relative">
            
            {/* Form Top Tag */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c5a059] text-[#fbf9f5] text-[10px] tracking-[0.2em] uppercase px-4 py-1 rounded-full font-bold shadow">
              Enquiry Desk
            </div>

            <div className="text-center mt-2 mb-6">
              <h3 className="text-2xl font-serif text-[#0b231e]">Connect With Us</h3>
              <p className="text-xs text-[#0b231e]/70 mt-1 font-sans">Get exclusive floor plans, pricing & e-brochure</p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center space-y-3"
              >
                <div className="w-14 h-14 bg-[#c5a059]/10 border border-[#c5a059] rounded-full flex items-center justify-center mx-auto text-[#c5a059]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-serif text-[#0b231e]">Thank You</h4>
                <p className="text-xs text-[#0b231e]/80 max-w-xs mx-auto font-sans">
                  Our luxury property advisor will get in touch with you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#c5a059] underline tracking-wider pt-2 hover:text-[#0b231e] font-sans"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#0b231e]/80 mb-1 font-sans font-medium">Full Name *</label>
                  <input suppressHydrationWarning
                    type="text" 
                    required
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-[#c5a059]/30 rounded-xl px-4 py-2.5 text-sm text-[#0b231e] placeholder-[#0b231e]/30 focus:outline-none focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#0b231e]/80 mb-1 font-sans font-medium">Email Address</label>
                  <input suppressHydrationWarning
                    type="email" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-[#c5a059]/30 rounded-xl px-4 py-2.5 text-sm text-[#0b231e] placeholder-[#0b231e]/30 focus:outline-none focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#0b231e]/80 mb-1 font-sans font-medium">Phone Number *</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-[#c5a059]/30 bg-[#fbf9f5] text-[#0b231e] text-sm">
                      +91
                    </span>
                    <input 
                      type="tel" 
                      required
                      placeholder="98765 43210" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-white border border-[#c5a059]/30 rounded-r-xl px-4 py-2.5 text-sm text-[#0b231e] placeholder-[#0b231e]/30 focus:outline-none focus:border-[#c5a059] transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans"
                >
                  Get Instant Details & Pricing
                </button>

                <p className="text-[10px] text-center text-[#0b231e]/50 pt-1 font-sans">
                  *Your details are secure with us. By submitting, you authorize a call/WhatsApp.
                </p>
              </form>
            )}

          </div>
        </div>

      </div>

      {/* Desktop Slide Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden lg:flex items-center gap-2">
        {banners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentBanner(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentBanner === idx ? "w-8 bg-[#c5a059]" : "w-2 bg-[#fbf9f5]/30 hover:bg-[#fbf9f5]/60"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}