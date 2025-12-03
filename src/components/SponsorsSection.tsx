import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-15" />
      <div className="absolute inset-0 holographic-shimmer opacity-20" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="font-pixel text-xl md:text-2xl text-foreground mb-4 tracking-wider">
            <span className="text-accent/60">$</span> SPONSORS <span className="text-accent/60">$</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Powered by industry leaders who believe in celebrating talent and creativity.
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="mb-14">
          <h3 className="font-pixel text-[10px] text-accent/80 text-center mb-6 tracking-widest">// TITLE SPONSORS</h3>
          <div className="flex justify-center gap-5 flex-wrap">
            {sponsors.title.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-48 h-24 glass-panel flex items-center justify-center transition-all duration-300 cursor-pointer group"
                style={{ borderColor: "hsl(var(--accent) / 0.3)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.5)";
                  e.currentTarget.style.boxShadow = "0 0 30px hsl(var(--accent) / 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.3)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <span className="font-pixel text-[9px] text-accent/80 group-hover:text-accent transition-colors tracking-wide">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-14">
          <h3 className="font-pixel text-[10px] text-primary/70 text-center mb-6 tracking-widest">// GOLD PARTNERS</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {sponsors.gold.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-36 h-20 glass-panel flex items-center justify-center transition-all duration-300 cursor-pointer group"
                style={{ borderColor: "hsl(var(--primary) / 0.2)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.4)";
                  e.currentTarget.style.boxShadow = "0 0 25px hsl(var(--primary) / 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--primary) / 0.2)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <span className="font-pixel text-[8px] text-primary/60 group-hover:text-primary/80 transition-colors">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-14">
          <h3 className="font-pixel text-[10px] text-muted-foreground/60 text-center mb-6 tracking-widest">// SILVER PARTNERS</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            {sponsors.silver.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-28 h-16 glass-panel flex items-center justify-center transition-all duration-300 cursor-pointer group"
                style={{ borderColor: "hsl(var(--border) / 0.3)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border) / 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "hsl(var(--border) / 0.3)";
                }}
              >
                <span className="text-[8px] text-muted-foreground/50 group-hover:text-muted-foreground/70 transition-colors">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground/70 mb-5 text-sm">Interested in sponsoring RUSH 2025?</p>
          <Link to="/sponsors">
            <Button variant="pixel-accent" size="lg">
              Become a Sponsor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};