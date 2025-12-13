import { cn } from "@/lib/utils";
import pixelLightning from "@/assets/pixel-lightning.png";
import pixelMusicNote from "@/assets/pixel-music-note.png";
import pixelMicrophone from "@/assets/pixel-microphone.png";
import pixelStars from "@/assets/pixel-stars.png";

interface FloatingImageProps {
  className?: string;
  image: "lightning" | "music-note" | "microphone" | "stars";
  size?: number;
  delay?: number;
}

const images = {
  lightning: pixelLightning,
  "music-note": pixelMusicNote,
  microphone: pixelMicrophone,
  stars: pixelStars,
};

export const FloatingImage = ({ 
  className, 
  image,
  size = 40,
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
      <FloatingImage image="lightning" size={35} className="top-[10%] left-[5%]" delay={0} />
      <FloatingImage image="lightning" size={25} className="bottom-[20%] left-[15%]" delay={2} />
      
      {/* Music notes */}
      <FloatingImage image="music-note" size={40} className="top-[15%] right-[20%]" delay={0.5} />
      <FloatingImage image="music-note" size={30} className="bottom-[30%] right-[8%]" delay={1.5} />
      
      {/* Microphones */}
      <FloatingImage image="microphone" size={35} className="top-[30%] right-[10%]" delay={1} />
      <FloatingImage image="microphone" size={28} className="bottom-[15%] right-[25%]" delay={2.5} />
      
      {/* Stars */}
      <FloatingImage image="stars" size={45} className="top-[50%] left-[8%]" delay={1} />
      <FloatingImage image="stars" size={35} className="top-[70%] right-[15%]" delay={0.8} />
    </div>
  );
};
