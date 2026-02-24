import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code2 } from 'lucide-react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/60 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-lg group-hover:scale-110 transition-transform">
            <Code2 className="size-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            MiraCode
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#portfolio" className="hover:text-primary transition-colors">Portafolio</a>
          <a href="#about" className="hover:text-primary transition-colors">Sobre Nosotros</a>
          <a href="#contact">
            <Button variant="default" size="sm" className="rounded-full px-6">
              Contacto
            </Button>
          </a>
        </div>

        <div className="md:hidden">
            {/* Mobile menu could go here, but keeping it simple for now as per request */}
            <Button variant="ghost" size="icon">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </Button>
        </div>
      </div>
    </motion.nav>
  );
};
