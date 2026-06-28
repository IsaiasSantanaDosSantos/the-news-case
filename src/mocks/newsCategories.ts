import WorldIcon from '@/assets/icons/world.svg?react';
import BrazilIcon from '@/assets/icons/brazil.svg?react';
import SportIcon from '@/assets/icons/world-cup.svg?react';
import TechnologyIcon from '@/assets/icons/tech.svg?react';
import ForYouIcon from '@/assets/icons/for-you.svg?react';
import Business from '@/assets/icons/business.svg?react';

export type NewsCategory = {
  id: string;
  label: string;
  order: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const newsCategories: NewsCategory[] = [
  {
    id: 'world',
    label: 'Mundo',
    order: 2,
    icon: WorldIcon,
  },
  {
    id: 'brazil',
    label: 'Brasil',
    order: 3,
    icon: BrazilIcon,
  },
  {
    id: 'sport',
    label: 'Esporte',
    order: 5,
    icon: SportIcon,
  },
  {
    id: 'technology',
    label: 'Tecnologia',
    order: 4,
    icon: TechnologyIcon,
  },
  {
    id: 'for-you',
    label: 'Para Você',
    order: 1,
    icon: ForYouIcon,
  },
  {
    id: 'business',
    label: 'Negócios',
    order: 6,
    icon: Business,
  },
];
