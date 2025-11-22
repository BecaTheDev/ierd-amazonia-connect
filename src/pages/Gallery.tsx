import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-ierd.jpg";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 z-10" />
        <img
          src={heroImage}
          alt="Doações do Instituto Emanuel Rei Davi"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galeria de Fotos</h1>
            <p className="text-lg text-muted-foreground">
              Acompanhe os momentos especiais e as atividades realizadas pelo Instituto Emanuel Rei Davi.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-muted rounded-lg p-12">
              <h2 className="text-2xl font-bold mb-4">Galeria em Construção</h2>
              <p className="text-muted-foreground">
                Em breve, compartilharemos aqui fotos das nossas atividades e momentos especiais 
                do trabalho realizado pelo Instituto Emanuel Rei Davi junto às comunidades do Amazonas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
