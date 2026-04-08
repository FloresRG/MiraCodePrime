import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, ArrowDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import logoImg from "@/assets/logo.webp";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#services" },
    { name: "Portafolio", href: "/#portfolio" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Sobre Nosotros", href: "/#about" },
    // contacto se abre en WhatsApp por ahora
    { name: "Contacto", href: "https://wa.me/59169867332?text=Hola%20MiraCode!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20%F0%9F%91%8B" },
    { name: "Precios", href: "/precios" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
        ? "border-b border-white/10 bg-background/60 backdrop-blur-2xl py-2 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1 flex items-center">
            <a href="/" className="flex items-center gap-3 group">
              <div className="size-11 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-xl border border-white/10 p-1.5 backdrop-blur-sm">
                <img
                  src={logoImg.src}
                  alt="Logo"
                  className="size-full object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-foreground group-hover:text-primary transition-all duration-300">
                MiraCode
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-[2] justify-center items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Actions Section */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            <a href="https://wa.me/59169867332?text=Hola%20MiraCode!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20%F0%9F%91%8B" target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button
                variant="default"
                size="sm"
                className="rounded-xl px-6 font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                Empezar Proyecto
              </Button>
            </a>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              {/* mobile quick-scroll arrow, moves one viewport down */}
              <button
                onClick={() => {
                  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
                }}
                className="rounded-full p-2 hover:bg-primary/10"
                aria-label="Scroll down"
              >
                <ArrowDown className="size-6 text-foreground" />
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-xl hover:bg-primary/10"
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-border/40"
              >
                <a href="https://wa.me/59169867332?text=Hola%20MiraCode!%20Me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios%20%F0%9F%91%8B" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  <Button className="w-full h-14 text-lg font-bold rounded-2xl">
                    Solicitar Cotización
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
