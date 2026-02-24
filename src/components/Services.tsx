import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services } from "@/data/services";

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
            Soluciones integrales para cada <br />
            <span className="text-primary">necesidad tecnológica</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Cubrimos todo el ciclo de vida del desarrollo de software, desde la
            concepción hasta el despliegue y mantenimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={`/servicios/${service.slug}`}
                className="block h-full cursor-pointer"
              >
                <Card className="h-full border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 group">
                  <CardHeader>
                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-6 transition-all duration-300 shadow-sm">
                      <service.icon className="size-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-8 text-base leading-relaxed line-clamp-3 font-medium">
                      {service.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-bold rounded-full bg-secondary text-secondary-foreground border border-border/40 font-mono shadow-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
