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
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Campus Ambassador Guidelines
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/60" />
            <div className="w-2 h-2 rotate-45 bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/60" />
          </div>
          
          {/* Content */}
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Registration for RUSH implies acceptance of event rules, campus regulations, organizer decisions, media usage & confirmation of accurate information provided by participants.
          </p>

          <a 
            href="https://www.festbuzz.in/fests/695cd2005d0951e6c22f3221/events/695d35ae3f2788b53309a79c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-pixel text-lg rounded-lg hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            KNOW MORE
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export { CampusAmbassadorGuidelines };
