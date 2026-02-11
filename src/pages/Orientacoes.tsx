import SectionTitle from "@/components/ui/SectionTitle";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpenCheck } from "lucide-react";

const orientacoes = [
  {
    question: "Qual o horário de funcionamento da escola?",
    answer:
      "A escola funciona das 7h às 17h. A entrada dos alunos é até as 8h e a saída a partir das 16h30. Pedimos pontualidade para o bom andamento das atividades.",
  },
  {
    question: "O que meu filho precisa trazer?",
    answer: "Uniforme completo, mochila com uma muda de roupa, garrafinha de água e, se necessário, medicamentos com receita médica.",
  },
  {
    question: "Como funciona a alimentação?",
    answer:
      "A escola oferece lanche da manhã, almoço e lanche da tarde. O cardápio é elaborado por nutricionista. Alergias e restrições devem ser informadas na matrícula.",
  },
  {
    question: "Como comunicar ausências?",
    answer: "As ausências devem ser comunicadas à secretaria por telefone ou presencialmente. Faltas prolongadas requerem atestado médico.",
  },
  {
    question: "Posso visitar a escola?",
    answer: "Sim. Agendamentos de visitas podem ser feitos na secretaria. Nos dias de evento, as famílias são convidadas a participar.",
  },
  {
    question: "Como acompanho as atividades?",
    answer:
      "Pelo portal. Acompanhe calendário, avisos, jornal e mural de recados para ficar por dentro das ações da escola.",
  },
];

const Orientacoes = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={BookOpenCheck} subtitle="Dúvidas frequentes das famílias">
        Orientações Gerais
      </SectionTitle>

      <div className="mx-auto max-w-4xl">
        <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Card className="glass-panel rounded-2xl">
            <CardContent className="p-5 md:p-6">
              <Accordion type="single" collapsible className="w-full">
                {orientacoes.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`} className="border-border/40">
                    <AccordionTrigger className="text-left text-sm font-bold text-foreground transition-colors hover:text-primary md:text-base">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Orientacoes;
