import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_8%,hsl(var(--primary)/0.08),transparent_30%),radial-gradient(circle_at_80%_20%,hsl(var(--school-blue)/0.08),transparent_32%)]" />
      <Header />
      <main className="relative flex-1 overflow-x-clip">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
