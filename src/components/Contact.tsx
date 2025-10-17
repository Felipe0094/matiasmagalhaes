import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "(21) 98675-9394",
      link: "https://wa.me/5521986759394"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "matiasmagalhaesengenharia@gmail.com",
      link: "mailto:matiasmagalhaesengenharia@gmail.com"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "Niterói - RJ",
      link: null
    }
  ];

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solicite um orçamento sem compromisso e descubra como podemos transformar seu projeto em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;

            const Wrapper: any = item.link ? "a" : "div";
            const wrapperProps: any = item.link
              ? {
                  href: item.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "bg-card rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all border border-border hover:border-accent/50 group block"
                }
              : {
                  className:
                    "bg-card rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all border border-border group"
                };

            return (
              <Wrapper key={index} {...wrapperProps}>
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-center break-all">{item.info}</p>
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-primary rounded-2xl p-12 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-primary-foreground/90 mb-8 text-lg">
              Entre em contato agora e receba um orçamento personalizado para suas necessidades
            </p>
            <a
              href="https://wa.me/5521986759394"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
