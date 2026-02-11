import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Backpack, Sun, Moon, Star, Rainbow, ArrowRight } from "lucide-react";
import { classGroups } from "@/data/content";

const iconByClass: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "turma-sol": Sun,
  "turma-lua": Moon,
  "turma-estrelas": Star,
  "turma-arco-iris": Rainbow,
};

const ProjetosSalas = () => {
  return (
    <div className="page-shell">
      <SectionTitle icon={Backpack} subtitle="Projetos desenvolvidos em cada turma">
        Projetos das Salas
      </SectionTitle>

      <div className="mx-auto max-w-4xl space-y-7">
        {classGroups.map((group, index) => {
          const ClassIcon = iconByClass[group.id] ?? Backpack;
          return (
            <motion.div key={group.id} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.1 }}>
              <h3 className="mb-2.5 flex items-center gap-2 text-lg font-bold text-foreground">
                <span className="h-6 w-1.5 rounded-full bg-primary" />
                <ClassIcon size={18} className="text-primary" />
                {group.name}
              </h3>
              <div className="space-y-2.5 pl-4">
                {group.projects.map((project) => (
                  <Link key={project.id} to={`/projetos-salas/${group.id}/${project.id}`} className="block">
                    <Card className="glass-panel card-hover rounded-2xl">
                      <CardContent className="p-4">
                        <h4 className="text-sm font-bold text-foreground md:text-base">{project.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary">
                          Ver detalhes <ArrowRight size={14} />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjetosSalas;
