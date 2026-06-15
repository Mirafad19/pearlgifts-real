import { lazy, Suspense } from "react";

import whatsappAnimation from "@/assets/whatsapp-lottie.json";
import { WA_LINK } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const Lottie = lazy(() => import("lottie-react"));

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
};

export function WhatsAppButton({ label = "Open WhatsApp", className }: WhatsAppButtonProps) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-14 min-w-20 items-center justify-center rounded-xl border border-[var(--gold)]/35 bg-[var(--plum-deep)] px-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--plum)] hover:shadow-luxe",
        className,
      )}
    >
      <Suspense fallback={<span className="h-7 w-7 rounded-full bg-[var(--gold)]" />}>
        <Lottie animationData={whatsappAnimation} loop autoplay className="h-12 w-12" />
      </Suspense>
    </a>
  );
}
