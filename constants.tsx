
import { Course, Service } from './types';

export const COURSES: Course[] = [
  // Área de Urgencias y Cuidados Críticos
  {
    id: 'urg-ecg',
    title: 'Taller de Lectura e Interpretación de ECG',
    description: 'Enfoque práctico para la identificación de arritmias letales en tiempo real. Indispensable para áreas críticas.',
    category: 'Urgencias y Cuidados Críticos',
    duration: '20 horas',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'urg-vm',
    title: 'Manejo de Vía Aérea y Ventilación Mecánica',
    description: 'Configuración de parámetros básicos, manejo de alarmas y cuidados de enfermería en el paciente intubado.',
    category: 'Urgencias y Cuidados Críticos',
    duration: '24 horas',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'urg-farma',
    title: 'Taller de Farmacología en Emergencias',
    description: 'Preparación y administración de drogas vasoactivas (Adrenalina, Noradrenalina) según diluciones estándar en Perú.',
    category: 'Urgencias y Cuidados Críticos',
    duration: '16 horas',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'urg-bls',
    title: 'Soporte Vital Básico (BLS) y Avanzado (ACLS)',
    description: 'Entrenamiento con maniquíes de alta fidelidad en maniobras de RCP y uso del desfibrilador (DEA).',
    category: 'Urgencias y Cuidados Críticos',
    duration: '32 horas',
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800&auto=format&fit=crop'
  },
  // Área de Procedimientos Invasivos
  {
    id: 'proc-ven',
    title: 'Accesos Venosos y Terapia de Infusión',
    description: 'Colocación de catéteres periféricos, manejo de bombas de infusión y cuidado especializado de vías centrales.',
    category: 'Procedimientos Invasivos',
    duration: '12 horas',
    image: 'https://images.unsplash.com/photo-1579154235602-3c37ef4017f6?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'proc-sut',
    title: 'Taller de Suturas y Curación de Heridas',
    description: 'Manejo de técnica aséptica, tipos de hilos, nudos quirúrgicos y uso de apósitos avanzados para heridas complejas.',
    category: 'Procedimientos Invasivos',
    duration: '15 horas',
    image: 'https://images.unsplash.com/photo-1631248055158-edec7a3c072b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'proc-son',
    title: 'Colocación de Sondas Nasogástrica y Vesical',
    description: 'Técnica correcta de inserción, comprobación de ubicación y prevención de infecciones asociadas (IAAS).',
    category: 'Procedimientos Invasivos',
    duration: '10 horas',
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f43aa2b?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'proc-aga',
    title: 'Interpretación de AGA y Electrolitos',
    description: 'Enfoque práctico para la toma de muestra arterial y análisis rápido de resultados ácido-base.',
    category: 'Procedimientos Invasivos',
    duration: '12 horas',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'val-int',
    title: 'Valoración Integral del Paciente',
    description: 'Evaluación completa que incluye control de signos vitales, peso, talla y tamizaje de salud.',
    icon: '📋',
    benefits: ['Reporte detallado', 'Seguimiento mensual', 'Atención personalizada']
  },
  {
    id: 'cur-her',
    title: 'Curación de Heridas Complejas',
    description: 'Tratamiento especializado de escaras, heridas quirúrgicas y pie diabético con técnica avanzada.',
    icon: '🩹',
    benefits: ['Material de alta gama', 'Prevención de infecciones', 'Especialistas en piel']
  },
  {
    id: 'adm-med',
    title: 'Administración de Medicamentos',
    description: 'Colocación de inyectables (IM, SC, ID, EV), vacunas y sueroterapia bajo prescripción médica.',
    icon: '💉',
    benefits: ['Bioseguridad garantizada', 'Personal titulado', 'Puntualidad']
  },
  {
    id: 'tom-mue',
    title: 'Toma de Muestras a Domicilio',
    description: 'Recolección de muestras de sangre, orina y otros fluidos para laboratorio clínico.',
    icon: '🧪',
    benefits: ['Resultados rápidos', 'Sin salir de casa', 'Convenios con laboratorios']
  },
  {
    id: 'col-son',
    title: 'Instalación y Manejo de Sondas',
    description: 'Colocación, cambio y mantenimiento de sondas Foley, nasogástricas y manejo de ostomías.',
    icon: '👤',
    benefits: ['Mínimo disconfort', 'Técnica estéril', 'Educación al cuidador']
  },
  {
    id: 'edu-sal',
    title: 'Educación para la Salud',
    description: 'Capacitación a la familia y al paciente sobre autocuidado, dieta y prevención de enfermedades.',
    icon: '🎓',
    benefits: ['Material didáctico', 'Empoderamiento del paciente', 'Sesiones prácticas']
  }
];
