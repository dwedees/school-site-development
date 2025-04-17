import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Check } from "lucide-react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setSubmitted(true);
    
    // Сбросить состояние через некоторое время
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Связаться с нами</CardTitle>
        <CardDescription>
          Отправьте сообщение, и мы свяжемся с вами в ближайшее время.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-6">
            <div className="rounded-full bg-primary/10 p-3 mb-4">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium mb-2">Сообщение отправлено</h3>
            <p className="text-center text-muted-foreground">
              Спасибо за обращение. Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">ФИО</Label>
              <Input id="name" placeholder="Введите ваше ФИО" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@mail.ru" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input id="phone" type="tel" placeholder="+7 (XXX) XXX-XX-XX" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea id="message" placeholder="Ваше сообщение..." required />
            </div>
            <Button type="submit" className="w-full">Отправить</Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactForm;