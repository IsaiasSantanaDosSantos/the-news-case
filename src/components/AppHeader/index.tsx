import { Wrapper, Left, Center, Right, Title, EditionButton } from './styles';
import Logo from '@/assets/logo.svg?react';
import EditionIcon from '@/assets/icons/edition.svg?react';
import LeftArrow from '@/assets/icons/left-arrow.svg?react';

export default function AppHeader() {
  return (
    <Wrapper>
      <Left>
        <LeftArrow />
      </Left>

      <Center>
        <Logo />
        <Title>the news</Title>
      </Center>

      <Right>
        <EditionButton>
          <EditionIcon />
          Edição
        </EditionButton>
      </Right>
    </Wrapper>
  );
}
