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
          "relative w-[280px] sm:w-[500px] cursor-pointer overflow-hidden rounded-2xl border p-2 transition-all duration-300 group",
          // light styles
          "border-border/40 bg-card/40 hover:bg-primary/[0.03] hover:border-primary/50",
          // dark styles
          "hover:shadow-[0_0_40px_-10px_rgba(var(--primary),0.2)]",
        )}
      >
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="overflow-hidden rounded-xl h-40 sm:h-76">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col px-3 sm:px-4 pb-3 sm:pb-4">
            <figcaption className="text-xl sm:text-3xl font-black text-foreground transition-colors group-hover:text-primary tracking-tight">
              {name}
            </figcaption>
            <p className="text-[10px] sm:text-sm font-bold text-muted-foreground flex items-center gap-2 uppercase tracking-widest mt-1">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Proyecto Destacado
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
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-14 md:mb-24">
        <div className="text-center">
          <h2 className="text-5xl font-black tracking-[calc(-0.05em)] sm:text-8xl mb-8 text-foreground leading-none">
            Proyectos Destacados
          </h2>
          <p className="text-lg md:text-3xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Una selección de soluciones digitales de alto impacto diseñadas para
            transformar negocios.
          </p>
        </div>
      </div>

      <div className="relative flex h-[350px] md:h-[550px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="[--duration:50s] [--gap:1.5rem] sm:[--gap:3rem]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-10"></div>
      </div>
    </section>
  );
};
