import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  altText?: string;
  badge?: string;
  features?: string[];
  ctaPrimary?: { label: string; href: string; triggerConfetti?: boolean };
  ctaSecondary?: { label: string; href: string };
  className?: string;
}

const ProjectCard = ({
  image,
  title,
  description,
  imagePosition = "left",
  altText = title,
  badge,
  features = [],
  ctaPrimary = { label: "Comenzar", href: "#", triggerConfetti: true },
  ctaSecondary = { label: "Ver demo", href: "#" },
  className,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isRight = imagePosition === "right";

  const triggerConfettiEffect = () => {
    const duration = 1200;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.75 },
        colors: ["#0ea5e9", "#3b82f6", "#6366f1"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.75 },
        colors: ["#0ea5e9", "#3b82f6", "#6366f1"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleCTAClick = (href: string, shouldConfetti: boolean) => {
    if (shouldConfetti) {
      triggerConfettiEffect();
      setTimeout(() => {
        window.location.href = href;
      }, 600);
    } else {
      window.location.href = href;
    }
  };

  return (
    <section
      className={cn(
        "relative w-full pt-4 overflow-hidden",
        "bg-gradient-to-b from-background via-background to-muted/30",
        className,
      )}
    >
      {/* Efecto decorativo de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Desktop Layout */}
        <div className="hidden md:grid gap-8 lg:gap-14 items-center lg:grid-cols-2 ">
          {/* Imagen - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "relative group cursor-pointer",
              isRight && "lg:order-2",
            )}
            onClick={() =>
              handleCTAClick(
                ctaPrimary.href,
                ctaPrimary.triggerConfetti || false,
              )
            }
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500 " />

            <div className="relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm shadow-2xl shadow-primary/5 aspect-[4/3] w-full max-w-lg lg:max-w-none ">
              <img
                src={image}
                alt={altText}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />

              {badge && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
                    <path d="M5 19l.5 1.5L7 21l-1.5.5L5 23l-.5-1.5L3 21l1.5-.5z" />
                    <path d="M19 5l.5 1.5L21 7l-1.5.5L19 9l-.5-1.5L17 7l1.5-.5z" />
                  </svg>
                  <span className="text-xs font-medium">{badge}</span>
                </div>
              )}
            </div>

            <div
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </motion.div>

          {/* Texto - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            viewport={{ once: true }}
            className={cn(
              "flex flex-col justify-center space-y-6",
              isRight && "lg:order-1",
            )}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m9 11 3 3L22 4" />
                </svg>
                Solución empresarial
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
                {title}
              </span>
            </h2>

            <p className="max-w-[580px] text-muted-foreground text-lg leading-relaxed">
              {description}
            </p>

            {features.length > 0 && (
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5 text-primary shrink-0 mt-0.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                    <span className="text-sm text-foreground/90">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {ctaPrimary && (
                <button
                  onClick={() =>
                    handleCTAClick(
                      ctaPrimary.href,
                      ctaPrimary.triggerConfetti || false,
                    )
                  }
                  className={cn(
                    "group inline-flex h-11 items-center justify-center rounded-xl",
                    "bg-primary text-primary-foreground font-medium text-sm",
                    "shadow-lg shadow-primary/25 hover:shadow-primary/40",
                    "transition-all duration-300 hover:-translate-y-0.5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
                    "overflow-hidden relative",
                  )}
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <span className="relative z-10 flex items-center gap-2">
                    {ctaPrimary.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </button>
              )}

              {ctaSecondary && (
                <button
                  onClick={() => handleCTAClick(ctaSecondary.href, false)}
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-xl",
                    "border border-input bg-background/50 backdrop-blur-sm",
                    "text-foreground font-medium text-sm",
                    "shadow-sm hover:bg-accent/50 hover:text-accent-foreground",
                    "transition-all duration-300 hover:-translate-y-0.5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  )}
                >
                  {ctaSecondary.label}
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>+200 equipos confían en nosotros</span>
            </div>
          </motion.div>
        </div>

        {/* Mobile Layout - Expandible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          {/* Imagen Mobile */}
          <div
            className="relative group mb-6 rounded-2xl overflow-hidden cursor-pointer"
            onClick={() =>
              handleCTAClick(
                ctaPrimary.href,
                ctaPrimary.triggerConfetti || false,
              )
            }
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm shadow-xl shadow-primary/5 aspect-[4/3] w-full">
              <img
                src={image}
                alt={altText}
                loading="lazy"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-60" />

              {badge && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
                    <path d="M5 19l.5 1.5L7 21l-1.5.5L5 23l-.5-1.5L3 21l1.5-.5z" />
                    <path d="M19 5l.5 1.5L21 7l-1.5.5L19 9l-.5-1.5L17 7l1.5-.5z" />
                  </svg>
                  <span className="text-xs font-medium">{badge}</span>
                </div>
              )}
            </div>
          </div>

          {/* Título + Botón Expandir */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full text-left mb-4 p-4 rounded-xl border border-border/40 bg-card/40 hover:bg-card/60 transition-all duration-300 flex items-center justify-between"
          >
            <h3 className="text-lg sm:text-xl font-bold text-foreground pr-4">
              {title}
            </h3>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300",
                isExpanded && "rotate-180",
              )}
            />
          </button>

          {/* Contenido expandible */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-sm mb-6"
              >
                <div className="p-4 sm:p-6 space-y-4">
                  {/* Descripción */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {description}
                  </p>

                  {/* Badge */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      Solución empresarial
                    </span>
                  </div>

                  {/* Features */}
                  {features.length > 0 && (
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 text-primary shrink-0 mt-0.5"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <path d="m9 11 3 3L22 4" />
                          </svg>
                          <span className="text-xs sm:text-sm text-foreground/90">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Botones CTA */}
                  <div className="flex flex-col gap-2 pt-2">
                    {ctaPrimary && (
                      <button
                        onClick={() =>
                          handleCTAClick(
                            ctaPrimary.href,
                            ctaPrimary.triggerConfetti || false,
                          )
                        }
                        className={cn(
                          "group inline-flex h-10 items-center justify-center rounded-lg",
                          "bg-primary text-primary-foreground font-medium text-xs sm:text-sm",
                          "shadow-lg shadow-primary/25 hover:shadow-primary/40",
                          "transition-all duration-300 hover:-translate-y-0.5",
                          "overflow-hidden relative",
                        )}
                      >
                        <span className="absolute inset-0 -translate-x-full group-hover:animate-shine bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        <span className="relative z-10 flex items-center gap-1.5">
                          {ctaPrimary.label}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                          >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    )}

                    {ctaSecondary && (
                      <button
                        onClick={() => handleCTAClick(ctaSecondary.href, false)}
                        className={cn(
                          "inline-flex h-10 items-center justify-center rounded-lg",
                          "border border-input bg-background/50 backdrop-blur-sm",
                          "text-foreground font-medium text-xs sm:text-sm",
                          "shadow-sm hover:bg-accent/50",
                          "transition-all duration-300 hover:-translate-y-0.5",
                        )}
                      >
                        {ctaSecondary.label}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        @keyframes shine {
          100% { transform: translateX(100%); }
        }
        
        .animate-shine {
          animation: shine 1.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectCard;
