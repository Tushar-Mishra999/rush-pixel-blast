import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Music, Trophy, Mic, Palette, Users, Gamepad2 } from "lucide-react";

const eventCategories = [
  {
    icon: Music,
    name: "Cultural",
    events: ["Dance Battle", "Singing", "Fashion Show"],
    color: "primary",
  },
  {
    icon: Trophy,
    name: "Sports",
    events: ["Futsal", "Cricket", "Basketball"],
    color: "secondary",
  },
  {
    icon: Mic,
    name: "Literary",
    events: ["Debate", "Quiz", "Poetry Slam"],
    color: "accent",
  },
  {
    icon: Palette,
    name: "Arts",
    events: ["Photography", "Film Making", "Graffiti"],
    color: "highlight",
  },
  {
    icon: Users,
    name: "Management",
    events: ["Case Study", "Marketing", "B-Plan"],
    color: "primary",
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    events: ["Valorant", "FIFA", "BGMI"],
    color: "secondary",
  },
];

export const EventsPreview = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Cyber background effects */}
      <div className="absolute inset-0 cyber-gradient-radial opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Animated corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32">
        <div className="absolute top-4 left-4 w-full h-px bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute top-4 left-4 h-full w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32">
        <div className="absolute top-4 right-4 w-full h-px bg-gradient-to-l from-secondary to-transparent" />
        <div className="absolute top-4 right-4 h-full w-px bg-gradient-to-b from-secondary to-transparent" />
      </div>
      
      <div className="container relative z-10 px-4">
        {/* Section Header with neon styling */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-3xl text-foreground mb-4">
            <span className="text-secondary" style={{ textShadow: "0 0 20px hsl(var(--secondary))" }}>&gt;</span> 
            <span style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.3)" }}>EVENTS</span> 
            <span className="text-secondary" style={{ textShadow: "0 0 20px hsl(var(--secondary))" }}>&lt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            50+ events across multiple categories. Compete, perform, and create memories.
          </p>
        </div>

        {/* Event Categories Grid with cyber cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group border-2 border-border p-6 transition-all duration-300 cursor-pointer bg-card/30 backdrop-blur-sm relative overflow-hidden"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `hsl(var(--${category.color}))`;
                  e.currentTarget.style.boxShadow = `0 0 30px hsl(var(--${category.color}) / 0.3), 4px 4px 0px hsl(var(--${category.color}))`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                {/* Hover glow background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ 
                    background: `radial-gradient(circle at center, hsl(var(--${category.color}) / 0.1), transparent 70%)`
                  }}
                />
                
                {/* Corner brackets */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-current transition-colors" style={{ borderColor: `hsl(var(--${category.color}) / 0)` }} />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-transparent group-hover:border-current transition-colors" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-transparent group-hover:border-current transition-colors" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-current transition-colors" />
                
                <div className="flex items-start gap-4 relative z-10">
                  <div
                    className="w-12 h-12 border-2 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:shadow-lg"
                    style={{ 
                      borderColor: `hsl(var(--${category.color}))`,
                      boxShadow: `inset 0 0 10px hsl(var(--${category.color}) / 0.2)`
                    }}
                  >
                    <Icon 
                      size={24} 
                      style={{ 
                        color: `hsl(var(--${category.color}))`,
                        filter: "drop-shadow(0 0 5px currentColor)"
                      }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-pixel text-sm text-foreground mb-2 group-hover:animate-glitch"
                      style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.2)" }}
                    >
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {category.events.map((event) => (
                        <span
                          key={event}
                          className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 border border-border/50"
                        >
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA with glow */}
        <div className="text-center">
          <Link to="/events">
            <Button variant="pixel-secondary" size="lg" className="relative group">
              <span className="relative z-10">View All Events</span>
              <div className="absolute inset-0 bg-secondary/20 blur-xl group-hover:bg-secondary/40 transition-all" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
