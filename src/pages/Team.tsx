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

      {/* Team Grid Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Core Committee
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Placeholder team members */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-card border-2 border-border p-6 text-center hover:border-primary transition-colors"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-muted border-2 border-border flex items-center justify-center">
                  <span className="font-pixel text-2xl text-muted-foreground">?</span>
                </div>
                <h3 className="font-heading text-lg text-foreground mb-1">
                  Team Member
                </h3>
                <p className="font-subheading text-sm text-primary mb-2">
                  Position
                </p>
                <p className="font-subheading text-xs text-muted-foreground">
                  IIM Ranchi
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
