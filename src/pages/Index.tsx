import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  Calendar,
  Camera,
  Cake,
  HandHeart,
  Layers,
  MessageSquare,
  Newspaper,
  School,
  UtensilsCrossed,
  Megaphone,
  PartyPopper,
  Trees,
  Gift,
  Clock3,
  ShieldCheck,
  Users,
  BookOpenCheck,
  MessagesSquare,
  Navigation,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const quickLinks = [
  { to: "/calendario", label: "Calendário", icon: Calendar },
  { to: "/jornal", label: "Jornal", icon: Newspaper },
  { to: "/avisos", label: "Avisos", icon: Bell },
  { to: "/aniversariantes", label: "Aniversariantes", icon: Cake },
  { to: "/galeria", label: "Galeria", icon: Camera },
  { to: "/enquetes", label: "Enquetes", icon: BarChart3 },
  { to: "/mural", label: "Mural", icon: MessageSquare },
  { to: "/cardapio", label: "Cardápio", icon: UtensilsCrossed },
  { to: "/orientacoes", label: "Orientações", icon: BookOpen },
  { to: "/boas-vindas", label: "Boas-vindas", icon: HandHeart },
  { to: "/projetos-escola", label: "Projetos da escola", icon: School },
  { to: "/projetos-salas", label: "Projetos das salas", icon: Layers },
];

const nextEvents = [
  { date: "15", month: "FEV", title: "Reunião de pais", icon: Megaphone },
  { date: "20", month: "FEV", title: "Festa de Carnaval", icon: PartyPopper },
  { date: "28", month: "FEV", title: "Passeio ao parque", icon: Trees },
];

const birthdays = [
  { name: "Ana Clara", turma: "Turma do Sol" },
  { name: "Pedro Henrique", turma: "Turma da Lua" },
  { name: "Sofia", turma: "Turma das Estrelas" },
];

const highlights = [
  { label: "Atendimento", value: "07h às 17h", icon: Clock3 },
  { label: "Projetos ativos", value: "12", icon: BookOpenCheck },
  { label: "Comunicação", value: "Diária", icon: ShieldCheck },
  { label: "Comunidade", value: "+200 famílias", icon: Users },
];

const valuePills = [
  { text: "Comunicacao direta com familias", icon: MessagesSquare },
  { text: "Conteudo atualizado toda semana", icon: Newspaper },
  { text: "Navegacao rapida para todas as paginas", icon: Navigation },
];

const quickContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const quickItem = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.32 } },
};

const Index = () => {
  return (
    <div className="min-h-screen pb-8">
      <section className="relative overflow-hidden border-b border-primary/20 bg-primary pb-12 pt-14 md:pb-14 md:pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-14 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -top-16 h-80 w-80 rounded-full bg-white/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <motion.div
              initial={{ y: 22, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="text-center lg:text-left"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
                <Users size={14} className="text-white/90" />
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-white/90">Portal da Família</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.04] text-white md:text-5xl lg:text-6xl">EMEI Paulo VI</h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg lg:mx-0">
                Informacao clara para aproximar familias e escola, com rotina organizada e acompanhamento das vivencias das criancas.
              </p>

              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/avisos"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-extrabold text-primary transition-all hover:translate-y-[-1px]"
                >
                  Ver comunicados
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/calendario"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Agenda do mês
                  <Calendar size={14} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mx-auto w-full max-w-md"
            >
              <div className="rounded-[2rem] border border-white/25 bg-white/12 p-5 shadow-2xl backdrop-blur-md">
                <div className="mb-4 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-3">
                  <img src="/logo-emei.png" alt="Logo EMEI Paulo VI" className="h-16 w-16 rounded-xl bg-white p-1.5 object-contain" />
                  <div>
                    <p className="text-sm font-extrabold text-white">EMEI Paulo VI</p>
                    <p className="text-xs text-white/75">Semeando o futuro com acolhimento</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="rounded-xl border border-white/20 bg-white/10 p-3">
                        <Icon size={14} className="mb-1 text-white/85" />
                        <p className="text-[11px] text-white/70">{item.label}</p>
                        <p className="text-sm font-extrabold text-white">{item.value}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="mt-8 grid gap-2 sm:grid-cols-3"
          >
            {valuePills.map((pill) => {
              const PillIcon = pill.icon;
              return (
              <div key={pill.text} className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-sm text-white/90">
                <PillIcon size={14} className="text-white/85" />
                <span>{pill.text}</span>
              </div>
              );
            })}
          </motion.div>
        </div>

      </section>

      <section className="container relative z-20 mx-auto px-4 pb-14 pt-8 md:pt-10">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Acesso rápido</h2>
            <p className="text-sm text-muted-foreground">Principais páginas para o dia a dia da escola.</p>
          </div>
        </div>
        <motion.div
          variants={quickContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <motion.div key={link.to} variants={quickItem}>
                <Link to={link.to} className="group block">
                  <Card className="glass-panel card-hover rounded-2xl border-primary/10">
                    <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
                      <div className="rounded-xl bg-primary/10 p-2.5 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon size={18} strokeWidth={2.25} />
                      </div>
                      <span className="text-xs font-bold leading-tight text-foreground/80">{link.label}</span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-extrabold text-foreground">Resumo da Semana</h2>
            <p className="text-sm text-muted-foreground">Informações principais para acompanhar a rotina escolar.</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }}>
            <Card className="glass-panel card-hover h-full overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 border-b border-border/50 p-5">
                  <div className="rounded-xl bg-primary p-2 text-primary-foreground">
                    <Bell size={17} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Último aviso</h3>
                </div>
                <div className="space-y-4 p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    As matrículas para o ano letivo de 2026 estão abertas. Procure a secretaria com a documentação necessária.
                  </p>
                  <Link to="/avisos" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5">
                    Ver todos os avisos <ArrowRight size={14} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}>
            <Card className="glass-panel card-hover h-full overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 border-b border-border/50 p-5">
                  <div className="rounded-xl bg-primary p-2 text-primary-foreground">
                    <Calendar size={17} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Próximos eventos</h3>
                </div>
                <div className="space-y-3 p-5">
                  {nextEvents.map((event) => {
                    const EventIcon = event.icon;
                    return (
                      <div key={event.title} className="flex items-center gap-3 rounded-xl bg-muted/40 p-2.5">
                        <div className="flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center rounded-xl bg-primary text-primary-foreground">
                          <span className="text-sm font-bold leading-none">{event.date}</span>
                          <span className="mt-0.5 text-[9px] leading-none opacity-75">{event.month}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                            <EventIcon size={13} className="text-primary" />
                            <span className="truncate">{event.title}</span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                  <Link to="/calendario" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5">
                    Ver calendário <ArrowRight size={14} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35 }}>
            <Card className="glass-panel card-hover h-full overflow-hidden rounded-2xl">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 border-b border-border/50 p-5">
                  <div className="rounded-xl bg-primary p-2 text-primary-foreground">
                    <Cake size={17} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">Aniversariantes</h3>
                </div>
                <div className="space-y-3 p-5">
                  {birthdays.map((birthday) => (
                    <div key={birthday.name} className="flex items-center gap-3 rounded-xl bg-muted/40 p-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Gift size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-bold leading-tight text-foreground">{birthday.name}</p>
                        <p className="text-xs text-muted-foreground">{birthday.turma}</p>
                      </div>
                    </div>
                  ))}
                  <Link to="/aniversariantes" className="inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-all hover:gap-2.5">
                    Ver todos <ArrowRight size={14} />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
