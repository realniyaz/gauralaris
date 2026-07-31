"use client";

import { useState } from "react";
import Image from "next/image";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Overview", href: "#overview" },
    { name: "Highlights", href: "#highlights" },
    { name: "Price", href: "#price" },
    { name: "Amenities", href: "#amenities" },
    { name: "Floor Plans", href: "#floor-plans" },
    { name: "Location", href: "#location" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#fbf9f5] border-b border-[#c5a059]/30 shadow-md py-3 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="relative w-28 sm:w-32 h-10">
            <Image
              src="/logo.png"
              alt="Gaurs Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-[0.15em] text-[#0b231e]/80 hover:text-[#c5a059] transition-colors font-sans font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action / Phone Call Button */}
        <div className="hidden sm:flex items-center">
          <a
            href="tel:+919910374156"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b231e] hover:bg-[#113f36] text-[#dfc184] transition-all text-xs tracking-wider font-sans shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#dfc184]" />
            <span>+91 99103 74156</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#0b231e] hover:text-[#c5a059] p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#fbf9f5] border-b border-[#c5a059]/30 px-6 py-6 shadow-2xl transition-all">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] text-[#0b231e] hover:text-[#c5a059] transition-colors font-sans py-1 border-b border-[#c5a059]/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="tel:+919910374156"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-xs tracking-[0.2em] uppercase shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+91 99103 74156</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}