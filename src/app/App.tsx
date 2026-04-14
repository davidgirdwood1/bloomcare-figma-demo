import { Footer } from "./sections/Footer";
import { FooterCtaSection } from "./sections/FooterCtaSection";
import { BookingSection } from "./sections/BookingSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HeroSection } from "./sections/HeroSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <BookingSection />
      <FooterCtaSection />
      <Footer />
    </div>
  );
}
