"use client";

import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Overview", href: "#overview" },
    { name: "Highlights", href: "#highlights" },
    { name: "Price", href: "#price" },
    { name: "Amenities", href: "#amenities" },
    { name: "Floor Plans", href: "#floor-plans" },
    { name: "Location", href: "#location" },
  ];

  const legalLinks = [
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="relative w-full bg-[#0b231e] text-[#fbf9f5] pt-16 pb-8 border-t border-[#c5a059]/30">
      
      {/* Subtle Gold Glow Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#c5a059]/20">
          
          {/* Left Column: Logo with White Rounded BG & Authorised Channel Partner Badge (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-3 bg-white p-3 rounded-2xl shadow-md border border-[#c5a059]/30">
              <div className="relative w-24 h-8">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="border-l border-[#0b231e]/20 pl-3">
                <span className="block text-[10px] uppercase tracking-widest text-[#0b231e] font-sans font-bold leading-tight">
                  Authorised
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-[#9a7b3c] font-sans font-bold leading-tight">
                  Channel Partner
                </span>
              </div>
            </div>

            <p className="text-xs text-[#fbf9f5]/75 font-sans leading-relaxed font-light pr-4 pt-1">
              Gaur Alaris in Sector 22D, Yamuna Expressway represents the zenith of ultra-luxury living. Inspired by the peacock, offering 3 & 4 BHK elite residences crafted by world-class consultants.
            </p>
          </div>

          {/* Column 1: Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#dfc184] font-sans font-bold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#fbf9f5]/75 hover:text-[#dfc184] transition-colors font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Other Legal Links (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#dfc184] font-sans font-bold">
              Legal & Policy
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-[#fbf9f5]/75 hover:text-[#dfc184] transition-colors font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-[#fbf9f5]/50 pt-2 font-sans leading-tight">
              *Disclaimer: This is an authorized channel partner website for informational purposes only.
            </p>
          </div>

          {/* Column 3: Advisory Desk (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#dfc184] font-sans font-bold">
              Advisory Desk
            </h3>
            <div className="space-y-2.5 pt-1">
              <a
                href="tel:+919910374156"
                className="flex items-center gap-2.5 text-xs text-[#fbf9f5]/90 hover:text-[#dfc184] transition-colors font-sans"
              >
                <div className="p-2 rounded-lg bg-[#c5a059]/10 text-[#dfc184]">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>+91 9910374156</span>
              </a>

              <a
                href="mailto:realtyfmleads@gmail.com"
                className="flex items-center gap-2.5 text-xs text-[#fbf9f5]/90 hover:text-[#dfc184] transition-colors font-sans"
              >
                <div className="p-2 rounded-lg bg-[#c5a059]/10 text-[#dfc184]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>realtyfmleads@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright (Left) | RERA (Center) | Managed By (Right) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-[11px] text-[#fbf9f5]/60 font-sans">
          
          <div className="w-full md:w-1/3 text-center md:text-left">
            <p>© {new Date().getFullYear()} Gaur Alaris. All rights reserved.</p>
          </div>

          <div className="w-full md:w-1/3 text-center md:text-right flex items-center justify-center md:justify-end gap-1.5">
            <span>RERA No:</span>
            <span className="text-[#dfc184] font-semibold tracking-wider">UPRERAPRJ950965/07/2026</span>
          </div>

        </div>

      </div>

    </footer>
  );
}