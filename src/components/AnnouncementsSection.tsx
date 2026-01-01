import { useState } from "react";
import { cn } from "@/lib/utils";

const announcements = [
  {
    id: 1,
    title: "Early Bird Registrations Open!",
    date: "Jan 15, 2026",
    description: "Get exclusive discounts on event passes. Limited spots available!",
    type: "registration",
    color: "primary",
  },
  {
    id: 2,
    title: "Headliner Announcement Coming Soon",
    date: "Jan 20, 2026",
    description: "Stay tuned for the biggest reveal of the season.",
    type: "event",
    color: "accent",
  },
  {
    id: 3,
    title: "Campus Ambassador Program",
    date: "Jan 10, 2026",
    description: "Join as a campus ambassador and unlock exclusive perks.",
    type: "opportunity",
    color: "secondary",
  },
  {
    id: 4,
    title: "Sponsorship Deck Released",
    date: "Jan 5, 2026",
    description: "Partner with RUSH 2026 and reach 10,000+ attendees.",
    type: "sponsor",
    color: "highlight",
  },
];

export const AnnouncementsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Cyber gradient background */}
      <div className="absolute inset-0 cyber-gradient opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative neon lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      
      {/* Side accent lines */}
      <div className="absolute top-20 left-0 w-1/4 h-px bg-gradient-to-r from-highlight/50 to-transparent" />
      <div className="absolute top-20 right-0 w-1/4 h-px bg-gradient-to-l from-accent/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="font-heading text-2xl md:text-3xl text-foreground mb-4"
            style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.3)" }}
          >
            What's Happening at RUSH?
          </h2>
          <p className="font-subheading text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, events, and opportunities
          </p>
        </div>

        {/* Announcements Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={cn(
                "border-2 p-6 transition-all duration-300 relative overflow-hidden backdrop-blur-sm cursor-pointer group"
              )}
              style={{
                borderColor: `hsl(var(--${announcement.color}))`,
                boxShadow: hoveredId === announcement.id 
                  ? `0 0 30px hsl(var(--${announcement.color}) / 0.3), 4px 4px 0px hsl(var(--${announcement.color}))` 
                  : `0 0 10px hsl(var(--${announcement.color}) / 0.1)`,
                background: `linear-gradient(135deg, hsl(var(--${announcement.color}) / 0.05) 0%, transparent 50%)`
              }}
              onMouseEnter={() => setHoveredId(announcement.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Corner glow */}
              <div 
                className="absolute top-0 left-0 w-16 h-16 opacity-30 group-hover:opacity-50 transition-opacity"
                style={{ background: `radial-gradient(circle at top left, hsl(var(--${announcement.color}) / 0.5), transparent 70%)` }}
              />
              
              {/* Type badge */}
              <div 
                className="inline-block px-2 py-1 text-[10px] uppercase tracking-wider mb-3 border"
                style={{ 
                  backgroundColor: `hsl(var(--${announcement.color}) / 0.2)`,
                  color: `hsl(var(--${announcement.color}))`,
                  borderColor: `hsl(var(--${announcement.color}) / 0.5)`,
                }}
              >
                {announcement.type}
              </div>
              
              {/* Date */}
              <p 
                className="font-subheading text-xs mb-2"
                style={{ color: `hsl(var(--${announcement.color}))` }}
              >
                {announcement.date}
              </p>
              
              {/* Title */}
              <h3 className="font-heading text-sm md:text-base text-foreground mb-2 group-hover:text-foreground/90 transition-colors">
                {announcement.title}
              </h3>
              
              {/* Description */}
              <p className="text-xs text-muted-foreground">
                {announcement.description}
              </p>
              
              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 h-1 transition-all duration-300"
                style={{ 
                  width: hoveredId === announcement.id ? "100%" : "30%",
                  backgroundColor: `hsl(var(--${announcement.color}))`,
                  boxShadow: `0 0 10px hsl(var(--${announcement.color}))`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
