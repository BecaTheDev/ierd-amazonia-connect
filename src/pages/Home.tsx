import { ArrowRight, Heart, GraduationCap, Users, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-amazon-forest.jpg";

const Home = () => {
  const services = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Cursos Profissionalizantes",
      description: "Capacitação profissional nas diversas modalidades para geração de oportunidades.",
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: "Sustentabilidade e Empreendedorismo",
      description: "Fomento ao empreendedorismo sustentável e práticas de responsabilidade ambiental para geração de renda.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Assistência Social",
      description: "Atividades voltadas à educação, saúde e assistência para famílias vulneráveis.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Apoio Comunitário",
      description: "Fortalecimento de vínculos comunitários e promoção da cidadania.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 z-10" />
        <img
          src={heroImage}
          alt="Floresta Amazônica - Instituto Emanuel Rei Davi no Amazonas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Pequenos <span className="text-primary">gestos</span> que mudam grandes <span className="text-secondary">histórias</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Iluminando vidas com educação e solidariedade a serviço da transformação social.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/sobre">
                Conheça nosso trabalho
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outlineSecondary" asChild>
              <a href="/contato">Entre em contato</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              O Instituto Emanuel Rei Davi é uma instituição sem fins lucrativos dedicada a prestar assistência 
              a famílias em situação de vulnerabilidade econômica e social, promovendo educação, saúde e 
              atividades de geração de emprego e renda no estado do Amazonas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos diversos programas e atividades para fortalecer comunidades e promover o desenvolvimento social.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="/servicos">
                Ver todos os serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Faça Parte dessa Transformação</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Juntos podemos construir uma sociedade mais justa e oferecer oportunidades para quem mais precisa.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/contato">Entre em contato conosco</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
