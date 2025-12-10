export const MarqueeStrip = () => {
  const items = [
    "RUSH 2025",
    "◆",
    "IIM RANCHI",
    "◆",
    "THE SOUL EDITION",
    "◆",
    "FEB 2025",
    "◆",
    "50+ EVENTS",
    "◆",
    "₹15L+ PRIZES",
    "◆",
  ];

  return (
    <div className="relative py-4 overflow-hidden bg-background border-y border-primary/30">
      {/* Cyber gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
      
      {/* Scanline effect */}
      <div className="absolute inset-0 vhs-lines opacity-50" />
      
      {/* Glow edges */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`font-heading text-xs mx-4 ${
              item === "◆" 
                ? "text-accent" 
                : index % 2 === 0 
                  ? "text-primary" 
                  : "text-secondary"
            }`}
            style={{
              textShadow: item === "◆" 
                ? "0 0 10px hsl(var(--accent))" 
                : "0 0 10px currentColor"
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
