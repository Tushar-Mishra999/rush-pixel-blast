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
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute inset-0 holographic-shimmer opacity-30" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4 tracking-wider">
            <span className="text-primary/60">[</span> THE LEGACY <span className="text-primary/60">]</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Years of unforgettable moments, legendary performances, and memories that last a lifetime.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Year buttons */}
          <div className="flex justify-center gap-2 md:gap-3 mb-10 flex-wrap">
            {legacyItems.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={cn(
                  "font-pixel text-[10px] md:text-xs px-4 py-2.5 transition-all duration-300 border",
                  activeYear === item.year
                    ? "border-current"
                    : "border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
                )}
                style={{
                  borderColor: activeYear === item.year ? `hsl(var(--${item.color}))` : undefined,
                  color: activeYear === item.year ? `hsl(var(--${item.color}))` : undefined,
                  backgroundColor: activeYear === item.year ? `hsl(var(--${item.color}) / 0.08)` : "transparent",
                  boxShadow: activeYear === item.year ? `0 0 20px hsl(var(--${item.color}) / 0.15)` : undefined,
                }}
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
                "glass-panel p-8 md:p-10 transition-all duration-500",
                activeYear === item.year ? "opacity-100 translate-y-0" : "hidden"
              )}
              style={{
                borderColor: `hsl(var(--${item.color}) / 0.3)`,
                boxShadow: `0 0 40px hsl(var(--${item.color}) / 0.08)`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div 
                  className="font-pixel text-5xl md:text-7xl opacity-80"
                  style={{ 
                    color: `hsl(var(--${item.color}))`,
                    textShadow: `0 0 30px hsl(var(--${item.color}) / 0.3)`,
                  }}
                >
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-pixel text-sm md:text-base text-foreground mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{item.description}</p>
                  <div 
                    className="inline-block px-4 py-1.5 text-xs uppercase tracking-wider border"
                    style={{ 
                      backgroundColor: `hsl(var(--${item.color}) / 0.1)`,
                      color: `hsl(var(--${item.color}))`,
                      borderColor: `hsl(var(--${item.color}) / 0.3)`,
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
              className="group aspect-square glass-panel flex items-center justify-center cursor-pointer transition-all duration-300 hover:border-primary/30"
              style={{
                boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.03)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "inset 0 0 30px hsl(var(--primary) / 0.08), 0 0 20px hsl(var(--primary) / 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "inset 0 0 30px hsl(var(--primary) / 0.03)";
              }}
            >
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-3 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 opacity-40 group-hover:opacity-70 transition-opacity duration-300" />
                <span className="font-pixel text-[8px] text-muted-foreground/60 group-hover:text-muted-foreground transition-colors tracking-wider">
                  MEMORY #{i}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};