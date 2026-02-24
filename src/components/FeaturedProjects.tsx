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
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src={image}
            alt={name}
            className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground">
            Proyecto Destacado
          </p>
        </div>
      </div>
    </div>
  );
};

export const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una muestra de las soluciones digitales que hemos construido para
            transformar ideas en realidades escalables.
          </p>
        </div>
      </div>

      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
