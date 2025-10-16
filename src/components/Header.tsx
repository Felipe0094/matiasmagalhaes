import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.jpeg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Matias Magalhães Construções" className="h-12 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-accent transition-colors font-medium">
            Início
          </button>
          <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-accent transition-colors font-medium">
            Sobre
          </button>
          <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-accent transition-colors font-medium">
            Serviços
          </button>
          <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-accent transition-colors font-medium">
            Contato
          </button>
          <button 
            onClick={() => scrollToSection("contato")} 
            className="bg-accent text-accent-foreground px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
          >
            Solicitar Orçamento
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("inicio")} className="text-foreground hover:text-accent transition-colors font-medium text-left py-2">
              Início
            </button>
            <button onClick={() => scrollToSection("sobre")} className="text-foreground hover:text-accent transition-colors font-medium text-left py-2">
              Sobre
            </button>
            <button onClick={() => scrollToSection("servicos")} className="text-foreground hover:text-accent transition-colors font-medium text-left py-2">
              Serviços
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-foreground hover:text-accent transition-colors font-medium text-left py-2">
              Contato
            </button>
            <button 
              onClick={() => scrollToSection("contato")} 
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md text-center"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
