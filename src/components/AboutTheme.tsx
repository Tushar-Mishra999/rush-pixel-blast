export const AboutTheme = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10 px-4">

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm p-8 md:p-12 relative"
            style={{ boxShadow: "0 0 30px hsl(var(--primary) / 0.1)" }}>
            
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50" />
            
            <div className="space-y-6 text-center">
              <h3 className="font-heading text-lg md:text-xl text-accent font-bold"
                style={{ textShadow: "0 0 10px hsl(var(--accent))" }}>
                Rendering the Future That Matters
              </h3>
              
              <p className="font-subheading text-muted-foreground leading-relaxed">
                Step into a world where nostalgia meets innovation. RUSH 2026 celebrates the retro-futuristic 
                aesthetic — blending pixel art vibes, arcade energy, and the bold spirit of a new generation. 
                This is where the past powers the future.
              </p>
              
              <p className="font-subheading text-muted-foreground leading-relaxed">
                From 8-bit visuals to neon-lit experiences, every corner of RUSH embodies the charm of 
                classic gaming culture while pushing boundaries into tomorrow's possibilities.
              </p>
              
              <div className="pt-4">
                <span className="inline-block font-heading text-xs text-primary/70 border border-primary/30 px-4 py-2"
                  style={{ textShadow: "0 0 5px hsl(var(--primary))" }}>
                  PRESS START TO BEGIN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};