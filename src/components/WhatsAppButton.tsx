import React from 'react';

export const WHATSAPP_URL =
  'https://wa.me/2349069710687?text=Hello%2C%20I%20want%20to%20order%20the%20Bone%20Straight%20Human%20Hair%20Wig';

export const WHATSAPP_PHONE = '+2349069710687';

interface WhatsAppButtonProps {
  label?: string;
  variant?: 'primary' | 'compact' | 'pulse';
  className?: string;
  onNavigateToThankYou?: () => void;
  isThankYouPage?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  label = 'ORDER ON WHATSAPP',
  variant = 'primary',
  className = '',
  onNavigateToThankYou,
  isThankYouPage = false,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we are on the sales page, we want to open WhatsApp in a new tab/app
    // and transition the current page to /thank-you as specified in prompt rules
    if (!isThankYouPage && onNavigateToThankYou) {
      // Let the default link behavior open WhatsApp in new tab (target="_blank"),
      // and navigate this tab to /thank-you shortly after so user sees the instructions.
      setTimeout(() => {
        onNavigateToThankYou();
      }, 150);
    }
  };

  const isCompact = variant === 'compact';

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={`${label} - opens WhatsApp with pre-filled order message`}
      className={`group relative inline-flex items-center justify-center font-sans font-semibold tracking-wide text-white transition-all duration-300 transform active:scale-[0.98] cursor-pointer shadow-lg hover:shadow-xl select-none ${
        isCompact
          ? 'px-4 py-2.5 text-xs md:text-sm rounded-full bg-[#1F6B4A] hover:bg-[#175339] border border-white/20'
          : 'w-full sm:w-auto px-7 py-4 text-sm md:text-base rounded-full bg-[#1F6B4A] hover:bg-[#175339] border border-[#2EE07B]/30 hover:border-[#2EE07B]/60 shadow-[0_4px_24px_rgba(31,107,74,0.35)] hover:shadow-[0_6px_28px_rgba(31,107,74,0.5)]'
      } ${className}`}
    >
      {/* Subtle button sheen highlight */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-t from-black/15 to-white/15 pointer-events-none" />

      {/* WhatsApp Official Style Icon */}
      <span className="relative flex items-center justify-center mr-2.5 shrink-0">
        <svg
          className={isCompact ? 'w-4 h-4' : 'w-5 h-5'}
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.301-.776.98-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.526-.075-.15-.677-1.63-927-2.231-.244-.585-.492-.505-.677-.514-.175-.009-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.14 4.544.718.31 1.278.496 1.716.635.721.229 1.378.197 1.897.12.578-.087 1.782-.727 2.033-1.43.25-.702.25-1.304.175-1.43-.075-.126-.276-.201-.577-.351zM12.05 21.785h-.002c-1.734 0-3.433-.46-4.922-1.334l-.353-.207-3.662.96.977-3.57-.228-.363a9.92 9.92 0 0 1-1.52-5.26c0-5.485 4.464-9.949 9.95-9.949 2.657 0 5.155 1.035 7.034 2.915 1.879 1.88 2.912 4.379 2.911 7.038-.002 5.487-4.467 9.952-9.951 9.952zM12.05 0C5.495 0 .159 5.336.156 11.894a11.83 11.83 0 0 0 1.815 6.31L0 24l5.966-1.956a11.82 11.82 0 0 0 5.922 1.572h.005c6.554 0 11.89-5.337 11.894-11.896A11.83 11.83 0 0 0 20.91 4.675 11.84 11.84 0 0 0 12.05 0z" />
        </svg>
      </span>

      {/* Button Text */}
      <span className="relative whitespace-nowrap">{label}</span>

      {/* Arrow Icon */}
      <svg
        className={`relative ml-2 transition-transform duration-300 group-hover:translate-x-1 ${
          isCompact ? 'w-3.5 h-3.5' : 'w-4 h-4'
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </a>
  );
};
