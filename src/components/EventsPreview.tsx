import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
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
    bgColor: "from-[#ECDE01]/20 to-[#ECDE01]/5",
    icon: academicIcon,
  },
  {
    code: "02",
    name: "SPORTS",
    id: "sports",
    eventCount: 9,
    events: ["Cricket", "Futsal", "Basketball", "Volleyball", "Table Tennis", "Pool", "Throwball", "Powerlifting", "Chess"],
    accentColor: "#20ABE5",
    bgColor: "from-[#20ABE5]/20 to-[#20ABE5]/5",
    icon: sportsIcon,
  },
  {
    code: "03",
    name: "CULTURAL",
    id: "cultural",
    eventCount: 5,
    events: ["Group Dance", "Battle of Bands", "Fashion Show", "Solo Dance", "Solo Singing"],
    accentColor: "#DE0081",
    bgColor: "from-[#DE0081]/20 to-[#DE0081]/5",
    icon: culturalIcon,
  },
];

export const EventsPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cyber-gradient-radial opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 border border-border bg-muted/30">
            <span className="w-2 h-2 bg-secondary animate-pulse" />
            <span className="font-heading text-xs text-muted-foreground tracking-widest">SELECT CATEGORY</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            <span className="text-secondary">&gt;</span> CHOOSE YOUR ARENA
          </h2>
          <p className="font-subheading text-muted-foreground text-lg max-w-md mx-auto">
            21 events across 3 epic categories
          </p>
        </div>

        {/* Event Categories - Horizontal Cards */}
        <div className="flex flex-col gap-4 max-w-5xl mx-auto mb-16">
          {eventCategories.map((category, index) => (
            <div
              key={category.name}
              onClick={() => navigate(`/events?category=${category.id}`)}
              className="group cursor-pointer relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Main Card */}
              <div 
                className="relative flex items-center gap-6 p-6 md:p-8 border-2 border-border bg-card transition-all duration-300 overflow-hidden"
                style={{
                  boxShadow: "6px 6px 0px hsl(var(--border))",
                }}
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  card.style.boxShadow = `8px 8px 0px ${category.accentColor}, 0 0 60px ${category.accentColor}40`;
                  card.style.borderColor = category.accentColor;
                  card.style.transform = "translate(-4px, -4px)";
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  card.style.boxShadow = "6px 6px 0px hsl(var(--border))";
                  card.style.borderColor = "hsl(var(--border))";
                  card.style.transform = "translate(0, 0)";
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Scanlines */}
                <div className="absolute inset-0 scanlines opacity-20" />
                
                {/* Category Number */}
                <div 
                  className="absolute top-0 right-0 px-4 py-2 font-heading text-6xl md:text-8xl font-bold opacity-5 group-hover:opacity-10 transition-opacity select-none"
                  style={{ color: category.accentColor }}
                >
                  {category.code}
                </div>

                {/* Icon Container */}
                <div 
                  className="relative flex-shrink-0 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center border-2 border-border group-hover:border-current transition-colors duration-300"
                  style={{ 
                    boxShadow: "4px 4px 0px hsl(var(--border))",
                    backgroundColor: "hsl(var(--muted) / 0.5)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `4px 4px 0px ${category.accentColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "4px 4px 0px hsl(var(--border))";
                  }}
                >
                  <img 
                    src={category.icon} 
                    alt={category.name} 
                    className="w-14 h-14 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>

                {/* Content */}
                <div className="relative flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 
                      className="font-heading text-xl md:text-2xl lg:text-3xl transition-colors duration-300"
                      style={{ color: category.accentColor }}
                    >
                      {category.name}
                    </h3>
                    <span className="px-2 py-1 text-xs font-heading bg-muted border border-border text-muted-foreground">
                      {category.eventCount} EVENTS
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground line-clamp-2 font-subheading">
                    {category.events.slice(0, 4).join(" • ")}{category.events.length > 4 && " • ..."}
                  </p>
                </div>

                {/* Arrow */}
                <div className="relative flex-shrink-0">
                  <div 
                    className="w-12 h-12 flex items-center justify-center border-2 border-border group-hover:border-current group-hover:bg-current transition-all duration-300"
                    style={{ boxShadow: "3px 3px 0px hsl(var(--border))" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = category.accentColor;
                      e.currentTarget.style.backgroundColor = category.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "hsl(var(--border))";
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-background group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </div>
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
              className="font-heading text-xs border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all px-10 py-6"
              style={{ boxShadow: "4px 4px 0px hsl(var(--border))" }}
            >
              EXPLORE ALL EVENTS
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
