import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Pin, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

const recados = [
  {
    id: 1,
    title: "Boas-vindas ao ano letivo",
    content:
      "Desejamos um excelente ano letivo de 2026 a todas as famílias. Contem com nossa equipe para uma jornada de aprendizado e cuidado.",
    date: "01 Fev 2026",
    pinned: true,
  },
  {
    id: 2,
    title: "Lembrete sobre uniforme",
    content:
      "Pedimos que as crianças venham uniformizadas diariamente. O uniforme pode ser adquirido na secretaria da escola.",
    date: "05 Fev 2026",
    pinned: false,
  },
  {
    id: 3,
    title: "Horário de funcionamento",
    content:
      "A escola funciona das 7h às 17h. Entrada até as 8h e saída a partir das 16h30. A pontualidade ajuda no fluxo das atividades.",
    date: "03 Fev 2026",
    pinned: false,
  },
];

const Mural = () => {
  const sorted = [...recados].sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1));

  return (
    <div className="page-shell">
      <SectionTitle icon={MessageSquareText} subtitle="Comunicados da escola para as famílias">
        Mural de Recados
      </SectionTitle>

      <div className="mx-auto max-w-4xl space-y-3">
        {sorted.map((recado, index) => (
          <motion.div key={recado.id} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.06 }}>
            <Card className={`rounded-2xl border shadow-sm transition-shadow hover:shadow-md ${recado.pinned ? "border-primary/30 bg-primary/[0.03]" : "glass-panel"}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  {recado.pinned && (
                    <div className="mt-0.5 flex flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 p-1.5">
                      <Pin size={14} className="text-primary" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-foreground">{recado.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{recado.content}</p>
                    <p className="mt-2 text-[11px] text-muted-foreground/60">{recado.date}</p>
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

export default Mural;
