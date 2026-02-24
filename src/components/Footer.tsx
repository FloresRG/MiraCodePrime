import React from 'react';
import { Code2, Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <a href="/" className="flex items-center gap-2 mb-6">
                            <div className="bg-primary p-1.5 rounded-lg">
                                <Code2 className="size-6 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                MiraCode
                            </span>
                        </a>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Construyendo el futuro digital una línea de código a la vez. Expertos en desarrollo de software a medida y transformación digital.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <Twitter className="size-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <Linkedin className="size-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <Github className="size-5" />
                            </a>
                            <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                                <Instagram className="size-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Empresa</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Portafolio</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Carreras</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Soporte</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Contacto</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Términos</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacidad</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} MiraCode. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-xs text-muted-foreground">
                        <a href="#" className="hover:text-primary">Aviso Legal</a>
                        <a href="#" className="hover:text-primary">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
