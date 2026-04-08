"use client";

import React from "react";
import { motion } from "framer-motion";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import logoImg from "@/assets/logo.png";

const marqueeImages = [
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
  "/assets/sistemas/admus.png",
  "/assets/sistemas/miranda.png",
  "/assets/logo.png",
  "/assets/sistemas/botlive.png",
];

export const Hero = () => {
  return (
    <section className="relative min-h-[55vh] md:min-h-[90vh] w-full flex items-center overflow-hidden bg-background pt-20 md:mt-20 ">
      {/* CAPA DE FONDO: El Marquee 3D */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Mobile: fondo oscuro semitransparente para legibilidad */}
        <div className="absolute inset-0 bg-background/70 md:bg-transparent z-10 md:hidden" />

        <div className="absolute inset-0 translate-x-[10%] md:translate-x-0">
          <ThreeDMarquee
            images={marqueeImages}
            className="w-full h-full scale-[2] md:scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background hidden md:block" />
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="container relative z-10 mx-auto px-5 md:px-8 text-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5 md:space-y-8"
          >
            {/* Logo + Nombre */}
            <div className="flex items-center gap-3 md:gap-5">
              <div className="relative">
                <div className="size-12 md:size-24 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-tr from-primary via-accent to-primary flex items-center justify-center shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)] border border-white/20 relative overflow-hidden group">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <img
                      src={logoImg.src}
                      alt="Logo"
                      className="size-full object-contain"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="absolute -inset-4 bg-primary/30 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter text-foreground leading-none ">
                Mira
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-accent to-primary animate-gradient-x drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                  Code
                </span>
              </h1>
            </div>

            {/* Frase Principal */}
            <div className="space-y-3 md:space-y-6 relative">
              <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter -ml-1">
                Mirando <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-blue-400 animate-gradient-x relative">
                  tu futuro
                  <div className="absolute -inset-x-20 inset-y-0 bg-primary/10 blur-[120px] -z-10 rounded-full" />
                </span>
              </h2>
            </div>

            {/* Botones CTA */}
            <div className="justify-center flex flex-col sm:flex-row gap-3 pt-2 md:pt-4 ">
              <motion.a
                href="/proyectos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm md:text-base shadow-[0_0_24px_rgba(var(--primary-rgb),0.4)] hover:shadow-[0_0_36px_rgba(var(--primary-rgb),0.6)] transition-all duration-300"
              >
                Ver Proyectos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="/precios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-primary/40 bg-primary/10 text-foreground font-bold text-sm md:text-base hover:bg-primary/20 hover:border-primary/70 transition-all duration-300"
              >
                Planes.
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
