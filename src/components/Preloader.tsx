import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3000);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-500 ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <p className="font-heading text-2xl md:text-4xl tracking-wider animate-pulse">
        <span className="text-azure">L</span>
        <span className="text-green">O</span>
        <span className="text-magenta">A</span>
        <span className="text-olive">D</span>
        <span className="text-azure">I</span>
        <span className="text-green">N</span>
        <span className="text-magenta">G</span>
        <span className="text-foreground mx-2"> </span>
        <span className="text-azure">R</span>
        <span className="text-green">U</span>
        <span className="text-magenta">S</span>
        <span className="text-olive">H</span>
        <span className="text-foreground">…</span>
      </p>
    </div>
  );
};
