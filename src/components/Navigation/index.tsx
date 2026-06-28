import { Container, Item, Icon, Label } from './styles';
import EditionIcon from '@/assets/icons/edition.svg?react';
import HabitsIcon from '@/assets/icons/habits.svg?react';
import WorldCupIcon from '@/assets/icons/world-cup.svg?react';
import BooksIcon from '@/assets/icons/books.svg?react';
import MoreIcon from '@/assets/icons/more.svg?react';

export default function Navigation() {
  return (
    <Container>
      <Item>
        <Icon>
          <EditionIcon />
        </Icon>
        <Label>edição</Label>
      </Item>

      <Item>
        <Icon>
          <HabitsIcon />
        </Icon>
        <Label>hábitos</Label>
      </Item>

      <Item>
        <Icon>
          <WorldCupIcon />
        </Icon>
        <Label>copa</Label>
      </Item>

      <Item>
        <Icon>
          <BooksIcon />
        </Icon>
        <Label>livros</Label>
      </Item>

      <Item>
        <Icon>
          <MoreIcon />
        </Icon>
        <Label>mais</Label>
      </Item>
    </Container>
  );
}
