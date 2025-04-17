import SchoolLayout from "@/components/school/SchoolLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, FileText, Info, ClipboardList, BookOpen } from "lucide-react";

const ParentsPage = () => {
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Информация для родителей</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Важная информация для родителей учащихся Лицея №83 - Центра образования.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="info" className="mb-12">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
            <TabsTrigger value="info">Общая информация</TabsTrigger>
            <TabsTrigger value="docs">Документы</TabsTrigger>
            <TabsTrigger value="faq">Вопросы и ответы</TabsTrigger>
          </TabsList>
          
          <TabsContent value="info" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-primary mr-2" />
                    <CardTitle>Учебный график</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Учебный год 2022-2023</h4>
                      <p className="text-sm text-muted-foreground">1 сентября 2022 г. - 31 мая 2023 г.</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Каникулы</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>Осенние: 29 октября - 6 ноября 2022 г.</li>
                        <li>Зимние: 29 декабря 2022 г. - 10 января 2023 г.</li>
                        <li>Весенние: 24 марта - 2 апреля 2023 г.</li>
                        <li>Летние: 1 июня - 31 августа 2023 г.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Дополнительные каникулы для 1-х классов</h4>
                      <p className="text-sm text-muted-foreground">13 февраля - 19 февраля 2023 г.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center">
                    <ClipboardList className="h-5 w-5 text-primary mr-2" />
                    <CardTitle>Режим работы</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-1">Учебная неделя</h4>
                      <p className="text-sm text-muted-foreground">1-6 классы: 5-дневная</p>
                      <p className="text-sm text-muted-foreground">7-11 классы: 6-дневная</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Сменность обучения</h4>
                      <p className="text-sm text-muted-foreground">1, 5, 9-11 классы - первая смена</p>
                      <p className="text-sm text-muted-foreground">2-4, 6-8 классы - вторая смена</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Расписание звонков (1 смена)</h4>
                      <p className="text-sm text-muted-foreground">1 урок: 8:30 - 9:15</p>
                      <p className="text-sm text-muted-foreground">2 урок: 9:25 - 10:10</p>
                      <p className="text-sm text-muted-foreground">3 урок: 10:30 - 11:15</p>
                      <p className="text-sm text-muted-foreground">4 урок: 11:35 - 12:20</p>
                      <p className="text-sm text-muted-foreground">5 урок: 12:40 - 13:25</p>
                      <p className="text-sm text-muted-foreground">6 урок: 13:35 - 14:20</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="mb-6">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Info className="h-5 w-5 text-primary mr-2" />
                  <CardTitle>Питание</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    В лицее организовано горячее питание для всех учащихся. Меню разработано с учетом возрастных особенностей 
                    детей и соответствует всем санитарным нормам.
                  </p>
                  <div>
                    <h4 className="font-medium mb-1">Стоимость питания</h4>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Категория</TableHead>
                          <TableHead>Стоимость</TableHead>
                          <TableHead>Примечание</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Завтрак (1-4 классы)</TableCell>
                          <TableCell>Бесплатно</TableCell>
                          <TableCell>По федеральной программе</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Обед (1-4 классы)</TableCell>
                          <TableCell>80 руб.</TableCell>
                          <TableCell>По выбору родителей</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Завтрак (5-11 классы)</TableCell>
                          <TableCell>65 руб.</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Обед (5-11 классы)</TableCell>
                          <TableCell>90 руб.</TableCell>
                          <TableCell>-</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                  <p>
                    Для льготных категорий учащихся предусмотрено бесплатное питание (дети из многодетных и малообеспеченных семей, 
                    дети с ОВЗ и инвалидностью).
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-2" />
                  <CardTitle>Электронный дневник</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  В лицее используется электронный дневник "Edu.Tatar.ru", который позволяет родителям:
                </p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Следить за успеваемостью ребенка</li>
                  <li>Контролировать посещаемость занятий</li>
                  <li>Видеть домашние задания</li>
                  <li>Общаться с учителями</li>
                  <li>Получать информацию о мероприятиях и собраниях</li>
                </ul>
                <p>
                  Логин и пароль для доступа к электронному дневнику можно получить у классного руководителя.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="docs" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Необходимые документы</CardTitle>
                <CardDescription>
                  Документы, которые могут понадобиться родителям учащихся
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Документы для поступления в лицей</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <p className="font-medium">Заявление родителей</p>
                        <p className="text-sm text-muted-foreground">Образец заявления можно скачать или получить в канцелярии лицея</p>
                      </li>
                      <li>
                        <p className="font-medium">Копия свидетельства о рождении ребенка</p>
                      </li>
                      <li>
                        <p className="font-medium">Копия паспорта родителя (законного представителя)</p>
                      </li>
                      <li>
                        <p className="font-medium">Справка о регистрации ребенка по месту жительства</p>
                      </li>
                      <li>
                        <p className="font-medium">Медицинская карта ребенка (форма 026/у)</p>
                      </li>
                      <li>
                        <p className="font-medium">Личное дело (при переводе из другой школы)</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Документы для льготного питания</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <p className="font-medium">Заявление на предоставление льготного питания</p>
                      </li>
                      <li>
                        <p className="font-medium">Справка о составе семьи</p>
                      </li>
                      <li>
                        <p className="font-medium">Справка о доходах (для малообеспеченных семей)</p>
                      </li>
                      <li>
                        <p className="font-medium">Удостоверение многодетной семьи (для многодетных семей)</p>
                      </li>
                      <li>
                        <p className="font-medium">Заключение ПМПК (для детей с ОВЗ)</p>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Бланки и формы</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Наименование документа</TableHead>
                          <TableHead className="text-right">Действия</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Заявление на поступление в 1 класс</TableCell>
                          <TableCell className="text-right">
                            <span className="text-primary cursor-pointer">Скачать</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Заявление на перевод из другой школы</TableCell>
                          <TableCell className="text-right">
                            <span className="text-primary cursor-pointer">Скачать</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Заявление на льготное питание</TableCell>
                          <TableCell className="text-right">
                            <span className="text-primary cursor-pointer">Скачать</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Согласие на обработку персональных данных</TableCell>
                          <TableCell className="text-right">
                            <span className="text-primary cursor-pointer">Скачать</span>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Заявление на выбор родного языка</TableCell>
                          <TableCell className="text-right">
                            <span className="text-primary cursor-pointer">Скачать</span>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Часто задаваемые вопросы</CardTitle>
                <CardDescription>
                  Ответы на наиболее распространенные вопросы родителей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Как записать ребенка в лицей?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Для записи ребенка в 1 класс необходимо подать заявление через портал Госуслуг или при личном посещении лицея. 
                        Прием заявлений начинается 1 апреля и продолжается до заполнения мест.
                      </p>
                      <p className="mt-2">
                        Для перевода в другие классы необходимо обратиться в канцелярию лицея с необходимыми документами при наличии свободных мест.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Какая школьная форма принята в лицее?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        В лицее принята единая школьная форма:
                      </p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Для мальчиков: темно-синий костюм (брюки и пиджак), белая или голубая рубашка</li>
                        <li>Для девочек: темно-синий костюм (юбка/брюки и пиджак), белая или голубая блузка</li>
                      </ul>
                      <p className="mt-2">
                        На уроки физкультуры необходима спортивная форма: футболка, спортивные шорты или брюки, спортивная обувь.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Как организовано питание в лицее?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        В лицее работает столовая, где организовано горячее питание для всех учащихся. Учащиеся 1-4 классов получают бесплатные завтраки. 
                        Для остальных классов питание организовано за счет родительских средств.
                      </p>
                      <p className="mt-2">
                        Оплата питания производится через систему "Карта школьника" или по квитанции. 
                        Меню разрабатывается на неделю и публикуется на сайте лицея.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Как получить доступ к электронному дневнику?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Для получения доступа к электронному дневнику необходимо обратиться к классному руководителю. 
                        Вам будут выданы логин и пароль для входа в систему "Edu.Tatar.ru".
                      </p>
                      <p className="mt-2">
                        После первого входа рекомендуется изменить пароль. В случае утери данных для входа, необходимо повторно обратиться к классному руководителю.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Как попасть в профильный класс?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Для поступления в профильные классы (10-11) проводится конкурсный отбор на основании:
                      </p>
                      <ul className="list-disc pl-6 mt-2">
                        <li>Результатов ОГЭ по профильным предметам</li>
                        <li>Среднего балла аттестата</li>
                        <li>Портфолио достижений (победы в олимпиадах, конкурсах)</li>
                      </ul>
                      <p className="mt-2">
                        Информация о наборе в профильные классы публикуется на сайте лицея в мае. 
                        Прием документов осуществляется после получения аттестатов об основном общем образовании.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </SchoolLayout>
  );
};

export default ParentsPage;