import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  badge?: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Do you deliver?',
    badge: 'OWNER MUST CONFIRM',
    answer:
      'We can assist you with your order through WhatsApp. Please contact us to confirm delivery availability, charges and estimated delivery time.',
  },
  {
    id: 'faq-2',
    question: 'How do I care for my wig?',
    answer:
      'Handle your wig gently, detangle carefully, avoid unnecessary heat and store it properly when not in use. Follow the care instructions supplied by the seller for the specific hair.',
  },
  {
    id: 'faq-3',
    question: 'How do I order?',
    answer:
      'Simply tap the ORDER ON WHATSAPP button. A message will already be prepared for you. Send it to us, and we will assist you with the next steps.',
  },
];

export const FaqAccordion: React.FC = () => {
  // First item open by default for immediate context
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full space-y-3.5">
      {FAQ_DATA.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div
            key={item.id}
            className="rounded-2xl border border-[#C7A46A]/25 bg-[#FAF7F3] shadow-sm transition-all duration-200 hover:border-[#C7A46A]/45 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full px-5 py-4.5 md:px-6 md:py-5 flex items-center justify-between text-left gap-4 transition-colors hover:bg-[#F3ECE6]/40 cursor-pointer"
            >
              <div className="flex items-center flex-wrap gap-2.5">
                <span className="font-serif font-semibold text-base md:text-lg text-[#241923]">
                  {item.question}
                </span>

                {item.badge && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-[#E8C488]/30 text-[#8C6B2E] border border-[#C7A46A]/40">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Accordion Chevron Icon */}
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-[#C7A46A]/30 bg-white/70 transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-[#C7A46A]/15 text-[#241923]' : 'text-[#8C6B2E]'
                }`}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>

            {/* Answer Content */}
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-1 md:px-6 md:pb-6 text-sm md:text-[15px] leading-relaxed text-[#564850] border-t border-[#C7A46A]/15 bg-white/40">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
