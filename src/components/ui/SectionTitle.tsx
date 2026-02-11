import { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  children: ReactNode;
  icon?: LucideIcon;
  subtitle?: string;
}

const SectionTitle = ({ children, icon: Icon, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.42, ease: "easeOut" }}
      className="mb-8 md:mb-10"
    >
      <div className="flex items-start gap-3 md:gap-4">
        {Icon && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm md:h-12 md:w-12"
          >
            <Icon size={22} strokeWidth={2.3} />
          </motion.div>
        )}

        <div>
          <h2 className="text-2xl font-extrabold leading-tight text-foreground md:text-3xl">{children}</h2>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground md:text-base">{subtitle}</p>}
        </div>
      </div>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 72, opacity: 1 }}
        transition={{ duration: 0.45, delay: 0.12 }}
        className="mt-3 h-1 rounded-full bg-primary"
      />
    </motion.div>
  );
};

export default SectionTitle;

