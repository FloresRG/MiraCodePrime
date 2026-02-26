"use client"; // ✅ Necesario para componentes React con hooks/animaciones en Astro

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
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
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex items-center justify-center md:justify-end"
        >
          {/* Logo + Nombre de empresa */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 animate-pulse" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">
                Mira
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Code
                </span>
              </h1>
            </div>
          </div>

          {/* Frase principal */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Mirando hacia <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                el futuro
              </span>
            </h2>
          </div>
          <ThreeDMarquee
            images={marqueeImages}
            className="w-screen h-screen scale-90 md:scale-100 opacity-100"
          />
        </motion.div>
      </div>
    </section>
  );
};
