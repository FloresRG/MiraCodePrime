import React from "react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";

import { CoverFlow, type CoverFlowItem } from "@/components/ui/coverflow";
const hero: CoverFlowItem[] = [
  { id: 1, image: "src/assets/admus.png", title: "Sanemi Sanemi" },
  { id: 2, image: "src/assets/admus.png", title: "Obanai Iguro" },
  { id: 3, image: "src/assets/admus.png", title: "Mitsuri Kanroji" },
  { id: 4, image: "src/assets/admus.png", title: "Giyu Tomioka" },
  { id: 5, image: "src/assets/admus.png", title: "Shinobu Kocho" },
  { id: 6, image: "src/assets/admus.png", title: "Sanemi Sanemi" },
  { id: 7, image: "src/assets/admus.png", title: "Obanai Iguro" },
  { id: 8, image: "src/assets/admus.png", title: "Mitsuri Kanroji" },
  { id: 9, image: "src/assets/admus.png", title: "Giyu Tomioka" },
  { id: 10, image: "src/assets/admus.png", title: "Shinobu Kocho" },
  { id: 11, image: "src/assets/admus.png", title: "Sanemi Sanemi" },
  { id: 12, image: "src/assets/admus.png", title: "Obanai Iguro" },
  { id: 13, image: "src/assets/admus.png", title: "Mitsuri Kanroji" },
  { id: 14, image: "src/assets/admus.png", title: "Giyu Tomioka" },
  { id: 15, image: "src/assets/admus.png", title: "Shinobu Kocho" },
  { id: 16, image: "src/assets/admus.png", title: "Sanemi Sanemi" },
  { id: 17, image: "src/assets/admus.png", title: "Obanai Iguro" },
  { id: 18, image: "src/assets/admus.png", title: "Mitsuri Kanroji" },
  { id: 19, image: "src/assets/admus.png", title: "Giyu Tomioka" },
  { id: 20, image: "src/assets/admus.png", title: "Shinobu Kocho" },
];

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
      className="pt-20 pb-10 bg-background relative overflow-hidden"
    >
      {/* Nuevo Header Pro */}
      <SectionHeader
        badge="Portafolio"
        title="Proyectos Destacados"
        subtitle="Soluciones digitales reales diseñadas con precisión técnica y enfoque estratégico para elevar el valor de nuestros clientes."
      />

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="[--duration:50s] [--gap:1.5rem] sm:[--gap:3rem]"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Marquee>

        {/* Degradados laterales para el Marquee */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
   <div className="w-full h-52 md:h-[750px] border-b border-border/40 relative bg-background">
  <CoverFlow
    items={hero}
    itemWidth={900}
    itemHeight={500}
    centerGap={550}
    initialIndex={5}
    enableScroll={true}
    scrollThreshold={60} 
    // Bajé el stackSpacing a 60 como pusiste, 
    // esto hará que las fotos de los lados se vean muy compactas.
    stackSpacing={60} 
    enableReflection={true}
  />
</div>
    </section>
  );
};
