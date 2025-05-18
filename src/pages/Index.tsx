
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PlatformPreview from "@/components/PlatformPreview";
import FeaturesSection from "@/components/FeaturesSection";
import Testimonials from "@/components/Testimonials";
import OfferBanner from "@/components/OfferBanner";
import FaqSection from "@/components/FaqSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PlatformPreview />
      <FeaturesSection />
      <Testimonials />
      <OfferBanner />
      <FaqSection />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;
