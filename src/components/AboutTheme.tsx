export const AboutTheme = () => {
  const isIOS =
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isMobile =
    typeof window !== "undefined" &&
    (window.innerWidth < 768 || isIOS);
  
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="font-heading text-lg md:text-xl text-accent font-bold"
            style={{ 
              textShadow: isIOS 
                ? "0 0 6px hsl(var(--accent) / 0.6)" 
                : isMobile 
                ? "0 0 8px hsl(var(--accent) / 0.7)"
                : "0 0 12px hsl(var(--accent) / 0.8)"
            }}>
            Rendering the Future That Matters
          </h3>
          
          <p className="font-subheading text-muted-foreground leading-relaxed text-base md:text-lg">
            Rendering the Future captures the spirit of a generation ready to move beyond ideas and into action. Rooted in imagination and guided by responsibility, the theme highlights the power of purposeful innovation in shaping progress that truly matters. It celebrates those who take ownership of change, build with intent and recognise that the future is not something to inherit, but something to actively shape.
          </p>
        </div>
      </div>
    </section>
  );
};