import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cake, PartyPopper, Gift, Star, Sparkles } from "lucide-react";

const aniversariantes = [
  { name: "Ana Clara", turma: "Turma do Sol", dia: 3 },
  { name: "Pedro Henrique", turma: "Turma da Lua", dia: 7 },
  { name: "Sofia", turma: "Turma das Estrelas", dia: 12 },
  { name: "Miguel", turma: "Turma do Arco-Íris", dia: 15 },
  { name: "Laura", turma: "Turma do Sol", dia: 19 },
  { name: "Gabriel", turma: "Turma da Lua", dia: 22 },
  { name: "Isabella", turma: "Turma das Estrelas", dia: 25 },
  { name: "Lucas", turma: "Turma do Arco-Íris", dia: 28 },
];

const icons = [PartyPopper, Gift, Star, Sparkles, Cake];

const Aniversariantes = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={Cake} subtitle="Parabéns para nossos aniversariantes de fevereiro">
        Aniversariantes do Mês
      </SectionTitle>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {aniversariantes.map((aniversariante, index) => {
          const Icon = icons[index % icons.length];

          return (
            <motion.div key={aniversariante.name} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.05 }}>
              <Card className="glass-panel card-hover rounded-2xl text-center">
                <CardContent className="p-5">
                  <div className="mx-auto mb-2.5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground md:text-base">{aniversariante.name}</h3>
                  <p className="text-xs text-muted-foreground">{aniversariante.turma}</p>
                  <p className="mt-1.5 text-xs font-bold text-primary">Dia {aniversariante.dia}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Aniversariantes;
