import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import arrowLeft from "@/assets/arrow-left.png";
import arrowRight from "@/assets/arrow-right.png";

const legacyItems = [
  {
    year: "2024",
    title: "The Soul Edition",
    description: "10,000+ attendees witnessed spectacular performances",
    highlight: "Headliner: Major Artist",
    color: "primary",
  },
  {
    year: "2023",
    title: "Rise Again",
    description: "Post-pandemic comeback with record participation",
    highlight: "50+ events across 3 days",
    color: "secondary",
  },
  {
    year: "2022",
    title: "Virtual Vibes",
    description: "India's largest virtual B-school fest",
    highlight: "5000+ online participants",
    color: "accent",
  },
  {
    year: "2019",
    title: "The Genesis",
    description: "Where it all began - the first mega RUSH",
    highlight: "Celebrity performances",
    color: "highlight",
  },
];

const memoryItems = [
  { id: 1, color: "primary" },
  { id: 2, color: "secondary" },
  { id: 3, color: "accent" },
  { id: 4, color: "highlight" },
  { id: 5, color: "primary" },
  { id: 6, color: "secondary" },
  { id: 7, color: "accent" },
  { id: 8, color: "highlight" },
];

export const LegacySection = () => {
  const [activeYear, setActiveYear] = useState("2024");
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-card">
      {/* Cyber gradient overlay */}
      <div className="absolute inset-0 cyber-gradient opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Decorative neon lines */}
      <div className="absolute top-20 left-0 w-1/3 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      <div className="absolute top-20 right-0 w-1/3 h-px bg-gradient-to-l from-secondary/50 to-transparent" />
      <div className="absolute bottom-20 left-0 w-1/4 h-px bg-gradient-to-r from-accent/50 to-transparent" />
      <div className="absolute bottom-20 right-0 w-1/4 h-px bg-gradient-to-l from-highlight/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(var(--primary))" }}>[</span> 
            <span style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.3)" }}>THE LEGACY</span> 
            <span className="text-primary" style={{ textShadow: "0 0 20px hsl(var(--primary))" }}>]</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-2xl mx-auto">
            Years of unforgettable moments, legendary performances, and memories that last a lifetime.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Year buttons with cyber styling */}
          <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
            {legacyItems.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={cn(
                  "font-heading text-xs md:text-sm px-4 py-2 border-2 transition-all duration-300 relative overflow-hidden",
                  activeYear === item.year
                    ? "shadow-pixel"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
                style={{
                  borderColor: activeYear === item.year ? `hsl(var(--${item.color}))` : undefined,
                  color: activeYear === item.year ? `hsl(var(--${item.color}))` : undefined,
                  backgroundColor: activeYear === item.year ? `hsl(var(--${item.color}) / 0.1)` : undefined,
                  boxShadow: activeYear === item.year 
                    ? `0 0 20px hsl(var(--${item.color}) / 0.3), 4px 4px 0px hsl(var(--${item.color}))` 
                    : undefined,
                }}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Content with enhanced cyber styling */}
          {legacyItems.map((item) => (
            <div
              key={item.year}
              className={cn(
                "border-2 p-6 md:p-8 transition-all duration-300 relative overflow-hidden backdrop-blur-sm",
                activeYear === item.year ? "opacity-100 translate-y-0" : "hidden"
              )}
              style={{
                borderColor: `hsl(var(--${item.color}))`,
                boxShadow: `0 0 30px hsl(var(--${item.color}) / 0.2), 4px 4px 0px hsl(var(--${item.color}))`,
                background: `linear-gradient(135deg, hsl(var(--${item.color}) / 0.05) 0%, transparent 50%)`
              }}
            >
              {/* Corner glows */}
              <div 
                className="absolute top-0 left-0 w-20 h-20 opacity-30"
                style={{ background: `radial-gradient(circle at top left, hsl(var(--${item.color}) / 0.5), transparent 70%)` }}
              />
              <div 
                className="absolute bottom-0 right-0 w-20 h-20 opacity-30"
                style={{ background: `radial-gradient(circle at bottom right, hsl(var(--${item.color}) / 0.5), transparent 70%)` }}
              />
              
              <div className="flex flex-col md:flex-row md:items-center gap-6 relative z-10">
                <div 
                  className="font-heading text-5xl md:text-7xl"
                  style={{ 
                    color: `hsl(var(--${item.color}))`,
                    textShadow: `0 0 30px hsl(var(--${item.color}) / 0.5)`
                  }}
                >
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg md:text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div 
                    className="inline-block px-3 py-1 text-xs uppercase tracking-wider border"
                    style={{ 
                      backgroundColor: `hsl(var(--${item.color}) / 0.2)`,
                      color: `hsl(var(--${item.color}))`,
                      borderColor: `hsl(var(--${item.color}) / 0.5)`,
                      boxShadow: `0 0 10px hsl(var(--${item.color}) / 0.3)`
                    }}
                  >
                    {item.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery preview with navigation */}
        <div className="mt-16 relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 transition-transform hover:scale-110"
          >
            <img src={arrowLeft} alt="Previous" className="w-full h-full" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 transition-transform hover:scale-110"
          >
            <img src={arrowRight} alt="Next" className="w-full h-full" />
          </button>

          {/* Scrollable Gallery */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {memoryItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[calc(50%-8px)] md:w-[calc(25%-12px)] aspect-square border-2 border-border bg-muted/20 backdrop-blur-sm flex items-center justify-center group hover:border-primary transition-all duration-300 overflow-hidden relative snap-start"
                style={{
                  boxShadow: "inset 0 0 30px hsl(var(--background))"
                }}
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `radial-gradient(circle at center, hsl(var(--${item.color}) / 0.2), transparent 70%)`
                  }}
                />
                
                <div className="text-center relative z-10">
                  <div 
                    className="w-12 h-12 mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))`,
                      boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
                    }}
                  />
                  <span 
                    className="font-heading text-[8px] text-muted-foreground group-hover:text-primary transition-colors"
                    style={{ textShadow: "0 0 10px currentColor" }}
                  >
                    MEMORY #{item.id}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
