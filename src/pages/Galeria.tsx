import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { X, Images, Camera } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Album = {
  title: string;
  date: string;
  photos: string[];
};

const albums: Album[] = [
  {
    title: "Festa Junina 2025",
    date: "Junho 2025",
    photos: ["Quadrilha da turma", "Decoracao do patio", "Brincadeiras coletivas", "Apresentacoes", "Equipe e familias", "Encerramento"],
  },
  {
    title: "Dia das Criancas",
    date: "Outubro 2025",
    photos: ["Circuito de brincadeiras", "Leitura coletiva", "Atividades artisticas", "Momentos em grupo"],
  },
  {
    title: "Formatura 2025",
    date: "Dezembro 2025",
    photos: ["Cerimonia", "Homenagens", "Turmas", "Confraternizacao", "Registros finais"],
  },
];

const Galeria = () => {
  const [openAlbum, setOpenAlbum] = useState<number | null>(null);

  return (
    <div className="page-shell">
      <SectionTitle icon={Images} subtitle="Momentos especiais da nossa comunidade escolar">
        Galeria de Fotos
      </SectionTitle>

      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {albums.map((album, index) => (
          <motion.div key={album.title} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.08 }}>
            <Card className="glass-panel card-hover cursor-pointer overflow-hidden rounded-2xl" onClick={() => setOpenAlbum(index)}>
              <div className="soft-grid flex aspect-video items-center justify-center bg-primary/5 text-primary">
                <Camera size={34} />
              </div>
              <CardContent className="p-4">
                <h3 className="text-sm font-bold text-foreground md:text-base">{album.title}</h3>
                <p className="text-xs text-muted-foreground">{album.date} - {album.photos.length} registros</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {openAlbum !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
            onClick={() => setOpenAlbum(null)}
          >
            <motion.div
              initial={{ y: 16, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 16, scale: 0.97, opacity: 0 }}
              className="max-h-[88vh] w-full max-w-4xl overflow-auto rounded-2xl border border-border/60 bg-card p-6 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{albums[openAlbum].title}</h3>
                  <p className="text-xs text-muted-foreground">{albums[openAlbum].date}</p>
                </div>
                <button onClick={() => setOpenAlbum(null)} className="rounded-xl p-1.5 transition-colors hover:bg-muted/70" aria-label="Fechar album">
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-2.5 md:grid-cols-2">
                {albums[openAlbum].photos.map((photo) => (
                  <div key={photo} className="rounded-xl border border-border/40 bg-muted/35 p-4 text-sm font-semibold text-muted-foreground">
                    {photo}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Galeria;
