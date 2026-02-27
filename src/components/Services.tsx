import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      key={service.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group rounded-3xl overflow-hidden">
        {/* Desktop Layout - Link */}
        <a
          href={`/servicios/${service.slug}`}
          className="hidden md:block h-full cursor-pointer"
        >
          <CardHeader className="p-8">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300 shadow-sm">
              <service.icon className="size-8 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <CardTitle className="text-2xl md:text-3xl font-black text-foreground tracking-tight">
              {service.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="px-8 pb-8">
            <CardDescription className="text-muted-foreground mb-8 text-lg leading-relaxed line-clamp-3 font-medium">
              {service.description}
            </CardDescription>
            <div className="flex flex-wrap gap-2 pt-2">
              {service.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-bold rounded-full bg-secondary text-secondary-foreground border border-border/40 font-mono shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
        </a>

        {/* Mobile Layout - Expandible */}
        <div className="md:hidden">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-6 flex items-center justify-between hover:bg-accent/5 transition-colors"
          >
            <div className="flex items-center gap-4 flex-1 text-left">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300 shadow-sm">
                <service.icon className="size-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <CardTitle className="text-xl font-black text-foreground tracking-tight line-clamp-2">
                {service.title}
              </CardTitle>
            </div>
            <ChevronDown
              className={`size-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 border-t border-border/20">
                  <CardDescription className="text-muted-foreground mb-6 text-base leading-relaxed font-medium">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-bold rounded-full bg-secondary text-secondary-foreground border border-border/40 font-mono shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`/servicios/${service.slug}`}
                    className="block mt-4 text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    Ver más →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <section
      id="services"
      className="py-8 md:py-8 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black tracking-tighter sm:text-7xl mb-6 text-foreground">
              Nuestros Servicios
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Soluciones tecnológicas de vanguardia diseñadas para impulsar la
              eficiencia y el crecimiento de tu empresa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
