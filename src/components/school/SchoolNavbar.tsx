import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Calendar, 
  Home, 
  Info, 
  Mail, 
  Menu, 
  X 
} from "lucide-react";
import { useState } from "react";

const SchoolNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { path: "/", label: "Главная", icon: <Home className="mr-2 h-4 w-4" /> },
    { path: "/about", label: "О школе", icon: <Info className="mr-2 h-4 w-4" /> },
    { path: "/news", label: "Новости", icon: <BookOpen className="mr-2 h-4 w-4" /> },
    { path: "/schedule", label: "Расписание", icon: <Calendar className="mr-2 h-4 w-4" /> },
    { path: "/contacts", label: "Контакты", icon: <Mail className="mr-2 h-4 w-4" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-primary text-primary-foreground py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo-b.svg" alt="Школьный логотип" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold">Школа №1</span>
        </div>
        
        {/* Мобильная навигация */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        
        {/* Десктопная навигация */}
        <div className="hidden md:flex space-x-2">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant={isActive(link.path) ? "secondary" : "ghost"}
              asChild
            >
              <Link to={link.path} className="flex items-center">
                {link.icon}
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto py-2 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <Button
              key={link.path}
              variant={isActive(link.path) ? "secondary" : "ghost"}
              className="justify-start"
              asChild
              onClick={toggleMenu}
            >
              <Link to={link.path} className="flex items-center">
                {link.icon}
                {link.label}
              </Link>
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default SchoolNavbar;