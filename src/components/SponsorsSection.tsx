import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import rupeeIcon from "@/assets/rupee-icon.png";

const sponsors = {
  title: [
    { name: "Title Sponsor 1", tier: "title" },
    { name: "Title Sponsor 2", tier: "title" },
  ],
  gold: [
    { name: "Gold Sponsor 1", tier: "gold" },
    { name: "Gold Sponsor 2", tier: "gold" },
    { name: "Gold Sponsor 3", tier: "gold" },
  ],
  silver: [
    { name: "Silver 1", tier: "silver" },
    { name: "Silver 2", tier: "silver" },
    { name: "Silver 3", tier: "silver" },
    { name: "Silver 4", tier: "silver" },
  ],
};

export const SponsorsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-card">
      {/* Cyber gradient background */}
      <div className="absolute inset-0 cyber-gradient opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Decorative cyber lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Left Rupee Icon */}
      <img 
        src={rupeeIcon} 
        alt="Rupee decoration" 
        className="absolute left-4 md:left-12 top-[30%] w-16 md:w-24 lg:w-32 opacity-60 pointer-events-none animate-float"
        style={{ transform: "rotate(-15deg)" }}
      />
      
      {/* Right Rupee Icon */}
      <img 
        src={rupeeIcon} 
        alt="Rupee decoration" 
        className="absolute right-4 md:right-12 top-[55%] w-16 md:w-24 lg:w-32 opacity-60 pointer-events-none animate-float-delayed"
        style={{ transform: "rotate(15deg)" }}
      />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
            <span className="text-accent" style={{ textShadow: "0 0 20px hsl(var(--accent))" }}>₹</span> 
            <span style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.3)" }}>SPONSORS</span> 
            <span className="text-accent" style={{ textShadow: "0 0 20px hsl(var(--accent))" }}>₹</span>
          </h2>
          <p className="font-subheading text-muted-foreground max-w-2xl mx-auto">
            Powered by industry leaders who believe in celebrating talent and creativity.
          </p>
        </div>

        {/* Title Sponsors with holographic effect */}
        <div className="mb-12">
          <h3 
            className="font-heading text-xs text-accent text-center mb-6"
            style={{ textShadow: "0 0 10px hsl(var(--accent))" }}
          >
            // TITLE SPONSORS
          </h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {sponsors.title.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-48 h-24 border-2 border-accent bg-accent/5 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group cursor-pointer relative overflow-hidden"
                style={{
                  boxShadow: "0 0 20px hsl(var(--accent) / 0.2), 4px 4px 0px hsl(var(--accent))"
                }}
              >
                {/* Holographic shine effect */}
                <div className="absolute inset-0 holographic opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Corner accents */}
                <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-accent/50" />
                <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-accent/50" />
                <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-accent/50" />
                <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-accent/50" />
                
                <span 
                  className="font-heading text-[10px] text-accent group-hover:animate-neon-pulse relative z-10"
                  style={{ textShadow: "0 0 10px hsl(var(--accent))" }}
                >
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors with cyber styling */}
        <div className="mb-12">
          <h3 
            className="font-heading text-xs text-primary text-center mb-6"
            style={{ textShadow: "0 0 10px hsl(var(--primary))" }}
          >
            // GOLD PARTNERS
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {sponsors.gold.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-36 h-20 border-2 border-primary/50 bg-primary/5 backdrop-blur-sm flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer relative overflow-hidden group"
                style={{
                  boxShadow: "inset 0 0 20px hsl(var(--primary) / 0.1)"
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: "radial-gradient(circle at center, hsl(var(--primary) / 0.2), transparent 70%)" }}
                />
                <span 
                  className="font-heading text-[8px] text-primary/70 group-hover:text-primary transition-colors relative z-10"
                  style={{ textShadow: "0 0 5px currentColor" }}
                >
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h3 className="font-heading text-xs text-muted-foreground text-center mb-6">// SILVER PARTNERS</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            {sponsors.silver.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-28 h-16 border border-border bg-muted/20 backdrop-blur-sm flex items-center justify-center hover:border-muted-foreground hover:bg-muted/30 transition-all duration-300 cursor-pointer"
              >
                <span className="text-[8px] text-muted-foreground">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
