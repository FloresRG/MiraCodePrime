import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-24 min-h-screen flex items-center justify-center">
      {/* Background 3D Marquee */}
      <div className="absolute inset-0 -z-20 opacity-60 dark:opacity-40 pointer-events-none overflow-hidden [perspective:2000px]">
        <ThreeDMarquee
          images={marqueeImages}
          className="w-full h-full scale-[1.5] opacity-100"
        />
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 mb-8 max-w-[300px] md:max-w-[450px]"
        >
          <img
            src="/src/assets/logomiracode.webp"
            alt="MiraCode Logo"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10"
        >
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl mb-4 drop-shadow-md font-serif text-foreground">
            MiraCode
          </h1>

          <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl mb-12 drop-shadow-sm font-serif text-foreground/90">
            Mirando Al Futuro
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Button
              size="lg"
              className="rounded-full h-14 px-10 min-w-[220px] text-xl font-bold group z-20 shadow-xl hover:shadow-primary/20 transition-all"
            >
              Empezar Proyecto
              <ArrowRight className="ml-2 size-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full h-14 px-10 min-w-[220px] text-xl font-bold backdrop-blur-md z-20 border-2 shadow-lg"
            >
              Ver Portafolio
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
