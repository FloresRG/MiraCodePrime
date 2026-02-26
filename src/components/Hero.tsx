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
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-background mt-20">
      
      {/* CAPA DE FONDO: El Marquee 3D */}
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <ThreeDMarquee 
          images={marqueeImages} 
          className="w-full h-full scale-110 lg:scale-125" 
        />
        {/* Overlay para asegurar legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-background " />
      </div>

      {/* CONTENIDO PRINCIPAL: Logo y Frase (Encima del fondo) */}
      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Logo + Nombre */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl shadow-primary/30">
                  <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 blur-xl rounded-full" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
                Mira
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Code
                </span>
              </h1>
            </div>

            {/* Frase Principal */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
                Mirando hacia <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  el futuro
                </span>
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl max-w-md pt-4">
                Innovación visual y desarrollo técnico unidos en un solo lugar.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};