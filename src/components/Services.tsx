import { Ruler, HardHat, Building, Wrench, Droplets } from "lucide-react";
import projetoArquitetonico from "@/assets/projeto-arquitetonico.jpg";
import projetoEstrutural from "@/assets/projeto-estrutural.jpg";
import construcoes from "@/assets/construcoes.jpg";
import reformas from "@/assets/reformas.jpg";
import impermeabilizacoes from "@/assets/impermeabilizacoes.jpg";

export const Services = () => {
  const services = [
    {
      icon: Ruler,
      title: "Projeto Arquitetônico",
      description: "Desenvolvimento completo de projetos arquitetônicos personalizados, alinhados às suas necessidades e preferências estéticas.",
      image: projetoArquitetonico
    },
    {
      icon: HardHat,
      title: "Projeto Estrutural",
      description: "Cálculos estruturais precisos e projetos detalhados garantindo segurança, durabilidade e conformidade com normas técnicas.",
      image: projetoEstrutural
    },
    {
      icon: Building,
      title: "Construções",
      description: "Execução completa de obras residenciais e comerciais com qualidade superior, cumprimento de prazos e gestão eficiente.",
      image: construcoes
    },
    {
      icon: Wrench,
      title: "Reformas",
      description: "Revitalização e modernização de ambientes com expertise técnica, transformando espaços de acordo com sua visão.",
      image: reformas
    },
    {
      icon: Droplets,
      title: "Impermeabilizações",
      description: "Soluções especializadas em impermeabilização para proteção eficaz contra infiltrações e umidade em todas as áreas.",
      image: impermeabilizacoes
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em construção civil com excelência técnica e atendimento personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border hover:border-accent/50 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors"></div>
                  <div className="absolute top-4 left-4 w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
