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
                Rendering the Future captures the spirit of a generation ready to move beyond ideas and into action. Rooted in imagination and guided by responsibility, the theme highlights the power of purposeful innovation in shaping progress that truly matters. It celebrates those who take ownership of change, build with intent and recognise that the future is not something to inherit, but something to actively shape.
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