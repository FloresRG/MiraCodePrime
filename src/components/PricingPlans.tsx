"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, BarChart3, History, Package, Link2, BookOpen,
  ClipboardList, Bot, FileText, ShieldCheck, ShoppingCart, Check,
  X, Zap, Star, Crown, ArrowRight, MapPin, MessageCircle, Palette,
  Headphones, Boxes, Store, Truck, MessageSquare, Image as ImageIcon,
  Users, Smartphone, Globe, Wallet, Receipt, Search, Activity,
  GitCompare, ChevronDown, ChevronUp, Send, PieChart
} from "lucide-react";

// --- Tipos y Estructura ---
type Tier = "free" | "basico" | "pro" | "ultra";

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
  featureLimit: number;
  featureData?: Record<string, string>;
  externalLink?: string;
}

interface Category {
  id: string;
  name: string;
  icon: any;
  description: string;
  tiers: Partial<Record<Tier, PlanTier>>;
}

// --- Configuración de Datos ---
const categories: Category[] = [
  {
    id: "catalogo",
    name: "Catálogo Online",
    icon: Smartphone,
    description: "Tu negocio en la web con un catálogo interactivo y contacto directo.",
    tiers: {
      free: {
        name: "Plan Free",
        price: 0,
        description: "Prueba nuestro sistema",
        color: "from-slate-400 to-slate-600",
        glow: "rgba(148,163,184,0.2)",
        border: "border-slate-500/30",
        bg: "bg-slate-500/5",
        icon: Zap,
        featureLimit: 1,
        featureData: { productos: "6 Productos", personalizacion: "Básica" },
        externalLink: "https://free.miracode.tech/login"
      },
      basico: {
        name: "Basico",
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
      ultra: {
        name: "Ultra",
        price: 169.9,
        description: "Potencia ilimitada",
        color: "from-amber-400 to-orange-500",
        glow: "rgba(251,191,36,0.25)",
        border: "border-amber-500/40",
        bg: "bg-amber-500/5",
        icon: Crown,
        featureLimit: 7,
        featureData: { productos: "Ilimitados", personalizacion: "Completa", soporte: "24/7 Dedicado" },
      },
    },
  },
  {
    id: "live",
    name: "Live-Cuaderno",
    icon: BookOpen,
    description: "Gestión de pedidos en tiempo real con tienda online integrada.",
    tiers: {
      basico: {
        name: "Basico",
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
      ultra: {
        name: "Ultra",
        price: 299.9,
        description: "Control total",
        color: "from-rose-500 to-pink-600",
        glow: "rgba(244,63,94,0.25)",
        border: "border-rose-500/40",
        bg: "bg-rose-500/5",
        icon: Crown,
        featureLimit: 13,
        featureData: { productos: "Ilimitados", usuarios: "Ilimitados", soporte: "24/7 Dedicado" },
      },
    },
  },
  {
    id: "venta",
    name: "Venta-Inventario",
    icon: Boxes,
    description: "Punto de venta e inventarios para múltiples sucursales.",
    tiers: {
      basico: {
        name: "Basico",
        price: 169.9,
        description: "Gestión Pyme",
        color: "from-orange-500 to-red-600",
        glow: "rgba(249,115,22,0.25)",
        border: "border-orange-500/30",
        bg: "bg-orange-500/5",
        icon: Zap,
        featureLimit: 6,
        featureData: { productos: "30 Productos", inventarios: "Avanzado", sucursales: "1 Sucursal" },
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
      ultra: {
        name: "Ultra",
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
    description: "Automatización de mensajes y atención al cliente vía WhatsApp.",
    tiers: {
      basico: {
        name: "Basico",
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
      ultra: {
        name: "Ultra",
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

const categoryFeatures: Record<string, any[]> = {
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

const FeatureRow = ({ feat, included, tierData }: { feat: any, included: boolean, tierData?: any }) => {
  const customValue = tierData?.[feat.id];
  const Icon = feat.icon;

  return (
    <div className={`flex items-center gap-4 transition-opacity ${included ? "opacity-100" : "opacity-25"}`}>
      <div className={`size-7 xl:size-9 rounded-xl flex items-center justify-center flex-shrink-0 ${included ? "bg-primary/20" : "bg-white/5"}`}>
        <Icon className={`size-4 xl:size-5 ${included ? "text-primary" : "text-foreground/40"}`} />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm xl:text-lg font-bold truncate leading-snug">{feat.label}</span>
        {customValue && included && (
          <span className="text-[10px] xl:text-[12px] font-black text-primary uppercase tracking-wider">{customValue}</span>
        )}
      </div>
      {included ? (
        <Check className="size-5 text-emerald-500 stroke-[4]" />
      ) : (
        <X className="size-4 text-foreground/20" />
      )}
    </div>
  );
};

const PricingCard = ({ tier, categoryId, categoryName }: { tier: PlanTier, categoryId: string, categoryName: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const features = categoryFeatures[categoryId] || [];
  const PlanIcon = tier.icon;
  const waLink = `https://wa.me/59169867332?text=Hola%20MiraCode!%20Estoy%20interesado%20en%20el%20Plan%20*${encodeURIComponent(categoryName)}%20-%20${encodeURIComponent(tier.name)}*%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F`;

  return (
    <motion.div 
      layout
      className={`relative flex flex-col w-full max-w-sm xl:max-w-md rounded-[2.5rem] border-2 transition-all duration-300 backdrop-blur-xl
      ${tier.border} ${tier.bg} ${tier.popular ? "ring-2 ring-primary/40 shadow-2xl" : "shadow-xl"}`}
    >
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-white text-[12px] xl:text-[14px] font-black uppercase tracking-[0.2em] shadow-lg">
            <Star className="size-4 fill-white" /> POPULAR
          </span>
        </div>
      )}

      <div className="p-8 xl:p-10 text-center space-y-6 border-b border-white/5">
        <div className={`size-16 xl:size-20 mx-auto rounded-3xl bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-lg`}>
          <PlanIcon className="size-10 xl:size-12 text-white" />
        </div>
        <div>
          <h3 className="text-3xl xl:text-4xl font-black tracking-tighter uppercase leading-none">{tier.name}</h3>
          <p className="text-[12px] xl:text-[14px] text-foreground/60 font-black uppercase tracking-[0.3em] mt-2">{tier.description}</p>
        </div>
      </div>

      <div className="py-8 xl:py-12 flex flex-col items-center bg-white/5">
        <div className="flex items-baseline gap-2">
          <span className={`text-6xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br ${tier.color} leading-none`}>
            {tier.price}
          </span>
          <span className="text-lg xl:text-xl font-black text-foreground/40 uppercase">Bs.</span>
        </div>
      </div>

      <div className="flex-1 p-8 xl:p-10 space-y-6">
        {/* BOTÓN DE FLECHA (SOLO MÓVIL) */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="lg:hidden w-full flex items-center justify-between p-5 bg-primary/10 rounded-2xl border border-primary/20"
        >
          <span className="font-black text-[12px] uppercase tracking-widest text-primary">Ver Beneficios</span>
          {isExpanded ? <ChevronUp className="text-primary size-5" /> : <ChevronDown className="text-primary size-5" />}
        </button>

        {/* LISTA DESKTOP (SIEMPRE VISIBLE) */}
        <div className="hidden lg:block space-y-4 xl:space-y-5">
          {features.map((feat, idx) => (
            <FeatureRow key={feat.id} feat={feat} included={idx < tier.featureLimit} tierData={tier.featureData} />
          ))}
        </div>

        {/* LISTA MÓVIL (ACORDEÓN) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden space-y-4 pt-2"
            >
              {features.map((feat, idx) => (
                <FeatureRow key={feat.id} feat={feat} included={idx < tier.featureLimit} tierData={tier.featureData} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-8 xl:p-10 pt-0">
        <a
          href={tier.externalLink || waLink}
          target={tier.externalLink ? "_self" : "_blank"}
          className={`group flex items-center justify-center gap-3 w-full py-5 xl:py-6 rounded-3xl bg-gradient-to-r ${tier.color} text-white font-black text-xs xl:text-sm uppercase tracking-[0.25em] transition-all hover:scale-[1.02] active:scale-95 shadow-xl`}
        >
          {tier.price === 0 ? "Comenzar" : "Seleccionar"}
          <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export const PricingPlans = () => {
  return (
    <section className="relative min-h-screen py-20 px-6 xl:px-12 overflow-hidden ">
      {/* Luces de Fondo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[1000px] h-[800px] rounded-full bg-primary/10 blur-[180px]" />
        <div className="absolute bottom-[-5%] right-0 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[150px]" />
      </div>

      {/* Header */}
      <div className="text-center mb-32 max-w-7xl mx-auto space-y-10">
        <motion.span 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="inline-block px-8 py-3 rounded-full border border-primary/40 bg-primary/10 text-primary text-[12px] xl:text-[14px] font-black tracking-[0.6em] uppercase"
        >
          MiraCode 
        </motion.span>
        <h1 className="text-6xl sm:text-8xl md:text-9xl xl:text-[12rem] font-black tracking-tighter leading-[0.8] uppercase italic">
          Nuestras <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-blue-400">
            Soluciones
          </span>
        </h1>
      </div>

      <div className="max-w-[1600px] mx-auto space-y-32">
        {categories.map((category) => (
          <div key={category.id} className="space-y-16">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="size-20 xl:size-28 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-2xl">
                <category.icon className="size-10 xl:size-14 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-5xl xl:text-7xl font-black uppercase tracking-tighter italic leading-none">{category.name}</h2>
                <p className="text-foreground/60 text-lg xl:text-2xl max-w-4xl font-medium mx-auto">{category.description}</p>
              </div>
            </div>

            {/* CONTENEDOR CENTRADO DINÁMICO */}
            <div className="flex flex-wrap justify-center gap-8 xl:gap-10">
              {Object.entries(category.tiers).map(([key, tier]) => (
                <div key={key} className="w-full md:w-[calc(50%-1rem)] xl:w-[calc(25%-1.875rem)] min-w-[320px] max-w-[400px]">
                  <PricingCard tier={tier as PlanTier} categoryId={category.id} categoryName={category.name} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-64 text-center space-y-10 pb-20">
        <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-[12px] xl:text-[14px] text-foreground/40 font-black uppercase tracking-[0.6em]">
          MiraCode © 2026 • Bolivia
        </p>
      </footer>
    </section>
  );
};