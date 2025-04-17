import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  imageUrl?: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Card className="h-full flex flex-col transition-transform hover:shadow-lg">
      {news.imageUrl && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={news.imageUrl} 
            alt={news.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <CardDescription>{news.date}</CardDescription>
        <CardTitle className="line-clamp-2">{news.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{news.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" asChild className="ml-auto">
          <Link to={`/news/${news.id}`} className="flex items-center">
            Читать далее <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;