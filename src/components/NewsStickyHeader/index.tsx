import {
  Container,
  Header,
  DateText,
  Switcher,
  CategoryBar,
  CategoryButton,
  Divider,
} from './styles';

type Props = {
  date: string;
  categories: string[];
  activeCategory: string;
  showCategoryBar: boolean;
  onCategoryClick: (category: string) => void;
};

export default function NewsStickyHeader({
  date,
  categories,
  activeCategory,
  showCategoryBar,
  onCategoryClick,
}: Props) {
  return (
    <Container>
      <Header>
        <DateText>{date}</DateText>
      </Header>

      <Switcher $visible={showCategoryBar}>
        <CategoryBar $visible={showCategoryBar}>
          {categories.map((category) => (
            <CategoryButton
              key={category}
              $active={activeCategory === category}
              onClick={() => onCategoryClick(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryBar>

        <Divider $visible={!showCategoryBar} />
      </Switcher>
    </Container>
  );
}
