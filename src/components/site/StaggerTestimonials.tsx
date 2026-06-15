"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

export const testimonials = [
  {
    tempId: 0,
    testimonial: "Pearlgifts delivered our entire year-end gifting seamlessly. The attention to detail is unmatched.",
    by: "Adekunle Okonkwo, CEO at FinTech Innovations"
  },
  {
    tempId: 1,
    testimonial: "The craftsmanship is genuinely world-class. Our clients rave about the quality and presentation.",
    by: "Chioma Adeyemi, Head of Marketing at GrowthCorp"
  },
  {
    tempId: 2,
    testimonial: "We switched our corporate gifting to Pearlgifts and haven't looked back. Exceptional service.",
    by: "Tunde Okafor, Operations Manager at TechServe"
  },
  {
    tempId: 3,
    testimonial: "The personalization options are incredible. Every gift feels truly special and bespoke.",
    by: "Ifeoma Nwankwo, Founder at BrandBuilders"
  },
  {
    tempId: 4,
    testimonial: "Pearlgifts transformed how we recognize our team. The impact was immediate and memorable.",
    by: "Seun Adebayo, HR Director at InnovateCo"
  },
  {
    tempId: 5,
    testimonial: "From concept to delivery, every interaction with Pearlgifts has been professional and delightful.",
    by: "Folake Ejiofor, Brand Director at LuxuryBrand"
  },
  {
    tempId: 6,
    testimonial: "The 72-hour turnaround on custom orders is a game-changer for our event planning.",
    by: "Chinedu Ukaegbu, Event Manager at Apex Events"
  },
  {
    tempId: 7,
    testimonial: "Quality, reliability, and true partnership. That's what Pearlgifts brings to every project.",
    by: "Zainab Mohammed, Managing Partner at Corporate Solutions"
  },
  {
    tempId: 8,
    testimonial: "The sustainable bamboo collection perfectly aligned with our CSR values. Perfect fit.",
    by: "Nonso Amako, CSR Lead at EnviroTech"
  },
  {
    tempId: 9,
    testimonial: "Best investment in corporate gifting we've made. The ROI in client relationships is evident.",
    by: "Grace Obi, Business Development at Strategic Ventures"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  position,
  testimonial,
  handleMove,
  cardSize,
  index
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-[var(--plum-deep)] text-white border-[var(--plum-deep)]"
          : "z-0 bg-white text-[var(--ink)] border-[var(--border)] hover:border-[var(--plum)]/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px var(--border)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-[var(--border)]"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <div
        className={cn(
          "mb-4 h-14 w-12 rounded flex items-center justify-center text-white font-bold text-sm",
          isCenter ? "bg-[var(--gold)]/80" : "bg-[var(--plum)]/20"
        )}
        style={{
          boxShadow: "3px 3px 0px var(--background)"
        }}
      >
        <User className={cn("w-6 h-6", isCenter ? "text-white" : "text-[var(--plum)]")} />
      </div>
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-white" : "text-[var(--ink)]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/80" : "text-[var(--ink)]/70"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-[var(--muted)]/30"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
            index={index}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[var(--border)] hover:bg-[var(--plum-deep)] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-[var(--border)] hover:bg-[var(--plum-deep)] hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
