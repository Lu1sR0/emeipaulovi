import { Link, useParams } from "react-router-dom";
import { ArrowLeft, School } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { schoolProjects } from "@/data/content";

const ProjetoEscolaDetalhe = () => {
  const { id } = useParams();
  const project = schoolProjects.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="page-shell">
        <Card className="glass-panel mx-auto max-w-3xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground">Projeto nao encontrado</h2>
            <Link to="/projetos-escola" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
              <ArrowLeft size={14} />
              Voltar para projetos da escola
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <SectionTitle icon={School} subtitle="Detalhes do projeto institucional">
        {project.title}
      </SectionTitle>

      <Card className="glass-panel mx-auto max-w-3xl rounded-2xl">
        <CardContent className="p-6 md:p-8">
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>

          <Link to="/projetos-escola" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
            <ArrowLeft size={14} />
            Voltar para projetos da escola
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjetoEscolaDetalhe;
