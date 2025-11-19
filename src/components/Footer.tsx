import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-primary">
              Colégio Sagrado Coração de Jesus
            </h3>
            <p className="text-sm text-muted-foreground">
              Educar com amor, formar para a vida. Tradição, fé e inovação educando juntos.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate active-elevate-2 p-2 rounded-md"
                data-testid="link-youtube"
              >
                <Youtube className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-inicio">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-sobre">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/proposta" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-proposta">
                  Proposta Pedagógica
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-cursos">
                  Cursos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Segmentos</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Educação Infantil</li>
              <li className="text-muted-foreground">Ensino Fundamental I</li>
              <li className="text-muted-foreground">Ensino Fundamental II</li>
              <li className="text-muted-foreground">Ensino Médio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Rua da Educação, 123<br />
                  Centro - São Paulo, SP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="tel:+551112345678" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-phone">
                  (11) 1234-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                <a href="mailto:contato@sagradocoracao.edu.br" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-email">
                  contato@sagradocoracao.edu.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Colégio Sagrado Coração de Jesus. Todos os direitos reservados.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-privacy">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors" data-testid="link-terms">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
