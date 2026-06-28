import { Container, Item, Label, IconWrapper } from './styles';
import EditionIcon from '@/assets/icons/edition.svg?react';
import HabitsIcon from '@/assets/icons/habits.svg?react';
import WorldCupIcon from '@/assets/icons/world-cup.svg?react';
import BooksIcon from '@/assets/icons/books.svg?react';
import MoreIcon from '@/assets/icons/more.svg?react';

const items = [
  { label: 'edição', icon: EditionIcon },
  { label: 'hábitos', icon: HabitsIcon },
  { label: 'copa', icon: WorldCupIcon },
  { label: 'livros', icon: BooksIcon },
  { label: 'mais', icon: MoreIcon },
];

export default function Navigation() {
  return (
    <Container>
      {items.map(({ label, icon: Icon }) => (
        <Item key={label}>
          <IconWrapper>
            <Icon />
          </IconWrapper>
          <Label>{label}</Label>
        </Item>
      ))}
    </Container>
  );
}
