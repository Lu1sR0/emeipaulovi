import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "@/components/layout/PublicLayout";
import Index from "./pages/Index";
import Escola from "./pages/Escola";
import Calendario from "./pages/Calendario";
import Jornal from "./pages/Jornal";
import Avisos from "./pages/Avisos";
import Aniversariantes from "./pages/Aniversariantes";
import Galeria from "./pages/Galeria";
import Enquetes from "./pages/Enquetes";
import Mural from "./pages/Mural";
import Cardapio from "./pages/Cardapio";
import Orientacoes from "./pages/Orientacoes";
import BoasVindas from "./pages/BoasVindas";
import ProjetosEscola from "./pages/ProjetosEscola";
import ProjetosSalas from "./pages/ProjetosSalas";
import JornalDetalhe from "./pages/JornalDetalhe";
import ProjetoEscolaDetalhe from "./pages/ProjetoEscolaDetalhe";
import ProjetoSalaDetalhe from "./pages/ProjetoSalaDetalhe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/escola" element={<Escola />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/jornal" element={<Jornal />} />
            <Route path="/jornal/:id" element={<JornalDetalhe />} />
            <Route path="/avisos" element={<Avisos />} />
            <Route path="/aniversariantes" element={<Aniversariantes />} />
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/enquetes" element={<Enquetes />} />
            <Route path="/mural" element={<Mural />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/orientacoes" element={<Orientacoes />} />
            <Route path="/boas-vindas" element={<BoasVindas />} />
            <Route path="/projetos-escola" element={<ProjetosEscola />} />
            <Route path="/projetos-escola/:id" element={<ProjetoEscolaDetalhe />} />
            <Route path="/projetos-salas" element={<ProjetosSalas />} />
            <Route path="/projetos-salas/:turmaId/:projetoId" element={<ProjetoSalaDetalhe />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
