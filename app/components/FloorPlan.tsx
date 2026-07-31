"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, FileText, CheckCircle2, Lock, X } from "lucide-react";

export default function FloorPlan() {
  const [activeTab, setActiveTab] = useState<"threeBhk" | "fourBhk">("threeBhk");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const plans = {
    threeBhk: {
      title: "3 BHK Luxury Residence",
      size: "Super Area: 1,550 Sq. Ft.",
      image: "/3BHK.jpg",
      desc: "Thoughtfully crafted 3 BHK configuration featuring generous living areas, high ceilings, and panoramic deck balconies.",
    },
    fourBhk: {
      title: "4 BHK Ultra-Luxury Residence",
      size: "Super Area: 1,950 Sq. Ft.",
      image: "/4BHK.jpg",
      desc: "Expansive 4 BHK elite layout designed for supreme privacy, grand family lounge spaces, and cross-ventilation.",
    },
  };

  const handleOpenModal = () => {
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="floor-plans" className="relative w-full py-20 sm:py-28 bg-[#fbf9f5] text-[#0b231e] overflow-hidden">
      
      {/* Subtle Gold Divider Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Masterful Layouts</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Floor Plans & Master Layouts
          </h2>

          <p className="text-xs sm:text-base text-[#0b231e]/75 font-sans leading-relaxed font-light max-w-xl mx-auto">
            Explore meticulously engineered spaces balancing elegance, privacy, and natural light.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-[#c5a059]/40 shadow-sm">
            <button
              onClick={() => setActiveTab("threeBhk")}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-sans font-bold transition-all ${
                activeTab === "threeBhk"
                  ? "bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] shadow"
                  : "text-[#0b231e]/70 hover:text-[#0b231e]"
              }`}
            >
              3 BHK Residence
            </button>
            <button
              onClick={() => setActiveTab("fourBhk")}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-sans font-bold transition-all ${
                activeTab === "fourBhk"
                  ? "bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] shadow"
                  : "text-[#0b231e]/70 hover:text-[#0b231e]"
              }`}
            >
              4 BHK Residence
            </button>
          </div>
        </div>

        {/* Floor Plan Display Card with Animated Swap & Lightly Visible Protected Image */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#c5a059]/40 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details & Request Button */}
              <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-[#c5a059]/10 text-[#9a7b3c] text-xs font-sans uppercase tracking-widest font-semibold">
                  {plans[activeTab].size}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0b231e]">
                  {plans[activeTab].title}
                </h3>

                <p className="text-xs sm:text-sm text-[#0b231e]/75 font-sans leading-relaxed">
                  {plans[activeTab].desc}
                </p>

                <div className="pt-2">
                  <button
                    onClick={handleOpenModal}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all font-sans inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Detailed Floor Plan</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Protected Image (Slightly visible with light blur & watermark overlay) */}
              <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0b231e]/5 border border-[#c5a059]/30 select-none pointer-events-none">
                <Image
                  src={plans[activeTab].image}
                  alt="Floor Plan Blueprint"
                  fill
                  className="object-contain filter blur-[2px] opacity-80"
                  priority
                />
                
                {/* Light Semi-Transparent Security Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b231e]/20 backdrop-blur-[1px]">
                  <div className="p-2.5 rounded-full bg-[#0b231e]/80 border border-[#c5a059] text-[#dfc184] mb-2 shadow-md">
                    <Lock className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#fbf9f5] font-sans font-semibold drop-shadow">
                    Confidential Layout Preview
                  </span>
                  <span className="text-[10px] text-[#fbf9f5]/90 font-sans mt-0.5">
                    Submit enquiry to unlock uncompressed blueprint
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Enquiry Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-[#0b231e]/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fbf9f5] text-[#0b231e] p-6 sm:p-8 rounded-3xl shadow-2xl border border-[#c5a059]/50 w-full max-w-md relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0b231e]/5 text-[#0b231e] hover:bg-[#0b231e]/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#9a7b3c] block mb-1 font-sans font-semibold">
                  {plans[activeTab].title}
                </span>
                <h3 className="text-2xl font-serif text-[#0b231e]">Unlock Floor Plan</h3>
                <p className="text-xs text-[#0b231e]/70 mt-1 font-sans">Enter your details to receive full blueprints & pricing.</p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-[#c5a059]/10 border border-[#c5a059] rounded-full flex items-center justify-center mx-auto text-[#c5a059]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-serif text-[#0b231e]">Access Granted</h4>
                  <p className="text-xs text-[#0b231e]/80 max-w-xs mx-auto font-sans">
                    Thank you. Our sales advisor will share the high-res floor plan blueprints with you shortly.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-[#0b231e] text-[#dfc184] text-xs font-sans uppercase tracking-wider"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#0b231e]/80 mb-1 font-sans font-medium">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#c5a059]/30 rounded-xl px-4 py-2.5 text-sm text-[#0b231e] placeholder-[#0b231e]/30 focus:outline-none focus:border-[#c5a059] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#0b231e]/80 mb-1 font-sans font-medium">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-[#c5a059]/30 rounded-r-xl px-4 py-2.5 text-sm text-[#0b231e] placeholder-[#0b231e]/30 focus:outline-none focus:border-[#c5a059] transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans"
                  >
                    Submit & Unlock Floor Plan
                  </button>

                  <p className="text-[10px] text-center text-[#0b231e]/50 pt-1 font-sans">
                    *Your details are secure. We respect your privacy.
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}