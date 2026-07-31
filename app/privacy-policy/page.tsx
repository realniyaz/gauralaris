import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Sparkles, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0b231e] flex flex-col justify-between pt-24">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>Data Security</span>
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0b231e] tracking-tight">
            Privacy Policy
          </h1>
          
          <div className="w-24 h-[1px] bg-[#c5a059]/40 mx-auto mt-2" />
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#c5a059]/30 shadow-sm space-y-6 text-xs sm:text-sm text-[#0b231e]/80 font-sans leading-relaxed font-light">
          
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#c5a059]/5 border border-[#c5a059]/20 text-[#0b231e]">
            <Lock className="w-5 h-5 text-[#c5a059] shrink-0 mt-0.5" />
            <p className="text-xs font-medium">
              We respect your privacy and are committed to protecting your personal information collected through our inquiry desks and interaction forms.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">1. Information We Collect</h3>
            <p>
              When you interact with our website (such as requesting a cost sheet, downloading brochures, or submitting your phone number and email), we collect personal identification details necessary to assist you with property information regarding Gaur Alaris.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">2. Use of Information</h3>
            <p>
              The information collected is used solely to provide you with project details, floor plans, pricing structures, and to coordinate property site visits or advisory calls via phone, SMS, or WhatsApp through our authorized sales desk.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">3. Data Protection & Security</h3>
            <p>
              We implement industry-standard security protocols to ensure your contact details remain secure. We do not sell, trade, or transfer your personally identifiable information to outside third parties without your explicit consent.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-[#0b231e]">4. Contact Us</h3>
            <p>
              If you have any questions or concerns regarding our privacy practices or wish to opt-out of communications, please reach out to our advisory desk at <strong className="text-[#0b231e] font-semibold">realtyfmleads@gmail.com</strong> or call <strong className="text-[#0b231e] font-semibold">+91 9910374156</strong>.
            </p>
          </div>

          <div className="pt-4 border-t border-[#c5a059]/20">
            <p className="text-[11px] text-[#0b231e]/60 italic">
              Last updated: July 2026. This policy is subject to change as per regulatory guidelines.
            </p>
          </div>

        </div>

      </div>

      <Footer />
    </main>
  );
}