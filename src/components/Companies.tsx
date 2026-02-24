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
    <section className="py-16 bg-background/50 border-y border-border/50">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            Nuestros Aliados
          </p>
          <h2 className="text-2xl font-bold md:text-3xl text-muted-foreground/80">
            Empresas que confían en nosotros
          </h2>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:25s] [--gap:4rem] py-4">
          {companyLogos.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-4 transition-all duration-300 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 cursor-pointer group"
            >
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center p-2 group-hover:bg-primary/20 transition-colors">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="size-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </Marquee>

        {/* Subtle edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
