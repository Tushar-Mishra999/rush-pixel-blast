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
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-3xl text-foreground mb-4">
            <span className="text-primary">[</span> THE LEGACY <span className="text-primary">]</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Years of unforgettable moments, legendary performances, and memories that last a lifetime.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Year buttons */}
          <div className="flex justify-center gap-2 md:gap-4 mb-8 flex-wrap">
            {legacyItems.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={cn(
                  "font-pixel text-xs md:text-sm px-4 py-2 border-2 transition-all duration-200",
                  activeYear === item.year
                    ? `border-${item.color} text-${item.color} bg-${item.color}/10 shadow-pixel`
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                )}
                style={{
                  borderColor: activeYear === item.year ? `hsl(var(--${item.color}))` : undefined,
                  color: activeYear === item.year ? `hsl(var(--${item.color}))` : undefined,
                  backgroundColor: activeYear === item.year ? `hsl(var(--${item.color}) / 0.1)` : undefined,
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
                "border-2 p-6 md:p-8 transition-all duration-300",
                activeYear === item.year ? "opacity-100 translate-y-0" : "hidden"
              )}
              style={{
                borderColor: `hsl(var(--${item.color}))`,
                boxShadow: `4px 4px 0px hsl(var(--${item.color}))`,
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div 
                  className="font-pixel text-5xl md:text-7xl"
                  style={{ color: `hsl(var(--${item.color}))` }}
                >
                  {item.year}
                </div>
                <div className="flex-1">
                  <h3 className="font-pixel text-lg md:text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div 
                    className="inline-block px-3 py-1 text-xs uppercase tracking-wider"
                    style={{ 
                      backgroundColor: `hsl(var(--${item.color}) / 0.2)`,
                      color: `hsl(var(--${item.color}))`,
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
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square border-2 border-border bg-muted/50 flex items-center justify-center group hover:border-primary transition-colors cursor-pointer overflow-hidden"
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-primary via-secondary to-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="font-pixel text-[8px] text-muted-foreground group-hover:text-primary transition-colors">
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
