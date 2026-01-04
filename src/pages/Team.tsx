import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import sponsorshipIcon from "@/assets/sponsorship-icon.png";
import promotionsIcon from "@/assets/promotions-icon.png";
const Team = () => {
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card border-b-2 border-border">
        <div className="container px-4 text-center">
          <h1 style={{
          textShadow: "0 0 20px hsl(var(--magenta)), 0 0 40px hsl(var(--magenta) / 0.5)"
        }} className="font-heading text-3xl text-magenta mb-4 md:text-3xl">
            MEET THE TEAM: The Force Behind the Festival
          </h1>
          <p className="font-subheading text-muted-foreground max-w-2xl mx-auto font-bold">
            The passionate minds behind RUSH 2026
          </p>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sponsorship Team - Yellow */}
            <div className="bg-accent/10 border-2 border-accent hover:border-accent/80 transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-accent/20 border-2 border-accent flex items-center justify-center overflow-hidden">
                <img src={sponsorshipIcon} alt="Sponsorship" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl text-accent mb-3" style={{
              textShadow: "0 0 15px hsl(var(--accent) / 0.5)"
            }}>
                Sponsorship Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground font-bold">
                Hota sabke paas hai, sab chupa ke rakhte hai, deta koi nahi!!
              </p>
            </div>

            {/* Promotions Team - Blue */}
            <div className="bg-primary/10 border-2 border-primary hover:border-primary/80 transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-primary/20 border-2 border-primary flex items-center justify-center overflow-hidden">
                <img src={promotionsIcon} alt="Promotions" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-heading text-xl text-primary mb-3" style={{
              textShadow: "0 0 15px hsl(var(--primary) / 0.5)"
            }}>
                Promotions Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground font-bold">
                50 rupaye kaat overacting ka
              </p>
            </div>

            {/* Creative & Design Team - Pink */}
            <div className="bg-magenta/10 border-2 border-magenta hover:border-magenta/80 transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-magenta/20 border-2 border-magenta flex items-center justify-center">
                <span className="font-pixel text-4xl text-magenta">🎨</span>
              </div>
              <h3 className="font-heading text-xl text-magenta mb-3" style={{
              textShadow: "0 0 15px hsl(var(--magenta) / 0.5)"
            }}>
                Creative & Design Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground font-bold">
                Pinterest pe design dekh ke hume same banane bolna IS NOT FUNNY
              </p>
            </div>

            {/* Operations Team - Green */}
            <div className="bg-green/10 border-2 border-green hover:border-green/80 transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-green/20 border-2 border-green flex items-center justify-center">
                <span className="font-pixel text-4xl text-green">⚙️</span>
              </div>
              <h3 className="font-heading text-xl text-green mb-3" style={{
              textShadow: "0 0 15px hsl(var(--green) / 0.5)"
            }}>
                Operations Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground font-bold">
                Main, merko sab aata hai, main expert hoon
              </p>
            </div>

            {/* Media and Communications Team - Yellow */}
            <div className="bg-accent/10 border-2 border-accent hover:border-accent/80 transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-accent/20 border-2 border-accent flex items-center justify-center">
                <span className="font-pixel text-4xl text-accent">📸</span>
              </div>
              <h3 className="font-heading text-xl text-accent mb-3" style={{
              textShadow: "0 0 15px hsl(var(--accent) / 0.5)"
            }}>
                Media and Communications Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground font-bold">
                Oh my god, aaj to bohot crazy kar diya mene
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Team;