import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/sobre", label: "Sobre Nós" },
    { path: "/proposta", label: "Proposta Pedagógica" },
    { path: "/cursos", label: "Cursos" },
    { path: "/inovacao", label: "Inovação" },
    { path: "/galeria", label: "Galeria" },
    { path: "/contato", label: "Contato" },
  ];

  return (
    <header className={cn("sticky top-0 z-50 w-full bg-background/95",
      "backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="flex flex-col">
              <img src="/logo.png" alt="Colégio Sagrado Coração de Jesus" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  size="sm"
                  className="text-sm font-medium"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contato" className="hidden lg:block">
              <Button size="default" data-testid="button-agendar-visita">
                Agende uma Visita
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="w-full justify-start text-left"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contato">
              <Button
                className="w-full mt-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-mobile-agendar-visita"
              >
                Agende uma Visita
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
