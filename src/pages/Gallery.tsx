import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder para imagens futuras
  const placeholderImages = Array(6).fill(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galeria de Fotos</h1>
            <p className="text-lg text-muted-foreground">
              Acompanhe os momentos especiais e as atividades realizadas pelo Instituto Emanuel Rei Davi.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">
              Em breve, você poderá visualizar aqui todas as fotos das nossas atividades, eventos e conquistas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {placeholderImages.map((_, index) => (
              <Card 
                key={index} 
                className="aspect-video bg-muted flex items-center justify-center hover:border-primary transition-colors cursor-pointer overflow-hidden"
              >
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground">Imagem em breve</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-16 bg-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Galeria em Construção</h2>
            <p className="text-muted-foreground">
              Estamos organizando nosso acervo fotográfico. Em breve, você poderá acompanhar através desta 
              galeria todas as atividades, eventos e momentos especiais do Instituto Emanuel Rei Davi. 
              Volte em breve para conferir as novidades!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
