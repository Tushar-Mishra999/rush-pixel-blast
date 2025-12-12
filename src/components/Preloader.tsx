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
    }, 2000);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2500);

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
        <span className="text-green">o</span>
        <span className="text-magenta">a</span>
        <span className="text-olive">d</span>
        <span className="text-azure">i</span>
        <span className="text-green">n</span>
        <span className="text-magenta">g</span>
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
