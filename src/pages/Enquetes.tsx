import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { BarChart3, CheckCircle2 } from "lucide-react";

interface Enquete {
  id: number;
  question: string;
  options: { label: string; votes: number }[];
  active: boolean;
}

const initialEnquetes: Enquete[] = [
  {
    id: 1,
    question: "Qual tema as famílias preferem para a Festa Junina?",
    options: [
      { label: "Arraial tradicional", votes: 45 },
      { label: "Festa do interior", votes: 32 },
      { label: "Forró e cultura nordestina", votes: 28 },
    ],
    active: true,
  },
  {
    id: 2,
    question: "Melhor horário para reunião de pais?",
    options: [
      { label: "Manhã (9h)", votes: 20 },
      { label: "Tarde (14h)", votes: 15 },
      { label: "Noite (18h)", votes: 50 },
    ],
    active: true,
  },
];

const Enquetes = () => {
  const [enquetes, setEnquetes] = useState(initialEnquetes);
  const [voted, setVoted] = useState<number[]>([]);

  const vote = (enqueteId: number, optionIdx: number) => {
    if (voted.includes(enqueteId)) return;

    setVoted([...voted, enqueteId]);
    setEnquetes((prev) =>
      prev.map((enquete) =>
        enquete.id === enqueteId
          ? {
              ...enquete,
              options: enquete.options.map((option, index) =>
                index === optionIdx ? { ...option, votes: option.votes + 1 } : option,
              ),
            }
          : enquete,
      ),
    );
  };

  return (
    <div className="page-shell">
      <SectionTitle icon={BarChart3} subtitle="Participe e dê sua opinião nas decisões da escola">
        Enquetes
      </SectionTitle>

      <div className="mx-auto max-w-3xl space-y-4">
        {enquetes
          .filter((enquete) => enquete.active)
          .map((enquete, idx) => {
            const hasVoted = voted.includes(enquete.id);
            const totalVotes = enquete.options.reduce((sum, option) => sum + option.votes, 0);

            return (
              <motion.div key={enquete.id} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: idx * 0.08 }}>
                <Card className="glass-panel rounded-2xl">
                  <CardContent className="p-5 md:p-6">
                    <h3 className="mb-4 text-base font-bold text-foreground md:text-lg">{enquete.question}</h3>
                    <div className="space-y-2.5">
                      {enquete.options.map((option, index) => {
                        const percentage = totalVotes > 0 ? Math.round((option.votes / totalVotes) * 100) : 0;

                        return (
                          <div key={`${enquete.id}-${index}`}>
                            {hasVoted ? (
                              <div>
                                <div className="mb-1 flex justify-between text-sm">
                                  <span className="font-semibold text-foreground">{option.label}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {percentage}% ({option.votes})
                                  </span>
                                </div>
                                <Progress value={percentage} className="h-2.5" />
                              </div>
                            ) : (
                              <Button
                                variant="outline"
                                className="w-full justify-start rounded-xl border-border/60 font-semibold transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                                onClick={() => vote(enquete.id, index)}
                              >
                                {option.label}
                              </Button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    {hasVoted && (
                      <p className="mt-3 inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <CheckCircle2 size={13} className="text-primary" />
                        Obrigado pelo seu voto. Total atual: {totalVotes} votos.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Enquetes;
