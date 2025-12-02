export const MarqueeStrip = () => {
  const items = [
    "RUSH 2025",
    "★",
    "IIM RANCHI",
    "★",
    "THE SOUL EDITION",
    "★",
    "FEB 2025",
    "★",
    "50+ EVENTS",
    "★",
    "₹15L+ PRIZES",
    "★",
  ];

  return (
    <div className="bg-primary py-3 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="font-pixel text-xs text-primary-foreground mx-4"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
