import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingPixels } from "@/components/PixelBlock";
import { ChevronDown } from "lucide-react";
import pixelCharacter from "@/assets/pixel-character.png";
const RUSH_LETTERS = ["R", "U", "S", "H"];
const COLORS = ["text-azure", "text-green", "text-magenta", "text-olive"];
const COLOR_VARS = ["azure", "green", "magenta", "olive"];

// Target date: February 14, 2026
const TARGET_DATE = new Date("2026-02-14T00:00:00").getTime();
const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
          minutes: Math.floor(difference % (1000 * 60 * 60) / (1000 * 60)),
          seconds: Math.floor(difference % (1000 * 60) / 1000)
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
  const countdown = useCountdown();
  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 4);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };
  const countdownUnits = [{
    value: countdown.days,
    label: "DAYS",
    color: "azure"
  }, {
    value: countdown.hours,
    label: "HRS",
    color: "green"
  }, {
    value: countdown.minutes,
    label: "MIN",
    color: "magenta"
  }, {
    value: countdown.seconds,
    label: "SEC",
    color: "olive"
  }];
  return <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
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

      {/* Pixel character logo - top right, tilted left with floating animation */}
      <img 
        src={pixelCharacter} 
        alt="Pixel character" 
        className="absolute top-20 right-4 md:right-12 lg:right-20 w-24 md:w-32 lg:w-40 z-20 opacity-90 hover:opacity-100 transition-opacity animate-float"
      />

      {/* Main content */}
      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Date badge with cyber glow */}
        <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 border-2 border-accent bg-accent/10 backdrop-blur-sm transition-all duration-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
        boxShadow: "0 0 20px hsl(var(--accent) / 0.3), inset 0 0 20px hsl(var(--accent) / 0.1)"
      }}>
          <span className="font-heading text-[10px] text-accent">FEB 2026</span>
          <span className="w-2 h-2 bg-accent animate-neon-pulse" />
          <span className="font-heading text-[10px] text-accent">3 DAYS</span>
        </div>


        {/* Interactive RUSH title with enhanced neon - inspired by blocky logo */}
        <div className="mb-6 flex justify-center items-center gap-1 md:gap-2">
          {RUSH_LETTERS.map((letter, index) => <div key={letter} className={`
                relative font-heading text-6xl md:text-8xl lg:text-[10rem]
                transition-all duration-300
                ${COLORS[index]}
                ${activeIndex === index ? "scale-110 animate-glitch" : "scale-100"}
                ${isLoaded ? "opacity-100" : "opacity-0"}
              `} style={{
          transitionDelay: `${index * 100}ms`,
          fontWeight: 900,
          letterSpacing: "-0.05em",
          WebkitTextStroke: activeIndex === index ? "2px currentColor" : "1px currentColor",
          textShadow: activeIndex === index ? "0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor, 0 0 80px currentColor, 4px 4px 0 hsl(var(--background))" : "0 0 10px currentColor, 0 0 20px hsl(var(--background)), 3px 3px 0 hsl(var(--background))",
          filter: activeIndex === index ? "brightness(1.2)" : "brightness(1)"
        }} onMouseEnter={() => setActiveIndex(index)}>
              {letter}
              {/* Blocky accent line under each letter */}
              <div className={`absolute -bottom-1 left-0 right-0 h-1 md:h-2 transition-all duration-300 ${activeIndex === index ? "opacity-100 scale-x-100" : "opacity-50 scale-x-75"}`} style={{
            background: `linear-gradient(90deg, transparent, hsl(var(--${COLOR_VARS[index]})), transparent)`,
            boxShadow: activeIndex === index ? `0 0 10px hsl(var(--${COLOR_VARS[index]}))` : "none"
          }} />
            </div>)}
        </div>

        {/* Tagline with subtle glow */}
        <p className={`font-heading text-xl md:text-2xl text-foreground mb-2 transition-all duration-700 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{
        textShadow: "0 0 30px hsl(var(--primary) / 0.3)"
      }}>RENDERING THE FUTURE</p>
        <p className={`font-subheading text-muted-foreground max-w-2xl mx-auto mb-8 transition-all duration-700 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          IIM Ranchi's cultural fest sparks breakthroughs, revolutions, and stories.
          <br />
          Tomorrow is not coming-it is already in our hands!
        </p>

        {/* Countdown Timer */}
        <div className={`flex justify-center items-center gap-4 md:gap-6 mb-10 transition-all duration-700 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {countdownUnits.map((unit, index) => <div key={unit.label} className="relative group">
              <div className={`relative p-3 md:p-4 border-2 bg-card/40 backdrop-blur-sm transition-all duration-300`} style={{
            borderColor: `hsl(var(--${unit.color}))`,
            boxShadow: `0 0 20px hsl(var(--${unit.color}) / 0.3), inset 0 0 15px hsl(var(--${unit.color}) / 0.1)`
          }}>
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2" style={{
              borderColor: `hsl(var(--${unit.color}))`
            }} />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2" style={{
              borderColor: `hsl(var(--${unit.color}))`
            }} />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2" style={{
              borderColor: `hsl(var(--${unit.color}))`
            }} />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2" style={{
              borderColor: `hsl(var(--${unit.color}))`
            }} />

                <div className={`font-heading text-2xl md:text-4xl text-${unit.color}`} style={{
              textShadow: `0 0 10px hsl(var(--${unit.color})), 0 0 20px hsl(var(--${unit.color}) / 0.5)`,
              minWidth: "2ch",
              display: "block"
            }}>
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="font-heading text-[8px] md:text-[10px] text-muted-foreground mt-1 tracking-wider">
                  {unit.label}
                </div>
              </div>

            </div>)}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
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
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto transition-all duration-700 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {[{
          value: "10K+",
          label: "Footfall",
          color: "primary"
        }, {
          value: "50+",
          label: "Events",
          color: "secondary"
        }, {
          value: "₹15L+",
          label: "Prize Pool",
          color: "accent"
        }, {
          value: "100+",
          label: "Colleges",
          color: "highlight"
        }].map((stat, index) => <div key={stat.label} className="relative p-4 border-2 border-border bg-card/30 backdrop-blur-sm hover:border-primary transition-all duration-300 group overflow-hidden" style={{
          boxShadow: "inset 0 0 20px hsl(var(--background))"
        }}>
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2" style={{
            borderColor: `hsl(var(--${stat.color}))`
          }} />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2" style={{
            borderColor: `hsl(var(--${stat.color}))`
          }} />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2" style={{
            borderColor: `hsl(var(--${stat.color}))`
          }} />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2" style={{
            borderColor: `hsl(var(--${stat.color}))`
          }} />

              <div className={`font-heading text-lg md:text-2xl text-${stat.color} group-hover:animate-neon-pulse`} style={{
            textShadow: `0 0 20px hsl(var(--${stat.color}) / 0.5)`
          }}>
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>

      {/* Scroll indicator */}
      <button onClick={scrollToContent} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce-slow" aria-label="Scroll down">
        <ChevronDown size={32} />
      </button>

      {/* Bottom gradient with cyber edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </section>;
};