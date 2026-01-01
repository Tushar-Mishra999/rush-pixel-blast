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


      <Footer />
    </div>
  );
};

export default Team;
