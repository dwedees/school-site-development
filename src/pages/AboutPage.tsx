import SchoolLayout from "@/components/school/SchoolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutPage = () => {
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">О нашей школе</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Школа №1 была основана в 1998 году и за это время стала одним из ведущих 
            образовательных учреждений города. Мы гордимся нашими выпускниками и их достижениями.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
            <p className="mb-4">
              Создать образовательную среду, которая поможет каждому ученику раскрыть 
              свой потенциал, развить критическое мышление и стать успешным в современном мире.
            </p>
            <p>
              Мы стремимся не только дать знания, но и воспитать в наших учениках 
              ответственность, трудолюбие и уважение к окружающим.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Школьное здание" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <Tabs defaultValue="teachers" className="mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="teachers">Преподаватели</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
            <TabsTrigger value="facilities">Инфраструктура</TabsTrigger>
          </TabsList>
          <TabsContent value="teachers" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Наши преподаватели</h3>
                <p className="mb-4">
                  В нашей школе работают высококвалифицированные педагоги, среди которых:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>10 преподавателей высшей категории</li>
                  <li>15 преподавателей первой категории</li>
                  <li>5 кандидатов наук</li>
                  <li>12 победителей конкурса "Учитель года"</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Наши достижения</h3>
                <p className="mb-4">
                  За последние годы наши ученики добились значительных успехов:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>15 победителей всероссийских олимпиад</li>
                  <li>50+ призеров региональных конкурсов</li>
                  <li>95% выпускников поступают в ведущие вузы страны</li>
                  <li>Школа входит в ТОП-100 лучших школ России</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="facilities" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Наша инфраструктура</h3>
                <p className="mb-4">
                  Школа располагает современной инфраструктурой для обучения и развития:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>30 оборудованных учебных кабинетов</li>
                  <li>2 компьютерных класса</li>
                  <li>Современная библиотека с медиатекой</li>
                  <li>Спортивный и актовый залы</li>
                  <li>Столовая с качественным питанием</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SchoolLayout>
  );
};

export default AboutPage;