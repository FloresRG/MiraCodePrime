import React from "react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Admus - Gestión Empresarial",
    image: "/src/assets/admus.png",
  },
  {
    name: "Miranda - E-commerce",
    image: "/src/assets/loginmiranda.png",
  },
  {
    name: "MiraCode Web",
    image: "/src/assets/logomiracode.webp",
  },
  {
    name: "Sistema de Pruebas",
    image: "/src/assets/prueba.png",
  },
  {
    name: "Logo Branding",
    image: "/src/assets/logo.png",
  },
];

const ProjectCard = ({ name, image }: { name: string; image: string }) => {
  return (
    <div
      className={cn(
        "relative w-[350px] md:w-[500px] cursor-pointer overflow-hidden rounded-2xl border p-2 transition-all duration-300 group",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-primary/[.05] hover:border-primary/50",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-primary/[.10] dark:hover:border-primary/50",
        "hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.3)]",
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
          <figcaption className="text-xl font-bold dark:text-white transition-colors group-hover:text-primary">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-muted-foreground">
            Proyecto Destacado • Ver Detalles
          </p>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProjects = () => {
  return (
    <section className="py-12 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Una muestra de las soluciones digitales que hemos construido para
            transformar ideas en realidades escalables.
          </p>
        </div>
      </div>

      <div className="relative flex h-[300px] md:h-[400px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
