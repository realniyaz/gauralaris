import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Sparkles, ShieldAlert } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0b231e] flex flex-col justify-between pt-24">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Legal Notice</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Disclaimer
          </h1>
          
          <div className="w-24 h-[1px] bg-[#c5a059]/40 mx-auto mt-2" />
        </div>

        {/* Disclaimer Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#c5a059]/30 shadow-sm space-y-6 text-xs sm:text-sm text-[#0b231e]/80 font-sans leading-relaxed font-light">
          
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#c5a059]/5 border border-[#c5a059]/20 text-[#0b231e]">
            <ShieldAlert className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <p className="text-xs font-medium">
              This website belongs to an authorized channel partner for informational and marketing purposes only and does not constitute an official offer document or legal contract.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">1. Accuracy of Information</h3>
            <p>
              The content, pricing, floor plans, specifications, images, brochures, and renderings displayed on this website are indicative and collected from standard promotional collateral provided by the developer (Gaurs Group). While reasonable care has been taken to ensure accuracy, the company does not guarantee complete correctness and reserves the right to alter or amend details without prior notice.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">2. Intellectual Property</h3>
            <p>
              All logos, brand names, trademarks, artistic renderings, and architectural designs related to <strong>Gaur Alaris</strong> are the exclusive property of their respective developers and owners. Unauthorized copying, distribution, or reproduction is strictly prohibited.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">3. Pricing & Availability</h3>
            <p>
              Prices mentioned (such as starting from ₹1.36 Cr*) are subject to change based on availability, floor rise, PLC, and government taxes/levies without prior intimation. Financial calculations or cost sheets should be verified directly with our official sales advisory desk.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">4. Regulatory Compliance (RERA)</h3>
            <p>
              Project RERA Registration Number: <strong className="text-[#0b231e] font-semibold">UPRERAPRJ950965/07/2026</strong>. Details regarding the project can be verified on the official UP RERA portal (www.up-rera.in) as mandated by the Real Estate (Regulation and Development) Act.
            </p>
          </div>

          <div className="pt-4 border-t border-[#c5a059]/20">
            <p className="text-[11px] text-[#0b231e]/60 italic">
              By accessing this website, you acknowledge and agree to the terms of this disclaimer. For official queries, get in touch with our team directly via phone or email.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}