import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-panel max-w-md rounded-2xl p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <AlertTriangle size={22} />
        </div>
        <h1 className="mb-1 text-4xl font-extrabold text-foreground">404</h1>
        <p className="mb-5 text-sm text-muted-foreground md:text-base">Página não encontrada. O endereço acessado não existe no portal.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          <ArrowLeft size={14} />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
