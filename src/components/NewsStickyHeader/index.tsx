import { useEffect, useRef } from 'react';
import type { NewsCategory } from '@/mocks/newsCategories';
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
  categories: NewsCategory[];
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
  const categoryBarRef = useRef<HTMLDivElement>(null);

  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const activeIndex = categories.findIndex(
      (category) => category.id === activeCategory,
    );

    if (activeIndex === -1) return;

    const button = buttonRefs.current[activeCategory];

    if (!button) return;

    const isFirstOrSecond = activeIndex <= 1;
    const isLastOrPenultimate = activeIndex >= categories.length - 2;

    button.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: isLastOrPenultimate
        ? 'end'
        : isFirstOrSecond
          ? 'nearest'
          : 'center',
    });
  }, [activeCategory, categories]);

  return (
    <Container>
      <Header>
        <DateText>{date}</DateText>
      </Header>

      <Switcher $visible={showCategoryBar}>
        <CategoryBar ref={categoryBarRef} $visible={showCategoryBar}>
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <CategoryButton
                ref={(element) => {
                  buttonRefs.current[category.id] = element;
                }}
                key={category.id}
                $active={activeCategory === category.id}
                onClick={() => onCategoryClick(category.id)}
              >
                <Icon />
                {category.label}
              </CategoryButton>
            );
          })}
        </CategoryBar>

        <Divider $visible={!showCategoryBar} />
      </Switcher>
    </Container>
  );
}
