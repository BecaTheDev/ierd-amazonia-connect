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
                O Instituto Emanuel Rei Davi (IERD) é uma organização sem fins lucrativos dedicada a promover a dignidade humana e a transformação social. Atuamos na assistência a famílias em situação de vulnerabilidade, oferecendo apoio básico, formação e oportunidades que fortalecem a esperança e a autonomia.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mais do que oferecer ajuda, acreditamos em formar caminhos duradouros. Por isso, realizamos ações educativas e sociais voltadas a crianças, jovens e adultos, estimulando o aprendizado, a criatividade e o compromisso com o bem comum.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nossa atuação nasce da fé e do desejo de ver comunidades mais justas e solidárias. Cada projeto é movido pelo propósito de transformar realidades através da educação, do trabalho e do amor ao próximo.
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
                    <li>• Criatividade</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Areas of Action */}
            <div className="bg-muted rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Áreas de Atuação</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Educação e Cidadania</h3>
                  <p className="text-muted-foreground">
                    Promovendo palestras e atividades sobre direitos, cidadania e inclusão, fortalecendo o conhecimento e a participação ativa da comunidade.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Formação e Empreendedorismo</h3>
                  <p className="text-muted-foreground">
                    Cursos de criatividade e empreendedorismo que estimulam a geração de renda e o desenvolvimento de novas oportunidades.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Assistência Social</h3>
                  <p className="text-muted-foreground">
                    Distribuição de cestas básicas e apoio emergencial a famílias em vulnerabilidade, garantindo dignidade e segurança alimentar para quem mais precisa.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3 text-primary">Sustentabilidade e Consciência Social</h3>
                  <p className="text-muted-foreground">
                    Incentivo a ações de responsabilidade social e ambiental, despertando a consciência coletiva e o compromisso com um futuro mais justo e sustentável.
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
