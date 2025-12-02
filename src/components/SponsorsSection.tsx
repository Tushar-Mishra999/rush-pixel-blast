import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sponsorTiers = [
  {
    tier: "Title",
    sponsors: [{ name: "Sponsor 1", logo: null }],
  },
  {
    tier: "Gold",
    sponsors: [
      { name: "Sponsor 2", logo: null },
      { name: "Sponsor 3", logo: null },
    ],
  },
  {
    tier: "Silver",
    sponsors: [
      { name: "Sponsor 4", logo: null },
      { name: "Sponsor 5", logo: null },
      { name: "Sponsor 6", logo: null },
    ],
  },
];

export const SponsorsSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern" />
      
      <div className="container relative z-10 px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-display text-xs tracking-[0.4em] text-accent mb-4">PARTNERS</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 tracking-wide">
            OUR SPONSORS
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Partnering with industry leaders to create extraordinary experiences.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          {sponsorTiers.map((tierGroup) => (
            <div key={tierGroup.tier}>
              <p className="font-display text-xs tracking-[0.3em] text-muted-foreground text-center mb-6">
                {tierGroup.tier.toUpperCase()} SPONSORS
              </p>
              <div className={`grid gap-4 ${
                tierGroup.tier === "Title" 
                  ? "grid-cols-1 max-w-xs mx-auto" 
                  : tierGroup.tier === "Gold"
                    ? "grid-cols-2 max-w-md mx-auto"
                    : "grid-cols-3 max-w-lg mx-auto"
              }`}>
                {tierGroup.sponsors.map((sponsor, index) => (
                  <div
                    key={`${tierGroup.tier}-${index}`}
                    className="aspect-[3/2] border border-border/30 bg-card/20 backdrop-blur-sm flex items-center justify-center group hover:border-primary/30 transition-all duration-500 cursor-pointer hover:shadow-glow-primary"
                  >
                    <span className="font-display text-xs tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/sponsors">
            <Button variant="outline" size="lg" className="border-border/50 hover:border-accent/50 hover:bg-accent/5 font-display tracking-wider">
              Become a Sponsor
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};