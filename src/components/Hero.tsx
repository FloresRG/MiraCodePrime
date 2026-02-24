import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Rocket, Shield } from "lucide-react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const marqueeImages = [
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
  "/src/assets/admus.png",
  "/src/assets/loginmiranda.png",
  "/src/assets/logo.png",
  "/src/assets/prueba.png",
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 min-h-[90vh] flex items-center">
      {/* Background 3D Marquee */}
      <div className="absolute inset-0 -z-20 opacity-40 dark:opacity-20 pointer-events-none overflow-hidden">
        <ThreeDMarquee
          images={marqueeImages}
          className="w-full h-full scale-[1.3] opacity-60"
        />
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs md:text-sm font-medium text-primary mb-6 md:mb-8 backdrop-blur-sm">
            <Rocket className="size-3.5 md:size-4" />
            <span>Innovación constante en cada línea de código</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight mb-6 md:mb-10 drop-shadow-sm leading-[1.1]">
            Transformamos tus ideas en <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Soluciones Digitales
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base md:text-2xl text-muted-foreground mb-10 md:mb-14 leading-relaxed backdrop-blur-[2px] font-medium px-4">
            En MiraCode, desarrollamos software de alta calidad, escalable y con
            un diseño impecable para impulsar tu negocio al siguiente nivel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-2xl h-14 md:h-16 px-10 text-lg font-black group z-20 shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
            >
              Empezar Proyecto
              <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-2xl h-14 md:h-16 px-10 text-lg font-black backdrop-blur-md z-20 border-2 hover:bg-muted"
            >
              Ver Portafolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
