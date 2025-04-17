import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const SchoolFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Школа №1</h3>
            <p className="text-sm">Лучшее образование для наших детей</p>
            <div className="flex items-center mt-4">
              <img src="/logo-b.svg" alt="Школьный логотип" className="h-10 w-10 mr-2" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-secondary">Главная</Link></li>
              <li><Link to="/about" className="hover:text-secondary">О школе</Link></li>
              <li><Link to="/news" className="hover:text-secondary">Новости</Link></li>
              <li><Link to="/schedule" className="hover:text-secondary">Расписание</Link></li>
              <li><Link to="/contacts" className="hover:text-secondary">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <address className="not-italic text-sm space-y-2">
              <p>ул. Школьная, 1</p>
              <p>г. Москва, 123456</p>
              <p>Телефон: +7 (123) 456-78-90</p>
              <p>Email: info@school1.ru</p>
            </address>
          </div>
        </div>
        
        <Separator className="my-6 bg-primary-foreground/20" />
        
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} Школа №1. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;