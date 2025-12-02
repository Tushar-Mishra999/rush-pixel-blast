const marqueeItems = [
  "RUSH 2025",
  "◈",
  "IIM RANCHI",
  "◇",
  "THE SOUL EDITION",
  "△",
  "FEBRUARY 2025",
  "○",
  "50+ EVENTS",
  "□",
  "10K+ FOOTFALL",
  "⬡",
];

export const MarqueeStrip = () => {
  return (
    <div className="py-4 bg-card/50 border-y border-border/20 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="mx-8 font-display text-xs tracking-[0.3em] text-muted-foreground/60"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};