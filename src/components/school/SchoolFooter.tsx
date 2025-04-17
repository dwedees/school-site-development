import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";

const SchoolFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo-b.svg" alt="Логотип лицея" className="h-10 w-10 mr-2" />
              <div className="flex flex-col">
                <span className="text-md font-bold leading-tight">Лицей №83</span>
                <span className="text-xs">Центр образования</span>
              </div>
            </div>
            <p className="text-sm">МБОУ «Лицей №83 - Центр образования» Приволжского района г. Казани</p>
            <div className="flex items-center mt-4 space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent">Главная</Link></li>
              <li><Link to="/about" className="hover:text-accent">О лицее</Link></li>
              <li><Link to="/education" className="hover:text-accent">Образование</Link></li>
              <li><Link to="/news" className="hover:text-accent">Новости</Link></li>
              <li><Link to="/schedule" className="hover:text-accent">Расписание</Link></li>
              <li><Link to="/parents" className="hover:text-accent">Родителям</Link></li>
              <li><Link to="/contacts" className="hover:text-accent">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <address className="not-italic text-sm space-y-2">
              <p>420101, г. Казань, Приволжский район</p>
              <p>ул. Академика Завойского, д. 106</p>
              <p>Телефон: +7 (843) 277-77-77</p>
              <p>Email: licey83@edu.tatar.ru</p>
            </address>
          </div>
        </div>
        
        <Separator className="my-6 bg-primary-foreground/20" />
        
        <div className="text-center text-sm">
          <p>© {new Date().getFullYear()} МБОУ «Лицей №83 - Центр образования». Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;