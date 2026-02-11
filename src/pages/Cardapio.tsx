import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { UtensilsCrossed, Sunrise, Soup, Sunset } from "lucide-react";

const cardapio = [
  {
    dia: "Segunda",
    lanche_manha: "Leite com achocolatado e pão com manteiga",
    almoco: "Arroz, feijão, frango grelhado, salada de alface e tomate",
    lanche_tarde: "Suco de laranja e biscoito integral",
  },
  {
    dia: "Terça",
    lanche_manha: "Iogurte e fruta",
    almoco: "Arroz, feijão, carne moída e purê de batata",
    lanche_tarde: "Vitamina de banana",
  },
  {
    dia: "Quarta",
    lanche_manha: "Leite e bolo de cenoura",
    almoco: "Macarrão ao molho de carne e salada de beterraba",
    lanche_tarde: "Suco de uva e pão de queijo",
  },
  {
    dia: "Quinta",
    lanche_manha: "Mingau de aveia",
    almoco: "Arroz, feijão, peixe assado e legumes no vapor",
    lanche_tarde: "Fruta da estação",
  },
  {
    dia: "Sexta",
    lanche_manha: "Achocolatado e pão com geleia",
    almoco: "Arroz, feijão, strogonoff de frango e batata palha",
    lanche_tarde: "Suco de manga e biscoito",
  },
];

const Cardapio = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={UtensilsCrossed} subtitle="Cardápio semanal das refeições servidas na escola">
        Cardápio das Refeições
      </SectionTitle>

      <div className="mx-auto max-w-6xl">
        <div className="space-y-3 md:hidden">
          {cardapio.map((dia, index) => (
            <motion.div key={dia.dia} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.06 }}>
              <Card className="glass-panel rounded-2xl">
                <CardContent className="p-4">
                  <h3 className="mb-2.5 text-base font-bold text-foreground">{dia.dia}</h3>
                  <div className="space-y-1.5 text-sm">
                    <div className="rounded-xl border border-primary/10 bg-primary/5 p-2.5">
                      <span className="inline-flex items-center gap-1 font-bold text-foreground">
                        <Sunrise size={14} />
                        Manhã:
                      </span>{" "}
                      <span className="text-muted-foreground">{dia.lanche_manha}</span>
                    </div>
                    <div className="rounded-xl border border-primary/10 bg-primary/5 p-2.5">
                      <span className="inline-flex items-center gap-1 font-bold text-foreground">
                        <Soup size={14} />
                        Almoço:
                      </span>{" "}
                      <span className="text-muted-foreground">{dia.almoco}</span>
                    </div>
                    <div className="rounded-xl border border-primary/10 bg-primary/5 p-2.5">
                      <span className="inline-flex items-center gap-1 font-bold text-foreground">
                        <Sunset size={14} />
                        Tarde:
                      </span>{" "}
                      <span className="text-muted-foreground">{dia.lanche_tarde}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="hidden md:block">
          <Card className="glass-panel overflow-hidden rounded-2xl">
            <table className="w-full">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-3.5 text-left text-sm font-bold">Dia</th>
                  <th className="p-3.5 text-left text-sm font-bold">Manhã</th>
                  <th className="p-3.5 text-left text-sm font-bold">Almoço</th>
                  <th className="p-3.5 text-left text-sm font-bold">Tarde</th>
                </tr>
              </thead>
              <tbody>
                {cardapio.map((dia, index) => (
                  <tr key={dia.dia} className={`${index % 2 === 0 ? "bg-primary/[0.02]" : ""} border-t border-border/30`}>
                    <td className="p-3.5 text-sm font-bold text-foreground">{dia.dia}</td>
                    <td className="p-3.5 text-sm text-muted-foreground">{dia.lanche_manha}</td>
                    <td className="p-3.5 text-sm text-muted-foreground">{dia.almoco}</td>
                    <td className="p-3.5 text-sm text-muted-foreground">{dia.lanche_tarde}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Cardapio;
