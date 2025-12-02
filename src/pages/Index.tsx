import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { LegacySection } from "@/components/LegacySection";
import { EventsPreview } from "@/components/EventsPreview";
import { SponsorsSection } from "@/components/SponsorsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
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
  );
};

export default Index;
