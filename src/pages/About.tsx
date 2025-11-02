import { Target, Eye, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o IERD</h1>
            <p className="text-lg text-muted-foreground">
              Conheça nossa história, missão e valores que guiam nosso trabalho pela transformação social.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-16">
              <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                O Instituto Emanuel Rei Davi (IERD) é uma instituição sem fins lucrativos fundada com o 
                propósito de transformar vidas e comunidades no estado do Amazonas. Nosso compromisso é 
                prestar assistência a famílias em situação de vulnerabilidade econômica e social, oferecendo 
                oportunidades de desenvolvimento pessoal e profissional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acreditamos que através da educação, capacitação profissional e atividades de geração de 
                renda, é possível promover mudanças significativas e duradouras na vida das pessoas. Nosso 
                trabalho abrange diversas áreas, desde cursos profissionalizantes até atividades agrícolas 
                sustentáveis, sempre com foco no fortalecimento da autonomia e da dignidade humana.
              </p>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle>Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Prestar assistência integral a famílias em vulnerabilidade social, promovendo educação, 
                    saúde e geração de renda, contribuindo para o desenvolvimento sustentável da região amazônica.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle>Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ser referência em assistência social no Amazonas, reconhecida pela excelência no atendimento 
                    e impacto positivo na vida das comunidades que servimos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <CardTitle>Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Solidariedade</li>
                    <li>• Respeito</li>
                    <li>• Transparência</li>
                    <li>• Comprometimento</li>
                    <li>• Sustentabilidade</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Areas of Action */}
            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Áreas de Atuação</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Educação e Capacitação</h3>
                  <p className="text-muted-foreground">
                    Cursos profissionalizantes e educacionais nas diversas modalidades, preparando pessoas 
                    para o mercado de trabalho e fortalecendo suas competências.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Geração de Emprego e Renda</h3>
                  <p className="text-muted-foreground">
                    Agricultura, policultura, piscicultura, horticultura, apicultura e criação de animais, 
                    promovendo autonomia econômica e sustentabilidade.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Assistência Social</h3>
                  <p className="text-muted-foreground">
                    Apoio integral às famílias em situação de vulnerabilidade, garantindo acesso a direitos 
                    básicos e fortalecimento de vínculos comunitários.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Saúde e Bem-Estar</h3>
                  <p className="text-muted-foreground">
                    Ações voltadas à promoção da saúde e qualidade de vida, com orientações e atividades 
                    preventivas para toda a comunidade.
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

export default About;
