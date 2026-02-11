import { useEffect, useMemo, useState, type ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  BookOpen,
  Calendar,
  Camera,
  Cake,
  ChevronDown,
  GraduationCap,
  HandHeart,
  Layers,
  Menu,
  MessageSquare,
  Newspaper,
  School,
  UtensilsCrossed,
  Vote,
  Home,
  X,
} from "lucide-react";

interface NavLinkItem {
  to: string;
  label: string;
  icon: ComponentType<{ size?: number; className?: string }>;
  desc: string;
}

const navGroups: { label: string; icon: ComponentType<{ size?: number; className?: string }>; links: NavLinkItem[] }[] = [
  {
    label: "Escola",
    icon: GraduationCap,
    links: [
      { to: "/escola", label: "Apresentacao", icon: School, desc: "Historia e valores" },
      { to: "/boas-vindas", label: "Boas-vindas", icon: HandHeart, desc: "Guia para familias" },
      { to: "/orientacoes", label: "Orientacoes", icon: BookOpen, desc: "Duvidas frequentes" },
    ],
  },
  {
    label: "Informacoes",
    icon: Bell,
    links: [
      { to: "/calendario", label: "Calendario", icon: Calendar, desc: "Atividades do mes" },
      { to: "/avisos", label: "Avisos", icon: Bell, desc: "Comunicados importantes" },
      { to: "/mural", label: "Mural", icon: MessageSquare, desc: "Recados da escola" },
      { to: "/cardapio", label: "Cardapio", icon: UtensilsCrossed, desc: "Refeicoes da semana" },
    ],
  },
  {
    label: "Novidades",
    icon: Newspaper,
    links: [
      { to: "/jornal", label: "Jornal", icon: Newspaper, desc: "Noticias da escola" },
      { to: "/aniversariantes", label: "Aniversariantes", icon: Cake, desc: "Comemoracoes do mes" },
      { to: "/galeria", label: "Galeria", icon: Camera, desc: "Fotos e eventos" },
      { to: "/enquetes", label: "Enquetes", icon: Vote, desc: "Participe com sua opiniao" },
    ],
  },
  {
    label: "Projetos",
    icon: Layers,
    links: [
      { to: "/projetos-escola", label: "Da escola", icon: School, desc: "Projetos institucionais" },
      { to: "/projetos-salas", label: "Das salas", icon: Layers, desc: "Projetos por turma" },
    ],
  },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (to: string) => location.pathname === to;
  const isGroupActive = (group: NavLinkItem[]) => group.some((link) => isActive(link.to));

  const flatLinks = useMemo(() => navGroups.flatMap((group) => group.links), []);

  useEffect(() => {
    if (!mobileOpen) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-border/40 bg-card/90 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-3">
            <Link to="/" className="group flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity group-hover:opacity-100" />
                <img
                  src="/logo-emei.png"
                  alt="Logo EMEI Paulo VI"
                  className="relative h-10 w-10 rounded-full bg-card p-0.5 shadow-md ring-2 ring-primary/20 transition-all group-hover:ring-primary/40"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-extrabold leading-none text-foreground">EMEI Paulo VI</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Semeando o futuro</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-1 lg:flex">
              <Link
                to="/"
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-bold transition-all ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-foreground/70 hover:bg-muted/70 hover:text-foreground"
                }`}
              >
                <Home size={14} />
                Inicio
              </Link>

              {navGroups.map((group, index) => {
                const GroupIcon = group.icon;
                const alignRight = index >= navGroups.length - 2;
                return (
                  <div
                    key={group.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(group.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-[13px] font-bold transition-all ${
                        isGroupActive(group.links)
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-foreground/70 hover:bg-muted/70 hover:text-foreground"
                      }`}
                    >
                      <GroupIcon size={14} />
                      {group.label}
                      <ChevronDown
                        size={12}
                        className={`transition-transform ${openDropdown === group.label ? "rotate-180" : ""}`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown === group.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.98 }}
                          transition={{ duration: 0.16, ease: "easeOut" }}
                          className={`absolute top-full z-50 mt-2 w-60 max-w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-border/60 bg-card p-1.5 shadow-xl ${
                            alignRight ? "right-0" : "left-0"
                          }`}
                        >
                          {group.links.map((link) => {
                            const Icon = link.icon;
                            return (
                              <Link
                                key={link.to}
                                to={link.to}
                                className={`mb-1 flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm transition-colors last:mb-0 ${
                                  isActive(link.to) ? "bg-primary/10 text-primary" : "hover:bg-muted/70"
                                }`}
                              >
                                <div className="rounded-lg bg-muted/70 p-1.5">
                                  <Icon size={14} className={isActive(link.to) ? "text-primary" : "text-muted-foreground"} />
                                </div>
                                <div>
                                  <p className="font-bold leading-tight">{link.label}</p>
                                  <p className="text-[11px] text-muted-foreground">{link.desc}</p>
                                </div>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <button
              onClick={() => setMobileOpen((value) => !value)}
              className="rounded-xl p-2 text-foreground transition-colors hover:bg-muted/70 lg:hidden"
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-b border-border/40 bg-card/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container mx-auto space-y-4 px-4 py-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${
                  isActive("/") ? "bg-primary text-primary-foreground" : "bg-muted/40 text-foreground"
                }`}
              >
                <Home size={16} />
                Inicio
              </Link>

              {navGroups.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <div key={group.label} className="rounded-2xl border border-border/40 bg-muted/20 p-3">
                    <p className="mb-2 flex items-center gap-2 px-1 text-[11px] font-extrabold uppercase tracking-[0.15em] text-muted-foreground">
                      <GroupIcon size={13} />
                      {group.label}
                    </p>
                    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                      {group.links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={link.to}
                            to={link.to}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold ${
                              isActive(link.to)
                                ? "bg-primary text-primary-foreground"
                                : "bg-card/70 text-foreground hover:bg-card"
                            }`}
                          >
                            <Icon size={15} />
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-3 text-xs text-muted-foreground">
                Acesso rapido: {flatLinks.length} paginas disponiveis para familias e comunidade escolar.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
