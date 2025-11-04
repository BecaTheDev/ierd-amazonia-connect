import { BookOpen, Leaf, HeartHandshake, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/gallery/food-collection.jpg";

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Cursos Profissionalizantes",
      description: "Capacitação técnica e profissional para inserção no mercado de trabalho",
      items: [
        "Informática básica e avançada",
        "Artesanato e manufaturas",
        "Gastronomia e culinária",
        "Costura e confecção",
        "Mecânica e elétrica básica",
      ],
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Atividades Agropecuárias",
      description: "Produção sustentável e geração de renda através da agricultura",
      items: [
        "Agricultura familiar e policultura",
        "Piscicultura e aquicultura",
        "Horticultura orgânica",
        "Apicultura e produção de mel",
        "Criação de animais de pequeno porte",
      ],
    },
    {
      icon: <HeartHandshake className="h-10 w-10" />,
      title: "Assistência Social",
      description: "Suporte integral às famílias em vulnerabilidade social",
      items: [
        "Acompanhamento familiar",
        "Orientação jurídica e social",
        "Apoio psicológico",
        "Distribuição de cestas básicas",
        "Encaminhamento para serviços públicos",
      ],
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Desenvolvimento Comunitário",
      description: "Fortalecimento de vínculos e promoção da cidadania",
      items: [
        "Oficinas de cidadania",
        "Grupos de convivência",
        "Atividades culturais e recreativas",
        "Palestras e workshops",
        "Projetos de inclusão social",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 z-10" />
        <img
          src={heroImage}
          alt="Coleta de alimentos do Instituto Emanuel Rei Davi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-lg text-muted-foreground">
              Conheça os programas e atividades que desenvolvemos para transformar vidas e fortalecer comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-16 bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Como Participar</h2>
            <p className="text-muted-foreground mb-6">
              Todos os nossos serviços são oferecidos gratuitamente para famílias em situação de vulnerabilidade 
              social. Para participar de nossos programas, entre em contato conosco através dos canais disponíveis 
              na página de contato.
            </p>
            <p className="text-muted-foreground">
              As vagas são limitadas e distribuídas de acordo com critérios sociais estabelecidos pela instituição, 
              priorizando famílias com maior necessidade de apoio.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
