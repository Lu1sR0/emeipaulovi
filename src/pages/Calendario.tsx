import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, CalendarDays, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const months = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const events: Record<string, { title: string; icon: "calendar" | "trees" }[]> = {
  "2026-02-15": [{ title: "Reuniao de pais", icon: "calendar" }],
  "2026-02-28": [{ title: "Passeio ao parque", icon: "trees" }],
};

const iconByType = {
  calendar: CalendarDays,
  trees: Trees,
};

const Calendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i += 1) days.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) days.push(day);

  const getDateKey = (day: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  return (
    <div className="page-shell">
      <SectionTitle icon={CalendarDays} subtitle="Fique por dentro das atividades do mes">
        Calendario de Atividades
      </SectionTitle>

      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          <Card className="glass-panel rounded-2xl">
            <CardContent className="p-5 md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => setCurrentDate(new Date(year, month - 1))}>
                  <ChevronLeft size={18} />
                </Button>
                <h3 className="text-lg font-bold text-foreground">
                  {months[month]} {year}
                </h3>
                <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => setCurrentDate(new Date(year, month + 1))}>
                  <ChevronRight size={18} />
                </Button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center">
                {daysOfWeek.map((day) => (
                  <div key={day} className="py-2 text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground md:text-xs">
                    {day}
                  </div>
                ))}

                {days.map((day, index) => {
                  if (!day) return <div key={`empty-${index}`} />;

                  const key = getDateKey(day);
                  const dayEvents = events[key];
                  const selected = selectedDate === key;

                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedDate(key)}
                      className={`relative aspect-square rounded-xl text-sm transition-all ${
                        selected
                          ? "bg-primary font-bold text-primary-foreground shadow-md"
                          : dayEvents
                            ? "bg-primary/10 font-bold text-primary hover:bg-primary/20"
                            : "text-foreground/70 hover:bg-muted/60"
                      }`}
                    >
                      {day}
                      {dayEvents && (
                        <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-1">
                          {dayEvents.map((_, dotIndex) => (
                            <div
                              key={`${key}-dot-${dotIndex}`}
                              className={`h-1 w-1 rounded-full ${selected ? "bg-primary-foreground" : "bg-primary"}`}
                            />
                          ))}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedDate && events[selectedDate] && (
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="mt-5 rounded-2xl border border-primary/15 bg-primary/5 p-4"
                >
                  <h4 className="mb-2 text-sm font-bold text-foreground">Eventos do dia {selectedDate.split("-")[2]}:</h4>
                  <div className="space-y-1.5">
                    {events[selectedDate].map((event, index) => {
                      const Icon = iconByType[event.icon];
                      return (
                        <div key={`${selectedDate}-${index}`} className="flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">
                          <Icon size={14} />
                          {event.title}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Calendario;
