import React from 'react';
import { BrandLogo } from './BrandLogo.tsx';
import { WhatsAppButton } from './WhatsAppButton.tsx';
import { FaqAccordion } from './FaqAccordion.tsx';

interface SalesPageProps {
  onNavigateToThankYou: () => void;
}

export const SalesPage: React.FC<SalesPageProps> = ({ onNavigateToThankYou }) => {
  return (
    <div className="min-h-screen bg-[#F8F4F0] text-[#30252B] flex flex-col font-sans selection:bg-[#C7A46A]/25">
      {/* =========================================================================
          TOP BAR (Single-row, clean luxury layout)
          No extra menus, no hamburger, no shop catalogue - strictly pure focus.
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#F8F4F0]/90 backdrop-blur-md border-b border-[#C7A46A]/20 transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
          <BrandLogo variant="dark" size="sm" />
          <WhatsAppButton
            label="ORDER ON WHATSAPP"
            variant="compact"
            onNavigateToThankYou={onNavigateToThankYou}
          />
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* =========================================================================
            SECTION 1 — HERO
            Deep luxury espresso-plum hero card with warm champagne accents
           ========================================================================= */}
        <section className="px-3 sm:px-6 pt-4 pb-10 md:py-12">
          <div className="max-w-5xl mx-auto rounded-3xl md:rounded-[36px] bg-[#241923] text-white p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl border border-[#C7A46A]/30">
            {/* Subtle luxury ambient glows */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#C7A46A]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#E9DCD6]/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              {/* Left Column: Headlines & CTA */}
              <div className="lg:col-span-7 flex flex-col text-left space-y-5 md:space-y-6">
                {/* Brand Header Kicker */}
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#C7A46A]" />
                  <span className="text-[#C7A46A] tracking-[0.24em] uppercase text-xs font-semibold">
                    BEAUTY HAIR COLLECTION
                  </span>
                </div>

                {/* Primary Headline */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#F8F4F0] leading-[1.18] tracking-tight text-balance">
                  A Polished Look.{' '}
                  <span className="italic font-normal text-[#E3C58E]">
                    Without the Extra Effort.
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-base md:text-lg text-[#E9DCD6]/90 leading-relaxed max-w-xl font-normal">
                  Meet the Bone Straight Human Hair Wig — your effortless finishing
                  touch for workdays, Sundays, special occasions and everyday
                  confidence.
                </p>

                {/* Price Display & Free Wig Cap Tag */}
                <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="font-sans font-bold text-3xl sm:text-4xl text-[#E3C58E] tracking-tight">
                    ₦45,000
                  </span>

                  <span className="inline-flex items-center self-start sm:self-auto px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider text-[#241923] bg-[#E3C58E] border border-[#C7A46A]/40 uppercase shadow-sm">
                    — Free Wig Cap Included —
                  </span>
                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2 sm:pt-4">
                  <WhatsAppButton
                    label="ORDER ON WHATSAPP"
                    className="w-full sm:w-auto text-base"
                    onNavigateToThankYou={onNavigateToThankYou}
                  />
                  <p className="text-[11px] text-[#E9DCD6]/65 mt-2.5 pl-1">
                    Direct conversation with Beauty Hair Collection in Asaba, Delta State
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Photograph */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle golden frame backdrop */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-tr from-[#C7A46A]/30 to-transparent transform -rotate-1 scale-[1.02] -z-0" />

                  <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#C7A46A]/40 shadow-2xl bg-[#1a1119]">
                    <img
                      src="/wig-hero.png"
                      alt="Nigerian woman with elegant bone straight human hair wig"
                      className="w-full h-auto object-contain max-h-[460px] md:max-h-[500px] mx-auto transition-transform duration-700 hover:scale-[1.02]"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2 — THE BUYER'S PROBLEM
            Warm rose-beige background with empathetic copy and 4 gold checkmarks
           ========================================================================= */}
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-left">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#241923] leading-snug text-balance">
              Your hair should complement your beauty, not complicate your day.
            </h2>

            <p className="mt-4 text-base md:text-lg text-[#564850] leading-relaxed">
              You want a neat, polished appearance, but finding a wig that gives you
              the look you want can be frustrating.
            </p>

            {/* 4 Pain Points with Gold Checkmarks */}
            <div className="mt-8 space-y-3.5">
              {[
                'Hair that tangles and becomes difficult to manage.',
                'Excessive shedding that makes you uncomfortable.',
                'Wigs that look unnatural or poorly styled.',
                'Hair that loses its beautiful appearance too quickly.',
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-[#FAF7F3] border border-[#C7A46A]/20 shadow-xs"
                >
                  <div className="w-5 h-5 rounded-full bg-[#C7A46A]/20 border border-[#C7A46A]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-3 h-3 text-[#8C6B2E]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-sm md:text-base font-medium text-[#30252B] leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Closing empathetic line */}
            <p className="mt-8 font-serif text-lg md:text-xl italic text-[#241923] border-l-2 border-[#C7A46A] pl-4 py-1 leading-relaxed">
              "You deserve to make your hair part of your confidence, not another
              daily worry."
            </p>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3 — THE PRODUCT SOLUTION
            Product photograph on mannequin + 6 glass benefit cards
           ========================================================================= */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#FAF7F3] border-y border-[#C7A46A]/15">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Product Photo on Mannequin */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-[#C7A46A]/30 bg-white shadow-xl p-2">
                  <div className="rounded-2xl overflow-hidden bg-[#FAF7F3]">
                    <img
                      src="/wig-product.png"
                      alt="Bone Straight Human Hair Wig displayed on styling mannequin head"
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-serif font-bold text-sm text-[#241923]">
                      Bone Straight Human Hair Wig
                    </p>
                    <p className="text-xs text-[#8C6B2E] mt-0.5 font-medium">
                      ₦45,000 · Free Wig Cap Included
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Title & 6 Glass Benefit Cards */}
              <div className="lg:col-span-7 text-left">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#241923] leading-snug text-balance">
                  Meet Your New Everyday Favourite.
                </h2>
                <p className="mt-3 text-sm md:text-base text-[#564850] leading-relaxed max-w-xl">
                  The Bone Straight Human Hair Wig brings a sleek, straight-haired
                  aesthetic to your personal style.
                </p>

                {/* 6 Benefit Cards Grid */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'SLEEK BONE-STRAIGHT APPEARANCE',
                      desc: 'A clean, polished look that complements different outfits.',
                    },
                    {
                      title: 'VERSATILE STYLING',
                      desc: 'Suitable for work, church, outings and special occasions.',
                    },
                    {
                      title: 'BEAUTIFUL FINISH',
                      desc: 'An elegant straight-hair aesthetic for a put-together appearance.',
                    },
                    {
                      title: 'EASY-TO-COORDINATE LOOK',
                      desc: 'Pairs beautifully with casual and formal fashion.',
                    },
                    {
                      title: 'A TIMELESS STYLE',
                      desc: 'Straight hair remains a classic choice for different occasions.',
                    },
                    {
                      title: 'A THOUGHTFUL EXTRA',
                      desc: 'Your purchase comes with a free wig cap.',
                    },
                  ].map((benefit, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#C7A46A]/25 shadow-xs hover:border-[#C7A46A]/50 transition-all hover:bg-white/90"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#C7A46A]" />
                        <h3 className="font-sans font-bold text-xs tracking-wider uppercase text-[#241923]">
                          {benefit.title}
                        </h3>
                      </div>
                      <p className="text-xs md:text-sm text-[#564850] leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4 — HAIR TEXTURE
            Close-up photograph of sleek straight strands
           ========================================================================= */}
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
              <div className="md:col-span-5 space-y-3">
                <span className="text-[#C7A46A] tracking-[0.2em] uppercase text-xs font-semibold">
                  TEXTURE SHOWCASE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#241923] leading-snug">
                  See the Beauty in Every Strand.
                </h2>
                <p className="text-sm md:text-base text-[#564850] leading-relaxed">
                  Take a closer look at the sleek, straight appearance of this
                  beautiful hair.
                </p>
              </div>

              <div className="md:col-span-7">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-[#C7A46A]/30 shadow-lg bg-black/5">
                  <img
                    src="/wig-texture.png"
                    alt="Close up photograph of sleek bone straight black hair strands"
                    className="w-full h-auto object-cover max-h-[220px] transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5 — STYLING EXPERIENCE
            Editorial layout of woman styling her hair in front of vanity mirror
           ========================================================================= */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#FAF7F3] border-t border-[#C7A46A]/15">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Photo on left for desktop */}
              <div className="md:col-span-6 order-2 md:order-1">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-[#C7A46A]/30 shadow-lg bg-white p-2">
                  <img
                    src="/wig-styling.png"
                    alt="Woman styling her straight hair in vanity mirror with soft floral aesthetic"
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Text on right */}
              <div className="md:col-span-6 text-left order-1 md:order-2 space-y-3">
                <span className="text-[#C7A46A] tracking-[0.2em] uppercase text-xs font-semibold">
                  DAILY ELEVATION
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#241923] leading-snug text-balance">
                  Beautiful Style for Your Everyday Moments.
                </h2>
                <p className="text-sm md:text-base text-[#564850] leading-relaxed">
                  From getting ready for work to preparing for church or a special
                  occasion, enjoy a hairstyle that brings a polished finish to your
                  look.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6 — WHAT IS INCLUDED
            Packaging photo, product list & clear ₦45,000 price
           ========================================================================= */}
        <section className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Content on left */}
              <div className="md:col-span-6 text-left space-y-4">
                <span className="text-[#C7A46A] tracking-[0.2em] uppercase text-xs font-semibold">
                  COMPLETE PACKAGE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#241923] leading-snug">
                  Everything Included in Your Purchase.
                </h2>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#C7A46A]/25 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-[#C7A46A]/20 flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-[#8C6B2E]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="font-semibold text-sm md:text-base text-[#241923]">
                      1 Bone Straight Human Hair Wig.
                    </span>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F3] border border-[#C7A46A]/40 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-[#E3C58E] flex items-center justify-center shrink-0">
                      <svg
                        className="w-3 h-3 text-[#241923]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm md:text-base text-[#241923]">
                        1 Free Wig Cap.
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#C7A46A]/20 text-[#8C6B2E]">
                        BONUS
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs uppercase tracking-wider text-[#8C6B2E] font-semibold">
                    TOTAL PRICE
                  </div>
                  <div className="font-serif font-bold text-3xl sm:text-4xl text-[#241923] tracking-tight mt-1">
                    ₦45,000
                  </div>
                </div>
              </div>

              {/* Photo on right */}
              <div className="md:col-span-6">
                <div className="rounded-2xl md:rounded-3xl overflow-hidden border border-[#C7A46A]/30 shadow-lg bg-white p-2">
                  <img
                    src="/wig-package.png"
                    alt="Bone straight wig package box and nude stocking wig cap"
                    className="w-full h-auto object-cover rounded-xl"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7 — WHO IT IS FOR
            Lifestyle image of confident woman outdoors in purple dress
           ========================================================================= */}
        <section className="py-12 md:py-16 px-4 sm:px-6 bg-[#FAF7F3] border-t border-[#C7A46A]/15">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Content on left */}
              <div className="md:col-span-7 text-left space-y-4">
                <span className="text-[#C7A46A] tracking-[0.2em] uppercase text-xs font-semibold">
                  DESIGNED FOR YOU
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#241923] leading-snug text-balance">
                  Made for Women Who Love a Polished Appearance.
                </h2>

                <div className="space-y-3 pt-2">
                  {[
                    'For workdays and professional settings.',
                    'For church and Sunday outings.',
                    'For parties and special events.',
                    'For everyday style and confidence.',
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/80 border border-[#C7A46A]/20"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#C7A46A]/20 flex items-center justify-center shrink-0">
                        <svg
                          className="w-3 h-3 text-[#8C6B2E]"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base font-medium text-[#30252B]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lifestyle Photo on right */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-xs rounded-2xl md:rounded-3xl overflow-hidden border border-[#C7A46A]/35 shadow-xl bg-white p-2">
                  <img
                    src="/wig-lifestyle.png"
                    alt="Nigerian woman in fitted purple dress with bone straight hair walking outdoors"
                    className="w-full h-auto object-cover rounded-xl"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8 — PRICE AND OFFER
            Deep espresso plum banner with large ₦45,000 price and direct WhatsApp CTA
           ========================================================================= */}
        <section className="py-14 md:py-20 px-4 sm:px-6 bg-[#241923] text-white border-y border-[#C7A46A]/30 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#C7A46A]/10 blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F4F0] leading-tight text-balance">
              Your New Look Starts at{' '}
              <span className="text-[#E3C58E]">₦45,000.</span>
            </h2>

            <div className="inline-block px-4 py-1.5 rounded-full bg-[#C7A46A]/20 border border-[#C7A46A]/40 text-[#E3C58E] text-xs sm:text-sm font-semibold tracking-wider uppercase">
              And your wig cap comes free with your purchase.
            </div>

            <p className="text-sm sm:text-base md:text-lg text-[#E9DCD6]/85 leading-relaxed max-w-lg mx-auto">
              No complicated checkout. No lengthy ordering process.
              <br className="hidden sm:inline" /> Simply tap the WhatsApp button and
              tell us you want to order.
            </p>

            <div className="pt-2">
              <WhatsAppButton
                label="ORDER MY WIG ON WHATSAPP"
                className="w-full sm:w-auto text-base sm:text-lg px-8 py-4.5"
                onNavigateToThankYou={onNavigateToThankYou}
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 9 — FREQUENTLY ASKED QUESTIONS
            Accordion interface with 3 exact questions and owner delivery tag
           ========================================================================= */}
        <section className="py-14 md:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-left">
            <div className="text-center mb-10">
              <span className="text-[#C7A46A] tracking-[0.24em] uppercase text-xs font-semibold">
                CLEAR ANSWERS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241923] mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <FaqAccordion />
          </div>
        </section>

        {/* =========================================================================
            SECTION 10 — FINAL CALL TO ACTION
            High-converting luxury closing banner with portrait and WhatsApp button
           ========================================================================= */}
        <section className="px-3 sm:px-6 pb-12 md:pb-16">
          <div className="max-w-5xl mx-auto rounded-3xl md:rounded-[36px] bg-gradient-to-br from-[#241923] via-[#2d1e2c] to-[#1e131d] text-white p-6 sm:p-10 md:p-14 relative overflow-hidden shadow-2xl border border-[#C7A46A]/35">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Heading, Price & Action */}
              <div className="lg:col-span-7 text-left space-y-5">
                <span className="text-[#C7A46A] tracking-[0.24em] uppercase text-xs font-semibold">
                  BEAUTY HAIR COLLECTION
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8F4F0] leading-tight text-balance">
                  Beautiful Hair.{' '}
                  <span className="italic text-[#E3C58E]">Beautiful Presence.</span>{' '}
                  Your Choice.
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-[#E9DCD6]/90 leading-relaxed max-w-xl">
                  Give your style a sleek, polished finish with the Bone Straight
                  Human Hair Wig.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="font-serif font-bold text-3xl sm:text-4xl text-[#E3C58E]">
                    ₦45,000
                  </span>
                  <span className="text-xs sm:text-sm text-[#E9DCD6]/80 font-medium">
                    — Free Wig Cap Included —
                  </span>
                </div>

                <div className="pt-2">
                  <WhatsAppButton
                    label="GET YOUR WIG ON WHATSAPP"
                    className="w-full sm:w-auto text-base sm:text-lg"
                    onNavigateToThankYou={onNavigateToThankYou}
                  />
                </div>
              </div>

              {/* Right Column: Serene Portrait */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-xs rounded-2xl md:rounded-3xl overflow-hidden border border-[#C7A46A]/30 shadow-xl bg-black/20 p-1.5">
                  <img
                    src="/wig-cta.png"
                    alt="Nigerian woman touching long sleek straight hair with a serene smile"
                    className="w-full h-auto object-contain rounded-xl"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================================================
          FOOTER (Simple, luxury, authentic business information)
         ========================================================================= */}
      <footer className="bg-[#FAF7F3] border-t border-[#C7A46A]/20 py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex justify-center">
            <BrandLogo variant="dark" size="sm" />
          </div>
          <p className="text-xs md:text-sm text-[#564850]">
            Beauty Hair Collection | Asaba, Delta State, Nigeria.
          </p>
          <p className="text-[11px] text-[#8C6B2E]/75">
            Orders processed securely directly via official WhatsApp.
          </p>
        </div>
      </footer>
    </div>
  );
};
