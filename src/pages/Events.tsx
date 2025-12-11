import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: "all", name: "ALL", code: "CAT_00", gradient: "from-muted via-muted/80 to-muted/60", accentColor: "#20ABE5" },
  { id: "cultural", name: "CULTURAL", code: "CAT_01", gradient: "from-magenta/80 via-magenta/60 to-magenta/40", accentColor: "#DE0081" },
  { id: "management", name: "MANAGEMENT", code: "CAT_02", gradient: "from-olive/80 via-olive/60 to-olive/40", accentColor: "#ECDE01" },
  { id: "sports", name: "SPORTS", code: "CAT_03", gradient: "from-azure/80 via-azure/60 to-azure/40", accentColor: "#20ABE5" },
  { id: "literary", name: "LITERARY", code: "CAT_04", gradient: "from-green/80 via-green/60 to-green/40", accentColor: "#35B847" },
  { id: "arts", name: "ARTS", code: "CAT_05", gradient: "from-magenta/70 via-azure/60 to-magenta/50", accentColor: "#DE0081" },
  { id: "gaming", name: "GAMING", code: "CAT_06", gradient: "from-azure/70 via-green/60 to-azure/50", accentColor: "#20ABE5" },
];

const events = [
  { id: 1, name: "Dance Battle", category: "cultural", prize: "₹50,000", team: "6-8" },
  { id: 2, name: "Battle of Bands", category: "cultural", prize: "₹40,000", team: "4-8" },
  { id: 3, name: "Fashion Show", category: "cultural", prize: "₹30,000", team: "10-15" },
  { id: 4, name: "Solo Singing", category: "cultural", prize: "₹15,000", team: "1" },
  { id: 5, name: "Futsal", category: "sports", prize: "₹1,00,000", team: "12" },
  { id: 6, name: "Cricket", category: "sports", prize: "₹75,000", team: "15" },
  { id: 7, name: "Basketball", category: "sports", prize: "₹50,000", team: "10" },
  { id: 8, name: "Badminton", category: "sports", prize: "₹20,000", team: "2" },
  { id: 9, name: "Debate", category: "literary", prize: "₹25,000", team: "2" },
  { id: 10, name: "Quiz", category: "literary", prize: "₹20,000", team: "3" },
  { id: 11, name: "Poetry Slam", category: "literary", prize: "₹10,000", team: "1" },
  { id: 12, name: "Photography", category: "arts", prize: "₹15,000", team: "1" },
  { id: 13, name: "Short Film", category: "arts", prize: "₹25,000", team: "1-5" },
  { id: 14, name: "Case Study", category: "management", prize: "₹50,000", team: "3" },
  { id: 15, name: "B-Plan", category: "management", prize: "₹40,000", team: "3-4" },
  { id: 16, name: "Valorant", category: "gaming", prize: "₹30,000", team: "5" },
  { id: 17, name: "FIFA", category: "gaming", prize: "₹15,000", team: "1" },
  { id: 18, name: "BGMI", category: "gaming", prize: "₹25,000", team: "4" },
];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(e => e.category === activeCategory);

  const getCategoryData = (categoryId: string) => {
    return categories.find(c => c.id === categoryId) || categories[0];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-16 bg-card border-b-2 border-border relative overflow-hidden">
          <div className="absolute inset-0 cyber-gradient-radial opacity-30" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="container px-4 text-center relative z-10">
            <h1 className="font-heading text-3xl md:text-4xl text-foreground mb-4 flex items-center justify-center gap-3">
              <span className="text-secondary animate-pulse">&gt;</span>
              <span style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.3)" }}>SELECT EVENT</span>
              <span className="w-6 h-1 bg-secondary ml-2" />
            </h1>
            <p className="font-subheading text-muted-foreground max-w-2xl mx-auto">
              50+ events across 6 categories. Find your arena, show your skills, win big.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container px-4">
            <div className="flex gap-3 overflow-x-auto pb-2 justify-start md:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-4 py-2 border-2 whitespace-nowrap transition-all text-sm font-heading text-[10px]",
                    activeCategory === cat.id
                      ? "text-background"
                      : "border-border text-muted-foreground hover:text-foreground"
                  )}
                  style={{
                    borderColor: activeCategory === cat.id ? cat.accentColor : undefined,
                    backgroundColor: activeCategory === cat.id ? cat.accentColor : undefined,
                    boxShadow: activeCategory === cat.id ? `4px 4px 0px ${cat.accentColor}80` : undefined,
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 bg-background relative overflow-hidden">
          <div className="absolute inset-0 cyber-gradient-radial opacity-20" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          <div className="container px-4 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => {
                const categoryData = getCategoryData(event.category);
                return (
                  <div
                    key={event.id}
                    className="group cursor-pointer transition-all duration-300 hover:-translate-y-3 border-2 border-border bg-background p-4"
                    style={{
                      boxShadow: "4px 4px 0px hsl(var(--border))",
                      transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `8px 8px 0px ${categoryData.accentColor}, 0 0 40px ${categoryData.accentColor}80`;
                      e.currentTarget.style.borderColor = categoryData.accentColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "4px 4px 0px hsl(var(--border))";
                      e.currentTarget.style.borderColor = "hsl(var(--border))";
                    }}
                  >
                    {/* Image/Gradient Header */}
                    <div className="relative aspect-[16/9] overflow-hidden mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryData.gradient} transition-transform duration-500 group-hover:scale-110`} />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
                      <div className="absolute inset-0 scanlines opacity-30" />
                      
                      {/* Category Code Label */}
                      <div className="absolute bottom-3 left-3">
                        <span className="font-heading text-xs bg-background/90 text-foreground px-2 py-1 border border-border">
                          {categoryData.code}
                        </span>
                      </div>
                      
                      {/* Prize Badge */}
                      <div className="absolute top-3 right-3">
                        <span 
                          className="font-heading text-xs px-2 py-1 border"
                          style={{ 
                            backgroundColor: `${categoryData.accentColor}20`,
                            borderColor: categoryData.accentColor,
                            color: categoryData.accentColor
                          }}
                        >
                          {event.prize}
                        </span>
                      </div>
                    </div>
                    
                    {/* Event Info */}
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 
                          className="font-heading text-lg text-foreground transition-colors"
                          style={{ textShadow: "0 0 10px hsl(var(--foreground) / 0.2)" }}
                        >
                          {event.name}
                        </h3>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm mb-4">
                        <span className="text-muted-foreground">Team: {event.team}</span>
                        <span 
                          className="text-xs uppercase px-2 py-0.5"
                          style={{ 
                            backgroundColor: `${categoryData.accentColor}20`,
                            color: categoryData.accentColor
                          }}
                        >
                          {event.category}
                        </span>
                      </div>

                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full justify-between border border-border hover:border-current transition-colors"
                        style={{
                          "--hover-color": categoryData.accentColor
                        } as React.CSSProperties}
                      >
                        <span>View Details</span>
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Total Prize Pool */}
        <section className="py-16 bg-card relative overflow-hidden">
          <div className="absolute inset-0 cyber-gradient-radial opacity-20" />
          <div className="container px-4 text-center relative z-10">
            <div 
              className="max-w-2xl mx-auto border-2 border-secondary p-8"
              style={{ boxShadow: "8px 8px 0px hsl(var(--secondary))" }}
            >
              <p className="font-heading text-xs text-secondary mb-4">TOTAL PRIZE POOL</p>
              <p 
                className="font-heading text-4xl md:text-6xl text-foreground mb-4"
                style={{ textShadow: "0 0 20px hsl(var(--secondary) / 0.5)" }}
              >
                ₹15,00,000+
              </p>
              <p className="text-muted-foreground mb-6">
                Compete. Win. Take home glory and prizes.
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="font-heading text-xs border-2 border-secondary text-secondary hover:bg-secondary hover:text-background transition-all px-8"
              >
                REGISTER NOW
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
