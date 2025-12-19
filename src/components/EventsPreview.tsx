import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const eventCategories = [
  {
    code: "CAT_01",
    name: "CULTURAL",
    id: "cultural",
    events: ["Dance Battle", "Singing", "Fashion Show", "Drama"],
    gradient: "from-magenta/80 via-magenta/60 to-magenta/40",
    accentColor: "#DE0081",
  },
  {
    code: "CAT_02",
    name: "MANAGEMENT",
    id: "management",
    events: ["Case Study", "Best Manager", "B-Plan", "Marketing"],
    gradient: "from-olive/80 via-olive/60 to-olive/40",
    accentColor: "#ECDE01",
  },
  {
    code: "CAT_03",
    name: "SPORTS",
    id: "sports",
    events: ["Cricket", "Futsal", "Basketball", "Athletics"],
    gradient: "from-azure/80 via-azure/60 to-azure/40",
    accentColor: "#20ABE5",
  },
  {
    code: "CAT_04",
    name: "LITERARY",
    id: "literary",
    events: ["Debate", "Quiz", "Poetry Slam", "MUN"],
    gradient: "from-green/80 via-green/60 to-green/40",
    accentColor: "#35B847",
  },
  {
    code: "CAT_05",
    name: "ARTS",
    id: "arts",
    events: ["Photography", "Film Making", "Graffiti", "Sketching"],
    gradient: "from-magenta/70 via-azure/60 to-magenta/50",
    accentColor: "#DE0081",
  },
  {
    code: "CAT_06",
    name: "GAMING",
    id: "gaming",
    events: ["Valorant", "FIFA", "BGMI", "Chess"],
    gradient: "from-azure/70 via-green/60 to-azure/50",
    accentColor: "#20ABE5",
  },
];

export const EventsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-gradient-radial opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4 flex items-center justify-center gap-3">
            <span className="text-secondary animate-pulse">&gt;</span>
            <span style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.3)" }}>PRESS START</span>
            <span className="w-6 h-1 bg-secondary ml-2" />
          </h2>
          <p className="font-subheading text-muted-foreground">
            Choose your arena and dominate
          </p>
        </div>

        {/* Event Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {eventCategories.map((category) => (
            <div
              key={category.name}
              onClick={() => navigate(`/events?category=${category.id}`)}
              className="group transition-all duration-300 hover:-translate-y-3 border-2 border-border bg-background p-4"
              style={{
                boxShadow: "4px 4px 0px hsl(var(--border))",
                transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `8px 8px 0px ${category.accentColor}, 0 0 40px ${category.accentColor}80`;
                e.currentTarget.style.borderColor = category.accentColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "4px 4px 0px hsl(var(--border))";
                e.currentTarget.style.borderColor = "hsl(var(--border))";
              }}
            >
              {/* Image Card */}
              <div className="relative aspect-[4/3] overflow-hidden mb-4">
                {/* Gradient Background (placeholder for images) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-transform duration-500 group-hover:scale-110`} />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
                
                {/* Scanlines effect */}
                <div className="absolute inset-0 scanlines opacity-30" />
                
                {/* Category Code Label */}
                <div className="absolute bottom-3 left-3">
                  <span className="font-heading text-xs bg-background/90 text-foreground px-2 py-1 border border-border">
                    {category.code}
                  </span>
                </div>
              </div>
              
              {/* Category Info */}
              <div>
                <h3 
                  className="font-heading text-lg text-foreground mb-2 transition-colors"
                  style={{ 
                    textShadow: "0 0 10px hsl(var(--foreground) / 0.2)"
                  }}
                >
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.events.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/events">
            <Button 
              variant="outline" 
              size="lg" 
              className="font-heading text-xs border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all px-8"
            >
              VIEW ALL EVENTS
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
