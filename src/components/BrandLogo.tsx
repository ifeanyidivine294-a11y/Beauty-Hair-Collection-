import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Refined Gold Hair Wave / Curl Luxury Icon */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          className={
            size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9'
          }
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer elegant hair wave */}
          <path
            d="M14 6C14 6 22 10 24 18C26 26 21 32 23 38C24.5 42.5 29 44 32 40C35 36 33 30 30 26C27 22 28 16 32 12C36 8 40 10 40 10"
            stroke="#C7A46A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Inner smooth glossy hair strand */}
          <path
            d="M18 10C18 10 24 14 25.5 20C27 26 24 30 25.5 35C26.5 38 29.5 39 31 37"
            stroke="#E3C58E"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Graceful accent curve */}
          <path
            d="M10 14C10 14 16 18 18 24C20 30 18 36 21 41"
            stroke="#C7A46A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <circle cx="24" cy="7" r="1.5" fill="#E3C58E" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif tracking-[0.16em] uppercase font-bold leading-tight ${
            isDark ? 'text-[#241923]' : 'text-[#F8F4F0]'
          } ${
            size === 'sm'
              ? 'text-sm'
              : size === 'lg'
              ? 'text-xl md:text-2xl'
              : 'text-base md:text-lg'
          }`}
        >
          BEAUTY HAIR
        </span>
        {showSubtitle && (
          <span
            className={`font-sans tracking-[0.28em] uppercase text-[10px] md:text-[11px] font-medium leading-none ${
              isDark ? 'text-[#C7A46A]' : 'text-[#E3C58E]'
            }`}
          >
            COLLECTION
          </span>
        )}
      </div>
    </div>
  );
};
