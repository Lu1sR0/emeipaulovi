import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone } from "lucide-react";

const links = [
  { to: "/escola", label: "A escola" },
  { to: "/calendario", label: "Calendário" },
  { to: "/avisos", label: "Avisos" },
  { to: "/cardapio", label: "Cardápio" },
  { to: "/galeria", label: "Galeria" },
  { to: "/orientacoes", label: "Orientações" },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border/40 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-card p-1.5 shadow-sm">
                <img src="/logo-emei.png" alt="Logo EMEI Paulo VI" className="h-10 w-10 object-contain" />
              </div>
              <div>
                <p className="text-lg font-bold">EMEI Paulo VI</p>
                <p className="mt-0.5 text-sm text-secondary-foreground/65">Semeando o futuro com acolhimento</p>
              </div>
            </div>
            <div className="space-y-1.5 text-sm text-secondary-foreground/75">
              <p className="flex items-center gap-2">
                <MapPin size={14} />
                Comunidade escolar de São Paulo
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} />
                Secretaria: (11) 0000-0000
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-lg px-2 py-1 text-secondary-foreground/70 transition-colors hover:bg-secondary-foreground/10 hover:text-secondary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:text-right">
            <a
              href="https://www.instagram.com/emeipaulovi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary-foreground/10 px-4 py-2.5 text-sm font-bold transition-colors hover:bg-secondary-foreground/20"
            >
              <Instagram size={16} />
              @emeipaulovi
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/15 pt-5 text-center text-xs text-secondary-foreground/65">
          <p>Portal oficial da comunidade escolar.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
