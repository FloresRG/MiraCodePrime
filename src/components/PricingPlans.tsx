"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BarChart3,
  History,
  Package,
  Link2,
  BookOpen,
  ClipboardList,
  Bot,
  FileText,
  ShieldCheck,
  ShoppingCart,
  Check,
  X,
  Zap,
  Star,
  Crown,
  ArrowRight,
  MapPin,
  MessageCircle,
  Palette,
  Headphones,
  Boxes,
  Store,
  Truck,
  MessageSquare,
  Image as ImageIcon,
  Users,
  Smartphone,
  Globe,
  Wallet,
  Receipt,
  Search,
  Activity,
  GitCompare,
} from "lucide-react";

type Tier = "free" | "starter" | "pro" | "enterprise";

interface Feature {
  id: string;
  label: string;
  icon: any;
}

interface PlanTier {
  name: string;
  price: number | string;
  description: string;
  color: string;
  glow: string;
  border: string;
  bg: string;
  icon: any;
  popular?: boolean;
  featureLimit: number; // For cumulative logic
  featureData?: Record<string, string>; // Extra text data for features
}

interface Category {
  id: string;
  name: string;
  icon: any;
  description: string;
  tiers: Record<Tier, PlanTier>;
}

const categories: Category[] = [
  {
    id: "catalogo",
    name: "Catálogo Online",
    icon: Smartphone,
    description:
      "Tu negocio en la web con un catálogo interactivo y contacto directo.",
    tiers: {
      free: {
        name: "Free",
        price: 0,
        description: "Básico para iniciar",
        color: "from-slate-400 to-slate-500",
        glow: "rgba(148,163,184,0.15)",
        border: "border-slate-500/10",
        bg: "bg-slate-500/5",
        icon: Zap,
        featureLimit: 1,
        featureData: { productos: "10 Productos", personalizacion: "Básica" },
      },
      starter: {
        name: "Starter",
        price: 79.9,
        description: "Pequeños negocios",
        color: "from-sky-500 to-blue-600",
        glow: "rgba(14,165,233,0.25)",
        border: "border-sky-500/30",
        bg: "bg-sky-500/5",
        icon: Zap,
        featureLimit: 3,
        featureData: { productos: "30 Productos", personalizacion: "Estándar" },
      },
      pro: {
        name: "Pro",
        price: 119.9,
        description: "Crecimiento real",
        color: "from-violet-500 to-purple-600",
        glow: "rgba(139,92,246,0.3)",
        border: "border-violet-500/50",
        bg: "bg-violet-500/10",
        icon: Star,
        popular: true,
        featureLimit: 5,
        featureData: { productos: "80 Productos", personalizacion: "Avanzada" },
      },
      enterprise: {
        name: "Enterprise",
        price: 169.9,
        description: "Potencia ilimitada",
        color: "from-amber-400 to-orange-500",
        glow: "rgba(251,191,36,0.25)",
        border: "border-amber-500/40",
        bg: "bg-amber-500/5",
        icon: Crown,
        featureLimit: 7,
        featureData: {
          productos: "Ilimitados",
          personalizacion: "Completa",
          soporte: "24/7 Dedicado",
        },
      },
    },
  },
  {
    id: "live",
    name: "Live-Cuaderno",
    icon: BookOpen,
    description:
      "Gestión de pedidos en tiempo real con tienda online integrada.",
    tiers: {
      free: {
        name: "Free",
        price: 0,
        description: "Prueba gratis",
        color: "from-slate-400 to-slate-500",
        glow: "rgba(148,163,184,0.15)",
        border: "border-slate-500/10",
        bg: "bg-slate-500/5",
        icon: Zap,
        featureLimit: 1,
        featureData: { productos: "10 Productos", usuarios: "1 Usuario" },
      },
      starter: {
        name: "Starter",
        price: 169.9,
        description: "Uso comercial",
        color: "from-emerald-500 to-teal-600",
        glow: "rgba(16,185,129,0.25)",
        border: "border-emerald-500/30",
        bg: "bg-emerald-500/5",
        icon: Zap,
        featureLimit: 5,
        featureData: { productos: "30 Productos", usuarios: "2 Usuarios" },
      },
      pro: {
        name: "Pro",
        price: 229.9,
        description: "Gestión avanzada",
        color: "from-indigo-500 to-blue-700",
        glow: "rgba(79,70,229,0.3)",
        border: "border-indigo-500/50",
        bg: "bg-indigo-500/10",
        icon: Star,
        popular: true,
        featureLimit: 9,
        featureData: { productos: "80 Productos", usuarios: "5 Usuarios" },
      },
      enterprise: {
        name: "Enterprise",
        price: 299.9,
        description: "Control total",
        color: "from-rose-500 to-pink-600",
        glow: "rgba(244,63,94,0.25)",
        border: "border-rose-500/40",
        bg: "bg-rose-500/5",
        icon: Crown,
        featureLimit: 13,
        featureData: {
          productos: "Ilimitados",
          usuarios: "Ilimitados",
          soporte: "24/7 Dedicado",
        },
      },
    },
  },
  {
    id: "venta",
    name: "Venta-Inventario",
    icon: Boxes,
    description: "Punto de venta e inventarios para múltiples sucursales.",
    tiers: {
      free: {
        name: "Free",
        price: 0,
        description: "Control básico",
        color: "from-slate-400 to-slate-500",
        glow: "rgba(148,163,184,0.15)",
        border: "border-slate-500/20",
        bg: "bg-slate-500/5",
        icon: Zap,
        featureLimit: 2,
        featureData: {
          productos: "10 Productos",
          historial: "7 días",
          sucursales: "1 Sucursal",
        },
      },
      starter: {
        name: "Starter",
        price: 169.9,
        description: "Gestión Pyme",
        color: "from-orange-500 to-red-600",
        glow: "rgba(249,115,22,0.25)",
        border: "border-orange-500/30",
        bg: "bg-orange-500/5",
        icon: Zap,
        featureLimit: 6,
        featureData: {
          productos: "30 Productos",
          inventarios: "Avanzado",
          sucursales: "1 Sucursal",
        },
      },
      pro: {
        name: "Pro",
        price: 229.9,
        description: "Visión global",
        color: "from-purple-500 to-fuchsia-600",
        glow: "rgba(168,85,247,0.3)",
        border: "border-purple-500/50",
        bg: "bg-purple-500/10",
        icon: Star,
        popular: true,
        featureLimit: 10,
        featureData: { productos: "80 Productos", sucursales: "3 Sucursales" },
      },
      enterprise: {
        name: "Enterprise",
        price: 299.9,
        description: "Sistemas masivos",
        color: "from-blue-600 to-indigo-700",
        glow: "rgba(37,99,235,0.25)",
        border: "border-blue-500/40",
        bg: "bg-blue-500/5",
        icon: Crown,
        featureLimit: 14,
        featureData: { productos: "Ilimitados", sucursales: "Ilimitadas" },
      },
    },
  },
  {
    id: "bot",
    name: "WhatsApp Bot",
    icon: MessageSquare,
    description:
      "Automatización de mensajes y atención al cliente vía WhatsApp.",
    tiers: {
      free: {
        name: "Free",
        price: 0,
        description: "Bot de prueba",
        color: "from-slate-400 to-slate-500",
        glow: "rgba(148,163,184,0.15)",
        border: "border-slate-500/10",
        bg: "bg-slate-500/5",
        icon: Zap,
        featureLimit: 1,
        featureData: { mensajes: "2 msjs/día", personalizados: "3 msjs" },
      },
      starter: {
        name: "Starter",
        price: 79.9,
        description: "Automatización base",
        color: "from-lime-500 to-green-600",
        glow: "rgba(132,204,22,0.25)",
        border: "border-lime-500/30",
        bg: "bg-lime-500/5",
        icon: Zap,
        featureLimit: 3,
        featureData: { mensajes: "30 msjs/día", personalizados: "15 msjs" },
      },
      pro: {
        name: "Pro",
        price: 119.9,
        description: "Atención avanzada",
        color: "from-cyan-500 to-blue-500",
        glow: "rgba(6,182,212,0.3)",
        border: "border-cyan-500/50",
        bg: "bg-cyan-500/10",
        icon: Star,
        popular: true,
        featureLimit: 5,
        featureData: { mensajes: "60 msjs/día", personalizados: "25 msjs" },
      },
      enterprise: {
        name: "Enterprise",
        price: 169.9,
        description: "Respuesta total",
        color: "from-amber-500 to-yellow-600",
        glow: "rgba(245,158,11,0.25)",
        border: "border-amber-500/40",
        bg: "bg-amber-500/5",
        icon: Crown,
        featureLimit: 7,
        featureData: { mensajes: "100 msjs/día", personalizados: "30 msjs" },
      },
    },
  },
];

const categoryFeatures: Record<string, Feature[]> = {
  catalogo: [
    { id: "productos", label: "Productos", icon: Package },
    { id: "dominio", label: "Dominio web", icon: Globe },
    { id: "ubicacion", label: "Ubicación", icon: MapPin },
    { id: "whatsapp", label: "Contacto WhatsApp", icon: MessageCircle },
    { id: "personalizacion", label: "Personalización", icon: Palette },

    { id: "reportes", label: "Reportes estadísticos", icon: BarChart3 },
    { id: "soporte", label: "Soporte técnico", icon: Headphones },
  ],
  live: [
    { id: "productos", label: "Productos", icon: Package },
    { id: "dominio", label: "Dominio web", icon: Globe },
    { id: "catalogo", label: "Catálogo online", icon: LayoutDashboard },
    { id: "tienda", label: "Tienda online", icon: ShoppingCart },
    { id: "panel", label: "Panel estadístico", icon: BarChart3 },
    { id: "cuaderno", label: "Cuaderno de pedidos", icon: BookOpen },
    { id: "link", label: "Link de pedidos", icon: Link2 },
    { id: "usuarios", label: "Administración de usuarios", icon: Users },
    { id: "filtrados", label: "Cuadernos filtrados", icon: Search },
    { id: "pdf", label: "PDF comprobante", icon: FileText },

    { id: "verificacion", label: "Verificación en línea", icon: ShieldCheck },

    { id: "reportes", label: "Reportes detallados", icon: PieChart },
    { id: "soporte", label: "Soporte técnico", icon: Headphones },
  ],
  venta: [
    { id: "productos", label: "Productos", icon: Package },
    { id: "dominio", label: "Dominio web", icon: Globe },
    { id: "panel", label: "Panel estadístico", icon: BarChart3 },
    { id: "ventas", label: "Ventas", icon: Wallet },
    { id: "historial", label: "Historial de ventas", icon: History },
    { id: "cajas", label: "Caja y cierres", icon: GitCompare },
    { id: "reportes", label: "Reportes de ventas", icon: Activity },
    { id: "comprobantes", label: "Comprobantes de ventas", icon: Receipt },
    { id: "inventarios", label: "Inventarios", icon: Boxes },
    { id: "usuarios", label: "Administración de usuarios", icon: Users },
    { id: "sucursales", label: "Sucursales", icon: Store },
    { id: "solicitudes", label: "Solicitudes entre sucursales", icon: Package },
    { id: "envios", label: "Envíos a sucursales", icon: Truck },
    { id: "soporte", label: "Soporte técnico", icon: Headphones },
  ],
  bot: [
    { id: "mensajes", label: "Mensajes automáticos", icon: Send },
    { id: "panel", label: "Panel estadístico", icon: BarChart3 },
    { id: "acceso", label: "Acceso a panel Bot", icon: Bot },
    { id: "personalizados", label: "Sms personalizados", icon: MessageSquare },
    { id: "imagenes", label: "Envío de imágenes", icon: ImageIcon },
    { id: "pdf", label: "Envío de PDF", icon: FileText },
    { id: "soporte", label: "Soporte técnico", icon: Headphones },
  ],
};

function Send(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function PieChart(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as any },
  },
};

export const PricingPlans = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen bg-background text-foreground py-20 px-4 overflow-hidden">
      {/* Decorative bg blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[90px]" />
      </div>

      {/* Hero Header */}
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-black mb-6 tracking-widest uppercase">
            MiraCode Prime
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-5 leading-[0.9] uppercase">
            Nuestras{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-blue-400">
              Soluciones
            </span>
          </h1>

          <p className="text-foreground/40 text-base md:text-xl max-w-2xl mx-auto mb-10 font-bold uppercase tracking-wide text-balance">
            Evoluciona tu negocio con nuestras herramientas acumulativas
          </p>
        </motion.div>
      </div>

      {/* Main Content: Categories as Sections */}
      <div className="space-y-32 max-w-7xl mx-auto">
        {categories.map((category) => {
          const CatIcon = category.icon;
          return (
            <motion.div
              key={category.id}
              className="space-y-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Section Header */}
              <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
                <div className="size-16 rounded-[2rem] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-inner">
                  <CatIcon className="size-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  {category.name}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-primary to-violet-500 rounded-full" />
                <p className="text-foreground/50 text-sm md:text-lg font-medium leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Tiers Grid for this Category */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
              >
                {Object.entries(category.tiers).map(([key, tier]) => {
                  const PlanIcon = tier.icon;
                  const isHovered = hovered === `${category.id}-${key}`;
                  const allFeatures = categoryFeatures[category.id];

                  return (
                    <motion.div
                      key={key}
                      variants={cardVariants}
                      onMouseEnter={() => setHovered(`${category.id}-${key}`)}
                      onMouseLeave={() => setHovered(null)}
                      className={`relative rounded-[1.5rem] sm:rounded-[2.5rem] border-2 transition-all duration-300 backdrop-blur-xl flex flex-col ${
                        tier.border
                      } ${tier.bg} ${
                        tier.popular
                          ? "shadow-[0_0_80px_rgba(var(--primary-rgb),0.15)] ring-1 ring-primary/20"
                          : ""
                      } ${isHovered ? "scale-[1.02] shadow-2xl" : ""}`}
                      style={{
                        boxShadow: isHovered
                          ? `0 0 60px ${tier.glow}, 0 0 0 1px rgba(255,255,255,0.05) inset`
                          : undefined,
                      }}
                    >
                      {/* Popular Badge */}
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-4 sm:py-1.5 rounded-full bg-primary text-white text-[7px] sm:text-[9px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] shadow-xl">
                            <Star className="size-2 sm:size-3 fill-white" />
                            Popular
                          </span>
                        </div>
                      )}

                      {/* Header Section */}
                      <div className="p-3 sm:p-6 pb-2 sm:pb-4 border-b border-white/5 text-center">
                        <div
                          className={`size-8 sm:size-14 mx-auto rounded-xl sm:rounded-[1.5rem] bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-lg mb-2 sm:mb-4`}
                        >
                          <PlanIcon className="size-4 sm:size-7 text-white" />
                        </div>
                        <h3 className="text-sm sm:text-2xl font-black tracking-tight">
                          {tier.name}
                        </h3>
                        <p className="hidden sm:block text-[10px] text-foreground/40 font-black uppercase tracking-widest mt-1">
                          {tier.description}
                        </p>
                      </div>

                      {/* Price Section */}
                      <div className="flex flex-col items-center py-3 sm:py-6 bg-white/2">
                        <div className="flex items-baseline gap-0.5 sm:gap-1">
                          <span
                            className={`text-xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br ${tier.color}`}
                          >
                            {tier.price}
                          </span>
                          {typeof tier.price === "number" && (
                            <span className="text-[10px] sm:text-sm font-black text-foreground/30">
                              Bs.
                            </span>
                          )}
                        </div>
                        {typeof tier.price === "number" && (
                          <span className="hidden sm:inline text-[10px] font-bold text-foreground/20 uppercase tracking-widest">
                            Pago mensual
                          </span>
                        )}
                      </div>

                      {/* Features Section */}
                      <div className="flex-1 p-3 sm:p-6 space-y-1.5 sm:space-y-3">
                        {allFeatures.map((feat, f_idx) => {
                          const included = f_idx < tier.featureLimit;
                          const FeatIcon = feat.icon;
                          const customValue = tier.featureData?.[feat.id];

                          return (
                            <div
                              key={feat.id}
                              className={`flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-[11px] font-medium transition-opacity ${
                                included
                                  ? "text-foreground/85"
                                  : "text-foreground/15"
                              }`}
                            >
                              <div
                                className={`size-3.5 sm:size-5 rounded sm:rounded-lg flex items-center justify-center flex-shrink-0 ${included ? "bg-primary/10" : "bg-white/5"}`}
                              >
                                <FeatIcon
                                  className={`size-2 sm:size-3 ${included ? "text-primary" : "text-foreground/10"}`}
                                />
                              </div>
                              <span className="flex-1 truncate">
                                {feat.label}
                              </span>
                              {customValue && included && (
                                <span className="hidden sm:inline text-[9px] font-black text-primary uppercase">
                                  {customValue}
                                </span>
                              )}
                              {included ? (
                                <Check className="size-2.5 sm:size-3.5 text-emerald-500 stroke-[3]" />
                              ) : (
                                <X className="size-2.5 sm:size-3 text-foreground/10 stroke-[3]" />
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* CTA Section */}
                      <div className="p-3 sm:p-6 pt-0">
                        <a
                          href={`https://wa.me/59169867332?text=Hola%20MiraCode!%20Estoy%20interesado%20en%20el%20Plan%20*${encodeURIComponent(category.name)}%20-%20${encodeURIComponent(tier.name)}*%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative overflow-hidden inline-flex items-center justify-center gap-1.5 w-full py-2.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r ${tier.color} text-white font-black text-[9px] sm:text-[11px] uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] shadow-2xl`}
                        >
                          <span className="relative z-10 flex items-center gap-1.5">
                            Seleccionar
                            <ArrowRight className="size-3 sm:size-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Global Guarantee Footer */}
      <div className="max-w-5xl mx-auto mt-40">
        <div className="relative rounded-[3rem] border border-white/5 bg-white/2 backdrop-blur-3xl p-10 md:p-16 overflow-hidden text-center md:text-left">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="size-20 mx-auto md:mx-0 rounded-3xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="size-10 text-primary" />
              </div>
              <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                Garantía de <br />{" "}
                <span className="text-primary">Excelencia</span>
              </h4>
              <p className="text-foreground/40 text-sm md:text-lg font-medium max-w-md">
                Nuestras soluciones son escalables y seguras. Sin contratos
                forzosos ni letras pequeñas. Tu crecimiento es nuestra
                prioridad.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "100% Seguro", icon: ShieldCheck },
                { label: "Soporte Local", icon: Headphones },
                { label: "Activación 24h", icon: Zap },
                { label: "Actualizaciones", icon: Activity },
              ].map((item, id) => (
                <div
                  key={id}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <item.icon className="size-5 text-primary" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal/Notes */}
      <div className="mt-20 text-center space-y-4">
        <p className="text-[9px] text-foreground/20 font-black uppercase tracking-[0.3em]">
          MiraCode Prime © 2026 • Bolivia • Todos los derechos reservados
        </p>
      </div>
    </section>
  );
};
