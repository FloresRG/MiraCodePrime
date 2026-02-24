import React from "react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "admus-produccion",
    name: "Admus - Gestión Empresarial",
    image: "/src/assets/admus.png",
  },
  {
    id: "importadora-miranda",
    name: "Miranda - ERP Importaciones",
    image: "/src/assets/loginmiranda.png",
  },
  {
    id: "shop-miranda",
    name: "Shop Miranda - E-commerce",
    image: "/src/assets/logo.png",
  },
  {
    id: "pedidos-whatsapp",
    name: "Bot Pedidos WhatsApp",
    image: "/src/assets/prueba.png",
  },
  {
    id: "ecommerce-admin",
    name: "Admin Panel E-comm",
    image: "/src/assets/logomiracode.webp",
  },
];

const ProjectCard = ({
  id,
  name,
  image,
}: {
  id: string;
  name: string;
  image: string;
}) => {
  return (
    <a href={`/proyectos/${id}`} className="block">
      <div
        className={cn(
          "relative w-[350px] md:w-[500px] cursor-pointer overflow-hidden rounded-2xl border p-2 transition-all duration-300 group",
          // light styles
          "border-border/40 bg-card/40 hover:bg-primary/[0.03] hover:border-primary/50",
          // dark styles
          "hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.2)]",
        )}
      >
        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl h-54 md:h-76">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col px-4 pb-4">
            <figcaption className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
              {name}
            </figcaption>
            <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary" />
              Proyecto Destacado • Ver Detalles
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export const FeaturedProjects = () => {
  return (
    <section
      id="portfolio"
      className="py-12 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-foreground">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Una muestra de las soluciones digitales que hemos construido para
            transformar ideas en realidades escalables.
          </p>
        </div>
      </div>

      <div className="relative flex h-[350px] md:h-[450px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:40s] [--gap:2.5rem]">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
