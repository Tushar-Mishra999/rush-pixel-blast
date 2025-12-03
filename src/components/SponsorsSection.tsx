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
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl md:text-3xl text-foreground mb-4">
            <span className="text-accent">$</span> SPONSORS <span className="text-accent">$</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by industry leaders who believe in celebrating talent and creativity.
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="mb-12">
          <h3 className="font-pixel text-xs text-accent text-center mb-6">// TITLE SPONSORS</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {sponsors.title.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-48 h-24 border-2 border-accent bg-accent/5 flex items-center justify-center hover:bg-accent/10 transition-colors group shadow-pixel-accent"
              >
                <span className="font-pixel text-[10px] text-accent group-hover:animate-neon-pulse">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="font-pixel text-xs text-primary text-center mb-6">// GOLD PARTNERS</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {sponsors.gold.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-36 h-20 border-2 border-primary/50 bg-primary/5 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <span className="font-pixel text-[8px] text-primary/70 hover:text-primary">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-12">
          <h3 className="font-pixel text-xs text-muted-foreground text-center mb-6">// SILVER PARTNERS</h3>
          <div className="flex justify-center gap-3 flex-wrap">
            {sponsors.silver.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-28 h-16 border border-border bg-muted/30 flex items-center justify-center hover:border-muted-foreground transition-colors"
              >
                <span className="text-[8px] text-muted-foreground">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Interested in sponsoring RUSH 2025?</p>
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
