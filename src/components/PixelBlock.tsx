import { cn } from "@/lib/utils";

interface PixelBlockProps {
  className?: string;
  color?: "primary" | "secondary" | "accent" | "highlight";
  size?: number;
  delay?: number;
}

export const PixelBlock = ({ 
  className, 
  color = "primary", 
  size = 32,
  delay = 0 
}: PixelBlockProps) => {
  const colorClasses = {
    primary: "bg-primary shadow-glow-primary",
    secondary: "bg-secondary shadow-glow-secondary",
    accent: "bg-accent shadow-glow-accent",
    highlight: "bg-highlight",
  };

  return (
    <div
      className={cn(
        "absolute animate-float",
        colorClasses[color],
        className
      )}
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

export const FloatingPixels = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cyan blocks */}
      <PixelBlock color="primary" size={24} className="top-[10%] left-[5%]" delay={0} />
      <PixelBlock color="primary" size={16} className="top-[30%] right-[10%]" delay={1} />
      <PixelBlock color="primary" size={20} className="bottom-[20%] left-[15%]" delay={2} />
      
      {/* Magenta blocks */}
      <PixelBlock color="secondary" size={28} className="top-[15%] right-[20%]" delay={0.5} />
      <PixelBlock color="secondary" size={18} className="bottom-[30%] right-[8%]" delay={1.5} />
      
      {/* Yellow blocks */}
      <PixelBlock color="accent" size={22} className="top-[50%] left-[8%]" delay={1} />
      <PixelBlock color="accent" size={14} className="bottom-[15%] right-[25%]" delay={2.5} />
      
      {/* Green blocks */}
      <PixelBlock color="highlight" size={20} className="top-[70%] right-[15%]" delay={0.8} />
      <PixelBlock color="highlight" size={16} className="top-[25%] left-[20%]" delay={1.8} />
    </div>
  );
};
