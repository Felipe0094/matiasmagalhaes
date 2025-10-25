import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Construindo Sonhos,
          <br />
          <span className="text-accent">Estruturando Realidades</span>
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
          Excelência em projetos arquitetônicos, estruturais, construções, reformas e impermeabilizações no Rio de Janeiro
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={scrollToContact}
            className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 group"
          >
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/90 transition-all shadow-lg"
          >
            Nossos Serviços
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center animate-bounce m-0 p-0">
          <img src="/favicon.svg" alt="Scroll indicator" className="w-6 h-6 m-0" />
        </div>
      </div>
    </section>
  );
};
