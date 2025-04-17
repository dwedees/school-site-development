import SchoolLayout from "@/components/school/SchoolLayout";
import HeroSection from "@/components/school/HeroSection";
import LatestNews from "@/components/school/LatestNews";
import FeaturesSection from "@/components/school/FeaturesSection";
import StatsSection from "@/components/school/StatsSection";
import ContactForm from "@/components/school/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <SchoolLayout>
      <HeroSection />
      <FeaturesSection />
      
      {/* Направления обучения */}
      <section className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Направления обучения</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <GraduationCap className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Физико-математическое</h3>
                  <p className="text-muted-foreground">Углубленное изучение математики, физики и информатики. Подготовка к олимпиадам и ЕГЭ.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Гуманитарное</h3>
                  <p className="text-muted-foreground">Углубленное изучение литературы, истории, обществознания и иностранных языков.</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Естественно-научное</h3>
                  <p className="text-muted-foreground">Углубленное изучение химии, биологии и физики для будущих медиков и исследователей.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
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