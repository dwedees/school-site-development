import SchoolLayout from "@/components/school/SchoolLayout";
import ContactForm from "@/components/school/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactsPage = () => {
  return (
    <SchoolLayout>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Контакты</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Мы всегда рады ответить на ваши вопросы. Свяжитесь с нами любым удобным способом.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Наши контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="flex items-start space-x-4 pt-6">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Адрес</h3>
                    <p className="text-muted-foreground">420101, г. Казань</p>
                    <p className="text-muted-foreground">Приволжский район, ул. Академика Завойского, д. 106</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start space-x-4 pt-6">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (843) 277-77-77</p>
                    <p className="text-muted-foreground">+7 (843) 277-77-78</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start space-x-4 pt-6">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">licey83@edu.tatar.ru</p>
                    <p className="text-muted-foreground">secretary@licey83.ru</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="flex items-start space-x-4 pt-6">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h3 className="font-medium mb-1">Часы работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 8:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб: 8:00 - 14:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              {/* Здесь может быть встроенная карта Google или Яндекс */}
              <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                <p>Карта расположения лицея</p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Напишите нам</h2>
            <ContactForm />
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Администрация лицея</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Директор</h4>
                  <p className="text-muted-foreground">
                    Иванов Иван Иванович
                  </p>
                  <p className="text-muted-foreground">
                    Телефон: +7 (843) 277-77-00
                  </p>
                  <p className="text-muted-foreground">
                    Email: director@licey83.ru
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Заместитель директора по учебной работе</h4>
                  <p className="text-muted-foreground">
                    Петрова Елена Сергеевна
                  </p>
                  <p className="text-muted-foreground">
                    Телефон: +7 (843) 277-77-01
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Заместитель директора по воспитательной работе</h4>
                  <p className="text-muted-foreground">
                    Смирнова Ольга Александровна
                  </p>
                  <p className="text-muted-foreground">
                    Телефон: +7 (843) 277-77-02
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
};

export default ContactsPage;