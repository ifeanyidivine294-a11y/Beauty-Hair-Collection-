import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { WhatsAppButton } from './WhatsAppButton.tsx';

interface ThankYouPageProps {
  onReturnToHome: () => void;
}

export const ThankYouPage: React.FC<ThankYouPageProps> = ({ onReturnToHome }) => {
  return (
    <div className="min-h-screen bg-[#1c121b] text-white flex flex-col font-sans selection:bg-[#C7A46A]/30 relative overflow-hidden">
      {/* Decorative luxury gold backdrop glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-b from-[#C7A46A]/15 via-[#241923]/40 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-[#C7A46A]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#E9DCD6]/10 blur-3xl pointer-events-none" />

      {/* Top minimal bar */}
      <header className="w-full border-b border-[#C7A46A]/20 py-4 px-4 sm:px-6 relative z-10 bg-[#241923]/60 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <BrandLogo variant="light" size="sm" />
          <button
            type="button"
            onClick={onReturnToHome}
            className="text-xs sm:text-sm text-[#E3C58E] hover:text-white transition-colors underline underline-offset-4 cursor-pointer"
          >
            ← View Wig Details
          </button>
        </div>
      </header>

      {/* Main Thank You Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-10 md:py-16 relative z-10 w-full">
        <div className="w-full max-w-xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Logo Mark in Center */}
          <div className="flex justify-center">
            <BrandLogo variant="light" size="md" />
          </div>

          {/* Primary Thank You Heading */}
          <div className="space-y-3">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F4F0] leading-tight text-balance">
              Thank You for Choosing{' '}
              <span className="italic text-[#E3C58E]">Beauty Hair Collection!</span>
            </h1>

            <p className="text-base sm:text-lg text-[#E9DCD6] leading-relaxed max-w-md mx-auto">
              Your WhatsApp ordering conversation has been opened.
            </p>
          </div>

          {/* Arched Product Showcase Image */}
          <div className="flex justify-center pt-2">
            <div className="relative p-1.5 rounded-t-[100px] rounded-b-3xl bg-gradient-to-b from-[#C7A46A] via-[#8C6B2E] to-[#241923] shadow-2xl">
              <div className="w-48 sm:w-56 h-56 sm:h-64 rounded-t-[96px] rounded-b-2xl overflow-hidden bg-[#FAF7F3] flex items-center justify-center p-2">
                <img
                  src="/wig-product.png"
                  alt="Bone Straight Human Hair Wig on styling mannequin head"
                  className="w-full h-full object-contain"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* What Happens Next Steps */}
          <div className="pt-2 text-left bg-[#241923]/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#C7A46A]/30 shadow-xl space-y-5">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-center text-[#E3C58E]">
              What happens next?
            </h2>

            <div className="space-y-4">
              {[
                {
                  step: 1,
                  text: 'Send the prepared WhatsApp message.',
                  sub: 'Tap send in WhatsApp so our team receives your wig order request.',
                },
                {
                  step: 2,
                  text: 'Our team will respond to discuss your order.',
                  sub: 'We will confirm availability, answer any styling questions and assist you.',
                },
                {
                  step: 3,
                  text: 'Confirm the product, delivery arrangements and payment details with the seller.',
                  sub: 'We will coordinate dispatch to your location and finalise everything.',
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#C7A46A] text-[#241923] font-serif font-bold text-sm flex items-center justify-center shrink-0 shadow-md">
                    {item.step}
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-sm sm:text-base text-[#F8F4F0] leading-snug">
                      {item.text}
                    </p>
                    <p className="text-xs text-[#E9DCD6]/70 leading-relaxed">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assistance & Primary Continue Button */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-[#C7A46A]/20 space-y-4">
            <div className="space-y-1">
              <p className="font-serif font-bold text-base text-[#E3C58E]">
                Need assistance?
              </p>
              <p className="text-xs sm:text-sm text-[#E9DCD6]/85">
                You can contact Beauty Hair Collection directly on WhatsApp.
              </p>
            </div>

            <div className="pt-1">
              <WhatsAppButton
                label="CONTINUE TO WHATSAPP"
                isThankYouPage={true}
                className="w-full text-base sm:text-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Refined Footer */}
      <footer className="border-t border-[#C7A46A]/20 py-6 px-4 text-center text-xs text-[#E9DCD6]/70 relative z-10 bg-[#160c15]">
        Beauty Hair Collection | Asaba, Delta State, Nigeria.
      </footer>
    </div>
  );
};
