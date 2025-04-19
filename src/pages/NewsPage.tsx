import SchoolLayout from "@/components/school/SchoolLayout";
import NewsCard, { NewsItem } from "@/components/school/NewsCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

// Пустой массив новостей
const allNews: NewsItem[] = [];

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
        
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">Новости не найдены</h3>
          <p className="text-muted-foreground">
            В настоящий момент новостей нет. Пожалуйста, проверьте позже.
          </p>
        </div>
      </div>
    </SchoolLayout>
  );
};

export default NewsPage;