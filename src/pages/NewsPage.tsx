import SchoolLayout from "@/components/school/SchoolLayout";
import NewsCard, { NewsItem } from "@/components/school/NewsCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Моковые данные для новостей
const allNews: NewsItem[] = [
  {
    id: 1,
    title: "День знаний 2023",
    date: "01.09.2023",
    description: "Торжественная линейка, посвященная началу учебного года, состоится 1 сентября в 9:00 на школьной площади.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Олимпиада по математике",
    date: "15.09.2023",
    description: "Приглашаем учеников 5-11 классов принять участие в школьном этапе олимпиады по математике.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Родительское собрание",
    date: "20.09.2023",
    description: "Общешкольное родительское собрание состоится в актовом зале школы. Начало в 18:00.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Спортивные соревнования",
    date: "05.10.2023",
    description: "Межшкольные соревнования по футболу среди учеников 7-9 классов пройдут на стадионе школы.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Литературный вечер",
    date: "12.10.2023",
    description: "Приглашаем на литературный вечер, посвященный творчеству Александра Сергеевича Пушкина.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Экскурсия в музей",
    date: "25.10.2023",
    description: "Для учеников 6-х классов организуется экскурсия в исторический музей. Сбор в 9:00 у входа в школу.",
    imageUrl: "/placeholder.svg"
  }
];

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Фильтруем новости по поисковому запросу
  const filteredNews = allNews.filter(news => 
    news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    news.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Новости школы</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Будьте в курсе последних событий, мероприятий и достижений нашей школы.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 max-w-md">
          <Input
            placeholder="Поиск по новостям..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>
        
        {filteredNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">Новости не найдены</h3>
            <p className="text-muted-foreground">
              Попробуйте изменить поисковый запрос или проверьте позже.
            </p>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
};

export default NewsPage;