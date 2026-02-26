import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./SectionHeader";
import { projects } from "@/lib/projects";
import { CoverFlow, type CoverFlowItem, type CoverFlowRef } from "@/components/ui/coverflow";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const FeaturedProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const coverFlowRef = useRef<CoverFlowRef>(null);

  // Transform internal Projects to CoverFlow format
  const coverFlowItems: CoverFlowItem[] = projects.map((p) => ({
    id: p.id,
    image: p.image,
    title: p.title,
    subtitle: p.category,
  }));

  const nextProject = () => {
    coverFlowRef.current?.next();
  };

  const prevProject = () => {
    coverFlowRef.current?.prev();
  };

  const handleProjectClick = (item: CoverFlowItem) => {
    window.location.href = `/proyectos/${item.id}`;
  };

  return (
    <section
      id="portfolio"
      className="pt-24 bg-background relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[160px] rounded-full" />
      </div>

      <SectionHeader
        badge="Portafolio"
        title="Proyectos Destacados"
        subtitle="Soluciones digitales reales diseñadas con precisión técnica y enfoque estratégico para elevar el valor de nuestros clientes."
      />

      {/* CoverFlow Container - Height reduced to minimize bottom gap */}
      <div className="relative w-full h-[320px] md:h-[520px] group/nav">
        <CoverFlow
          ref={coverFlowRef}
          items={coverFlowItems}
          initialIndex={0}
          itemWidth={800}
          itemHeight={450}
          centerGap={400}
          stackSpacing={100}
          autoplay={true}
          autoplayInterval={6000}
          onIndexChange={(index) => setActiveIndex(index)}
          onItemClick={handleProjectClick}
          className="z-10"
        />

        {/* Custom Navigation Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-12 z-20 pointer-events-none opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300">
          <Button
            variant="outline"
            size="icon"
            onClick={prevProject}
            className="rounded-full size-12 md:size-14 bg-background/80 backdrop-blur-md border-primary/20 hover:border-primary pointer-events-auto shadow-xl"
          >
            <ChevronLeft className="size-6 md:size-8 text-foreground" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextProject}
            className="rounded-full size-12 md:size-14 bg-background/80 backdrop-blur-md border-primary/20 hover:border-primary pointer-events-auto shadow-xl"
          >
            <ChevronRight className="size-6 md:size-8 text-foreground" />
          </Button>
        </div>
      </div>

      {/* Project Title Below Image - Minimal Spacing */}
      <div className="max-w-4xl mx-auto px-6 mt-1 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[activeIndex].id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-tighter leading-tight drop-shadow-lg">
              {projects[activeIndex].title}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Simple Navigation Dots */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="flex justify-center flex-wrap gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => coverFlowRef.current?.jumpToIndex(i)}
              className={cn(
                "h-2 transition-all duration-500 rounded-full",
                i === activeIndex ? "w-12 bg-primary" : "w-3 bg-primary/20 hover:bg-primary/40"
              )}
              aria-label={`Ir al proyecto ${p.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
