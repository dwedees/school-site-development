import SchoolLayout from "@/components/school/SchoolLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

const SchedulePage = () => {
  const [selectedClass, setSelectedClass] = useState("1А");
  
  // Список всех классов
  const classList = [
    "1А", "1Б", "1В",
    "2А", "2Б", "2В",
    "3А", "3Б", "3В",
    "4А", "4Б", "4В",
    "5А", "5Б", "5В",
    "6А", "6Б", "6В",
    "7А", "7Б", "7В",
    "8А", "8Б", "8В",
    "9А", "9Б", "9В",
    "10А", "10Б", "10В",
    "11А", "11Б", "11В"
  ];

  // Пример расписания (можно заменить на реальные данные)
  const scheduleData = {
    "1А": {
      "Понедельник": [
        { time: "8:30 - 9:15", subject: "Русский язык", room: "101" },
        { time: "9:25 - 10:10", subject: "Математика", room: "101" },
        { time: "10:30 - 11:15", subject: "Окружающий мир", room: "101" },
        { time: "11:35 - 12:20", subject: "Физкультура", room: "Спортзал" }
      ],
      "Вторник": [
        { time: "8:30 - 9:15", subject: "Математика", room: "101" },
        { time: "9:25 - 10:10", subject: "Чтение", room: "101" },
        { time: "10:30 - 11:15", subject: "ИЗО", room: "101" },
        { time: "11:35 - 12:20", subject: "Музыка", room: "102" }
      ],
      "Среда": [
        { time: "8:30 - 9:15", subject: "Русский язык", room: "101" },
        { time: "9:25 - 10:10", subject: "Математика", room: "101" },
        { time: "10:30 - 11:15", subject: "Технология", room: "101" },
        { time: "11:35 - 12:20", subject: "Физкультура", room: "Спортзал" }
      ],
      "Четверг": [
        { time: "8:30 - 9:15", subject: "Чтение", room: "101" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "101" },
        { time: "10:30 - 11:15", subject: "Математика", room: "101" },
        { time: "11:35 - 12:20", subject: "Окружающий мир", room: "101" }
      ],
      "Пятница": [
        { time: "8:30 - 9:15", subject: "Русский язык", room: "101" },
        { time: "9:25 - 10:10", subject: "Математика", room: "101" },
        { time: "10:30 - 11:15", subject: "Чтение", room: "101" },
        { time: "11:35 - 12:20", subject: "Физкультура", room: "Спортзал" }
      ]
    },
    "5А": {
      "Понедельник": [
        { time: "8:30 - 9:15", subject: "Русский язык", room: "205" },
        { time: "9:25 - 10:10", subject: "Математика", room: "205" },
        { time: "10:30 - 11:15", subject: "История", room: "208" },
        { time: "11:35 - 12:20", subject: "Английский язык", room: "301" },
        { time: "12:40 - 13:25", subject: "Физкультура", room: "Спортзал" }
      ],
      "Вторник": [
        { time: "8:30 - 9:15", subject: "Математика", room: "205" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "205" },
        { time: "10:30 - 11:15", subject: "Английский язык", room: "301" },
        { time: "11:35 - 12:20", subject: "География", room: "210" },
        { time: "12:40 - 13:25", subject: "Биология", room: "215" }
      ],
      "Среда": [
        { time: "8:30 - 9:15", subject: "Литература", room: "205" },
        { time: "9:25 - 10:10", subject: "Математика", room: "205" },
        { time: "10:30 - 11:15", subject: "Информатика", room: "309" },
        { time: "11:35 - 12:20", subject: "ИЗО", room: "207" },
        { time: "12:40 - 13:25", subject: "Технология", room: "110" }
      ],
      "Четверг": [
        { time: "8:30 - 9:15", subject: "Русский язык", room: "205" },
        { time: "9:25 - 10:10", subject: "Математика", room: "205" },
        { time: "10:30 - 11:15", subject: "История", room: "208" },
        { time: "11:35 - 12:20", subject: "Музыка", room: "102" },
        { time: "12:40 - 13:25", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "8:30 - 9:15", subject: "Литература", room: "205" },
        { time: "9:25 - 10:10", subject: "Математика", room: "205" },
        { time: "10:30 - 11:15", subject: "Английский язык", room: "301" },
        { time: "11:35 - 12:20", subject: "Обществознание", room: "208" },
        { time: "12:40 - 13:25", subject: "ОДНКНР", room: "208" }
      ],
      "Суббота": [
        { time: "8:30 - 9:15", subject: "Русский язык", room: "205" },
        { time: "9:25 - 10:10", subject: "Биология", room: "215" },
        { time: "10:30 - 11:15", subject: "Технология", room: "110" }
      ]
    },
    "9А": {
      "Понедельник": [
        { time: "8:30 - 9:15", subject: "Алгебра", room: "306" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "306" },
        { time: "10:30 - 11:15", subject: "Физика", room: "312" },
        { time: "11:35 - 12:20", subject: "Английский язык", room: "301" },
        { time: "12:40 - 13:25", subject: "История", room: "208" },
        { time: "13:35 - 14:20", subject: "Химия", room: "315" }
      ],
      "Вторник": [
        { time: "8:30 - 9:15", subject: "Геометрия", room: "306" },
        { time: "9:25 - 10:10", subject: "Литература", room: "306" },
        { time: "10:30 - 11:15", subject: "Информатика", room: "309" },
        { time: "11:35 - 12:20", subject: "Биология", room: "215" },
        { time: "12:40 - 13:25", subject: "География", room: "210" },
        { time: "13:35 - 14:20", subject: "Физкультура", room: "Спортзал" }
      ],
      "Среда": [
        { time: "8:30 - 9:15", subject: "Алгебра", room: "306" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "306" },
        { time: "10:30 - 11:15", subject: "Физика", room: "312" },
        { time: "11:35 - 12:20", subject: "Английский язык", room: "301" },
        { time: "12:40 - 13:25", subject: "ОБЖ", room: "110" },
        { time: "13:35 - 14:20", subject: "Обществознание", room: "208" }
      ],
      "Четверг": [
        { time: "8:30 - 9:15", subject: "Геометрия", room: "306" },
        { time: "9:25 - 10:10", subject: "Литература", room: "306" },
        { time: "10:30 - 11:15", subject: "Химия", room: "315" },
        { time: "11:35 - 12:20", subject: "История", room: "208" },
        { time: "12:40 - 13:25", subject: "Информатика", room: "309" },
        { time: "13:35 - 14:20", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "8:30 - 9:15", subject: "Алгебра", room: "306" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "306" },
        { time: "10:30 - 11:15", subject: "Биология", room: "215" },
        { time: "11:35 - 12:20", subject: "Английский язык", room: "301" },
        { time: "12:40 - 13:25", subject: "География", room: "210" },
        { time: "13:35 - 14:20", subject: "Родной язык", room: "306" }
      ],
      "Суббота": [
        { time: "8:30 - 9:15", subject: "Физика", room: "312" },
        { time: "9:25 - 10:10", subject: "Литература", room: "306" },
        { time: "10:30 - 11:15", subject: "Проектная деятельность", room: "306" },
        { time: "11:35 - 12:20", subject: "Подготовка к ОГЭ (матем.)", room: "306" }
      ]
    },
    "11А": {
      "Понедельник": [
        { time: "8:30 - 9:15", subject: "Алгебра", room: "307" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "307" },
        { time: "10:30 - 11:15", subject: "Физика", room: "312" },
        { time: "11:35 - 12:20", subject: "Английский язык", room: "302" },
        { time: "12:40 - 13:25", subject: "История", room: "209" },
        { time: "13:35 - 14:20", subject: "Астрономия", room: "312" }
      ],
      "Вторник": [
        { time: "8:30 - 9:15", subject: "Геометрия", room: "307" },
        { time: "9:25 - 10:10", subject: "Литература", room: "307" },
        { time: "10:30 - 11:15", subject: "Информатика", room: "310" },
        { time: "11:35 - 12:20", subject: "Биология", room: "216" },
        { time: "12:40 - 13:25", subject: "Обществознание", room: "209" },
        { time: "13:35 - 14:20", subject: "Физкультура", room: "Спортзал" }
      ],
      "Среда": [
        { time: "8:30 - 9:15", subject: "Алгебра", room: "307" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "307" },
        { time: "10:30 - 11:15", subject: "Физика", room: "312" },
        { time: "11:35 - 12:20", subject: "Английский язык", room: "302" },
        { time: "12:40 - 13:25", subject: "ОБЖ", room: "111" },
        { time: "13:35 - 14:20", subject: "Химия", room: "315" }
      ],
      "Четверг": [
        { time: "8:30 - 9:15", subject: "Геометрия", room: "307" },
        { time: "9:25 - 10:10", subject: "Литература", room: "307" },
        { time: "10:30 - 11:15", subject: "История", room: "209" },
        { time: "11:35 - 12:20", subject: "Информатика", room: "310" },
        { time: "12:40 - 13:25", subject: "География", room: "210" },
        { time: "13:35 - 14:20", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "8:30 - 9:15", subject: "Алгебра", room: "307" },
        { time: "9:25 - 10:10", subject: "Русский язык", room: "307" },
        { time: "10:30 - 11:15", subject: "Физика", room: "312" },
        { time: "11:35 - 12:20", subject: "Английский язык", room: "302" },
        { time: "12:40 - 13:25", subject: "Обществознание", room: "209" },
        { time: "13:35 - 14:20", subject: "Индивидуальный проект", room: "307" }
      ],
      "Суббота": [
        { time: "8:30 - 9:15", subject: "Химия", room: "315" },
        { time: "9:25 - 10:10", subject: "Биология", room: "216" },
        { time: "10:30 - 11:15", subject: "Подготовка к ЕГЭ (матем.)", room: "307" },
        { time: "11:35 - 12:20", subject: "Подготовка к ЕГЭ (рус.яз.)", room: "307" }
      ]
    }
  };
  
  // Добавляем базовое расписание для всех остальных классов
  classList.forEach(className => {
    if (!scheduleData[className]) {
      // Копируем расписание из ближайшего доступного класса того же уровня
      const level = className.match(/\d+/)[0];
      let template;
      
      if (level === "1" || level === "2" || level === "3" || level === "4") {
        template = scheduleData["1А"];
      } else if (level === "5" || level === "6" || level === "7" || level === "8") {
        template = scheduleData["5А"];
      } else if (level === "9") {
        template = scheduleData["9А"];
      } else {
        template = scheduleData["11А"];
      }
      
      scheduleData[className] = { ...template };
    }
  });
  
  const handleClassChange = (value) => {
    setSelectedClass(value);
  };
  
  // Получаем расписание для выбранного класса
  const currentSchedule = scheduleData[selectedClass] || {};
  const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  
  // Группируем классы по параллелям для удобства выбора
  const groupedClasses = {};
  classList.forEach(className => {
    const grade = className.match(/\d+/)[0];
    if (!groupedClasses[grade]) {
      groupedClasses[grade] = [];
    }
    groupedClasses[grade].push(className);
  });
  
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Расписание уроков</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Расписание занятий для всех классов МБОУ «Лицей №83 - Центр образования».
            Обновления расписания публикуются каждую пятницу на следующую учебную неделю.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Расписание звонков
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">1 смена</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>1 урок: <span className="font-mono">8:30 - 9:15</span></div>
                    <div>2 урок: <span className="font-mono">9:25 - 10:10</span></div>
                    <div>3 урок: <span className="font-mono">10:30 - 11:15</span></div>
                    <div>4 урок: <span className="font-mono">11:35 - 12:20</span></div>
                    <div>5 урок: <span className="font-mono">12:40 - 13:25</span></div>
                    <div>6 урок: <span className="font-mono">13:35 - 14:20</span></div>
                    <div>7 урок: <span className="font-mono">14:30 - 15:15</span></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">2 смена</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>1 урок: <span className="font-mono">13:35 - 14:20</span></div>
                    <div>2 урок: <span className="font-mono">14:30 - 15:15</span></div>
                    <div>3 урок: <span className="font-mono">15:25 - 16:10</span></div>
                    <div>4 урок: <span className="font-mono">16:20 - 17:05</span></div>
                    <div>5 урок: <span className="font-mono">17:15 - 18:00</span></div>
                    <div>6 урок: <span className="font-mono">18:10 - 18:55</span></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="w-full md:w-2/3">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                Текущая неделя
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <strong>Текущая неделя:</strong> с 15 по 20 мая 2023 г.
                </p>
                <p>
                  <strong>Учебная неделя:</strong> 35-я неделя
                </p>
                <p>
                  <strong>Особые события:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>17 мая (среда) - сокращенный день, уроки по 40 минут</li>
                  <li>19 мая (пятница) - общешкольное родительское собрание, 18:00</li>
                  <li>20 мая (суббота) - день здоровья для 5-7 классов</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <div className="w-full md:w-auto">
              <Label htmlFor="class-select" className="mb-2 block">Выберите класс</Label>
              <Select value={selectedClass} onValueChange={handleClassChange}>
                <SelectTrigger className="w-full md:w-[200px]" id="class-select">
                  <SelectValue placeholder="Выберите класс" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(groupedClasses).sort((a, b) => Number(a) - Number(b)).map(grade => (
                    <div key={grade}>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        {grade} класс
                      </div>
                      {groupedClasses[grade].map(className => (
                        <SelectItem key={className} value={className}>
                          {className}
                        </SelectItem>
                      ))}
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-full md:w-auto flex-1">
              <p className="text-sm text-muted-foreground">
                Текущее расписание для <span className="font-medium text-primary">{selectedClass}</span> класса.
                Классный руководитель: <span className="font-medium">{
                  selectedClass.match(/\d+/)[0] === "1" ? "Иванова Анна Петровна" :
                  selectedClass.match(/\d+/)[0] === "5" ? "Смирнова Елена Сергеевна" :
                  selectedClass.match(/\d+/)[0] === "9" ? "Петров Иван Алексеевич" : 
                  "Кузнецова Мария Владимировна"
                }</span>
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="Понедельник" className="w-full">
            <TabsList className="w-full flex flex-wrap mb-2">
              {weekdays.map(day => (
                <TabsTrigger 
                  key={day} 
                  value={day} 
                  className="flex-1"
                  disabled={!currentSchedule[day]}
                >
                  {day}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {weekdays.map(day => (
              <TabsContent key={day} value={day} className="mt-4">
                {currentSchedule[day] ? (
                  <Card>
                    <CardContent className="pt-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-16 md:w-32">№</TableHead>
                            <TableHead className="w-32 md:w-48">Время</TableHead>
                            <TableHead>Предмет</TableHead>
                            <TableHead className="text-right">Кабинет</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {currentSchedule[day].map((lesson, index) => (
                            <TableRow key={index}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell className="font-mono">{lesson.time}</TableCell>
                              <TableCell>{lesson.subject}</TableCell>
                              <TableCell className="text-right">{lesson.room}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    В этот день занятия не проводятся
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Дополнительная информация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>График контрольных работ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  График контрольных работ на текущую четверть можно скачать по ссылке ниже.
                </p>
                <div className="text-primary cursor-pointer">Скачать график контрольных работ</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Замены в расписании</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2">
                  Замены в расписании публикуются ежедневно до 15:00 на следующий учебный день.
                </p>
                <p className="mb-4">
                  Проверяйте изменения в расписании в разделе "Замены" на главной странице сайта.
                </p>
                <div className="text-primary cursor-pointer">Посмотреть замены на 16.05.2023</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
};

export default SchedulePage;