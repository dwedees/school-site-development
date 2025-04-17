import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NewsCard, { NewsItem } from "./NewsCard";

const latestNews: NewsItem[] = [
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