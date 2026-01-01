import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-card border-b-2 border-border">
        <div className="container px-4 text-center">
          <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Meet the <span className="text-primary">Team</span>
          </h1>
          <p className="font-subheading text-muted-foreground max-w-2xl mx-auto">
            The passionate minds behind RUSH 2026
          </p>
        </div>
      </section>

      {/* Team Cards Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Sponsorship Team */}
            <div className="bg-card border-2 border-border hover:border-primary transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-muted border-2 border-border flex items-center justify-center">
                <span className="font-pixel text-4xl text-primary">$</span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                Sponsorship Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground">
                Hota sabke paas hai, sab chupa ke rakhte hai, deta koi nahi!!
              </p>
            </div>

            {/* Promotions Team */}
            <div className="bg-card border-2 border-border hover:border-accent transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-muted border-2 border-border flex items-center justify-center">
                <span className="font-pixel text-4xl text-accent">📢</span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                Promotions Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground">
                50 rupaye kaat overacting ka
              </p>
            </div>

            {/* Creative & Design Team */}
            <div className="bg-card border-2 border-border hover:border-highlight transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-muted border-2 border-border flex items-center justify-center">
                <span className="font-pixel text-4xl text-highlight">🎨</span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                Creative & Design Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground">
                Pinterest pe design dekh ke hume same banane bolna IS NOT FUNNY
              </p>
            </div>

            {/* Operations Team */}
            <div className="bg-card border-2 border-border hover:border-green transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-muted border-2 border-border flex items-center justify-center">
                <span className="font-pixel text-4xl text-green">⚙️</span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                Operations Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground">
                Main, merko sab aata hai, main expert hoon
              </p>
            </div>

            {/* Media and Communications Team */}
            <div className="bg-card border-2 border-border hover:border-magenta transition-colors p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-6 bg-muted border-2 border-border flex items-center justify-center">
                <span className="font-pixel text-4xl text-magenta">📸</span>
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                Media and Communications Team
              </h3>
              <p className="font-subheading text-sm text-muted-foreground">
                Oh my god, aaj to bohot crazy kar diya mene
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
