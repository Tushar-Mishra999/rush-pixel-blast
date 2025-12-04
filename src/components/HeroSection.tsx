import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingPixels } from "@/components/PixelBlock";
import { ChevronDown } from "lucide-react";

const RUSH_LETTERS = ["R", "U", "S", "H"];
const COLORS = ["text-primary", "text-secondary", "text-accent", "text-highlight"];

// Target date: February 14, 2026
const TARGET_DATE = new Date("2026-02-14T00:00:00").getTime();

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return timeLeft;
};

export const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const countdown = useCountdown();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setMousePosition({ x: x * 15, y: y * 15 }); // Max 15 degrees rotation
  };

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

  const countdownUnits = [
    { value: countdown.days, label: "DAYS", color: "primary" },
    { value: countdown.hours, label: "HRS", color: "secondary" },
    { value: countdown.minutes, label: "MIN", color: "accent" },
    { value: countdown.seconds, label: "SEC", color: "highlight" },
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cyberpunk radial gradient */}
      <div className="absolute inset-0 cyber-gradient-radial" />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      
      {/* Horizontal neon lines */}
      <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      {/* Vertical neon accents */}
      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      {/* VHS scanlines overlay */}
      <div className="absolute inset-0 vhs-lines pointer-events-none" />
      
      {/* Floating pixel blocks */}
      <FloatingPixels />
      
      {/* Main content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Date badge with cyber glow */}
        <div 
          className={`inline-flex items-center gap-2 mb-6 px-4 py-2 border-2 border-accent bg-accent/10 backdrop-blur-sm transition-all duration-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            boxShadow: "0 0 20px hsl(var(--accent) / 0.3), inset 0 0 20px hsl(var(--accent) / 0.1)"
          }}
        >
          <span className="font-pixel text-[10px] text-accent">FEB 2026</span>
          <span className="w-2 h-2 bg-accent animate-neon-pulse" />
          <span className="font-pixel text-[10px] text-accent">3 DAYS</span>
        </div>


        {/* Interactive RUSH title with enhanced neon */}
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
                  ? "0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor, 0 0 80px currentColor"
                  : "0 0 10px currentColor, 0 0 20px hsl(var(--background))",
                filter: activeIndex === index ? "brightness(1.2)" : "brightness(1)",
                transform: `rotateY(${mousePosition.x * (1 + index * 0.1)}deg) rotateX(${-mousePosition.y * (1 + index * 0.1)}deg) ${activeIndex === index ? 'scale(1.1)' : 'scale(1)'}`,
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Tagline with subtle glow */}
        <p 
          className={`text-xl md:text-2xl text-foreground mb-2 transition-all duration-700 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.3)" }}
        >
          The Soul Edition
        </p>
        <p 
          className={`text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          IIM Ranchi's premier cultural extravaganza bringing together the finest talent, 
          electrifying performances, and unforgettable experiences.
        </p>

        {/* Countdown Timer */}
        <div 
          className={`flex justify-center gap-2 md:gap-4 mb-10 transition-all duration-700 delay-600 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {countdownUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative group"
            >
              <div 
                className={`relative p-3 md:p-4 border-2 bg-card/40 backdrop-blur-sm transition-all duration-300`}
                style={{
                  borderColor: `hsl(var(--${unit.color}))`,
                  boxShadow: `0 0 20px hsl(var(--${unit.color}) / 0.3), inset 0 0 15px hsl(var(--${unit.color}) / 0.1)`
                }}
              >
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: `hsl(var(--${unit.color}))` }} />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2" style={{ borderColor: `hsl(var(--${unit.color}))` }} />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2" style={{ borderColor: `hsl(var(--${unit.color}))` }} />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: `hsl(var(--${unit.color}))` }} />
                
                <div 
                  className={`font-pixel text-2xl md:text-4xl text-${unit.color}`}
                  style={{ 
                    textShadow: `0 0 10px hsl(var(--${unit.color})), 0 0 20px hsl(var(--${unit.color}) / 0.5)`,
                    minWidth: "2ch",
                    display: "block"
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="font-pixel text-[8px] md:text-[10px] text-muted-foreground mt-1 tracking-wider">
                  {unit.label}
                </div>
              </div>
              
              {/* Separator colon */}
              {index < countdownUnits.length - 1 && (
                <span 
                  className="absolute -right-2 md:-right-3 top-1/2 -translate-y-1/2 font-pixel text-xl md:text-2xl text-muted-foreground animate-pulse"
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Button variant="pixel" size="lg" className="relative group">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-all" />
          </Button>
          <Button variant="pixel-outline" size="lg" className="relative group">
            <span className="relative z-10">Explore Events</span>
            <div className="absolute inset-0 bg-secondary/10 blur-xl opacity-0 group-hover:opacity-100 transition-all" />
          </Button>
        </div>

        {/* Stats with cyberpunk styling */}
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
              className="relative p-4 border-2 border-border bg-card/30 backdrop-blur-sm hover:border-primary transition-all duration-300 group overflow-hidden"
              style={{
                boxShadow: "inset 0 0 20px hsl(var(--background))"
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: `hsl(var(--${stat.color}))` }} />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" style={{ borderColor: `hsl(var(--${stat.color}))` }} />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" style={{ borderColor: `hsl(var(--${stat.color}))` }} />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: `hsl(var(--${stat.color}))` }} />
              
              <div 
                className={`font-pixel text-lg md:text-2xl text-${stat.color} group-hover:animate-neon-pulse`}
                style={{ textShadow: `0 0 20px hsl(var(--${stat.color}) / 0.5)` }}
              >
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

      {/* Bottom gradient with cyber edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>
  );
};
