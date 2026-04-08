"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Shield, Zap } from "lucide-react";
import logoImg from "@/assets/logo.webp";

const values = [
    {
        icon: Users,
        title: "Centrado en el Cliente",
        description: "Creamos soluciones que resuelven problemas reales y potencian el crecimiento de nuestros socios.",
    },
    {
        icon: Target,
        title: "Excelencia Técnica",
        description: "Utilizamos las tecnologías más modernas para garantizar sistemas rápidos, seguros y escalables.",
    },
    {
        icon: Shield,
        title: "Compromiso y Confianza",
        description: "Construimos relaciones a largo plazo basadas en la transparencia y resultados tangibles.",
    },
    {
        icon: Zap,
        title: "Innovación Ágil",
        description: "Nos adaptamos rápidamente a los cambios y entregamos valor constante en cada iteración.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -ml-64 -mb-64" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] bg-primary/10 text-primary border border-primary/20">
                            Sobre Nosotros
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter">
                            Transformando el <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-blue-400">
                                futuro digital
                            </span> <br />
                            con precisión técnica.
                        </h2>

                        <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                            MiraCode nació con una misión clara: elevar el estándar del desarrollo de software en la región. No solo escribimos código, diseñamos arquitecturas de alto rendimiento que permiten a las empresas escalar sin límites.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-8">
                            {values.map((v, i) => (
                                <div key={i} className="space-y-3 group">
                                    <div className="size-12 rounded-2xl bg-card border border-border/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                                        <v.icon size={24} />
                                    </div>
                                    <h3 className="font-black text-lg text-foreground uppercase tracking-tight">
                                        {v.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {v.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Content / Logo Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-[3rem] bg-card border border-white/10 overflow-hidden flex items-center justify-center p-12 md:p-24 shadow-2xl shadow-black/20 backdrop-blur-xl">
                            {/* Mesh Gradient Overlay Inside */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />

                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 2, -2, 0]
                                }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-full"
                            >
                                <img
                                    src={logoImg.src}
                                    alt="MiraCode Logo"
                                    className="w-full drop-shadow-[0_20px_50px_rgba(var(--primary-rgb),0.5)]"
                                />
                            </motion.div>

                            {/* Experience Badge */}
                            <div className="absolute bottom-12 right-12 bg-background/80 blur-0 backdrop-blur-md border border-white/10 p-6 rounded-3xl shadow-xl shadow-black/20">
                                <div className="text-4xl font-black text-primary leading-none">+11</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mt-1">Sistemas <br /> Implementados</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
