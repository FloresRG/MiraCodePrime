import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  className?: string;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  badge = "Proyectos", 
  className 
}: SectionHeaderProps) => {
  return (
    <div className={cn("container mx-auto px-4 ", className)}>
      <div className="relative flex flex-col items-center text-center">
        
        {/* Badge Animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
        >
          <Sparkles className="size-3 fill-primary" />
          {badge}
        </motion.div>

        {/* Título con Gradiente y Tipografía "Massive" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] text-foreground inline-block">
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-4 last:mr-0">
                {word}
              </span>
            ))}
          </h2>
          
          {/* Decoración de fondo sutil */}
          <div className="absolute -top-10 -left-10 size-40 bg-primary/10 blur-[100px] -z-10 rounded-full" />
        </motion.div>

        {/* Subtítulo con ancho controlado y balanceado */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed font-medium"
        >
          {subtitle}
        </motion.p>

        {/* Línea decorativa inferior */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1.5 bg-primary mt-10 rounded-full"
        />
      </div>
    </div>
  );
};