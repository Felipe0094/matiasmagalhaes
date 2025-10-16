import { Building2, Users, Award, CheckCircle } from "lucide-react";

export const About = () => {
  const features = [
    { icon: Building2, text: "Projetos de alta qualidade" },
    { icon: Users, text: "Equipe especializada" },
    { icon: Award, text: "Experiência comprovada" },
    { icon: CheckCircle, text: "Compromisso com prazos" }
  ];

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-accent">Matias Magalhães</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A <strong>Matias Magalhães Construções</strong> é referência em soluções completas para construção civil no Rio de Janeiro. 
            Com anos de experiência no mercado, oferecemos desde projetos arquitetônicos e estruturais até execução de obras, 
            reformas e impermeabilizações com excelência técnica e compromisso com a satisfação de nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all border border-border hover:border-accent/50 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <p className="text-foreground font-semibold">{feature.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-lg text-primary-foreground/90">
              Transformar ideias em realidade através de soluções inovadoras em engenharia e construção, 
              sempre priorizando qualidade, segurança e sustentabilidade em cada projeto que realizamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
