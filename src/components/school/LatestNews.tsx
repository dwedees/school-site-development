import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NewsCard, { NewsItem } from "./NewsCard";

const latestNews: NewsItem[] = [
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
  }
];

const LatestNews = () => {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Последние новости</h2>
          <Button variant="outline" asChild>
            <Link to="/news">Все новости</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;