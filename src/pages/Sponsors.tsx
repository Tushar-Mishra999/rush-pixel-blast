import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    color: "accent",
    benefits: ["Prime logo placement", "Exclusive branding rights", "VIP access", "Stage presence"],
    sponsors: [
      { name: "Your Brand Here", logo: null },
      { name: "Your Brand Here", logo: null },
    ],
  },
  {
    tier: "Gold Partners",
    color: "primary",
    benefits: ["Featured logo placement", "Event branding", "Social media promotion"],
    sponsors: [
      { name: "Gold Partner 1", logo: null },
      { name: "Gold Partner 2", logo: null },
      { name: "Gold Partner 3", logo: null },
    ],
  },
  {
    tier: "Silver Partners",
    color: "secondary",
    benefits: ["Logo on materials", "Website feature", "Social shoutouts"],
    sponsors: [
      { name: "Silver 1", logo: null },
      { name: "Silver 2", logo: null },
      { name: "Silver 3", logo: null },
      { name: "Silver 4", logo: null },
    ],
  },
  {
    tier: "Event Partners",
    color: "highlight",
    benefits: ["Event-specific branding", "Category sponsorship"],
    sponsors: [
      { name: "Event Partner 1", logo: null },
      { name: "Event Partner 2", logo: null },
      { name: "Event Partner 3", logo: null },
      { name: "Event Partner 4", logo: null },
      { name: "Event Partner 5", logo: null },
    ],
  },
];

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 bg-card border-b-2 border-border">
          <div className="container px-4 text-center">
            <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              <span className="text-accent">$</span> SPONSORS <span className="text-accent">$</span>
            </h1>
            <p className="font-subheading text-muted-foreground max-w-2xl mx-auto">
              Our partners make RUSH possible. Join the league of brands that power Eastern India's biggest B-school fest.
            </p>
          </div>
        </section>

        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier) => (
          <section key={tier.tier} className="py-16 border-b border-border">
            <div className="container px-4">
              <div className="text-center mb-8">
                <h2 
                  className="font-pixel text-lg md:text-xl mb-2"
                  style={{ color: `hsl(var(--${tier.color}))` }}
                >
                  {tier.tier}
                </h2>
                <div className="flex justify-center gap-2 flex-wrap">
                  {tier.benefits.map((benefit) => (
                    <span 
                      key={benefit}
                      className="text-xs px-2 py-1 border"
                      style={{ 
                        borderColor: `hsl(var(--${tier.color}) / 0.3)`,
                        color: `hsl(var(--${tier.color}) / 0.8)`,
                      }}
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                {tier.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className="border-2 p-6 flex items-center justify-center transition-all hover:scale-105"
                    style={{ 
                      borderColor: `hsl(var(--${tier.color}) / 0.5)`,
                      width: tier.tier === "Title Sponsor" ? "200px" : tier.tier === "Gold Partners" ? "160px" : "120px",
                      height: tier.tier === "Title Sponsor" ? "100px" : tier.tier === "Gold Partners" ? "80px" : "60px",
                    }}
                  >
                    <span 
                      className="font-pixel text-center"
                      style={{ 
                        fontSize: tier.tier === "Title Sponsor" ? "10px" : "8px",
                        color: `hsl(var(--${tier.color}) / 0.7)`,
                      }}
                    >
                      {sponsor.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20 bg-card">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-4">
                Become a Sponsor
              </h2>
              <p className="font-subheading text-muted-foreground mb-8">
                Partner with RUSH 2025 and reach 10,000+ future business leaders.
                Get unparalleled brand visibility and connect with top talent from premier B-schools.
              </p>
              
              <div className="border-2 border-primary p-8 shadow-pixel mb-8">
                <h3 className="font-pixel text-sm text-primary mb-4">WHY SPONSOR RUSH?</h3>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary" />
                    10,000+ footfall from 100+ premier institutions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary" />
                    Massive social media reach (500K+ impressions)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent" />
                    Direct access to India's future business leaders
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-highlight" />
                    Premium brand positioning and activation opportunities
                  </li>
                </ul>
              </div>

              <Button variant="pixel" size="lg" className="gap-2">
                <Mail size={18} />
                Contact for Sponsorship
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
