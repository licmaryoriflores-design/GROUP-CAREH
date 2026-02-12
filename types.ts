
export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Urgencias y Cuidados Críticos' | 'Procedimientos Invasivos' | 'General';
  duration: string;
  image: string;
  price?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
