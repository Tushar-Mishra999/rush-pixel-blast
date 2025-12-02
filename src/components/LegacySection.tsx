import { useState } from "react";
import { cn } from "@/lib/utils";

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

export const LegacySection = () => {
  const [activeYear, setActiveYear] = useState("2024");

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-secondary mb-4">CHRONICLES</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 tracking-wide">
            THE LEGACY
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Years of unforgettable moments, legendary performances, and memories that last a lifetime.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Year buttons */}
          <div className="flex justify-center gap-3 md:gap-6 mb-12 flex-wrap">
            {legacyItems.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={cn(
                  "font-display text-sm tracking-wider px-6 py-3 border transition-all duration-500",
                  activeYear === item.year
                    ? "border-primary/50 text-primary bg-primary/5 shadow-glow-primary"
                    : "border-border/30 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                )}
              >
                {item.year}
              </button>
            ))}
          </div>

          {/* Content */}
          {legacyItems.map((item) => (
            <div
              key={item.year}
              className={cn(
                "border border-border/30 p-8 md:p-12 transition-all duration-500 bg-background/50 backdrop-blur-sm",
                activeYear === item.year ? "opacity-100" : "hidden"
              )}
              style={{
                boxShadow: `0 0 60px hsl(var(--${item.color}) / 0.1)`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div 
                  className="font-display text-6xl md:text-8xl font-bold opacity-20"
                  style={{ color: `hsl(var(--${item.color}))` }}
                >
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <div 
                    className="inline-block px-4 py-2 text-xs uppercase tracking-[0.2em] border"
                    style={{ 
                      borderColor: `hsl(var(--${item.color}) / 0.3)`,
                      color: `hsl(var(--${item.color}))`,
                      background: `hsl(var(--${item.color}) / 0.05)`,
                    }}
                  >
                    {item.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery preview */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square border border-border/20 bg-muted/20 flex items-center justify-center group hover:border-primary/30 transition-all duration-500 cursor-pointer overflow-hidden hover:shadow-glow-primary"
            >
              <div className="text-center">
                <div 
                  className="w-16 h-16 mx-auto mb-3 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.3))`
                  }}
                />
                <span className="font-display text-[10px] tracking-[0.3em] text-muted-foreground group-hover:text-primary/80 transition-colors duration-500">
                  MEMORY {i}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
