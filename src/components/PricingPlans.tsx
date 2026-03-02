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
    Coins,
} from "lucide-react";

const features = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "reportes", label: "Reportes", icon: BarChart3 },
    { id: "historial", label: "Historial", icon: History },
    { id: "gestion", label: "Gestión de Productos", icon: Package },
    { id: "link", label: "Link para Pedidos", icon: Link2 },
    { id: "cuaderno", label: "Cuaderno", icon: BookOpen },
    { id: "historialPedidos", label: "Historial de Pedidos", icon: ClipboardList },
    { id: "whatsapp", label: "WhatsApp Bot", icon: Bot },
    { id: "pdf", label: "PDF Personalizado", icon: FileText },
    { id: "verificacion", label: "Verificación en Línea", icon: ShieldCheck },
    { id: "tienda", label: "Tienda Online", icon: ShoppingCart },
];

const plans = [
    {
        id: "plan1",
        name: "Starter",
        price: 79.9,
        color: "from-sky-500 to-blue-600",
        glow: "rgba(14,165,233,0.25)",
        border: "border-sky-500/30",
        bg: "bg-sky-500/5",
        icon: Zap,
        popular: false,
        features: {
            dashboard: true,
            reportes: true,
            historial: true,
            gestion: true,
            link: true,
            cuaderno: true,
            historialPedidos: true,
            whatsapp: false,
            pdf: false,
            verificacion: false,
            tienda: false,
        },
    },
    {
        id: "plan2",
        name: "Pro",
        price: 119.9,
        color: "from-violet-500 to-purple-600",
        glow: "rgba(139,92,246,0.3)",
        border: "border-violet-500/50",
        bg: "bg-violet-500/10",
        icon: Star,
        popular: true,
        features: {
            dashboard: true,
            reportes: true,
            historial: true,
            gestion: true,
            link: true,
            cuaderno: true,
            historialPedidos: true,
            whatsapp: true,
            pdf: true,
            verificacion: false,
            tienda: false,
        },
    },
    {
        id: "plan3",
        name: "Enterprise",
        price: 169.9,
        color: "from-amber-400 to-orange-500",
        glow: "rgba(251,191,36,0.25)",
        border: "border-amber-500/40",
        bg: "bg-amber-500/5",
        icon: Crown,
        popular: false,
        features: {
            dashboard: true,
            reportes: true,
            historial: true,
            gestion: true,
            link: true,
            cuaderno: true,
            historialPedidos: true,
            whatsapp: true,
            pdf: true,
            verificacion: true,
            tienda: true,
        },
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const PricingPlans = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="relative min-h-screen bg-background text-foreground py-20 px-4 overflow-hidden">
            {/* Decorative bg blobs */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/15 blur-[130px]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[100px]" />
                <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-amber-500/8 blur-[90px]" />
            </div>

            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold mb-6 tracking-widest uppercase">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse" />
                        Planes Mensuales
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-5 leading-[1]">
                        Elige tu{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-blue-400">
                            Plan Ideal
                        </span>
                    </h1>

                    <p className="text-foreground/60 text-base md:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
                        Selecciona el plan mensual que mejor se adapte a tu negocio. Cada pedido registrado
                        tiene una comisión adicional de solo{" "}
                        <span className="text-primary font-bold">1 Bs.</span>
                    </p>

                    {/* 1 Bs callout */}
                    <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-2xl px-5 py-3 text-sm text-foreground/80">
                        <Coins className="size-5 text-primary flex-shrink-0" />
                        <span>
                            + <strong className="text-primary">1 Bs.</strong> de comisión por cada pedido registrado
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Plans grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
                {plans.map((plan) => {
                    const PlanIcon = plan.icon;
                    const isHovered = hovered === plan.id;

                    return (
                        <motion.div
                            key={plan.id}
                            variants={cardVariants}
                            onMouseEnter={() => setHovered(plan.id)}
                            onMouseLeave={() => setHovered(null)}
                            className={`relative rounded-3xl border ${plan.border} ${plan.bg} backdrop-blur-xl p-7 flex flex-col transition-all duration-300 ${plan.popular
                                ? "md:scale-[1.04] shadow-[0_0_60px_rgba(139,92,246,0.2)]"
                                : ""
                                } ${isHovered ? "scale-[1.02]" : ""}`}
                            style={{
                                boxShadow: isHovered
                                    ? `0 0 70px ${plan.glow}, 0 0 0 1px rgba(255,255,255,0.05) inset`
                                    : undefined,
                            }}
                        >
                            {/* Top shimmer line */}
                            <div
                                className={`absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 rounded-full bg-gradient-to-r from-transparent via-current to-transparent opacity-50 bg-gradient-to-r ${plan.color}`}
                            />

                            {/* Popular badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                                        <Star className="size-3 fill-white" />
                                        Más Popular
                                    </span>
                                </div>
                            )}

                            {/* Icon + plan name */}
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className={`size-11 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                                >
                                    <PlanIcon className="size-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-foreground/40 uppercase tracking-widest font-semibold">
                                        {plan.name}
                                    </p>
                                    <div className="flex items-baseline gap-1">
                                        <span
                                            className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br ${plan.color}`}
                                        >
                                            {plan.price}
                                        </span>
                                        <span className="text-lg font-bold text-foreground/60">Bs.</span>
                                        <span className="text-xs text-foreground/40">/mes</span>
                                    </div>
                                </div>
                            </div>

                            {/* Features list */}
                            <ul className="flex-1 space-y-2.5 mb-8">
                                {features.map((feat) => {
                                    const included = plan.features[feat.id as keyof typeof plan.features];
                                    const FeatIcon = feat.icon;
                                    return (
                                        <li
                                            key={feat.id}
                                            className={`flex items-center gap-3 text-sm rounded-xl px-3 py-2 transition-colors ${included
                                                ? "text-foreground/85 bg-white/4"
                                                : "text-foreground/25"
                                                }`}
                                        >
                                            <FeatIcon className={`size-4 flex-shrink-0 ${included ? "text-foreground/50" : "text-foreground/20"}`} />
                                            <span className="flex-1">{feat.label}</span>
                                            {included ? (
                                                <span
                                                    className={`size-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center flex-shrink-0`}
                                                >
                                                    <Check className="size-3 text-white stroke-[3]" />
                                                </span>
                                            ) : (
                                                <span className="size-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                                    <X className="size-3 text-foreground/20 stroke-[3]" />
                                                </span>
                                            )}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* CTA button */}
                            <a
                                href={`https://wa.me/59169867332?text=Hola%20MiraCode!%20Estoy%20interesado%20en%20el%20*Plan%20${encodeURIComponent(plan.name)}%20(${plan.price}%20Bs%2Fmes)*%20%F0%9F%91%8B%20%C2%BFPodr%C3%ADan%20darme%20m%C3%A1s%20informaci%C3%B3n%3F`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r ${plan.color} text-white font-bold text-sm transition-all duration-300 hover:opacity-90 hover:scale-[1.02] shadow-lg`}
                            >
                                Comenzar Ahora
                                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* 1 Bs explanation strip */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="max-w-4xl mx-auto mt-16"
            >
                <div className="relative rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-8 md:p-10 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <div className="absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
                        <div className="size-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)]">
                            <Coins className="size-8 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-2xl font-black mb-2 text-foreground">
                                ¿Cómo funciona el <span className="text-primary">+1 Bs. por pedido</span>?
                            </h2>
                            <p className="text-foreground/55 text-sm md:text-base leading-relaxed max-w-2xl">
                                Tu plan mensual cubre el acceso y mantenimiento del sistema. Cada vez que un cliente
                                registra un pedido en tu plataforma, se cobra una comisión mínima de{" "}
                                <strong className="text-foreground/80">1 Boliviano</strong>. Esto garantiza que
                                pagas proporcionalmente al uso real, sin tarifas sorpresa.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Footer note */}
            <p className="text-center text-xs text-foreground/25 mt-10 max-w-lg mx-auto">
                * Todos los planes incluyen soporte técnico y actualizaciones. La comisión de 1 Bs. se
                contabiliza mensualmente. Precios sujetos a negociación.
            </p>
        </section>
    );
};
