import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingPixels } from "@/components/PixelBlock";
import { ChevronDown } from "lucide-react";

const RUSH_LETTERS = ["R", "U", "S", "H"];

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden vhs-lines">
      {/* Refined grid background */}
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Floating holographic elements */}
      <FloatingPixels />
      
      {/* Main content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Date badge */}
        <div 
          className={`inline-flex items-center gap-4 mb-12 px-6 py-3 border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-primary">FEB 2025</span>
          <span className="w-px h-4 bg-border" />
          <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">3 DAYS</span>
        </div>

        {/* RUSH title */}
        <div className="mb-8 flex justify-center items-center gap-3 md:gap-6">
          {RUSH_LETTERS.map((letter, index) => (
            <div
              key={letter}
              className={`
                font-display text-6xl md:text-8xl lg:text-[10rem] font-bold
                transition-all duration-700 cursor-pointer
                ${activeIndex === index ? "text-primary" : "text-foreground"}
                ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
                textShadow: activeIndex === index 
                  ? "0 0 60px hsl(var(--primary) / 0.5), 0 0 120px hsl(var(--primary) / 0.2)"
                  : "none"
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(-1)}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p 
          className={`font-display text-sm md:text-base tracking-[0.4em] text-primary/80 mb-3 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          THE SOUL EDITION
        </p>
        <p 
          className={`text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          IIM Ranchi's premier cultural extravaganza — where talent meets technology, 
          and memories transcend time.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-20 transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button variant="glow" size="lg">
            Register Now
          </Button>
          <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50 hover:bg-primary/5">
            Explore Events
          </Button>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { value: "10K+", label: "Footfall", color: "primary" },
            { value: "50+", label: "Events", color: "secondary" },
            { value: "₹15L+", label: "Prize Pool", color: "accent" },
            { value: "100+", label: "Colleges", color: "highlight" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group p-6 border border-border/30 bg-card/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:shadow-glow-primary"
            >
              <div 
                className="font-display text-2xl md:text-3xl mb-1 transition-all duration-500"
                style={{ color: `hsl(var(--${stat.color}))` }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 hover:text-primary transition-colors duration-500 animate-bounce-subtle"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} strokeWidth={1} />
      </button>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};
