import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingPixels } from "@/components/PixelBlock";
import { ChevronDown } from "lucide-react";

const RUSH_LETTERS = ["R", "U", "S", "H"];
const COLORS = ["text-primary", "text-secondary", "text-accent", "text-highlight"];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden scanlines">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Floating pixel blocks */}
      <FloatingPixels />
      
      {/* Main content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Date badge */}
        <div 
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 border-2 border-accent bg-accent/10 transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-pixel text-[10px] text-accent">FEB 2025</span>
          <span className="w-2 h-2 bg-accent animate-neon-pulse" />
          <span className="font-pixel text-[10px] text-accent">3 DAYS</span>
        </div>

        {/* Interactive RUSH title */}
        <div className="mb-6 flex justify-center items-center gap-2 md:gap-4">
          {RUSH_LETTERS.map((letter, index) => (
            <div
              key={letter}
              className={`
                font-pixel text-6xl md:text-8xl lg:text-9xl
                transition-all duration-300 cursor-pointer
                ${COLORS[index]}
                ${activeIndex === index ? "scale-110 animate-glitch" : "scale-100"}
                ${isLoaded ? "opacity-100" : "opacity-0"}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
                textShadow: activeIndex === index 
                  ? "0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor"
                  : "none"
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p 
          className={`text-xl md:text-2xl text-foreground mb-2 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The Soul Edition
        </p>
        <p 
          className={`text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          IIM Ranchi's premier cultural extravaganza bringing together the finest talent, 
          electrifying performances, and unforgettable experiences.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button variant="pixel" size="lg">
            Register Now
          </Button>
          <Button variant="pixel-outline" size="lg">
            Explore Events
          </Button>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "10K+", label: "Footfall" },
            { value: "50+", label: "Events" },
            { value: "₹15L+", label: "Prize Pool" },
            { value: "100+", label: "Colleges" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="p-4 border-2 border-border bg-card/50 hover:border-primary transition-colors group"
            >
              <div className={`font-pixel text-lg md:text-2xl ${COLORS[index]} group-hover:animate-neon-pulse`}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
