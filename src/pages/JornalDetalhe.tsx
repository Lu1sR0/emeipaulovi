import { Link, useParams } from "react-router-dom";
import { Newspaper, ArrowLeft, Clock3 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { journalArticles } from "@/data/content";

const JornalDetalhe = () => {
  const { id } = useParams();
  const article = journalArticles.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="page-shell">
        <Card className="glass-panel mx-auto max-w-3xl rounded-2xl">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold text-foreground">Noticia nao encontrada</h2>
            <Link to="/jornal" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-primary">
              <ArrowLeft size={14} />
              Voltar para o jornal
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <SectionTitle icon={Newspaper} subtitle={article.category}>
        {article.title}
      </SectionTitle>

      <Card className="glass-panel mx-auto max-w-3xl rounded-2xl">
        <CardContent className="p-6 md:p-8">
          <p className="mb-4 inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Clock3 size={12} />
            {article.date}
          </p>
          <div className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <Link to="/jornal" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
            <ArrowLeft size={14} />
            Voltar para o jornal
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default JornalDetalhe;
