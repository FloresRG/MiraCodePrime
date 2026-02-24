import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Globe, Cpu, Smartphone, Database, Layout } from 'lucide-react';

const services = [
    {
        title: 'Desarrollo Web',
        description: 'Aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías.',
        icon: Globe,
        tags: ['React', 'Astro', 'Next.js'],
    },
    {
        title: 'Apps Móviles',
        description: 'Soluciones nativas y multiplataforma para iOS y Android con alto rendimiento.',
        icon: Smartphone,
        tags: ['React Native', 'Flutter'],
    },
    {
        title: 'Arquitectura de Software',
        description: 'Diseño de sistemas robustos, microservicios y soluciones en la nube.',
        icon: Cpu,
        tags: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
        title: 'UI/UX Design',
        description: 'Interfaces intuitivas y experiencias de usuario diseñadas para convertir.',
        icon: Layout,
        tags: ['Figma', 'Prototyping'],
    },
    {
        title: 'Backend & APIs',
        description: 'Desarrollo de APIs seguras y eficientes para conectar tus servicios.',
        icon: Database,
        tags: ['Node.js', 'Go', 'Python'],
    },
    {
        title: 'Consultoría Tech',
        description: 'Asesoramiento estratégico para la transformación digital de tu empresa.',
        icon: Code2,
        tags: ['Estrategia', 'Scalability'],
    },
];

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <Badge variant="outline" className="mb-4">Nuestros Servicios</Badge>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6">
                        Soluciones integrales para cada <br />
                        <span className="text-primary">necesidad tecnológica</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Cubrimos todo el ciclo de vida del desarrollo de software, desde la concepción hasta el despliegue y mantenimiento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-white/10 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-colors group">
                                <CardHeader>
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <service.icon className="size-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-muted-foreground mb-6 text-base">
                                        {service.description}
                                    </CardDescription>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map(tag => (
                                            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-white/5 text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
