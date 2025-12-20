import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import academicIcon from "@/assets/academic-icon.png";
import sportsIcon from "@/assets/sports-icon.png";
import culturalIcon from "@/assets/cultural-icon.png";

const eventCategories = [
  {
    code: "01",
    name: "ACADEMIC",
    id: "academic",
    eventCount: 3,
    events: ["Sansad Charcha", "Quintessence", "Enigma"],
    accentColor: "#ECDE01",
    icon: academicIcon,
  },
  {
    code: "02",
    name: "SPORTS",
    id: "sports",
    eventCount: 9,
    events: ["Cricket", "Futsal", "Basketball", "Volleyball", "Table Tennis", "Pool", "Throwball", "Powerlifting", "Chess"],
    accentColor: "#20ABE5",
    icon: sportsIcon,
  },
  {
    code: "03",
    name: "CULTURAL",
    id: "cultural",
    eventCount: 5,
    events: ["Group Dance", "Battle of Bands", "Fashion Show", "Solo Dance", "Solo Singing"],
    accentColor: "#DE0081",
    icon: culturalIcon,
  },
];

export const EventsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-heading text-xs text-muted-foreground tracking-[0.3em] mb-3">
            — SELECT YOUR ARENA —
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            EVENTS
          </h2>
        </div>

        {/* Event Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {eventCategories.map((category) => (
            <div
              key={category.name}
              onClick={() => navigate(`/events?category=${category.id}`)}
              className="group cursor-pointer"
            >
              {/* Card */}
              <div className="relative bg-card overflow-hidden transition-all duration-300 group-hover:-translate-y-2">
                {/* Top accent bar */}
                <div 
                  className="h-2 w-full"
                  style={{ backgroundColor: category.accentColor }}
                />
                
                {/* Main content area */}
                <div 
                  className="relative p-8 pb-6 border-x-2 border-b-2 border-border transition-colors duration-300 group-hover:border-opacity-50"
                  style={{ 
                    boxShadow: "6px 6px 0px hsl(var(--border))",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `6px 6px 0px ${category.accentColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "6px 6px 0px hsl(var(--border))";
                  }}
                >
                  {/* Background glow on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ 
                      background: `radial-gradient(circle at 50% 30%, ${category.accentColor}15 0%, transparent 70%)`
                    }}
                  />
                  
                  {/* Large number background */}
                  <div 
                    className="absolute -top-4 -right-2 font-heading text-[120px] leading-none font-bold opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none"
                    style={{ color: category.accentColor }}
                  >
                    {category.code}
                  </div>

                  {/* Icon */}
                  <div className="relative flex justify-center mb-6">
                    <div className="relative">
                      <img 
                        src={category.icon} 
                        alt={category.name} 
                        className="w-28 h-28 md:w-32 md:h-32 object-contain transition-all duration-500 group-hover:scale-110"
                        style={{ 
                          imageRendering: "pixelated",
                          filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.3))"
                        }}
                      />
                      {/* Glow effect under icon on hover */}
                      <div 
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                        style={{ backgroundColor: category.accentColor }}
                      />
                    </div>
                  </div>

                  {/* Category name */}
                  <h3 
                    className="font-heading text-2xl md:text-3xl text-center mb-3 transition-colors duration-300"
                    style={{ color: category.accentColor }}
                  >
                    {category.name}
                  </h3>

                  {/* Divider */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-8 bg-border" />
                    <span className="font-heading text-xs text-muted-foreground">
                      {category.eventCount} EVENTS
                    </span>
                    <div className="h-px w-8 bg-border" />
                  </div>

                  {/* Events list */}
                  <p className="text-xs text-muted-foreground text-center font-subheading leading-relaxed mb-6">
                    {category.events.slice(0, 3).join(" • ")}
                    {category.events.length > 3 && " ..."}
                  </p>

                  {/* CTA */}
                  <div className="flex justify-center">
                    <div 
                      className="inline-flex items-center gap-2 px-4 py-2 border-2 border-border text-xs font-heading text-muted-foreground group-hover:text-foreground group-hover:border-current transition-all duration-300"
                      style={{ boxShadow: "3px 3px 0px hsl(var(--border))" }}
                    >
                      EXPLORE
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/events">
            <Button 
              variant="outline" 
              size="lg" 
              className="font-heading text-xs border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all px-10 py-6 group"
              style={{ boxShadow: "4px 4px 0px hsl(var(--border))" }}
            >
              VIEW ALL 21 EVENTS
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
