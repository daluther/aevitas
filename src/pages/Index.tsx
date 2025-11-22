import Hero from "@/components/Hero";
import WaitlistSection from "@/components/WaitlistSection";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="bg-background">
      <Hero />
      <WaitlistSection />
      <Navigation />
    </div>
  );
};

export default Index;
