import React from "react";
import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const companyLogos = [
  {
    name: "TechFlow",
    logo: "https://cdn.brandfetch.io/google.com/fallback/lettermark?text=TF&color=6366f1",
  },
  {
    name: "CloudScale",
    logo: "https://cdn.brandfetch.io/aws.com/fallback/lettermark?text=CS&color=f59e0b",
  },
  {
    name: "DataNexus",
    logo: "https://cdn.brandfetch.io/microsoft.com/fallback/lettermark?text=DN&color=3b82f6",
  },
  {
    name: "ApexSystems",
    logo: "https://cdn.brandfetch.io/apple.com/fallback/lettermark?text=AS&color=10b981",
  },
  {
    name: "InnovateIQ",
    logo: "https://cdn.brandfetch.io/meta.com/fallback/lettermark?text=IQ&color=ec4899",
  },
  {
    name: "GlobalNet",
    logo: "https://cdn.brandfetch.io/amazon.com/fallback/lettermark?text=GN&color=f97316",
  },
];

export const Companies = () => {
  return (
    <section className="py-20 md:py-32 bg-background/50 border-y border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12 md:mb-16">
        <div className="text-center">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-primary mb-4">
            Nuestros Aliados
          </p>
          <h2 className="text-3xl font-black md:text-6xl text-foreground tracking-tighter">
            Empresas que confían <br className="sm:hidden" /> en nosotros
          </h2>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee
          pauseOnHover
          className="[--duration:30s] [--gap:3rem] md:[--gap:6rem] py-8"
        >
          {companyLogos.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-4 md:gap-6 transition-all duration-500 grayscale opacity-40 dark:opacity-20 hover:grayscale-0 hover:opacity-100 cursor-pointer group"
            >
              <div className="size-14 md:size-20 rounded-2xl md:rounded-3xl bg-secondary flex items-center justify-center p-3 md:p-5 group-hover:bg-primary/10 transition-all duration-300 border border-border/40 hover:rotate-3 shadow-sm">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="size-full object-contain"
                />
              </div>
              <span className="text-2xl md:text-4xl font-black text-muted-foreground group-hover:text-foreground transition-colors tracking-tighter">
                {company.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Subtle edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background z-10 transition-opacity md:opacity-100 opacity-60"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background z-10 transition-opacity md:opacity-100 opacity-60"></div>
      </div>
    </section>
  );
};
