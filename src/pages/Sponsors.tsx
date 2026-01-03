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
              Partner with RUSH 2026
            </h1>
          </div>
        </section>

        {/* RUSH Highlights */}
        <section className="py-16 bg-background border-b-2 border-border">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                RUSH at a Glance
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { number: "10+", label: "Events Every Year" },
                { number: "11", label: "Years of Successful Celebrations" },
                { number: "50+", label: "Past Participating B-Schools" },
                { number: "250+", label: "Trusted Past Sponsors" },
                { number: "2000+", label: "Footfall Every Year" },
                { number: "15+", label: "Artists from the Industry Hosted" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="border-2 border-primary/30 p-6 text-center hover:border-primary transition-colors hover:bg-primary/5"
                >
                  <div className="font-heading text-3xl md:text-4xl text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="font-subheading text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Reach */}
        <section className="py-16 bg-card border-b-2 border-border">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                Our Footprint
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { number: "34K+", label: "Followers - LinkedIn" },
                { number: "13K+", label: "Followers - Facebook" },
                { number: "13K+", label: "Followers - Instagram" },
                { number: "5K+", label: "Alumni Network" },
                { number: "5K+", label: "Subscribers - YouTube" },
                { number: "37K+", label: "Views on Top Reels" },
                { number: "500K+", label: "Views on RUSH page in 2024" },
                { number: "118K+", label: "Views on Top Videos - YouTube" },
                { number: "1K+", label: "Students on Campus" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="border-2 border-accent/30 p-6 text-center hover:border-accent transition-colors hover:bg-accent/5"
                >
                  <div className="font-heading text-2xl md:text-3xl text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="font-subheading text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsor Tiers - Title Sponsor Benefits */}
        <section className="py-16 bg-background border-b-2 border-border">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                Sponsorship & Marketing Opportunities
              </h2>
              <p className="font-subheading text-muted-foreground max-w-3xl mx-auto">
                Collaborate with RUSH 2026 to amplify your brand presence and engage directly with exceptional talent from India's premier B-schools.
              </p>
            </div>

            {/* Title Sponsor Card */}
            <div className="max-w-4xl mx-auto">
              <div className="border-2 border-accent p-8 bg-accent/5 relative overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />

                <h3 
                  className="font-heading text-xl md:text-2xl text-accent text-center mb-8"
                  style={{ textShadow: "0 0 20px hsl(var(--accent) / 0.5)" }}
                >
                  Title Sponsor
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Logos on main Banner, Poster and Newspaper",
                    "Logos on all kind of entry passes (Back Side)",
                    "Standees in the premiere locations on the campus",
                    "Logos on event posters and banners",
                    "Logos on all kind of entry passes (Front Side)",
                    "Social media promotion through posters",
                    "Website Promotion",
                    "Feature in our official after-movie",
                    "Exclusive In-store / promo video",
                    "Exclusive social-media mention",
                    "Permission to setup stalls/canopies (02)",
                    "Shout-out at the events",
                    "Permission to distribute products and materials",
                    "Permission to setup Selfie-point",
                    "Permission to promote in campus digital screen",
                    "VIP Passes (20)",
                    "Logos on participants' and winners' certificate",
                    "Shoutout at the Opening Ceremony",
                    "Sticker on audience seat cover",
                    "Logo on merchandise",
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent flex-shrink-0" />
                      <span className="font-subheading text-sm text-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Co-Sponsor Card */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="border-2 border-primary p-8 bg-primary/5 relative overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />

                <h3 
                  className="font-heading text-xl md:text-2xl text-primary text-center mb-8"
                  style={{ textShadow: "0 0 20px hsl(var(--primary) / 0.5)" }}
                >
                  Co-Sponsor
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Logos on main Banner, Poster and Newspaper",
                    "Logos on all kind of entry passes (Back Side)",
                    "Standees in the premiere locations on the campus",
                    "Logos on event posters and banners",
                    "Logos on all kind of entry passes (Front Side)",
                    "Social media promotion through posters",
                    "Website Promotion",
                    "Feature in our official after-movie",
                    "Exclusive In-store / promo video",
                    "Permission to setup stalls/canopies (01)",
                    "Shout-out at the events",
                    "Permission to distribute products and materials",
                    "Permission to setup Selfie-point",
                    "Permission to promote in campus digital screen",
                    "VIP Passes (15)",
                    "Logos on participants' and winners' certificate",
                    "Shoutout at the Opening Ceremony",
                    "Sticker on audience seat cover",
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors"
                    >
                      <span className="w-2 h-2 bg-primary flex-shrink-0" />
                      <span className="font-subheading text-sm text-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Associate Sponsor Card */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="border-2 border-secondary p-8 bg-secondary/5 relative overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-secondary" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-secondary" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-secondary" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-secondary" />

                <h3 
                  className="font-heading text-xl md:text-2xl text-magenta text-center mb-8"
                  style={{ textShadow: "0 0 20px hsl(var(--magenta) / 0.5)" }}
                >
                  Associate Sponsor
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Logos on main Banner, Poster and Newspaper",
                    "Logos on all kind of entry passes (Back Side)",
                    "Standees in the premiere locations on the campus",
                    "Social media promotion through posters",
                    "Website Promotion",
                    "Feature in our official after-movie",
                    "Permission to setup stalls/canopies (01)",
                    "Shout-out at the events",
                    "Permission to distribute products and materials",
                    "VIP Passes (10)",
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 border border-magenta/30 bg-magenta/5 hover:bg-magenta/10 transition-colors"
                    >
                      <span className="w-2 h-2 bg-magenta flex-shrink-0" style={{ boxShadow: "0 0 8px hsl(var(--magenta))" }} />
                      <span className="font-subheading text-sm text-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Event Sponsor Card */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="border-2 border-green p-8 bg-card relative overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-green" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-green" />

                <h3 
                  className="font-heading text-xl md:text-2xl text-green text-center mb-8"
                  style={{ textShadow: "0 0 20px hsl(var(--green) / 0.5)" }}
                >
                  Event Sponsor
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Logos on main Banner, Poster and Newspaper",
                    "Logos on all kind of entry passes (Back Side)",
                    "Social media promotion through posters",
                    "Website Promotion",
                    "Shout-out at the events",
                    "VIP Passes (5)",
                    "Logos on participants' and winners' certificate",
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 border border-green/30 bg-green/5 hover:bg-green/10 transition-colors"
                    >
                      <span className="w-2 h-2 bg-green flex-shrink-0" style={{ boxShadow: "0 0 8px hsl(var(--green))" }} />
                      <span className="font-subheading text-sm text-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Partnerships Card */}
            <div className="max-w-4xl mx-auto mt-12">
              <div className="border-2 border-accent p-8 bg-accent/5 relative overflow-hidden" style={{ boxShadow: "0 0 30px hsl(var(--accent) / 0.3)" }}>
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-accent" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-accent" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-accent" />

                <h3 
                  className="font-heading text-xl md:text-2xl text-accent text-center mb-8"
                  style={{ textShadow: "0 0 20px hsl(var(--accent) / 0.5)" }}
                >
                  Partnerships
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Food & Beverage Partner",
                    "Radio Partner",
                    "Gift Partner",
                    "Fashion Partner",
                    "Print Media Partner",
                    "Travel Partner",
                    "Hospitality Partner",
                    "Beauty Partner",
                  ].map((partner, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 p-3 border border-accent/30 bg-accent/5 hover:bg-accent/10 transition-colors"
                    >
                      <span className="w-2 h-2 bg-accent flex-shrink-0" style={{ boxShadow: "0 0 8px hsl(var(--accent))" }} />
                      <span className="font-subheading text-sm text-foreground">
                        {partner}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Past Sponsors Section */}
        <section className="py-20 bg-card">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
                Past Sponsors
              </h2>
              <p className="font-subheading text-muted-foreground">
                Brands that have powered RUSH over the years
              </p>
            </div>

            <div className="flex justify-center gap-6 flex-wrap max-w-4xl mx-auto">
              {[
                "Sponsor A",
                "Sponsor B", 
                "Sponsor C",
                "Sponsor D",
                "Sponsor E",
                "Sponsor F",
                "Sponsor G",
                "Sponsor H",
              ].map((sponsor, index) => (
                <div
                  key={index}
                  className="w-32 h-20 md:w-40 md:h-24 border border-border bg-muted/20 flex items-center justify-center hover:bg-muted/30 transition-colors"
                >
                  <span className="font-subheading text-xs text-muted-foreground">
                    {sponsor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sponsors;
