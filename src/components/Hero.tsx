import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code2, Rocket, Shield } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
            {/* Background Blobs */}
            <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 -z-10 h-[400px] w-[400px] translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
                        <Rocket className="size-4" />
                        <span>Innovación constante en cada línea de código</span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6">
                        Transformamos tus ideas en <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Soluciones Digitales
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed">
                        En MiraCode, desarrollamos software de alta calidad, escalable y con un diseño impecable para impulsar tu negocio al siguiente nivel.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="rounded-full h-12 px-8 min-w-[200px] text-lg font-semibold group">
                            Empezar Proyecto
                            <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full h-12 px-8 min-w-[200px] text-lg font-semibold backdrop-blur-sm">
                            Ver Portafolio
                        </Button>
                    </div>
                </motion.div>

                {/* Stats / Features Micro-grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl mx-auto"
                >
                    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <Code2 className="size-8 text-primary mb-2" />
                        <h3 className="font-bold text-xl">+50 Proyectos</h3>
                        <p className="text-sm text-muted-foreground text-center">Desarrollados con las últimas tecnologías del mercado.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <Rocket className="size-8 text-accent mb-2" />
                        <h3 className="font-bold text-xl">Escalabilidad</h3>
                        <p className="text-sm text-muted-foreground text-center">Sistemas diseñados para crecer junto con tu empresa.</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <Shield className="size-8 text-primary mb-2" />
                        <h3 className="font-bold text-xl">Seguridad</h3>
                        <p className="text-sm text-muted-foreground text-center">Protección de datos y robustez en cada implementación.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
