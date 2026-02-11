import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BadgeCheck, BookOpen, Building2, HandHeart, School, Trees, Users } from "lucide-react";

const pilares = [
  {
    title: "Acolhimento",
    icon: HandHeart,
    text: "Recebemos cada crianca e familia com escuta, respeito e vinculo diario.",
  },
  {
    title: "Aprendizagem",
    icon: BookOpen,
    text: "Planejamos experiencias ludicas e intencionais para o desenvolvimento integral.",
  },
  {
    title: "Comunidade",
    icon: Users,
    text: "Fortalecemos a parceria entre escola, familias e territorio.",
  },
];

const espacos = [
  "Salas de aula",
  "Biblioteca infantil",
  "Patio de brincadeiras",
  "Refeitorio",
  "Area verde",
  "Espaco de projetos",
];

const Escola = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={School} subtitle="Sobre nos: quem somos, como educamos e os espacos que fazem parte da rotina escolar">
        EMEI Paulo VI
      </SectionTitle>

      <div className="mx-auto max-w-6xl space-y-6">
        <motion.section
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]"
        >
          <Card className="relative overflow-hidden rounded-2xl border-primary/20 bg-primary text-primary-foreground">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-white/15 blur-2xl" />
              <div className="absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-school-yellow/30 blur-3xl" />
            </div>
            <CardContent className="relative p-6 md:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
                <BadgeCheck size={13} />
                Sobre nos
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight md:text-3xl">Uma escola que educa com afeto, proposito e presenca</h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
                A EMEI Paulo VI valoriza o brincar, o cuidado e a construcao de autonomia, em uma rotina organizada para que
                cada crianca aprenda, conviva e se desenvolva com seguranca.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-panel rounded-2xl">
            <CardContent className="p-6">
              <h4 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
                <Building2 size={18} className="text-primary" />
                Nossa identidade
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Promovemos experiencias educativas com intencionalidade pedagogica, respeitando os tempos de cada crianca e
                fortalecendo o vinculo entre escola e familia.
              </p>
              <div className="mt-4 space-y-2">
                <div className="rounded-xl border border-border/40 bg-muted/35 p-3 text-sm text-muted-foreground">Ambiente seguro e acolhedor.</div>
                <div className="rounded-xl border border-border/40 bg-muted/35 p-3 text-sm text-muted-foreground">Projetos com artes, leitura e natureza.</div>
                <div className="rounded-xl border border-border/40 bg-muted/35 p-3 text-sm text-muted-foreground">Comunicacao continua com familias.</div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <motion.section
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="grid gap-3 md:grid-cols-3"
        >
          {pilares.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ y: 14, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 + index * 0.08 }}>
                <Card className="glass-panel card-hover h-full rounded-2xl">
                  <CardContent className="p-5">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.section>

        <motion.section initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.14, duration: 0.35 }}>
          <Card className="glass-panel rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between gap-3 border-b border-border/50 px-6 py-5">
                <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
                  <Trees size={20} className="text-primary" />
                  Espacos da Escola
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-3">
                {espacos.map((space) => (
                  <div key={space} className="rounded-xl border border-border/40 bg-muted/35 p-4 text-sm font-semibold text-muted-foreground">
                    {space}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
};

export default Escola;
