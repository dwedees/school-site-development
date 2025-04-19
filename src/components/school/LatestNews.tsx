import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NewsCard, { NewsItem } from "./NewsCard";

// Пустой массив новостей
const latestNews: NewsItem[] = [];

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
        
        {latestNews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              В настоящий момент новостей нет. Следите за обновлениями.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestNews;