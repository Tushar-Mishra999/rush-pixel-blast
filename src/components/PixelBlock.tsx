import { cn } from "@/lib/utils";

interface HoloElementProps {
  className?: string;
  color?: "primary" | "secondary" | "accent" | "highlight";
  size?: number;
  delay?: number;
  variant?: "square" | "line" | "dot";
}

export const HoloElement = ({ 
  className, 
  color = "primary", 
  size = 32,
  delay = 0,
  variant = "square"
}: HoloElementProps) => {
  const colorClasses = {
    primary: "bg-primary/20",
    secondary: "bg-secondary/20",
    accent: "bg-accent/20",
    highlight: "bg-highlight/20",
  };

  const variantStyles = {
    square: { width: size, height: size },
    line: { width: size * 3, height: 1 },
    dot: { width: size / 4, height: size / 4, borderRadius: "50%" },
  };

  return (
    <div
      className={cn(
        "absolute animate-float opacity-40",
        colorClasses[color],
        className
      )}
      style={{
        ...variantStyles[variant],
        animationDelay: `${delay}s`,
        filter: `blur(${variant === "dot" ? 0 : 1}px)`,
      }}
    />
  );
};

export const FloatingPixels = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle holographic elements */}
      <HoloElement color="primary" size={40} className="top-[15%] left-[8%]" delay={0} variant="square" />
      <HoloElement color="primary" size={60} className="top-[60%] right-[12%]" delay={2} variant="line" />
      <HoloElement color="secondary" size={30} className="top-[25%] right-[20%]" delay={1} variant="square" />
      <HoloElement color="secondary" size={50} className="bottom-[30%] left-[5%]" delay={3} variant="line" />
      <HoloElement color="accent" size={20} className="top-[70%] left-[15%]" delay={1.5} variant="dot" />
      <HoloElement color="accent" size={25} className="top-[40%] right-[8%]" delay={2.5} variant="square" />
      <HoloElement color="highlight" size={35} className="bottom-[20%] right-[25%]" delay={0.5} variant="dot" />
      
      {/* Gradient orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-glow"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full animate-pulse-glow"
        style={{ 
          background: 'radial-gradient(circle, hsl(var(--secondary) / 0.08) 0%, transparent 70%)',
          animationDelay: '2s'
        }}
      />
    </div>
  );
};
