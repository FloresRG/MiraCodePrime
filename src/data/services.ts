import { Globe, Smartphone, Cpu, Layout, Database, Code2 } from "lucide-react";

export const services = [
  {
    slug: "desarrollo-web",
    title: "Desarrollo Web",
    description:
      "Aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías.",
    icon: Globe,
    tags: ["React", "Astro", "Next.js"],
    image: "/assets/logo.webp",
    steps: [
      {
        date: "2024-03-01",
        title: "Planificación Estratégica",
        description: "Definición de objetivos, stack tecnológico y arquitectura base del proyecto.",
        status: "completed" as const
      },
      {
        date: "2024-03-15",
        title: "Diseño UI/UX",
        description: "Creación de prototipos de alta fidelidad y validación de experiencia de usuario.",
        status: "in-progress" as const
      },
      {
        date: "2024-04-01",
        title: "Desarrollo & QA",
        description: "Implementación de funcionalidades y pruebas rigurosas de calidad.",
        status: "pending" as const
      }
    ]
  },
  {
    slug: "apps-moviles",
    title: "Apps Móviles",
    description:
      "Soluciones nativas y multiplataforma para iOS y Android con alto rendimiento.",
    icon: Smartphone,
    tags: ["React Native", "Flutter"],
    image: "/assets/logo.webp",
    steps: [
      {
        date: "2024-02-01",
        title: "Conceptualización",
        description: "Análisis de requerimientos móviles y diseño de flujos de navegación.",
        status: "completed" as const
      },
      {
        date: "2024-02-15",
        title: "Desarrollo Core",
        description: "Construcción de la lógica de negocio y componentes de interfaz.",
        status: "completed" as const
      },
      {
        date: "2024-03-01",
        title: "Publicación en Stores",
        description: "Preparación de activos y envío a App Store y Google Play.",
        status: "in-progress" as const
      }
    ]
  },
  {
    slug: "arquitectura-software",
    title: "Arquitectura de Software",
    description:
      "Diseño de sistemas robustos, microservicios y soluciones en la nube.",
    icon: Cpu,
    tags: ["AWS", "Docker", "Kubernetes"],
    image: "/assets/logo.webp",
    steps: [
      {
        date: "2024-01-01",
        title: "Análisis de Carga",
        description: "Evaluación de necesidades de escalabilidad y puntos críticos de falla.",
        status: "completed" as const
      },
      {
        date: "2024-01-20",
        title: "Diseño de Microservicios",
        description: "Descomposición del sistema en componentes independientes y resilientes.",
        status: "completed" as const
      },
      {
        date: "2024-02-10",
        title: "Implementación Cloud",
        description: "Despliegue de infraestructura como código y orquestación.",
        status: "completed" as const
      }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Interfaces intuitivas y experiencias de usuario diseñadas para convertir.",
    icon: Layout,
    tags: ["Figma", "Prototyping"],
    image: "/assets/logo.webp",
    steps: [
      {
        date: "2024-03-01",
        title: "User Research",
        description: "Entrevistas con usuarios y análisis de competencia.",
        status: "completed" as const
      },
      {
        date: "2024-03-10",
        title: "Wireframing",
        description: "Estructura básica de la información y flujo de tareas.",
        status: "completed" as const
      },
      {
        date: "2024-03-20",
        title: "High-Fidelity Design",
        description: "Diseño visual final con sistemas de diseño consistentes.",
        status: "in-progress" as const
      }
    ]
  },
  {
    slug: "backend-apis",
    title: "Backend & APIs",
    description:
      "Desarrollo de APIs seguras y eficientes para conectar tus servicios.",
    icon: Database,
    tags: ["Node.js", "Go", "Python"],
    image: "/assets/logo.webp",
    steps: [
      {
        date: "2024-02-01",
        title: "Modelado de Datos",
        description: "Estructuración de bases de datos relacionales y no relacionales.",
        status: "completed" as const
      },
      {
        date: "2024-02-15",
        title: "Desarrollo de Endpoints",
        description: "Implementación de lógica de negocio y seguridad (JWT/OAuth).",
        status: "completed" as const
      },
      {
        date: "2024-03-01",
        title: "Documentación API",
        description: "Generación de Swagger/OpenAPI para integración con frontend.",
        status: "in-progress" as const
      }
    ]
  },
  {
    slug: "consultoria-tech",
    title: "Consultoría Tech",
    description:
      "Asesoramiento estratégico para la transformación digital de tu empresa.",
    icon: Code2,
    tags: ["Estrategia", "Scalability"],
    image: "/assets/logo.webp",
    steps: [
      {
        date: "2024-01-10",
        title: "Audit Tecnológico",
        description: "Revisión de código y procesos técnicos actuales.",
        status: "completed" as const
      },
      {
        date: "2024-01-25",
        title: "Roadmap Digital",
        description: "Planificación a largo plazo para modernización tecnológica.",
        status: "completed" as const
      },
      {
        date: "2024-02-15",
        title: "Mentoring & Training",
        description: "Capacitación de equipos en mejores prácticas de desarrollo.",
        status: "completed" as const
      }
    ]
  },
];
