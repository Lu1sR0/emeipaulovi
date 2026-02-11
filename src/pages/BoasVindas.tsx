import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { HandHeart, Clock3, Shirt, Backpack, Apple, ShieldPlus, PhoneCall, Sun } from "lucide-react";

const sections = [
  {
    icon: HandHeart,
    title: "Seja bem-vindo(a)",
    content:
      "Recebemos sua família com alegria na EMEI Paulo VI. Este manual reúne orientações para facilitar os primeiros dias na escola.",
  },
  {
    icon: Clock3,
    title: "Horários",
    content:
      "Manhã: entrada às 7h e saída às 11h30. Tarde: entrada às 13h e saída às 17h. Período integral: 7h às 17h.",
  },
  {
    icon: Shirt,
    title: "Uniforme",
    content: "O uso do uniforme é obrigatório. Identifique as peças com o nome da criança para evitar trocas.",
  },
  {
    icon: Backpack,
    title: "O que trazer na mochila",
    content: "Muda de roupa completa, garrafinha de água, protetor solar com autorização e agenda escolar.",
  },
  {
    icon: Apple,
    title: "Alimentação",
    content: "As refeições são fornecidas pela escola. Informe alergias e restrições alimentares no ato da matrícula.",
  },
  {
    icon: ShieldPlus,
    title: "Saúde",
    content:
      "Mantenha a carteira de vacinação atualizada. Medicamentos só são administrados com receita médica válida.",
  },
  {
    icon: PhoneCall,
    title: "Contato",
    content: "Em caso de dúvidas, procure a secretaria. Acompanhe também as novidades pelo portal e Instagram da escola.",
  },
];

const BoasVindas = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={Sun} subtitle="Tudo que sua família precisa saber para começar">
        Manual de Boas-vindas
      </SectionTitle>

      <div className="mx-auto max-w-4xl space-y-3">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div key={section.title} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.05 }}>
              <Card className="glass-panel card-hover rounded-2xl">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="flex flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 p-2.5 text-primary">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{section.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{section.content}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BoasVindas;
