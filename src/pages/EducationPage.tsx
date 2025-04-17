import SchoolLayout from "@/components/school/SchoolLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, BookOpen, Award, Flask, PenTool, Calculator } from "lucide-react";

const EducationPage = () => {
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Образование</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            В Лицее №83 реализуются программы начального общего, основного общего и среднего общего образования
            с углубленным изучением отдельных предметов.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="primary" className="mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="primary">Начальная школа</TabsTrigger>
            <TabsTrigger value="middle">Основная школа</TabsTrigger>
            <TabsTrigger value="high">Старшая школа</TabsTrigger>
          </TabsList>
          <TabsContent value="primary" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-bold">Начальное общее образование (1-4 классы)</h3>
                </div>
                <p className="mb-4">
                  В начальной школе формируется фундамент знаний, умений и навыков, необходимых для дальнейшего обучения. 
                  Образовательная программа включает:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Изучение основных предметов в соответствии с ФГОС</li>
                  <li>Углубленное изучение английского языка со 2-го класса</li>
                  <li>Курс "Основы математической логики"</li>
                  <li>Развивающие занятия по информатике</li>
                </ul>
                <p>
                  В начальной школе активно применяются игровые и проектные методики обучения, 
                  что помогает детям легко адаптироваться к школьной жизни и полюбить учебу.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="middle" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <PenTool className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-bold">Основное общее образование (5-9 классы)</h3>
                </div>
                <p className="mb-4">
                  В 5-9 классах реализуются программы углубленного изучения отдельных предметов. 
                  Образовательные направления:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Calculator className="h-5 w-5 text-primary mr-2" />
                      Физико-математическое
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Углубленное изучение математики, физики и информатики. 
                      Дополнительные курсы по программированию и робототехнике.
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Flask className="h-5 w-5 text-primary mr-2" />
                      Естественно-научное
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Углубленное изучение биологии, химии и физики. 
                      Практические занятия в лабораториях, экскурсии на производства.
                    </p>
                  </div>
                </div>
                <p>
                  В основной школе большое внимание уделяется профориентационной работе, 
                  что помогает учащимся осознанно выбрать направление для дальнейшего обучения.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="high" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-xl font-bold">Среднее общее образование (10-11 классы)</h3>
                </div>
                <p className="mb-4">
                  В старшей школе реализуется профильное обучение по следующим направлениям:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2 text-center">Технический профиль</h4>
                    <p className="text-sm text-muted-foreground">
                      Углубленное изучение математики, физики, информатики.
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2 text-center">Естественно-научный профиль</h4>
                    <p className="text-sm text-muted-foreground">
                      Углубленное изучение химии, биологии, математики.
                    </p>
                  </div>
                  <div className="p-4 border rounded-md">
                    <h4 className="font-medium mb-2 text-center">Социально-экономический профиль</h4>
                    <p className="text-sm text-muted-foreground">
                      Углубленное изучение математики, обществознания, экономики, права.
                    </p>
                  </div>
                </div>
                <p className="mb-4">
                  Образовательная программа старшей школы включает:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Подготовку к ЕГЭ и олимпиадам</li>
                  <li>Индивидуальные проекты</li>
                  <li>Сотрудничество с вузами (КФУ, КНИТУ, КГЭУ)</li>
                  <li>Профориентационные экскурсии и встречи с представителями профессий</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        <h2 className="text-2xl font-bold mb-6">Дополнительное образование</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Спортивные секции</CardTitle>
              <CardDescription>
                Развитие физических навыков и командного духа
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-1">
                <li>Волейбол</li>
                <li>Баскетбол</li>
                <li>Футбол</li>
                <li>Шахматы</li>
                <li>Настольный теннис</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Творческие студии</CardTitle>
              <CardDescription>
                Развитие талантов и творческих способностей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-1">
                <li>Вокальная студия</li>
                <li>Театральный кружок</li>
                <li>Изобразительное искусство</li>
                <li>Хореография</li>
                <li>Литературное творчество</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Научные кружки</CardTitle>
              <CardDescription>
                Углубленное изучение предметов и подготовка к олимпиадам
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-1">
                <li>Робототехника</li>
                <li>Программирование</li>
                <li>Юный физик</li>
                <li>Химическая лаборатория</li>
                <li>Математический клуб</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-accent p-6 rounded-lg">
          <div className="flex items-center mb-4">
            <Award className="h-6 w-6 text-primary mr-3" />
            <h3 className="text-xl font-bold">Образовательные достижения</h3>
          </div>
          <p className="mb-4">
            Лицей №83 - Центр образования гордится высокими результатами своих учеников:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">ЕГЭ и ОГЭ</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Средний балл ЕГЭ по профильным предметам – более 85</li>
                <li>100 баллов на ЕГЭ получили 12 выпускников за последние 3 года</li>
                <li>98% выпускников поступают в выбранные вузы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Олимпиады и конкурсы</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>25 призеров региональных олимпиад ежегодно</li>
                <li>12 призеров всероссийских олимпиад за последние 3 года</li>
                <li>Победители международных конкурсов по математике и информатике</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
};

export default EducationPage;