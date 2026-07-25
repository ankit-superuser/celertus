import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export type RevealVariant =
  | "up"
  | "down"
  | "left"
  | "right"
  | "fade"
  | "scale"
  | "blur";

interface RevealProps {
  children: ReactNode;
  /** Entrance direction / style. */
  variant?: RevealVariant;
  /** Delay in ms — use an incrementing value across siblings to stagger. */
  delay?: number;
  /** Transition duration in ms. */
  duration?: number;
  /** Extra classes. IMPORTANT: when wrapping a grid/flex child, pass its
   *  layout classes (e.g. `lg:col-span-2`) here so the wrapper takes the cell. */
  className?: string;
  /** Reveal once (default) or every time it enters the viewport. */
  once?: boolean;
  threshold?: number;
}

/**
 * Wraps children in a div that animates in when scrolled into view.
 * Renders a plain block-level wrapper, so it's safe inside grids/flex layouts
 * (the wrapper becomes the item — move any layout classes onto `className`).
 * Automatically disabled under `prefers-reduced-motion` (handled in index.css).
 */
const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
  threshold = 0.15,
}: RevealProps) => {
  const { ref, shown } = useReveal<HTMLDivElement>({ once, threshold });

  return (
    <div
      ref={ref}
      data-reveal={variant}
      data-shown={shown}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
