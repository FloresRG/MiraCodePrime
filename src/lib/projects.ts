// src/lib/projects.ts — 11 sistemas reales de MiraCode
export interface Project {
    id: string;
    title: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
    tags: string[];
    color: string;
    features: string[];
    /** Secciones de detalle en [id].astro */
    sections: {
        title: string;
        description: string;
        imagePosition: 'left' | 'right';
        badge?: string;
    }[];
}

export const projects: Project[] = [
    {
        id: 'importadora-miranda',
        title: 'Importadora Miranda',
        category: 'Sistema ERP',
        shortDesc: 'Sistema integral de gestión para empresa importadora: inventario, pedidos, distribuidores, cuadernos de venta y reportes por zona.',
        fullDesc: 'ERP completo para Importadora Miranda que centraliza el ciclo completo de la empresa: gestión de productos importados, control de stock, módulo de cuadernos de venta para el equipo de distribución en campo, liquidaciones y reportes por zona y departamento.',
        tags: ['Laravel', 'Inertia.js', 'React', 'MySQL'],
        color: 'from-orange-500 to-amber-600',
        features: [
            'Control de inventario por categoría y proveedor',
            'Cuadernos digitales de venta con flujo de aprobación',
            'Liquidación y exportación a PDF por período',
            'Reportes de ventas por zona, departamento y vendedor',
        ],
        sections: [
            { title: 'Gestión de inventario', description: 'Vista centralizada de productos importados con stock en tiempo real, alertas de stock mínimo y registro de entradas por proveedor.', imagePosition: 'left', badge: 'Inventario' },
            { title: 'Cuadernos de venta digitales', description: 'Los vendedores registran pedidos desde el celular y los supervisores aprueban en el panel. El admin liquida con exportación a PDF.', imagePosition: 'right', badge: 'Logística' },
        ],
    },
    {
        id: 'shop-miranda',
        title: 'Shop de Importadora Miranda',
        category: 'E-Commerce',
        shortDesc: 'Tienda online para que clientes finales y distribuidores compren directamente con carrito, pagos QR y seguimiento de pedidos.',
        fullDesc: 'Plataforma de ventas online conectada al ERP de Miranda. Los clientes navegan el catálogo, agregan productos al carrito, pagan vía QR o transferencia y reciben confirmación automática. Los pedidos quedan visibles para el equipo logístico en tiempo real.',
        tags: ['Next.js', 'Laravel API', 'QR Pay', 'Tailwind'],
        color: 'from-blue-500 to-indigo-600',
        features: [
            'Catálogo con búsqueda y filtros en tiempo real',
            'Carrito persistente y checkout multi-paso',
            'Pago con QR y verificación automática',
            'Historial de pedidos con rastreo de estado',
        ],
        sections: [
            { title: 'Tienda y catálogo online', description: 'Catálogo filtrable por categoría, marca y precio. Búsqueda instantánea con resultados en tiempo real sin recargar la página.', imagePosition: 'left', badge: 'Catálogo' },
            { title: 'Checkout y pagos QR', description: 'Proceso de pago simplificado: cliente genera QR, paga desde su banco y el sistema verifica la transacción automáticamente.', imagePosition: 'right', badge: 'Pagos' },
        ],
    },
    {
        id: 'admus-produccion',
        title: 'Admus Produccions',
        category: 'Gestión Empresarial',
        shortDesc: 'Sistema de gestión integral para empresa de producción audiovisual: proyectos, equipos, presupuestos y clientes.',
        fullDesc: 'Plataforma a medida para Admus Produccions que gestiona el ciclo completo de cada producción: desde la captación del cliente y presupuesto inicial, hasta la planificación del equipo técnico, control de gastos y entrega final con historial de revisiones.',
        tags: ['Laravel', 'Livewire', 'Alpine.js', 'MySQL'],
        color: 'from-purple-600 to-violet-700',
        features: [
            'Gestión de proyectos con timeline editable',
            'Asignación de equipo técnico y roles',
            'Control de presupuesto vs gasto real',
            'Portal de cliente para seguimiento y aprobaciones',
        ],
        sections: [
            { title: 'Panel de proyectos', description: 'Vista kanban y lista de todos los proyectos activos, con estado, responsable, fecha de entrega y porcentaje de avance.', imagePosition: 'left', badge: 'Proyectos' },
            { title: 'Control de presupuesto', description: 'Registro de gastos vs presupuesto aprobado por proyecto. Alertas automáticas cuando se supera el 80% del presupuesto.', imagePosition: 'right', badge: 'Finanzas' },
        ],
    },
    {
        id: 'calendario-admus',
        title: 'Calendario de Admus Producción',
        category: 'Herramienta Interna',
        shortDesc: 'Calendario de producción compartido para coordinar grabaciones, sets, equipos y recursos sin conflictos de agenda.',
        fullDesc: 'Herramienta de planificación visual para el equipo de Admus. Permite ver la disponibilidad de equipos, cámaras, locaciones y personal en un mismo calendario interactivo. Incluye sistema de reservas con notificaciones y exportación a Google Calendar.',
        tags: ['React', 'FullCalendar', 'Node.js', 'PostgreSQL'],
        color: 'from-teal-500 to-emerald-600',
        features: [
            'Vista mensual, semanal y diaria del calendario',
            'Reserva de equipos, locaciones y personal',
            'Notificaciones de conflictos de agenda en tiempo real',
            'Exportación e integración con Google Calendar',
        ],
        sections: [
            { title: 'Vista de calendario interactivo', description: 'Drag & drop para mover grabaciones, colores por tipo de producción y vista de disponibilidad de recursos superpuesta.', imagePosition: 'left', badge: 'Calendario' },
            { title: 'Gestión de recursos', description: 'Panel para ver qué equipos, cámaras y personal están disponibles en cada fecha, evitando conflictos de agenda.', imagePosition: 'right', badge: 'Recursos' },
        ],
    },
    {
        id: 'pedidos-whatsapp',
        title: 'Sistema de Pedidos con WhatsApp',
        category: 'Bot / IA',
        shortDesc: 'Bot de WhatsApp que toma pedidos, consulta disponibilidad, confirma precios y notifica al equipo de despacho automáticamente.',
        fullDesc: 'El bot integra la API de WhatsApp Business con el sistema de inventario. El cliente hace su pedido en lenguaje natural, el bot confirma disponibilidad y precio, procesa el pago QR y notifica al área de despacho con el detalle del pedido. Sin intervención humana.',
        tags: ['Node.js', 'WhatsApp API', 'OpenAI', 'Redis'],
        color: 'from-green-500 to-emerald-600',
        features: [
            'Toma de pedidos en lenguaje natural por WhatsApp',
            'Consulta de stock en tiempo real al inventario',
            'Confirmación de precio y pago vía QR integrado',
            'Notificación automática al equipo de despacho',
        ],
        sections: [
            { title: 'Flujo de conversación inteligente', description: 'El cliente escribe su pedido, el bot interpreta la intención, muestra disponibilidad y precios, y confirma el pedido sin formularios.', imagePosition: 'left', badge: 'NLU / IA' },
            { title: 'Panel de pedidos recibidos', description: 'El equipo de despacho ve en tiempo real todos los pedidos confirmados por WhatsApp, con estado, dirección y método de pago.', imagePosition: 'right', badge: 'Admin' },
        ],
    },
    {
        id: 'ecommerce-admin',
        title: 'Sistema de Ecommerce con Panel de Administración',
        category: 'E-Commerce + ERP',
        shortDesc: 'Tienda online completa con panel de administración avanzado: productos, categorías, stock, ventas y clientes desde un solo lugar.',
        fullDesc: 'Solución full-stack de e-commerce con tienda pública optimizada para conversión y un panel de administración completo. El admin gestiona catálogo, procesa pedidos, controla stock, configura descuentos y ve reportes de ventas en tiempo real.',
        tags: ['Next.js', 'Laravel API', 'Stripe', 'PostgreSQL'],
        color: 'from-rose-500 to-pink-600',
        features: [
            'Tienda pública con SEO optimizado y carga rápida',
            'Panel admin: productos, categorías, stock y precios',
            'Gestión de pedidos con estados y notificaciones',
            'Reportes de ventas, productos top y clientes frecuentes',
        ],
        sections: [
            { title: 'Tienda pública de alta conversión', description: 'Diseño optimizado para ventas: búsqueda rápida, filtros, wishlist, reseñas y proceso de pago en 3 pasos.', imagePosition: 'left', badge: 'Tienda' },
            { title: 'Panel de administración', description: 'Dashboard con métricas de ventas del día, gestión completa de catálogo y módulo de clientes con historial de compras.', imagePosition: 'right', badge: 'Admin' },
        ],
    },
    {
        id: 'nextcloud',
        title: 'Nube Privada con Nextcloud',
        category: 'Infraestructura',
        shortDesc: 'Servidor de nube privada corporativa con almacenamiento, colaboración en documentos, calendario y videoconferencias integradas.',
        fullDesc: 'Implementación y personalización de Nextcloud en servidor propio del cliente. Incluye configuración de usuarios y roles, integración con Active Directory, apps de colaboración (OnlyOffice, Talk, Calendar), SSL y backups automáticos.',
        tags: ['Nextcloud', 'Docker', 'Nginx', 'Linux'],
        color: 'from-sky-500 to-blue-600',
        features: [
            'Almacenamiento ilimitado en servidor propio',
            'Edición colaborativa de documentos en tiempo real',
            'Videoconferencias y chat integrado (Nextcloud Talk)',
            'Backups automáticos y cifrado en reposo',
        ],
        sections: [
            { title: 'Escritorio de nube corporativa', description: 'Interfaz familiar tipo Google Drive pero en servidor propio del cliente. Carpetas compartidas por departamento, permisos granulares y actividad de equipo.', imagePosition: 'left', badge: 'Archivos' },
            { title: 'Colaboración y comunicación', description: 'Edición de documentos simultánea con OnlyOffice, videoconferencias sin salir de la plataforma y chat de equipo.', imagePosition: 'right', badge: 'Colaboración' },
        ],
    },
    {
        id: 'giftcard',
        title: 'Sistema de GiftCard',
        category: 'Comercio Digital',
        shortDesc: 'Plataforma para generar, vender, validar y canjear tarjetas de regalo digitales con códigos únicos y seguimiento en tiempo real.',
        fullDesc: 'Sistema completo de gift cards digitales: el cliente compra una tarjeta de regalo online, recibe el código por email/WhatsApp, y el beneficiario lo canjea en tienda física o virtual. El panel admin muestra el estado de cada código en tiempo real.',
        tags: ['Laravel', 'React', 'QR Code', 'Stripe'],
        color: 'from-yellow-500 to-orange-500',
        features: [
            'Generación de códigos únicos con QR integrado',
            'Venta online y envío automático por email/WhatsApp',
            'Canje en tienda física o ecommerce con validación',
            'Panel de control: códigos activos, usados y vencidos',
        ],
        sections: [
            { title: 'Compra y personalización de GiftCards', description: 'El comprador elige el monto, personaliza el mensaje y paga online. La tarjeta llega al destinatario con código QR y pin de seguridad.', imagePosition: 'left', badge: 'Venta' },
            { title: 'Panel de validación y reportes', description: 'El admin ve en tiempo real qué códigos están activos, cuándo se canjearon y el valor total de tarjetas pendientes.', imagePosition: 'right', badge: 'Admin' },
        ],
    },
    {
        id: 'verificacion-pagos',
        title: 'Sistema de Verificación de Pagos',
        category: 'Fintech',
        shortDesc: 'Captura notificaciones bancarias del celular, las procesa automáticamente y confirma pagos en el sistema sin intervención manual.',
        fullDesc: 'Solución única que lee las notificaciones push de los bancos (Banesco, Mercantil, BDV y otros) desde el celular del cajero, extrae monto, banco, referencia y cédula con OCR, los cruza con los pedidos pendientes y confirma el pago automáticamente.',
        tags: ['Android', 'OCR', 'Laravel', 'WebSocket'],
        color: 'from-cyan-500 to-teal-600',
        features: [
            'Lectura automática de notificaciones bancarias (push)',
            'Extracción de datos con OCR y procesamiento NLP',
            'Cruce automático con pedidos pendientes',
            'Notificación instantánea de confirmación al equipo',
        ],
        sections: [
            { title: 'Captura de notificaciones bancarias', description: 'App Android que escucha las notificaciones de los bancos instalados en el celular del cajero y las reenvía al servidor en tiempo real.', imagePosition: 'left', badge: 'Captura' },
            { title: 'Verificación y confirmación automática', description: 'El sistema cruza los datos extraídos (monto, referencia, cédula) con los pedidos en espera y los marca como pagados automáticamente.', imagePosition: 'right', badge: 'Verificación' },
        ],
    },
    {
        id: 'restaurante',
        title: 'Sistema de Restaurantes con Reservas',
        category: 'Hostelería',
        shortDesc: 'Plataforma para restaurantes con reservas online, gestión de mesas, comandas digitales y panel de administración en tiempo real.',
        fullDesc: 'Sistema integral para restaurantes que digitaliza el proceso completo: los comensales reservan mesa online, el maître confirma y asigna, los mozos cargan comandas desde tablet y la cocina las ve en pantalla. El admin ve métricas de mesas, consumo y caja.',
        tags: ['Laravel', 'React', 'WebSocket', 'MySQL'],
        color: 'from-red-500 to-rose-600',
        features: [
            'Reservas online con confirmación automática',
            'Gestión de mesas y salones con plano interactivo',
            'Comandas digitales desde tablet para los mozos',
            'Pantalla de cocina con pedidos en tiempo real',
        ],
        sections: [
            { title: 'Reservas y gestión de mesas', description: 'Los clientes reservan desde la web o Google. El maître ve el plano del restaurante con disponibilidad en tiempo real y asigna mesas.', imagePosition: 'left', badge: 'Reservas' },
            { title: 'Comandas y cocina digital', description: 'Los mozos cargan pedidos desde tablet, la cocina los ve en pantalla con temporizador. Se eliminan los errores de comandas en papel.', imagePosition: 'right', badge: 'POS' },
        ],
    },
    {
        id: 'farmacias',
        title: 'Sistema de Farmacias',
        category: 'Sector Salud',
        shortDesc: 'ERP para farmacias con inventario de medicamentos, POS táctil, vencimientos, laboratorios y reportes de ventas integrados.',
        fullDesc: 'Nexus Farma centraliza la gestión de la farmacia: inventario de medicamentos con alerta de vencimientos y stock mínimo, punto de venta táctil optimizado, control de laboratorios, historial de clientes y analítica de ventas por categoría y período.',
        tags: ['Laravel', 'React', 'Inertia.js', 'MySQL'],
        color: 'from-violet-600 to-indigo-700',
        features: [
            'Inventario de medicamentos con alertas de vencimiento',
            'POS táctil con búsqueda por nombre o código',
            'Gestión de laboratorios y categorías terapéuticas',
            'Reportes de ventas y medicamentos más vendidos',
        ],
        sections: [
            { title: 'Inventario de medicamentos', description: 'Vista completa del stock con alertas de vencimiento próximo y stock mínimo. Registro de entradas por laboratorio y lote.', imagePosition: 'left', badge: 'Inventario' },
            { title: 'Punto de venta farmacéutico', description: 'POS optimizado para farmacia: búsqueda instantánea, sustitutos disponibles, múltiples métodos de pago y emisión de comprobante.', imagePosition: 'right', badge: 'POS' },
        ],
    },
];

export function getProject(id: string) {
    return projects.find(p => p.id === id);
}

export function getAllProjectIds() {
    return projects.map(p => p.id);
}
