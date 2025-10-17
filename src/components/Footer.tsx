export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Matias Magalhães Construções</h3>
            <p className="text-primary-foreground/80">
              Excelência em projetos e execução de obras no Rio de Janeiro
            </p>
            <p className="text-primary-foreground/70 mt-4 text-sm">
              CNPJ: 60.921.451/0001-93
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Projeto Arquitetônico</li>
              <li>Projeto Estrutural</li>
              <li>Construções</li>
              <li>Reformas</li>
              <li>Impermeabilizações</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>(21) 98675-9394</li>
              <li className="break-all">matiasmagalhaesengenharia@gmail.com</li>
              <li>Niterói - RJ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © {currentYear} Matias Magalhães Construções. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
