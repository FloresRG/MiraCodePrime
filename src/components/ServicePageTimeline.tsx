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
              <div className="absolute left-[84px] top-10 bottom-[-48px] w-0.5 bg-gray-200 dark:bg-white/10" />
            )}

            {/* Date */}
            <div className="w-20 pt-2 text-right">
              <span className="text-sm font-bold text-muted-foreground font-mono">
                {step.date}
              </span>
            </div>

            {/* Icon */}
            <div className="relative z-10">
              <div
                className={cn(
                  "size-12 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110",
                  step.status === "completed"
                    ? "bg-green-500"
                    : step.status === "in-progress"
                      ? "bg-primary"
                      : "bg-gray-300 dark:bg-white/10",
                )}
              >
                {step.status === "completed" ? (
                  <Check className="size-6 text-white" />
                ) : step.status === "in-progress" ? (
                  <Play className="size-6 text-white fill-current" />
                ) : (
                  <Clock className="size-6 text-muted-foreground" />
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
