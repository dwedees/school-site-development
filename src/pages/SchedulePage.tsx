import SchoolLayout from "@/components/school/SchoolLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

const SchedulePage = () => {
  const [selectedClass, setSelectedClass] = useState("?А");
  
  // Список всех классов
  const classList = [
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "?А", "?Б", "?В", "?Г",
    "??А", "??Б", "??В", "??Г",
    "??А", "??Б", "??В", "??Г"
  ];

  // Пример расписания (можно заменить на реальные данные)
  const scheduleData = {
    "?А": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Окружающий мир", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Математика", room: "???" },
        { time: "?:?? - ??:??", subject: "Чтение", room: "???" },
        { time: "??:?? - ??:??", subject: "ИЗО", room: "???" },
        { time: "??:?? - ??:??", subject: "Музыка", room: "???" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Технология", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Чтение", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Окружающий мир", room: "???" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Чтение", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ]
    },
    "?А": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Математика", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Литература", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "ИЗО", room: "???" },
        { time: "??:?? - ??:??", subject: "Технология", room: "???" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Музыка", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Литература", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" },
        { time: "??:?? - ??:??", subject: "ОДНКНР", room: "???" }
      ],
      "Суббота": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Технология", room: "???" }
      ]
    },
    "?А": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Химия", room: "???" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "ОБЖ", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Химия", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Родной язык", room: "???" }
      ],
      "Суббота": [
        { time: "?:?? - ?:??", subject: "Физика", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Проектная деятельность", room: "???" },
        { time: "??:?? - ??:??", subject: "Подготовка к ОГЭ (матем.)", room: "???" }
      ]
    },
    "??А": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Астрономия", room: "???" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "ОБЖ", room: "???" },
        { time: "??:?? - ??:??", subject: "Химия", room: "???" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" },
        { time: "??:?? - ??:??", subject: "Индивидуальный проект", room: "???" }
      ],
      "Суббота": [
        { time: "?:?? - ?:??", subject: "Химия", room: "???" },
        { time: "?:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Подготовка к ЕГЭ (матем.)", room: "???" },
        { time: "??:?? - ??:??", subject: "Подготовка к ЕГЭ (рус.яз.)", room: "???" }
      ]
    },
    "?Г": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Окружающий мир", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Математика", room: "???" },
        { time: "?:?? - ??:??", subject: "Чтение", room: "???" },
        { time: "??:?? - ??:??", subject: "ИЗО", room: "???" },
        { time: "??:?? - ??:??", subject: "Музыка", room: "???" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Технология", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Чтение", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Окружающий мир", room: "???" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Чтение", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ]
    },
    "?Г": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Математика", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Литература", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "ИЗО", room: "???" },
        { time: "??:?? - ??:??", subject: "Технология", room: "???" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Музыка", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Литература", room: "???" },
        { time: "?:?? - ??:??", subject: "Математика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" },
        { time: "??:?? - ??:??", subject: "ОДНКНР", room: "???" }
      ],
      "Суббота": [
        { time: "?:?? - ?:??", subject: "Русский язык", room: "???" },
        { time: "?:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Технология", room: "???" }
      ]
    },
    "?Г": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Химия", room: "???" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "ОБЖ", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Химия", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Родной язык", room: "???" }
      ],
      "Суббота": [
        { time: "?:?? - ?:??", subject: "Физика", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Проектная деятельность", room: "???" },
        { time: "??:?? - ??:??", subject: "Подготовка к ОГЭ (матем.)", room: "???" }
      ]
    },
    "??Г": {
      "Понедельник": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Астрономия", room: "???" }
      ],
      "Вторник": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Среда": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "ОБЖ", room: "???" },
        { time: "??:?? - ??:??", subject: "Химия", room: "???" }
      ],
      "Четверг": [
        { time: "?:?? - ?:??", subject: "Геометрия", room: "???" },
        { time: "?:?? - ??:??", subject: "Литература", room: "???" },
        { time: "??:?? - ??:??", subject: "История", room: "???" },
        { time: "??:?? - ??:??", subject: "Информатика", room: "???" },
        { time: "??:?? - ??:??", subject: "География", room: "???" },
        { time: "??:?? - ??:??", subject: "Физкультура", room: "Спортзал" }
      ],
      "Пятница": [
        { time: "?:?? - ?:??", subject: "Алгебра", room: "???" },
        { time: "?:?? - ??:??", subject: "Русский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Физика", room: "???" },
        { time: "??:?? - ??:??", subject: "Английский язык", room: "???" },
        { time: "??:?? - ??:??", subject: "Обществознание", room: "???" },
        { time: "??:?? - ??:??", subject: "Индивидуальный проект", room: "???" }
      ],
      "Суббота": [
        { time: "?:?? - ?:??", subject: "Химия", room: "???" },
        { time: "?:?? - ??:??", subject: "Биология", room: "???" },
        { time: "??:?? - ??:??", subject: "Подготовка к ЕГЭ (матем.)", room: "???" },
        { time: "??:?? - ??:??", subject: "Подготовка к ЕГЭ (рус.яз.)", room: "???" }
      ]
    }
  };
  
  // Добавляем базовое расписание для всех остальных классов
  classList.forEach(className => {
    if (!scheduleData[className]) {
      // Копируем расписание из ближайшего доступного класса того же уровня
      const level = className.match(/\d+/)[0];
      const letter = className.match(/[А-Я]/)[0];
      let template;
      
      if (level === "?" || level === "?" || level === "?" || level === "?") {
        template = letter === "Г" ? scheduleData["?Г"] : scheduleData["?А"];
      } else if (level === "?" || level === "?" || level === "?" || level === "?") {
        template = letter === "Г" ? scheduleData["?Г"] : scheduleData["?А"];
      } else if (level === "?") {
        template = letter === "Г" ? scheduleData["?Г"] : scheduleData["?А"];
      } else {
        template = letter === "Г" ? scheduleData["??Г"] : scheduleData["??А"];
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
                  <h4 className="font-medium mb-1">? смена</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>? урок: <span className="font-mono">?:?? - ?:??</span></div>
                    <div>? урок: <span className="font-mono">?:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">? смена</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
                    <div>? урок: <span className="font-mono">??:?? - ??:??</span></div>
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
                  <strong>Текущая неделя:</strong> с ?? по ?? мая ???? г.
                </p>
                <p>
                  <strong>Учебная неделя:</strong> ??-я неделя
                </p>
                <p>
                  <strong>Особые события:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>?? мая (среда) - сокращенный день, уроки по ?? минут</li>
                  <li>?? мая (пятница) - общешкольное родительское собрание, ??:??</li>
                  <li>?? мая (суббота) - день здоровья для ?-? классов</li>
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
                      {groupedClasses[grade].sort().map(className => (
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
                  selectedClass.match(/\d+/)[0] === "?" ? 
                    (selectedClass.endsWith("Г") ? "Петрова Ольга Ивановна" : "Иванова Анна Петровна") :
                  selectedClass.match(/\d+/)[0] === "?" ? 
                    (selectedClass.endsWith("Г") ? "Соколова Наталья Алексеевна" : "Смирнова Елена Сергеевна") :
                  selectedClass.match(/\d+/)[0] === "?" ? 
                    (selectedClass.endsWith("Г") ? "Козлова Татьяна Викторовна" : "Петров Иван Алексеевич") : 
                    (selectedClass.endsWith("Г") ? "Федорова Светлана Михайловна" : "Кузнецова Мария Владимировна")
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
                              <TableCell>{index + ?}</TableCell>
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
                  Замены в расписании публикуются ежедневно до ??:?? на следующий учебный день.
                </p>
                <p className="mb-4">
                  Проверяйте изменения в расписании в разделе "Замены" на главной странице сайта.
                </p>
                <div className="text-primary cursor-pointer">Посмотреть замены на ??.??.????</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
};

export default SchedulePage;