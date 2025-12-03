export const MarqueeStrip = () => {
  const items = [
    { text: "RUSH 2025", type: "main" },
    { text: "◆", type: "divider" },
    { text: "IIM RANCHI", type: "main" },
    { text: "◆", type: "divider" },
    { text: "THE SOUL EDITION", type: "highlight" },
    { text: "◆", type: "divider" },
    { text: "FEB 2025", type: "main" },
    { text: "◆", type: "divider" },
    { text: "50+ EVENTS", type: "main" },
    { text: "◆", type: "divider" },
    { text: "₹15L+ PRIZES", type: "highlight" },
    { text: "◆", type: "divider" },
  ];

  return (
    <div className="relative py-4 overflow-hidden border-y border-primary/20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
      
      {/* Holographic shimmer overlay */}
      <div className="absolute inset-0 holographic-shimmer opacity-50" />
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`
              mx-6 transition-colors
              ${item.type === "main" ? "font-pixel text-[10px] text-foreground/80" : ""}
              ${item.type === "highlight" ? "font-pixel text-[10px] text-primary" : ""}
              ${item.type === "divider" ? "text-primary/40 text-sm" : ""}
            `}
          >
            {item.text}
          </span>
        ))}
      </div>
      
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
};