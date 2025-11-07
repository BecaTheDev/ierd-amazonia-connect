import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/gallery/donations-2.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 z-10" />
        <img
          src={heroImage}
          alt="Doações solidárias do Instituto Emanuel Rei Davi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground">
              Estamos à disposição para esclarecer dúvidas e receber sua mensagem.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <CardTitle>Localização</CardTitle>
                  <CardDescription>Nossa sede no Amazonas</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="https://maps.app.goo.gl/UKqcGWRhNuz5BVCS6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-block"
                  >
                    R. A 29 (Porto Carvalho), 289<br />
                    Conj. Ajuricaba - Alvorada<br />
                    Manaus/AM - CEP 69046-310
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle>E-mail</CardTitle>
                  <CardDescription>Entre em contato por e-mail</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="mailto:contato@ierd.org.br" 
                    className="text-primary hover:underline"
                  >
                    contato@ierd.org.br
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Respondemos em até 48 horas úteis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle>Telefone</CardTitle>
                  <CardDescription>Ligue para nós</CardDescription>
                </CardHeader>
                <CardContent>
                  <a 
                    href="tel:+5592984514884" 
                    className="text-primary hover:underline"
                  >
                    (92) 98451-4884
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Disponível em horário comercial.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle>Horário de Atendimento</CardTitle>
                  <CardDescription>Quando estamos disponíveis</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Segunda a Sexta<br />
                    8:00 - 17:00
                  </p>
                  <p className="text-sm text-muted-foreground mt-4">
                    Horários sujeitos a alteração.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">Como Podemos Ajudar?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O Instituto Emanuel Rei Davi está em fase inicial de estruturação. Em breve, teremos 
                  canais de comunicação mais amplos, incluindo redes sociais e formulários de contato online.
                </p>
                <p>
                  Por enquanto, você pode entrar em contato conosco através do e-mail disponibilizado. 
                  Responderemos sua mensagem o mais breve possível.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-bold text-foreground mb-2">Interessado em Conhecer Nosso Trabalho?</h3>
                  <p>
                    Se você ou sua família está em situação de vulnerabilidade social e deseja conhecer 
                    nossos programas e serviços, entre em contato conosco. Será um prazer atendê-lo e 
                    apresentar como podemos ajudar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
