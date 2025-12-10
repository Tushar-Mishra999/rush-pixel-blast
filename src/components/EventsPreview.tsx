import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const eventCategories = [
  {
    code: "CAT_01",
    name: "CULTURAL",
    events: ["Dance Battle", "Singing", "Fashion Show", "Drama"],
    gradient: "from-purple-900 via-pink-800 to-purple-600",
    accentColor: "#d946ef",
  },
  {
    code: "CAT_02",
    name: "MANAGEMENT",
    events: ["Case Study", "Best Manager", "B-Plan", "Marketing"],
    gradient: "from-amber-800 via-orange-700 to-yellow-600",
    accentColor: "#f59e0b",
  },
  {
    code: "CAT_03",
    name: "SPORTS",
    events: ["Cricket", "Futsal", "Basketball", "Athletics"],
    gradient: "from-slate-700 via-gray-600 to-slate-500",
    accentColor: "#94a3b8",
  },
  {
    code: "CAT_04",
    name: "LITERARY",
    events: ["Debate", "Quiz", "Poetry Slam", "MUN"],
    gradient: "from-teal-800 via-cyan-700 to-teal-500",
    accentColor: "#14b8a6",
  },
  {
    code: "CAT_05",
    name: "ARTS",
    events: ["Photography", "Film Making", "Graffiti", "Sketching"],
    gradient: "from-rose-800 via-red-700 to-orange-600",
    accentColor: "#f43f5e",
  },
  {
    code: "CAT_06",
    name: "GAMING",
    events: ["Valorant", "FIFA", "BGMI", "Chess"],
    gradient: "from-indigo-900 via-violet-800 to-purple-600",
    accentColor: "#8b5cf6",
  },
];

export const EventsPreview = () => {
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
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-3 border-2 border-border bg-background p-4"
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
