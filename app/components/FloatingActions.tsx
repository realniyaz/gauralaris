"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ClipboardList, X } from "lucide-react";

export default function FloatingActions() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleOpenModal = () => {
    setFormData({ name: "", email: "", phone: "" });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          domain: typeof window !== "undefined" ? window.location.hostname : "",
        }),
      });
    } catch (error) {
      console.error("Submission trigger error:", error);
    } finally {
      setIsSubmitting(false);
      router.push("/thank-you");
    }
  };

  return (
    <>
      {/* 1. Desktop: Right-Side Vertical Floating Action Group */}
      <div className="hidden lg:flex fixed right-6 bottom-8 z-40 flex-col gap-3">
        
        {/* Call Button */}
        <a
          href="tel:+919910374156"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#0b231e] border border-[#c5a059] text-[#dfc184] shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6 animate-pulse" />
          <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#0b231e] text-[#fbf9f5] text-xs font-sans tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#c5a059]/40 shadow-lg pointer-events-none">
            Call Us
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917042080055"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <div className="relative w-7 h-7">
            <Image
              src="/wh.png"
              alt="WhatsApp"
              fill
              className="object-contain"
            />
          </div>
          <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#0b231e] text-[#fbf9f5] text-xs font-sans tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#c5a059]/40 shadow-lg pointer-events-none">
            WhatsApp
          </span>
        </a>

        {/* Enquire Form Button */}
        <button
          onClick={handleOpenModal}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
          aria-label="Enquire Now"
        >
          <ClipboardList className="w-6 h-6" />
          <span className="absolute right-16 px-3 py-1.5 rounded-xl bg-[#0b231e] text-[#fbf9f5] text-xs font-sans tracking-wider uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#c5a059]/40 shadow-lg pointer-events-none">
            Enquire Now
          </span>
        </button>

      </div>

      {/* 2. Mobile: Sticky Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-[#0b231e] border-t border-[#c5a059]/40 grid grid-cols-3 shadow-2xl py-2 px-3">
        <a
          href="tel:+919910374156"
          className="flex flex-col items-center justify-center py-1.5 text-[#dfc184] border-r border-[#c5a059]/20"
        >
          <Phone className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium">Call</span>
        </a>

        <button
          onClick={handleOpenModal}
          className="flex flex-col items-center justify-center py-1.5 text-[#dfc184] border-r border-[#c5a059]/20 cursor-pointer"
        >
          <MessageSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium">Enquire</span>
        </button>

        <a
          href="https://wa.me/917042080055"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 text-[#25D366]"
        >
          <div className="relative w-5 h-5 mb-0.5">
            <Image
              src="/wh.png"
              alt="WhatsApp"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest font-sans font-medium">WhatsApp</span>
        </a>
      </div>

      {/* 3. Enquiry Form Modal Popup */}
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
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0b231e]/5 text-[#0b231e] hover:bg-[#0b231e]/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#9a7b3c] block mb-1 font-sans font-semibold">
                  Gaur Alaris • Sector 22D
                </span>
                <h3 className="text-2xl font-serif text-[#0b231e]">Connect With Our Experts</h3>
                <p className="text-xs text-[#0b231e]/70 mt-1 font-sans">Get instant brochures, price breakups & exclusive site visit offers.</p>
              </div>

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
                  disabled={isSubmitting}
                  className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all cursor-pointer font-sans disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Submit Enquiry"}
                </button>

                <p className="text-[10px] text-center text-[#0b231e]/50 pt-1 font-sans">
                  *Your details are secure with us. By submitting, you authorize a call/WhatsApp.
                </p>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}