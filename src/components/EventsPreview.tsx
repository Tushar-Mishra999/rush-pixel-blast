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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />
      <div className="absolute inset-0 bg-radial-gradient" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4 tracking-wider">
            <span className="text-secondary/60">&gt;</span> EVENTS <span className="text-secondary/60">&lt;</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            50+ events across multiple categories. Compete, perform, and create memories.
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-14">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group glass-panel p-6 transition-all duration-300 cursor-pointer"
                style={{
                  transitionDelay: `${index * 30}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `hsl(var(--${category.color}) / 0.4)`;
                  e.currentTarget.style.boxShadow = `0 0 30px hsl(var(--${category.color}) / 0.1)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 border flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{ 
                      borderColor: `hsl(var(--${category.color}) / 0.4)`,
                      backgroundColor: `hsl(var(--${category.color}) / 0.05)`,
                    }}
                  >
                    <Icon 
                      size={20} 
                      strokeWidth={1.5}
                      style={{ color: `hsl(var(--${category.color}))` }}
                    />
                  </div>
                  <div>
                    <h3 className="font-pixel text-xs text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {category.events.map((event) => (
                        <span
                          key={event}
                          className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 border border-border/30"
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

        {/* CTA */}
        <div className="text-center">
          <Link to="/events">
            <Button variant="pixel-outline" size="lg">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};