import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import donations1 from "@/assets/gallery/donations-1.jpg";
import foodDistribution from "@/assets/gallery/food-distribution.jpg";
import treePlanting from "@/assets/gallery/tree-planting.jpg";
import foodCollection from "@/assets/gallery/food-collection.jpg";
import communitySupport from "@/assets/gallery/community-support.jpg";
import donations2 from "@/assets/gallery/donations-2.jpg";
import heroImage from "@/assets/gallery/donations-1.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: donations1, alt: "Doações para comunidade" },
    { src: foodDistribution, alt: "Distribuição de alimentos" },
    { src: treePlanting, alt: "Plantio de árvores" },
    { src: foodCollection, alt: "Coleta de alimentos" },
    { src: communitySupport, alt: "Apoio comunitário" },
    { src: donations2, alt: "Doações solidárias" }
  ];

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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="aspect-video overflow-hidden hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
