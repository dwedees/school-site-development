import { BookOpen, Rocket, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Качественное образование",
    description: "Высококвалифицированные преподаватели и современные методики обучения"
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Дружный коллектив",
    description: "Теплая и поддерживающая атмосфера для всех учеников нашей школы"
  },
  {
    icon: <Rocket className="h-12 w-12 text-primary" />,
    title: "Развитие талантов",
    description: "Множество кружков и секций для всестороннего развития учеников"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нашу школу</h2>
        
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