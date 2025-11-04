import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/gallery/tree-planting.jpg";

const News = () => {
  // Notícias placeholder - serão substituídas por conteúdo real
  const newsPlaceholder = [
    {
      title: "Inauguração dos Novos Espaços de Capacitação",
      date: "Em breve",
      category: "Institucional",
      excerpt: "O IERD está preparando novos espaços para capacitação profissional e atividades educacionais.",
    },
    {
      title: "Início das Atividades de Horticultura Comunitária",
      date: "Em breve",
      category: "Projetos",
      excerpt: "Projeto de horticultura orgânica começará em breve, beneficiando famílias da região.",
    },
    {
      title: "Parcerias para Expansão dos Serviços",
      date: "Em breve",
      category: "Parcerias",
      excerpt: "Instituição busca parcerias para ampliar o alcance de seus programas sociais.",
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
          alt="Atividades do Instituto Emanuel Rei Davi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Notícias</h1>
            <p className="text-lg text-muted-foreground">
              Fique por dentro das últimas novidades e atividades do Instituto Emanuel Rei Davi.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 mb-12">
              {newsPlaceholder.map((news, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="secondary">{news.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {news.date}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{news.title}</CardTitle>
                    <CardDescription className="text-base">{news.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Seção de Notícias em Construção</h2>
              <p className="text-muted-foreground mb-4">
                Como estamos iniciando uma nova administração, esta seção será constantemente atualizada 
                com notícias, eventos e atividades realizadas pelo Instituto Emanuel Rei Davi.
              </p>
              <p className="text-muted-foreground">
                Acompanhe nosso trabalho e fique por dentro de todas as novidades que estão por vir. 
                Em breve, publicaremos aqui clipping jornalístico, coberturas de eventos e informações 
                sobre nossas ações na comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
