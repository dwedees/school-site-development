import SchoolLayout from "@/components/school/SchoolLayout";
import HeroSection from "@/components/school/HeroSection";
import LatestNews from "@/components/school/LatestNews";
import FeaturesSection from "@/components/school/FeaturesSection";
import StatsSection from "@/components/school/StatsSection";
import ContactForm from "@/components/school/ContactForm";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <SchoolLayout>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <LatestNews />
      
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Свяжитесь с нами</h2>
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </SchoolLayout>
  );
};

export default Index;