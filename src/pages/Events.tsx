import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  Music, Trophy, Mic, Palette, Users, Gamepad2,
  ArrowRight
} from "lucide-react";

const categories = [
  { id: "all", name: "All", icon: null },
  { id: "cultural", name: "Cultural", icon: Music },
  { id: "sports", name: "Sports", icon: Trophy },
  { id: "literary", name: "Literary", icon: Mic },
  { id: "arts", name: "Arts", icon: Palette },
  { id: "management", name: "Management", icon: Users },
  { id: "gaming", name: "Gaming", icon: Gamepad2 },
];

const events = [
  { id: 1, name: "Dance Battle", category: "cultural", prize: "₹50,000", team: "6-8", color: "primary" },
  { id: 2, name: "Battle of Bands", category: "cultural", prize: "₹40,000", team: "4-8", color: "primary" },
  { id: 3, name: "Fashion Show", category: "cultural", prize: "₹30,000", team: "10-15", color: "primary" },
  { id: 4, name: "Solo Singing", category: "cultural", prize: "₹15,000", team: "1", color: "primary" },
  { id: 5, name: "Futsal", category: "sports", prize: "₹1,00,000", team: "12", color: "secondary" },
  { id: 6, name: "Cricket", category: "sports", prize: "₹75,000", team: "15", color: "secondary" },
  { id: 7, name: "Basketball", category: "sports", prize: "₹50,000", team: "10", color: "secondary" },
  { id: 8, name: "Badminton", category: "sports", prize: "₹20,000", team: "2", color: "secondary" },
  { id: 9, name: "Debate", category: "literary", prize: "₹25,000", team: "2", color: "accent" },
  { id: 10, name: "Quiz", category: "literary", prize: "₹20,000", team: "3", color: "accent" },
  { id: 11, name: "Poetry Slam", category: "literary", prize: "₹10,000", team: "1", color: "accent" },
  { id: 12, name: "Photography", category: "arts", prize: "₹15,000", team: "1", color: "highlight" },
  { id: 13, name: "Short Film", category: "arts", prize: "₹25,000", team: "1-5", color: "highlight" },
  { id: 14, name: "Case Study", category: "management", prize: "₹50,000", team: "3", color: "primary" },
  { id: 15, name: "B-Plan", category: "management", prize: "₹40,000", team: "3-4", color: "primary" },
  { id: 16, name: "Valorant", category: "gaming", prize: "₹30,000", team: "5", color: "secondary" },
  { id: 17, name: "FIFA", category: "gaming", prize: "₹15,000", team: "1", color: "secondary" },
  { id: 18, name: "BGMI", category: "gaming", prize: "₹25,000", team: "4", color: "secondary" },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(e => e.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 bg-card border-b-2 border-border">
          <div className="container px-4 text-center">
            <h1 className="font-pixel text-3xl md:text-4xl text-foreground mb-4">
              <span className="text-secondary">&gt;</span> EVENTS <span className="text-secondary">&lt;</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              50+ events across 6 categories. Find your arena, show your skills, win big.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container px-4">
            <div className="flex gap-2 overflow-x-auto pb-2 justify-start md:justify-center">
              {categories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 border-2 whitespace-nowrap transition-all text-sm",
                      activeCategory === cat.id
                        ? "border-primary text-primary bg-primary/10 shadow-pixel"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    )}
                  >
                    {Icon && <Icon size={16} />}
                    <span className="font-pixel text-[10px]">{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 bg-background">
          <div className="container px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="border-2 border-border hover:border-current p-6 transition-all group bg-card"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `hsl(var(--${event.color}))`;
                    e.currentTarget.style.boxShadow = `4px 4px 0px hsl(var(--${event.color}))`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-pixel text-sm text-foreground group-hover:animate-glitch">
                      {event.name}
                    </h3>
                    <span 
                      className="text-xs px-2 py-1 uppercase"
                      style={{ 
                        backgroundColor: `hsl(var(--${event.color}) / 0.2)`,
                        color: `hsl(var(--${event.color}))`,
                      }}
                    >
                      {event.category}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Prize Pool</span>
                      <span 
                        className="font-semibold"
                        style={{ color: `hsl(var(--${event.color}))` }}
                      >
                        {event.prize}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Team Size</span>
                      <span className="text-foreground">{event.team}</span>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full justify-between group-hover:text-primary"
                  >
                    <span>View Details</span>
                    <ArrowRight size={16} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Total Prize Pool */}
        <section className="py-16 bg-card">
          <div className="container px-4 text-center">
            <div className="max-w-2xl mx-auto border-2 border-accent p-8 shadow-pixel-accent">
              <p className="font-pixel text-xs text-accent mb-4">TOTAL PRIZE POOL</p>
              <p className="font-pixel text-4xl md:text-6xl text-foreground mb-4">
                ₹15,00,000+
              </p>
              <p className="text-muted-foreground mb-6">
                Compete. Win. Take home glory and prizes.
              </p>
              <Button variant="pixel-accent" size="lg">
                Register Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
