import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { CheckCircle2, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#fbf9f5] text-[#0b231e] flex flex-col justify-between pt-24">
      {/* Taboola Pixel Code Script Integration */}
      <Script id="taboola-pixel" strategy="afterInteractive">
        {`
          window._tfa = window._tfa || [];
          window._tfa.push({notify: 'event', name: 'page_view', id: 1819153});
          !function (t, f, a, x) {
                 if (!document.getElementById(x)) {
                    t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
                 }
          }(document.createElement('script'),
          document.getElementsByTagName('script')[0],
          '//cdn.taboola.com/libtrc/unip/1819153/tfa.js',
          'tb_tfa_script');
        `}
      </Script>

      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 w-full text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#c5a059]/30 shadow-sm space-y-6">
          
          <div className="w-20 h-20 bg-[#c5a059]/10 border border-[#c5a059] rounded-full flex items-center justify-center mx-auto text-[#c5a059]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#9a7b3c] font-sans font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Successfully Submitted</span>
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-serif text-[#0b231e] tracking-tight">
              Thank You For Connecting With Us!
            </h1>

            <p className="text-xs sm:text-sm text-[#0b231e]/75 font-sans leading-relaxed max-w-lg mx-auto">
              Your inquiry for **Gaur Alaris** has been received. Our senior luxury property advisor will get in touch with you shortly.
            </p>
          </div>

          <div className="pt-6 border-t border-[#c5a059]/20 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#dfc184] via-[#c5a059] to-[#9a7b3c] text-[#0b231e] font-bold text-xs tracking-[0.2em] uppercase shadow-md hover:opacity-95 transition-all font-sans"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}