import { cn } from "@/lib/utils";
import pixelLightning from "@/assets/pixel-lightning.png";
import pixelMusicNote from "@/assets/pixel-music-note.png";

interface FloatingImageProps {
  className?: string;
  image: "lightning" | "music-note";
  size?: number;
  delay?: number;
}

const images = {
  lightning: pixelLightning,
  "music-note": pixelMusicNote,
};

export const FloatingImage = ({ 
  className, 
  image,
  size = 80,
  delay = 0 
}: FloatingImageProps) => {
  return (
    <img
      src={images[image]}
      alt=""
      className={cn(
        "absolute animate-float pointer-events-none select-none",
        className
      )}
      style={{
        width: size,
        height: "auto",
        animationDelay: `${delay}s`,
      }}
    />
  );
};

export const FloatingPixels = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lightning bolts */}
      <FloatingImage image="lightning" size={60} className="top-[10%] left-[5%]" delay={0} />
      <FloatingImage image="lightning" size={40} className="top-[30%] right-[10%]" delay={1} />
      <FloatingImage image="lightning" size={50} className="bottom-[20%] left-[15%]" delay={2} />
      
      {/* Music notes */}
      <FloatingImage image="music-note" size={70} className="top-[15%] right-[20%]" delay={0.5} />
      <FloatingImage image="music-note" size={45} className="bottom-[30%] right-[8%]" delay={1.5} />
      <FloatingImage image="music-note" size={55} className="top-[50%] left-[8%]" delay={1} />
      
      {/* Additional elements */}
      <FloatingImage image="lightning" size={35} className="bottom-[15%] right-[25%]" delay={2.5} />
      <FloatingImage image="music-note" size={50} className="top-[70%] right-[15%]" delay={0.8} />
    </div>
  );
};
