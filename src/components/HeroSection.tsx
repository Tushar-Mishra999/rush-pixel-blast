import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingPixels } from "@/components/PixelBlock";
import { ChevronDown } from "lucide-react";

const RUSH_LETTERS = ["R", "U", "S", "H"];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const getLetterColor = (index: number) => {
    const colors = [
      "hsl(185 85% 55%)", // primary cyan
      "hsl(310 80% 65%)", // secondary pink
      "hsl(45 90% 60%)",  // accent gold
      "hsl(165 80% 55%)", // highlight teal
    ];
    return colors[index];
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      {/* Holographic shimmer */}
      <div className="absolute inset-0 holographic-shimmer" />
      
      {/* Floating pixel blocks */}
      <FloatingPixels />
      
      {/* Main content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Date badge with glass effect */}
        <div 
          className={`inline-flex items-center gap-3 mb-10 px-5 py-2.5 glass-panel border-primary/30 transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-pixel text-[10px] text-primary tracking-wider">FEB 2025</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-pixel text-[10px] text-primary/80 tracking-wider">3 DAYS</span>
        </div>

        {/* Interactive RUSH title */}
        <div className="mb-8 flex justify-center items-center gap-3 md:gap-5">
          {RUSH_LETTERS.map((letter, index) => (
            <div
              key={letter}
              className={`
                font-pixel text-5xl md:text-7xl lg:text-8xl
                transition-all duration-500 cursor-pointer
                ${isLoaded ? "opacity-100" : "opacity-0"}
              `}
              style={{
                transitionDelay: `${index * 120}ms`,
                color: getLetterColor(index),
                textShadow: activeIndex === index 
                  ? `0 0 20px ${getLetterColor(index)}, 0 0 40px ${getLetterColor(index)}, 0 0 60px ${getLetterColor(index)}40`
                  : `0 0 10px ${getLetterColor(index)}40`,
                transform: activeIndex === index ? "scale(1.08) translateY(-4px)" : "scale(1)",
                filter: activeIndex === index ? "brightness(1.2)" : "brightness(1)",
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Tagline with VHS effect */}
        <p 
          className={`text-xl md:text-2xl text-foreground mb-3 vhs-effect transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The Soul Edition
        </p>
        <p 
          className={`text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          IIM Ranchi's premier cultural extravaganza — where pixels meet passion 
          and legacy meets the future.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-20 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button variant="pixel" size="lg" className="group">
            <span className="group-hover:animate-pulse">Register Now</span>
          </Button>
          <Button variant="pixel-outline" size="lg">
            Explore Events
          </Button>
        </div>

        {/* Stats with glass panels */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "10K+", label: "Footfall", color: "primary" },
            { value: "50+", label: "Events", color: "secondary" },
            { value: "₹15L+", label: "Prize Pool", color: "accent" },
            { value: "100+", label: "Colleges", color: "highlight" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="group p-5 glass-panel hover:border-primary/50 transition-all duration-300 cursor-pointer"
              style={{
                borderColor: `hsl(var(--${stat.color}) / 0.2)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `hsl(var(--${stat.color}) / 0.5)`;
                e.currentTarget.style.boxShadow = `0 0 30px hsl(var(--${stat.color}) / 0.15)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `hsl(var(--${stat.color}) / 0.2)`;
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <div 
                className="font-pixel text-lg md:text-2xl mb-1 transition-all duration-300"
                style={{ color: `hsl(var(--${stat.color}))` }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce-slow"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </button>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};