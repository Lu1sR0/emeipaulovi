import { Link } from "react-router-dom";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Newspaper, Clock3, ArrowRight } from "lucide-react";
import { journalArticles } from "@/data/content";

const Jornal = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={Newspaper} subtitle="As ultimas novidades da nossa escola">
        Jornal da Escola
      </SectionTitle>

      <div className="mx-auto max-w-4xl space-y-4">
        {journalArticles.map((article, index) => (
          <motion.div key={article.id} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.08 }}>
            <Link to={`/jornal/${article.id}`} className="block">
              <Card className="glass-panel card-hover rounded-2xl">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="hidden h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:flex">
                      <Newspaper size={28} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1.5 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">{article.category}</span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock3 size={12} />
                          {article.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold leading-tight text-foreground">{article.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                        Ler noticia <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Jornal;
