import { BookOpen, Medal, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Высококачественное образование",
    description: "Лицейские и профильные классы с углубленным изучением предметов"
  },
  {
    icon: <Medal className="h-12 w-12 text-primary" />,
    title: "Достижения учеников",
    description: "Победители и призеры олимпиад и конкурсов регионального и федерального уровней"
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Опытные педагоги",
    description: "Высококвалифицированные учителя, в том числе кандидаты наук и заслуженные педагоги"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Преимущества нашего лицея</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-t-4 border-t-primary text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;