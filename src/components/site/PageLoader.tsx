import { useEffect, useState } from "react";

type SpinnerProps = {
  size?: number;
  color?: string;
};

const bars = [
  {
    animationDelay: "-1.2s",
    transform: "rotate(.0001deg) translate(146%)",
  },
  {
    animationDelay: "-1.1s",
    transform: "rotate(30deg) translate(146%)",
  },
  {
    animationDelay: "-1.0s",
    transform: "rotate(60deg) translate(146%)",
  },
  {
    animationDelay: "-0.9s",
    transform: "rotate(90deg) translate(146%)",
  },
  {
    animationDelay: "-0.8s",
    transform: "rotate(120deg) translate(146%)",
  },
  {
    animationDelay: "-0.7s",
    transform: "rotate(150deg) translate(146%)",
  },
  {
    animationDelay: "-0.6s",
    transform: "rotate(180deg) translate(146%)",
  },
  {
    animationDelay: "-0.5s",
    transform: "rotate(210deg) translate(146%)",
  },
  {
    animationDelay: "-0.4s",
    transform: "rotate(240deg) translate(146%)",
  },
  {
    animationDelay: "-0.3s",
    transform: "rotate(270deg) translate(146%)",
  },
  {
    animationDelay: "-0.2s",
    transform: "rotate(300deg) translate(146%)",
  },
  {
    animationDelay: "-0.1s",
    transform: "rotate(330deg) translate(146%)",
  },
];

function Spinner({ size = 28, color = "var(--plum-deep)" }: SpinnerProps) {
  return (
    <div style={{ width: size, height: size }}>
      <div className="relative top-1/2 left-1/2" style={{ width: size, height: size }}>
        {bars.map((item) => (
          <div
            key={item.transform}
            className="absolute h-[8%] w-[24%] -left-[10%] -top-[3.9%] rounded-[5px] animate-fade-spin"
            style={{ backgroundColor: color, ...item }}
          />
        ))}
      </div>
    </div>
  );
}

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let loadingTimeout: NodeJS.Timeout;

    const handleLinkClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }

      const target = (e.target as HTMLElement).closest("a");
      if (!target || target.target || target.hasAttribute("download")) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const nextUrl = new URL(target.href, window.location.href);
      const currentUrl = new URL(window.location.href);
      if (nextUrl.origin !== currentUrl.origin || nextUrl.href === currentUrl.href) return;

      e.preventDefault();
      e.stopPropagation();
      setIsLoading(true);
      loadingTimeout = setTimeout(() => {
        window.location.assign(nextUrl.href);
      }, 620);
    };

    // Handle button form submissions
    const handleFormSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement;
      // Only show loader if form submits to internal page
      if (!form.action || form.action.includes(window.location.hostname)) {
        setIsLoading(true);
        loadingTimeout = setTimeout(() => setIsLoading(false), 800);
      }
    };

    document.addEventListener("click", handleLinkClick as EventListener, true);
    document.addEventListener("submit", handleFormSubmit as EventListener);

    return () => {
      document.removeEventListener("click", handleLinkClick as EventListener, true);
      document.removeEventListener("submit", handleFormSubmit as EventListener);
      clearTimeout(loadingTimeout);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-xs pointer-events-auto">
      <Spinner size={34} color="var(--plum-deep)" />
    </div>
  );
}
