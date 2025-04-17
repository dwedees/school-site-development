import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-primary/5 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Добро пожаловать в Лицей №83
            </h1>
            <p className="text-lg mb-6 text-muted-foreground">
              Центр образования Приволжского района г. Казани — 
              место, где каждый ученик может раскрыть свой потенциал и стать успешным.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/about">О нашем лицее</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Здание лицея" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
              <p className="font-bold">Прием документов открыт!</p>
              <p className="text-sm">Успейте подать заявление</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="hidden md:block absolute top-0 right-0 w-48 h-48 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;