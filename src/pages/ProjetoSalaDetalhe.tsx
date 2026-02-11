import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Backpack } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { classGroups } from "@/data/content";

const ProjetoSalaDetalhe = () => {
  const { turmaId, projetoId } = useParams();
  const group = classGroups.find((item) => item.id === turmaId);
  const project = group?.projects.find((item) => item.id === projetoId);

  if (!group || !project) {
    return (
      <div className="page-shell">
        <Card className="glass-panel mx-auto max-w-3xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground">Projeto da turma nao encontrado</h2>
            <Link to="/projetos-salas" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
              <ArrowLeft size={14} />
              Voltar para projetos das salas
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <SectionTitle icon={Backpack} subtitle={group.name}>
        {project.title}
      </SectionTitle>

      <Card className="glass-panel mx-auto max-w-3xl rounded-2xl">
        <CardContent className="p-6 md:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>

          <Link to="/projetos-salas" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
            <ArrowLeft size={14} />
            Voltar para projetos das salas
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjetoSalaDetalhe;
