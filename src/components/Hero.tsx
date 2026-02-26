"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
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
    <section className="relative h-[80vh] md:min-h-[90vh] w-full flex items-center overflow-hidden bg-background pt-20 md:mt-20 mt-20">
      {/* CAPA DE FONDO: El Marquee 3D */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden ">
        <div className="absolute inset-0 translate-x-[20%] md:translate-x-0">
          <ThreeDMarquee
            images={marqueeImages}
            // En móvil bajamos la escala y ajustamos la opacidad
            className="w-full h-full scale-[2.5] md:scale-125  "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background hidden md:block" />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 md:space-y-8"
          >
            {/* Logo + Nombre */}
            <div className="flex items-center gap-4 md:gap-5">
              <div className="relative">
                <div className="size-14 md:size-24 rounded-[2rem] bg-gradient-to-tr from-primary via-accent to-primary flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] border border-white/20 relative overflow-hidden group">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 0.9, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Rocket className="size-7 md:size-12 text-primary-foreground drop-shadow-lg" />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>

              <h1 className="text-4xl md:text-7xl font-black tracking-tighter text-foreground leading-none">
                Mira
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-primary animate-gradient-x drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                  Code
                </span>
              </h1>
            </div>

            {/* Frase Principal */}
            <div className="space-y-6 relative">
              <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.8] tracking-tighter -ml-1">
                Mirando <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-blue-400 animate-gradient-x relative">
                  el futuro
                  <div className="absolute -inset-x-20 inset-y-0 bg-primary/10 blur-[120px] -z-10 rounded-full" />
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-xl leading-relaxed">
                Transformando ideas en experiencias digitales <span className="text-primary font-bold">excepcionales</span> con tecnología de vanguardia.
              </p>
            </div>

            {/* CTA opcional para móvil para llenar espacio visual */}
            <div className="flex gap-4 pt-4 md:hidden">
              <div className="h-1 w-12 bg-primary rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
