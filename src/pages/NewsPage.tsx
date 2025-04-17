import SchoolLayout from "@/components/school/SchoolLayout";
import NewsCard, { NewsItem } from "@/components/school/NewsCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Моковые данные для новостей
const allNews: NewsItem[] = [
  {
    id: 1,
    title: "Региональный этап Всероссийской олимпиады школьников",
    date: "15.02.2023",
    description: "Ученики Лицея №83 стали призерами регионального этапа Всероссийской олимпиады школьников по математике и физике.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "День открытых дверей",
    date: "10.03.2023",
    description: "Приглашаем будущих учеников и их родителей на День открытых дверей, который состоится 15 марта в 10:00.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Научно-практическая конференция",
    date: "05.04.2023",
    description: "В лицее пройдет ежегодная научно-практическая конференция для учащихся 8-11 классов. Регистрация открыта.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Лицей №83 — победитель городского конкурса",
    date: "20.05.2023",
    description: "Наш лицей стал победителем городского конкурса 'Инновации в образовании' с проектом 'Цифровая образовательная среда'.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Последний звонок 2023",
    date: "25.05.2023",
    description: "В Лицее №83 прошла торжественная линейка, посвященная окончанию учебного года для выпускников 11-х классов.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Выпускной вечер",
    date: "30.06.2023",
    description: "Состоялся выпускной вечер для учеников 11-х классов. Поздравляем наших выпускников с успешным окончанием лицея!",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Новости лицея</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Будьте в курсе последних событий, мероприятий и достижений нашего лицея.
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