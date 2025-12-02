import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const eventCategories = [
  {
    name: "Cultural",
    events: ["Dance Battle", "Singing", "Fashion Show"],
    color: "primary",
    symbol: "◈",
  },
  {
    name: "Sports",
    events: ["Futsal", "Cricket", "Basketball"],
    color: "secondary",
    symbol: "◇",
  },
  {
    name: "Literary",
    events: ["Debate", "Quiz", "Poetry Slam"],
    color: "accent",
    symbol: "△",
  },
  {
    name: "Arts",
    events: ["Photography", "Film Making", "Graffiti"],
    color: "highlight",
    symbol: "○",
  },
  {
    name: "Management",
    events: ["Case Study", "Marketing", "B-Plan"],
    color: "primary",
    symbol: "□",
  },
  {
    name: "Gaming",
    events: ["Valorant", "FIFA", "BGMI"],
    color: "secondary",
    symbol: "⬡",
  },
];

export const EventsPreview = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-primary mb-4">EXPLORE</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 tracking-wide">
            EVENTS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            50+ events across multiple categories. Compete, perform, and create memories.
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-16">
          {eventCategories.map((category, index) => (
            <div
              key={category.name}
              className="group border border-border/30 p-6 transition-all duration-500 cursor-pointer bg-card/20 backdrop-blur-sm hover:bg-card/40 hover:border-primary/30 hover:shadow-glow-primary"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 border border-current flex items-center justify-center shrink-0 transition-all duration-500 group-hover:shadow-glow-primary"
                  style={{ 
                    borderColor: `hsl(var(--${category.color}) / 0.5)`,
                    color: `hsl(var(--${category.color}))` 
                  }}
                >
                  <span className="text-lg">{category.symbol}</span>
                </div>
                <div>
                  <h3 
                    className="font-display text-sm tracking-wider text-foreground mb-3 transition-colors duration-500 group-hover:text-primary"
                  >
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.events.map((event) => (
                      <span
                        key={event}
                        className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 transition-colors duration-300 group-hover:bg-muted/50"
                      >
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/events">
            <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50 hover:bg-primary/5 font-display tracking-wider">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
