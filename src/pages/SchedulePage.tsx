import SchoolLayout from "@/components/school/SchoolLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";

// Мок данных для расписания
const scheduleData = {
  "5А": {
    monday: [
      { time: "8:30 - 9:15", subject: "Математика", teacher: "Иванова А.П.", room: "205" },
      { time: "9:25 - 10:10", subject: "Русский язык", teacher: "Петрова С.В.", room: "210" },
      { time: "10:30 - 11:15", subject: "История", teacher: "Смирнов Д.И.", room: "301" },
      { time: "11:35 - 12:20", subject: "Английский язык", teacher: "Козлова Е.А.", room: "208" },
      { time: "12:40 - 13:25", subject: "Физкультура", teacher: "Васильев П.Р.", room: "Спортзал" }
    ],
    tuesday: [
      { time: "8:30 - 9:15", subject: "Литература", teacher: "Петрова С.В.", room: "210" },
      { time: "9:25 - 10:10", subject: "Математика", teacher: "Иванова А.П.", room: "205" },
      { time: "10:30 - 11:15", subject: "Биология", teacher: "Николаева И.С.", room: "302" },
      { time: "11:35 - 12:20", subject: "География", teacher: "Федоров А.К.", room: "304" },
      { time: "12:40 - 13:25", subject: "Технология", teacher: "Сидоров В.М.", room: "105" }
    ],
    wednesday: [
      { time: "8:30 - 9:15", subject: "Русский язык", teacher: "Петрова С.В.", room: "210" },
      { time: "9:25 - 10:10", subject: "Математика", teacher: "Иванова А.П.", room: "205" },
      { time: "10:30 - 11:15", subject: "Физика", teacher: "Кузнецов В.А.", room: "303" },
      { time: "11:35 - 12:20", subject: "ИЗО", teacher: "Максимова О.Л.", room: "107" },
      { time: "12:40 - 13:25", subject: "Физкультура", teacher: "Васильев П.Р.", room: "Спортзал" }
    ]
  },
  "9Б": {
    monday: [
      { time: "8:30 - 9:15", subject: "Алгебра", teacher: "Соколова М.В.", room: "201" },
      { time: "9:25 - 10:10", subject: "Физика", teacher: "Кузнецов В.А.", room: "303" },
      { time: "10:30 - 11:15", subject: "Русский язык", teacher: "Антонова К.И.", room: "207" },
      { time: "11:35 - 12:20", subject: "Химия", teacher: "Морозова Л.П.", room: "305" },
      { time: "12:40 - 13:25", subject: "История", teacher: "Смирнов Д.И.", room: "301" },
      { time: "13:35 - 14:20", subject: "Информатика", teacher: "Григорьев С.П.", room: "201" }
    ],
    tuesday: [
      { time: "8:30 - 9:15", subject: "Геометрия", teacher: "Соколова М.В.", room: "201" },
      { time: "9:25 - 10:10", subject: "Литература", teacher: "Антонова К.И.", room: "207" },
      { time: "10:30 - 11:15", subject: "Английский язык", teacher: "Козлова Е.А.", room: "208" },
      { time: "11:35 - 12:20", subject: "Биология", teacher: "Николаева И.С.", room: "302" },
      { time: "12:40 - 13:25", subject: "География", teacher: "Федоров А.К.", room: "304" },
      { time: "13:35 - 14:20", subject: "Физкультура", teacher: "Васильев П.Р.", room: "Спортзал" }
    ],
    wednesday: [
      { time: "8:30 - 9:15", subject: "Русский язык", teacher: "Антонова К.И.", room: "207" },
      { time: "9:25 - 10:10", subject: "Алгебра", teacher: "Соколова М.В.", room: "201" },
      { time: "10:30 - 11:15", subject: "Физика", teacher: "Кузнецов В.А.", room: "303" },
      { time: "11:35 - 12:20", subject: "Обществознание", teacher: "Смирнов Д.И.", room: "301" },
      { time: "12:40 - 13:25", subject: "Информатика", teacher: "Григорьев С.П.", room: "201" },
      { time: "13:35 - 14:20", subject: "ОБЖ", teacher: "Никитин А.А.", room: "102" }
    ]
  },
  "11А": {
    monday: [
      { time: "8:30 - 9:15", subject: "Математика (проф.)", teacher: "Белов И.Г.", room: "203" },
      { time: "9:25 - 10:10", subject: "Физика (проф.)", teacher: "Кузнецов В.А.", room: "303" },
      { time: "10:30 - 11:15", subject: "Русский язык", teacher: "Воронцова Т.М.", room: "206" },
      { time: "11:35 - 12:20", subject: "Информатика (проф.)", teacher: "Григорьев С.П.", room: "201" },
      { time: "12:40 - 13:25", subject: "Английский язык", teacher: "Козлова Е.А.", room: "208" },
      { time: "13:35 - 14:20", subject: "История", teacher: "Смирнов Д.И.", room: "301" }
    ],
    tuesday: [
      { time: "8:30 - 9:15", subject: "Математика (проф.)", teacher: "Белов И.Г.", room: "203" },
      { time: "9:25 - 10:10", subject: "Литература", teacher: "Воронцова Т.М.", room: "206" },
      { time: "10:30 - 11:15", subject: "Физика (проф.)", teacher: "Кузнецов В.А.", room: "303" },
      { time: "11:35 - 12:20", subject: "Астрономия", teacher: "Кузнецов В.А.", room: "303" },
      { time: "12:40 - 13:25", subject: "Обществознание", teacher: "Смирнов Д.И.", room: "301" },
      { time: "13:35 - 14:20", subject: "Физкультура", teacher: "Васильев П.Р.", room: "Спортзал" }
    ],
    wednesday: [
      { time: "8:30 - 9:15", subject: "Русский язык", teacher: "Воронцова Т.М.", room: "206" },
      { time: "9:25 - 10:10", subject: "Математика (проф.)", teacher: "Белов И.Г.", room: "203" },
      { time: "10:30 - 11:15", subject: "Информатика (проф.)", teacher: "Григорьев С.П.", room: "201" },
      { time: "11:35 - 12:20", subject: "Физика (проф.)", teacher: "Кузнецов В.А.", room: "303" },
      { time: "12:40 - 13:25", subject: "Английский язык", teacher: "Козлова Е.А.", room: "208" },
      { time: "13:35 - 14:20", subject: "Индивидуальный проект", teacher: "Морозова Л.П.", room: "305" }
    ]
  }
};

// Списки классов и дней недели
const classes = ["5А", "9Б", "11А"];
const days = ["monday", "tuesday", "wednesday"];
const dayNames = {
  monday: "Понедельник",
  tuesday: "Вторник",
  wednesday: "Среда"
};

const SchedulePage = () => {
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Расписание занятий</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Актуальное расписание занятий для всех классов нашего лицея.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 max-w-xs">
          <Label htmlFor="class-select" className="mb-2 block">Выберите класс</Label>
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger id="class-select">
              <SelectValue placeholder="Выберите класс" />
            </SelectTrigger>
            <SelectContent>
              {classes.map(cls => (
                <SelectItem key={cls} value={cls}>{cls}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Tabs defaultValue="monday">
          <TabsList className="mb-8">
            {days.map(day => (
              <TabsTrigger key={day} value={day}>
                {dayNames[day as keyof typeof dayNames]}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {days.map(day => (
            <TabsContent key={day} value={day}>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[15%]">Время</TableHead>
                      <TableHead className="w-[30%]">Предмет</TableHead>
                      <TableHead className="w-[30%]">Преподаватель</TableHead>
                      <TableHead className="w-[15%]">Кабинет</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {scheduleData[selectedClass as keyof typeof scheduleData][day as keyof typeof scheduleData["5А"]].map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.subject}</TableCell>
                        <TableCell>{item.teacher}</TableCell>
                        <TableCell>{item.room}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-8 p-4 bg-muted rounded-md">
          <p className="text-sm text-muted-foreground">
            <strong>Примечание:</strong> Расписание может меняться. Пожалуйста, следите за обновлениями на сайте или в электронном дневнике.
          </p>
        </div>
      </div>
    </SchoolLayout>
  );
};

export default SchedulePage;