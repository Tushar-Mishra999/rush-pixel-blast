const CampusAmbassadorGuidelines = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <h2 className="font-brick text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
            Campus Ambassador Guidelines
          </h2>
          
          {/* Content box */}
          <div className="relative p-8 md:p-12 rounded-lg bg-gradient-to-br from-secondary/20 via-background to-primary/20 border border-primary/20">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
            
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Registration for RUSH implies acceptance of event rules, campus regulations, organizer decisions, media usage & confirmation of accurate information provided by participants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CampusAmbassadorGuidelines };
