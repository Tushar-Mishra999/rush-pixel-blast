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
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-3xl text-foreground mb-4">
            <span className="text-secondary">&gt;</span> EVENTS <span className="text-secondary">&lt;</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            50+ events across multiple categories. Compete, perform, and create memories.
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {eventCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.name}
                className="group border-2 border-border hover:border-current p-6 transition-all duration-300 cursor-pointer bg-card/50 hover:bg-card"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `hsl(var(--${category.color}))`;
                  e.currentTarget.style.boxShadow = `4px 4px 0px hsl(var(--${category.color}))`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 border-2 flex items-center justify-center shrink-0 transition-colors"
                    style={{ borderColor: `hsl(var(--${category.color}))` }}
                  >
                    <Icon 
                      size={24} 
                      style={{ color: `hsl(var(--${category.color}))` }}
                    />
                  </div>
                  <div>
                    <h3 className="font-pixel text-sm text-foreground mb-2 group-hover:animate-glitch">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {category.events.map((event) => (
                        <span
                          key={event}
                          className="text-xs text-muted-foreground bg-muted px-2 py-0.5"
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
            <Button variant="pixel-secondary" size="lg">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
