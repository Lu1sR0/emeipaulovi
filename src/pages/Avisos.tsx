import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Pin, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";

const avisos = [
  {
    id: 1,
    title: "Matrículas 2026 abertas",
    content:
      "As matrículas para o ano letivo de 2026 estão abertas. Procure a secretaria com RG, CPF, comprovante de residência e certidão de nascimento.",
    date: "11 Fev 2026",
    pinned: true,
  },
  {
    id: 2,
    title: "Reunião de pais em 15/02",
    content:
      "Convidamos todas as famílias para a reunião de pais e mestres no dia 15/02, às 18h, no auditório da escola.",
    date: "08 Fev 2026",
    pinned: true,
  },
  {
    id: 3,
    title: "Calendário de vacinação",
    content:
      "Lembramos que a carteira de vacinação deve estar atualizada. Traga uma cópia para a secretaria até o final do mês.",
    date: "05 Fev 2026",
    pinned: false,
  },
  {
    id: 4,
    title: "Aulas de capoeira às quartas",
    content: "As aulas acontecem toda quarta-feira às 14h no pátio coberto. As famílias também podem acompanhar atividades abertas.",
    date: "01 Fev 2026",
    pinned: false,
  },
];

const Avisos = () => {
  const sorted = [...avisos].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  return (
    <div className="page-shell">
      <SectionTitle icon={ClipboardList} subtitle="Comunicados importantes para as famílias">
        Quadro de Avisos
      </SectionTitle>

      <div className="mx-auto max-w-4xl space-y-3">
        {sorted.map((aviso, index) => (
          <motion.div key={aviso.id} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.06 }}>
            <Card className={`rounded-2xl border shadow-sm transition-shadow hover:shadow-md ${aviso.pinned ? "border-primary/30 bg-primary/[0.03]" : "glass-panel"}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  {aviso.pinned && (
                    <div className="mt-0.5 flex flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 p-1.5">
                      <Pin size={14} className="text-primary" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-foreground">{aviso.title}</h3>
                      {aviso.pinned && <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">Fixado</span>}
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{aviso.content}</p>
                    <p className="mt-2 text-[11px] text-muted-foreground/60">{aviso.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Avisos;
