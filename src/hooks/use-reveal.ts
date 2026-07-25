import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  /** How much of the element must be visible before it reveals (0–1). */
  threshold?: number;
  /** Extra margin around the root; negative bottom value triggers slightly early. */
  rootMargin?: string;
  /** Reveal only once (default) or re-hide when it leaves the viewport. */
  once?: boolean;
}

/**
 * Reveal-on-scroll primitive. Attach `ref` to any element and use `shown`
 * to drive an entrance animation once it scrolls into view.
 *
 * Falls back to "shown" immediately when IntersectionObserver is unavailable
 * (old browsers / SSR), so content is never left invisible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
    once = true,
  } = options;

  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, shown };
}

export default useReveal;
