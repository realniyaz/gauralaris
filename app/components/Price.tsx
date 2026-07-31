"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, FileText, CheckCircle2, X } from "lucide-react";

export default function Price() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const priceTableData = [
    {
      type: "3 BHK Luxury Residence",
      size: "1,550 Sq. Ft.",
      bsp: "₹8,499 / sq. ft.",
      price: "₹1.36 Cr*",
    },
    {
      type: "4 BHK Ultra-Luxury Residence",
      size: "1,950 Sq. Ft.",
      bsp: "₹8,499 / sq. ft.",
      price: "₹1.71 Cr*",
    },
  ];

  const handleOpenModal = (planType: string) => {
    setSelectedPlan(planType);
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
    <section id="price" className="relative w-full py-20 sm:py-28 bg-[#fbf9f5] text-[#0b231e] overflow-hidden">
      
      {/* Subtle Gold Divider Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Investment & Pricing</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Exclusive Pricing Structure
          </h2>

          <p className="text-xs sm:text-base text-[#0b231e]/75 font-sans leading-relaxed font-light max-w-xl mx-auto">
            Transparent pricing for ultra-luxury residences in Sector 22D, Yamuna Expressway. Construction Linked Plan (CLP) available.
          </p>
        </div>

        {/* Pricing Table Wrapper */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-[#c5a059]/30 shadow-lg overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b231e] text-[#fbf9f5] text-xs uppercase tracking-[0.2em] font-sans">
                  <th className="py-5 px-6 font-semibold">Typology</th>
                  <th className="py-5 px-6 font-semibold">Super Area</th>
                  <th className="py-5 px-6 font-semibold">Base Price (BSP)</th>
                  <th className="py-5 px-6 font-semibold">Starting Price</th>
                  <th className="py-5 px-6 text-center font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5a059]/20 text-[#0b231e]">
                {priceTableData.map((row, idx) => (
                  <motion.tr 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="hover:bg-[#c5a059]/5 transition-colors"
                  >
                    <td className="py-6 px-6 font-serif font-bold text-base sm:text-lg">
                      {row.type}
                    </td>
                    <td className="py-6 px-6 font-sans text-sm text-[#0b231e]/80">
                      {row.size}
                    </td>
                    <td className="py-6 px-6 font-sans text-sm text-[#0b231e]/80">
                      {row.bsp}
                    </td>
                    <td className="py-6 px-6 font-serif font-bold text-lg text-gold-gradient">
                      {row.price}
                    </td>
                    <td className="py-6 px-6 text-center">
                      <button
                        onClick={() => handleOpenModal(row.type)}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-[11px] tracking-[0.15em] uppercase shadow-sm hover:opacity-95 transition-all font-sans inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Enquire Now</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
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
                  {selectedPlan || "Gaur Alaris"}
                </span>
                <h3 className="text-2xl font-serif text-[#0b231e]">Get Detailed Cost Sheet</h3>
                <p className="text-xs text-[#0b231e]/70 mt-1 font-sans">Enter your details to receive complete price breakup instantly.</p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-14 h-14 bg-[#c5a059]/10 border border-[#c5a059] rounded-full flex items-center justify-center mx-auto text-[#c5a059]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-serif text-[#0b231e]">Request Received</h4>
                  <p className="text-xs text-[#0b231e]/80 max-w-xs mx-auto font-sans">
                    Thank you. Our sales advisor will share the official cost sheet with you shortly.
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
                    Submit
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