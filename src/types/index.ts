import { DivideIcon as LucideIcon } from 'lucide-react';

export interface CardData {
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  content: React.ReactNode;
}