import erpDashboard from '../assets/erp/erp-dashboard.png';
import erpInventory from '../assets/erp/erp-inventory.png';
import erpUsers from '../assets/erp/erp2.png';
import erpReports from '../assets/erp/erp3.png';

// App 1 Imports
import app1Main from '../assets/app1/0x0ss.png';
import app1_2 from '../assets/app1/0x0ss-2.png';
import app1_3 from '../assets/app1/0x0ss-3.png';
import app1_4 from '../assets/app1/0x0ss-4.png';
import app1_5 from '../assets/app1/0x0ss-5.png';

// App 2 Imports
import app2Main from '../assets/app2/0x0ss-6.png';
import app2_2 from '../assets/app2/0x0ss-7.png';
import app2_3 from '../assets/app2/0x0ss-8.png';
import app2_4 from '../assets/app2/0x0ss-9.png';
import app2_5 from '../assets/app2/0x0ss-10.png';

// Gym Imports
import gymMain from '../assets/gym/gym2.png';
import gym_2 from '../assets/gym/gym3.png';
import gym_3 from '../assets/gym/gym4.png';
import gym_4 from '../assets/gym/gym5.png';

// WebCorp Imports
import webCorpMain from '../assets/webcorp/WhatsApp Image 2026-05-12 at 11.13.52.jpeg';
import webCorp_2 from '../assets/webcorp/WhatsApp Image 2026-05-12 at 11.13.52 (1).jpeg';
import webCorp_3 from '../assets/webcorp/WhatsApp Image 2026-05-12 at 11.13.53.jpeg';
import webCorp_4 from '../assets/webcorp/WhatsApp Image 2026-05-12 at 11.13.53 (1).jpeg';
import webCorp_5 from '../assets/webcorp/WhatsApp Image 2026-05-12 at 11.13.53 (2).jpeg';

export interface Project {
// ... (rest of interface)
  id: string;
  title: string;
  desc: string;
  tags: string[];
  metrics: { val: string; label: string }[];
  tech: string;
  featured?: boolean;
  color: string;
  type: 'web' | 'mobile' | 'cross';
  mainImage?: string;
  gallery?: string[];
  details: {
    challenge: string;
    solution: string;
    stack: string;
    kpis: string[];
    mockupType: 'web' | 'mobile' | 'cross';
    stats: { name: string; sub: string; val: string; color: string; text: string; amt: string }[];
  };
}

export const projects: Project[] = [
  {
    id: 'geovoy-erp',
    title: "ERP — Solución Empresarial",
    desc: "Rediseño Integral de UI/UX: Ejecuté un rebranding visual y funcional del sitio hacia una estética profesional y minimalista, mejorando la navegación en flujos de trabajo densos.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    metrics: [
      { val: "+45%", label: "Eficiencia Op." },
      { val: "2.4s", label: "Carga Dashboard" }
    ],
    tech: "React · TypeScript · Vite · Tailwind CSS",
    featured: true,
    color: "linear-gradient(135deg,#f1f5f9,#e2e8f0)", 
    type: 'web',
    mainImage: erpDashboard,
    gallery: [
      erpDashboard,
      erpInventory,
      erpUsers,
      erpReports
    ],
    details: {
      challenge: "Expansión de Ecosistema: Diseñé e implementé desde cero nuevos módulos para el manejo de finanzas y activos, asegurando la escalabilidad mediante componentes desacoplados.",
      solution: "Optimización de Arquitectura: Refactoricé la estructura del proyecto a un modelo modular, facilitando la integración de nuevas funcionalidades y reduciendo la deuda técnica.",
      stack: "React, TypeScript, Vite, Tailwind CSS.",
      kpis: ["+45% Eficiencia", "Zero-lag UI", "100% Trazabilidad"],
      mockupType: 'web',
      stats: [
        { name: 'Factura #902', sub: 'Pendiente — Tesorería', val: '$12,400', color: '#fef3e2', text: '#b45309', amt: '#b45309' },
        { name: 'Orden Compra', sub: 'Aprobada — Almacén', val: 'Done', color: '#f0faf6', text: '#059669', amt: '#059669' },
        { name: 'Caja Chica', sub: 'Cierre Mensual', val: '+$450', color: '#f0faf6', text: '#059669', amt: '#059669' },
      ]
    }
  },
  {
    id: 'mobile-app-1',
    title: "Rutas Empresariales — App Móvil",
    desc: "Desarrollo de aplicación móvil de alto rendimiento con enfoque en experiencia de usuario fluida y diseño moderno.",
    tags: ["Flutter", "Fast Api", "Swift (iOS Deployment)"],
    metrics: [
      { val: "1.8k", label: "Descargas en IOS" },
      { val: "5.0★", label: "Rating" }
    ],
    tech: "Flutter · Fast Api · Swift (iOS Deployment)",
    featured: false,
    color: "linear-gradient(135deg,#f1f5f9,#e2e8f0)", 
    type: 'mobile',
    mainImage: app1Main,
    gallery: [
      app1Main,
      app1_2,
      app1_3,
      app1_4,
      app1_5
    ],
    details: {
      challenge: "El desafío principal era gestionar el rastreo de unidades de transporte de manera precisa sin saturar el servidor. Se requería una solución que mantuviera la ubicación actualizada para el usuario final, garantizando al mismo tiempo la estabilidad de la infraestructura durante picos de uso.",
      solution: "Implementé una arquitectura híbrida de comunicación para optimizar el flujo de datos entre el cliente y el servidor:\n\n• Sincronización mediante WebSockets: Conexiones bidireccionales para ubicación instantánea.\n• Smart Polling & Caching: Ajuste de la frecuencia de peticiones según el movimiento, reduciendo el tráfico.\n• Gestión de Metadatos: Caché de metadatos para minimizar consultas a la DB.\n\n🚀 Impacto y Resultados\n• Reducción de Carga en Servidor de forma significativa.\n• Experiencia de Usuario Fluida en el mapa sin saltos bruscos.\n• Arquitectura Escalable preparada para soportar un incremento en unidades simultáneas.",
      stack: "React Native, Expo, Redux Toolkit, Firebase.",
      kpis: ["Latencia < 20ms", "Crash-free 99.9%", "Diseño Pixel-Perfect"],
      mockupType: 'mobile',
      stats: [
        { name: 'Usuario Activo', sub: 'Sesión 12min', val: 'Online', color: '#f0faf6', text: '#059669', amt: '#059669' },
        { name: 'Nuevos Registros', sub: 'Últimas 24h', val: '+124', color: '#e8f0fe', text: '#1a56db', amt: '#1a56db' },
        { name: 'Feedback', sub: 'Positivo', val: '98%', color: '#fef3e2', text: '#b45309', amt: '#b45309' },
      ]
    }
  },
  {
    id: 'mobile-app-2',
    title: "Transporte Empresarial — App Móvil PANAMA",
    desc: "Aplicación móvil diseñada para el monitoreo de sostenibilidad y huella de carbono personal mediante una interfaz intuitiva y minimalista.",
    tags: ["Flutter", "Fast Api", "Swift (iOS Deployment)"],
    metrics: [
      { val: "1k", label: "Usuarios" },
      { val: "5.0★", label: "Store" }
    ],
    tech: "Flutter · Fast Api · Swift (iOS Deployment)",
    featured: false,
    color: "linear-gradient(135deg,#f1f5f9,#e2e8f0,#cbd5e1)",
    type: 'mobile',
    mainImage: app2Main,
    gallery: [app2Main, app2_2, app2_3, app2_4, app2_5],
    details: {
      challenge: "Adaptar un sistema de logística de transporte para el mercado de Panamá, enfrentando desafíos de despliegue regional restringido y la necesidad de una interfaz operativa que responda a condiciones climáticas y geográficas específicas de la zona.",
      solution: "Implementación Clave\nEn este proyecto, lideré la adaptación y el despliegue estratégico de la plataforma:\n\n• Geolocalización Personalizada: Integré la API de Google Maps con capas de personalización avanzadas que muestran condiciones climáticas en tiempo real, vital para la operación logística en la región.\n• Interfaz para Operadores: Diseñé y desarrollé un módulo de registro de paradas y tiempos de espera optimizado para el uso rudo, permitiendo el control de capacidad de las unidades de forma intuitiva.\n• Despliegue Estratégico (App Store): Gestioné la configuración técnica para el lanzamiento en tiendas, implementando restricciones geográficas específicas (Panamá/México) y cumpliendo con las políticas de privacidad y seguridad internacionales.\n• Identidad Local: Personalicé la experiencia de usuario mediante marcadores y elementos visuales con identidad cultural local, elevando el sentido de pertenencia de los usuarios finales.\n\nLogros Principales\n• Lanzamiento Exitoso: Cumplimiento total de los requisitos de la App Store para una distribución controlada y segura.\n• Optimización Operativa: Mejora en el registro de tiempos de espera, permitiendo una mejor toma de decisiones basada en datos reales de las rutas panameñas.\n• Alta Fidelidad Visual: Implementación de un diseño de mapa personalizado que combina estética profesional con utilidad funcional (clima/tráfico).",
      stack: "React Native, TypeScript, Node.js, AWS.",
      kpis: ["Retención +30%", "UX Premium", "Cross-Platform"],
      mockupType: 'mobile',
      stats: [
        { name: 'Impacto', sub: 'CO2 Ahorrado', val: '24kg', color: '#f0faf6', text: '#059669', amt: '#059669' },
        { name: 'Comunidad', sub: 'Nuevos retos', val: '+5', color: '#e8f0fe', text: '#1a56db', amt: '#1a56db' },
        { name: 'Metas', sub: 'Completadas', val: '80%', color: '#fef3e2', text: '#b45309', amt: '#b45309' },
      ]
    }
  },
  {
    id: 'gym-web',
    title: "Round 3 Boxing — Plataforma Web",
    desc: "Plataforma web para centros de fitness enfocada en la gestión de rutinas, suscripciones y comunidad activa.",
    tags: ["React", "Vite", "Tailwind"],
    metrics: [
      { val: "+120%", label: "Engagement" },
      { val: "400+", label: "Miembros" }
    ],
    tech: "React · Vite · Tailwind CSS",
    featured: true,
    color: "linear-gradient(135deg,#fee2e2,#fecaca)",
    type: 'web',
    mainImage: gymMain,
    gallery: [gymMain, gym_2, gym_3, gym_4],
    details: {
      challenge: "Integrar un sistema de reservas dinámico con una interfaz que motive al usuario a mantener su actividad física.",
      solution: "Diseño centrado en el usuario con dashboards personalizados y optimización de carga mediante Vite.",
      stack: "React, Vite, Tailwind CSS, Firebase.",
      kpis: ["Zero-lag", "99.9% Disponibilidad", "+40% Conversión"],
      mockupType: 'web',
      stats: [
        { name: 'Rutinas', sub: 'Completadas hoy', val: '42', color: '#f0faf6', text: '#059669', amt: '#059669' },
        { name: 'Reservas', sub: 'Clase Crossfit', val: 'Full', color: '#fce8e8', text: '#991b1b', amt: '#dc2626' },
        { name: 'Nuevos', sub: 'Este mes', val: '+12', color: '#e8f0fe', text: '#1a56db', amt: '#1a56db' },
      ]
    }
  },
  {
    id: 'web-corp',
    title: "Web Corporativa — Landing Page",
    desc: "Sitio web corporativo de alta gama para consultoría internacional, con enfoque en autoridad visual y velocidad extrema.",
    tags: ["Next.js", "Tailwind", "Framer"],
    metrics: [
      { val: "1.2s", label: "LCP" },
      { val: "100/100", label: "Lighthouse" }
    ],
    tech: "Next.js · Tailwind · Framer Motion",
    featured: false,
    color: "linear-gradient(135deg,#f1f5f9,#e2e8f0,#cbd5e1)",
    type: 'web',
    mainImage: webCorpMain,
    gallery: [webCorpMain, webCorp_2, webCorp_3, webCorp_4, webCorp_5],
    details: {
      challenge: "Transmitir solidez y profesionalismo mediante un diseño minimalista que no sacrifique la interactividad.",
      solution: "Uso de animaciones sutiles y una tipografía serif premium para guiar la atención del usuario.",
      stack: "Next.js, Tailwind CSS, Framer Motion.",
      kpis: ["SEO Optimizado", "Carga Instantánea", "UI Minimalista"],
      mockupType: 'web',
      stats: [
        { name: 'Visitas', sub: 'Orgánicas', val: '2.5k', color: '#e8f0fe', text: '#1a56db', amt: '#1a56db' },
        { name: 'Leads', sub: 'Generados', val: '48', color: '#f0faf6', text: '#059669', amt: '#059669' },
        { name: 'Bounce', sub: 'Rate', val: '22%', color: '#fef3e2', text: '#b45309', amt: '#b45309' },
      ]
    }
  }
];
