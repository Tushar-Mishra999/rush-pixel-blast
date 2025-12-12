import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { LegacySection } from "@/components/LegacySection";
import { EventsPreview } from "@/components/EventsPreview";
import { SponsorsSection } from "@/components/SponsorsSection";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";

const Index = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    return !sessionStorage.getItem("rush_loaded");
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem("rush_loaded", "true");
    setShowPreloader(false);
  };

  return (
    <>
      {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <MarqueeStrip />
          <LegacySection />
          <EventsPreview />
          <SponsorsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
