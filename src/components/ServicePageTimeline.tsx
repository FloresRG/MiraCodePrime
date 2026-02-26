import React from "react";
import { motion } from "framer-motion";
import { Check, Clock, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Step {
  date: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "pending";
}

interface Service {
  title: string;
  description: string;
  icon: any;
  steps: Step[];
}

export const ServicePageTimeline = ({ service }: { service: Service }) => {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4">
      <div className="space-y-12">
        {service.steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6 relative group"
          >
            {/* Vertical Line */}
            {index !== service.steps.length - 1 && (
              <div className="absolute left-[84px] top-10 bottom-[-48px] w-0.5 bg-border/20" />
            )}

            {/* Date */}
            <div className="w-20 pt-2 text-right">
              <span className="text-sm font-black text-primary/40 font-mono tracking-tighter">
                {step.date}
              </span>
            </div>

            {/* Icon */}
            <div className="relative z-10">
              <div
                className={cn(
                  "size-12 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 border border-white/10 p-0.5",
                  step.status === "completed"
                    ? "bg-green-500/80 text-white shadow-green-500/20"
                    : step.status === "in-progress"
                      ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-primary/30"
                      : "bg-muted/50 dark:bg-card border-border/30",
                )}
              >
                {step.status === "completed" ? (
                  <Check className="size-5" />
                ) : step.status === "in-progress" ? (
                  <Play className="size-5 fill-current ml-0.5" />
                ) : (
                  <Clock className="size-5 text-muted-foreground" />
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 flex flex-col items-center gap-6">
        <p className="text-muted-foreground text-center max-w-lg">
          ¿Listo para llevar tu proyecto al siguiente nivel con nuestro servicio
          de {service.title}?
        </p>
        <a href="/#contact">
          <Button
            size="lg"
            className="rounded-full px-12 h-16 text-xl font-bold hover:scale-105 transition-transform"
          >
            Solicitar Cotización
          </Button>
        </a>
      </div>
    </div>
  );
};

const cn = (...classes: any[]) => classes.filter(Boolean).join(" ");
