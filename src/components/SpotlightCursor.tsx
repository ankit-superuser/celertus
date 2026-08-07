import { useEffect, useState } from "react";

const SpotlightCursor = () => {
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer and no reduced-motion preference
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500 hidden md:block"
      style={{
        background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, rgba(168, 85, 247, 0.08), rgba(99, 102, 241, 0.04) 40%, transparent 80%)`,
      }}
    />
  );
};

export default SpotlightCursor;
