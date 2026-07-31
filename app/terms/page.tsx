import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Sparkles, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0b231e] flex flex-col justify-between pt-24">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>User Agreement</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Terms & Conditions
          </h1>
          
          <div className="w-24 h-[1px] bg-[#c5a059]/40 mx-auto mt-2" />
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#c5a059]/30 shadow-sm space-y-6 text-xs sm:text-sm text-[#0b231e]/80 font-sans leading-relaxed font-light">
          
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#c5a059]/5 border border-[#c5a059]/20 text-[#0b231e]">
            <FileText className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <p className="text-xs font-medium">
              By accessing and using this website, you agree to comply with and be bound by the following terms and conditions of use.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">1. Acceptance of Terms</h3>
            <p>
              This website is operated as an authorized channel partner platform for Gaur Alaris. By browsing, submitting inquiry forms, or downloading cost sheets and brochures, you accept these terms in full. If you disagree with any part of these terms, please refrain from using our website.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">2. Nature of Services</h3>
            <p>
              All materials, project details, pricing, floor plans, and amenities listed are for general information only. They do not form part of any legal binding contract or official developer offering. Final commitments are subject to formal builder-buyer agreements.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">3. User Obligations</h3>
            <p>
              You agree to provide accurate, current, and complete information when filling out inquiry forms or requesting call-backs. Providing false or fraudulent contact details may result in restricted access to our advisory services.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">4. Limitation of Liability</h3>
            <p>
              Neither our advisory desk nor Margaux Tech shall be liable for any direct, indirect, or consequential loss arising from the use of information provided on this platform or reliance on indicative pricing and floor plan availability.
            </p>
          </div>

          <div className="pt-4 border-t border-[#c5a059]/20">
            <p className="text-[11px] text-[#0b231e]/60 italic">
              These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of courts in Delhi/NCR.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}