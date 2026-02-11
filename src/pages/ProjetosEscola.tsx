import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { School, Sprout, BookOpenText, Palette, Puzzle, ArrowRight } from "lucide-react";
import { schoolProjects } from "@/data/content";

const iconByProject: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "horta-escolar": Sprout,
  "pequenos-leitores": BookOpenText,
  "arte-expressao": Palette,
  "brincando-aprendendo": Puzzle,
};

const ProjetosEscola = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={School} subtitle="Projetos institucionais da nossa escola">
        Projetos da Escola
      </SectionTitle>

      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
        {schoolProjects.map((project, index) => {
          const Icon = iconByProject[project.id] ?? School;
          return (
            <motion.div key={project.id} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.08 }}>
              <Link to={`/projetos-escola/${project.id}`} className="block h-full">
                <Card className="glass-panel card-hover h-full rounded-2xl">
                  <CardContent className="p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-primary">
                      Ver detalhes <ArrowRight size={14} />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjetosEscola;
