import SchoolLayout from "@/components/school/SchoolLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutPage = () => {
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">О лицее</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            МБОУ «Лицей №83 - Центр образования» Приволжского района г. Казани – 
            современное образовательное учреждение с богатой историей и традициями.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">История лицея</h2>
            <p className="mb-4">
              Лицей №83 был основан в 1983 году как общеобразовательная школа. В 2005 году 
              учреждение получило статус лицея, а в 2018 году было преобразовано в Центр образования.
            </p>
            <p>
              За годы работы лицей выпустил более 1500 выпускников, многие из которых 
              стали известными учеными, врачами, инженерами, педагогами и общественными деятелями.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img 
              src="/placeholder.svg" 
              alt="Здание лицея" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <Tabs defaultValue="mission" className="mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="mission">Миссия и цели</TabsTrigger>
            <TabsTrigger value="teachers">Педагогический состав</TabsTrigger>
            <TabsTrigger value="achievements">Достижения</TabsTrigger>
          </TabsList>
          <TabsContent value="mission" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Миссия лицея</h3>
                <p className="mb-4">
                  Создание образовательной среды, способствующей формированию личности, готовой 
                  к успешному продолжению образования, творческой самореализации и адаптации к 
                  современным социальным условиям.
                </p>
                <h4 className="text-lg font-medium mb-2">Основные цели:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Обеспечение высокого уровня образования в соответствии с государственными стандартами</li>
                  <li>Развитие интеллектуального и творческого потенциала учащихся</li>
                  <li>Формирование гармонично развитой личности</li>
                  <li>Подготовка к успешному поступлению в ведущие вузы страны</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="teachers" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Педагогический состав</h3>
                <p className="mb-4">
                  В нашем лицее работают высококвалифицированные педагоги, среди которых:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>5 кандидатов наук</li>
                  <li>25 учителей высшей категории</li>
                  <li>18 учителей первой категории</li>
                  <li>9 заслуженных учителей РТ</li>
                  <li>12 победителей профессиональных конкурсов</li>
                </ul>
                <p className="mt-4">
                  Наши педагоги регулярно проходят повышение квалификации, участвуют в научно-практических 
                  конференциях и внедряют в образовательный процесс инновационные технологии.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="achievements" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Достижения лицея</h3>
                <p className="mb-4">
                  За последние годы лицей и его ученики добились значительных успехов:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Входит в ТОП-50 лучших школ Республики Татарстан</li>
                  <li>25 победителей и призеров республиканских олимпиад за последние 3 года</li>
                  <li>12 призеров всероссийских олимпиад</li>
                  <li>98% выпускников поступают в ведущие вузы России</li>
                  <li>Победитель конкурса "Лучшая школа России" (2020)</li>
                  <li>Опорная площадка для проведения городских и республиканских семинаров</li>
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