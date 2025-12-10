import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingPixels } from "@/components/PixelBlock";

const pastArtists = [
  { name: "Artist 1", year: "2024", type: "Bollywood" },
  { name: "Artist 2", year: "2023", type: "EDM" },
  { name: "Artist 3", year: "2022", type: "Indie" },
  { name: "Artist 4", year: "2019", type: "Rapper" },
];

const milestones = [
  { year: "2015", event: "RUSH was born as a small cultural event" },
  { year: "2017", event: "First celebrity performance & 5000+ footfall" },
  { year: "2019", event: "Became one of the biggest B-school fests in East India" },
  { year: "2022", event: "India's largest virtual B-school cultural fest" },
  { year: "2024", event: "10K+ footfall, ₹15L+ prize pool" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 bg-card overflow-hidden scanlines">
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <FloatingPixels />
          
          <div className="container relative z-10 px-4 text-center">
            <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
              <span className="text-primary">ABOUT</span> RUSH
            </h1>
            <p className="font-subheading text-lg text-muted-foreground max-w-3xl mx-auto">
              More than a fest. It's where dreams take flight, talents shine, and memories become legends.
            </p>
          </div>
        </section>

        {/* What is RUSH */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-xl md:text-2xl text-foreground mb-8 text-center">
                <span className="text-secondary">&gt;</span> WHAT IS RUSH <span className="text-secondary">&lt;</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-2 border-primary p-6 shadow-pixel transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-glow-primary hover:border-primary">
                  <h3 className="font-heading text-sm text-primary mb-4 uppercase tracking-wider">THE VISION</h3>
                  <p className="font-subheading text-muted-foreground leading-relaxed">
                    RUSH is IIM Ranchi's annual cultural extravaganza that brings together 
                    the brightest minds from B-schools across India. It's a platform where 
                    competition meets celebration, where strategy meets creativity.
                  </p>
                </div>
                
                <div className="border-2 border-secondary p-6 shadow-pixel-secondary transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-glow-secondary hover:border-secondary">
                  <h3 className="font-heading text-sm text-secondary mb-4 uppercase tracking-wider">THE EXPERIENCE</h3>
                  <p className="font-subheading text-muted-foreground leading-relaxed">
                    Three days of non-stop action featuring sports tournaments, cultural 
                    performances, management competitions, and star-studded nights. 
                    RUSH is where future leaders come to play.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-card">
          <div className="container px-4">
            <h2 className="font-heading text-xl md:text-2xl text-foreground mb-12 text-center">
              <span className="text-accent">[</span> THE JOURNEY <span className="text-accent">]</span>
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              {/* Center vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2 hidden md:block" />
              
              {milestones.map((milestone, index) => {
                const isLeft = index % 2 === 0;
                
                return (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center mb-12 last:mb-0 ${
                      isLeft ? 'md:justify-start' : 'md:justify-end'
                    }`}
                  >
                    {/* Center dot on the line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent border-2 border-background z-10 hidden md:block" />
                    
                    {/* Timeline card */}
                    <div
                      className={`w-full md:w-[45%] border-2 border-accent p-6 bg-card transition-all duration-300 hover:scale-105 hover:shadow-glow-primary ${
                        isLeft ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                      }`}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-14 h-14 border-2 border-accent flex items-center justify-center bg-accent/10 shrink-0">
                          <span className="font-heading text-xs text-accent">{milestone.year}</span>
                        </div>
                        <div className={`h-0.5 flex-1 bg-gradient-to-r ${isLeft ? 'md:from-transparent md:to-accent' : 'from-accent to-transparent'}`} />
                      </div>
                      <p className="text-foreground">{milestone.event}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Past Artists */}
        <section className="py-20 bg-background">
          <div className="container px-4">
            <h2 className="font-heading text-xl md:text-2xl text-foreground mb-12 text-center">
              <span className="text-highlight">♪</span> ARTIST LEGACY <span className="text-highlight">♪</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {pastArtists.map((artist) => (
                <div
                  key={artist.name}
                  className="border-2 border-border hover:border-highlight p-6 text-center transition-all group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-highlight/30 to-secondary/30 flex items-center justify-center">
                    <span className="font-heading text-2xl text-foreground">♪</span>
                  </div>
                  <h3 className="font-heading text-xs text-foreground mb-1 group-hover:text-highlight transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{artist.type}</p>
                  <p className="text-[10px] text-accent mt-2">{artist.year}</p>
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

export default About;
