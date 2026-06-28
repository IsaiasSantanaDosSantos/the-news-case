import { useEffect, useRef, useMemo, useState } from 'react';

import Container from '@/components/Container';
import Page from '@/components/Page';
import NewsStickyHeader from '@/components/NewsStickyHeader';

import { newsData } from '@/mocks/news';
import { newsCategories } from '@/mocks/newsCategories';
import { formatToday } from '@/utils/date';
import { Content, Section } from './styles';

export default function News() {
  const categories = useMemo(
    () => [...newsCategories].sort((a, b) => a.order - b.order),
    [],
  );

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [showCategoryBar, setShowCategoryBar] = useState(true);
  const lastScrollY = useRef(0);
  const scrollStartY = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');

  // scroll behavior (hide/show bar)
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const direction = current > lastScrollY.current ? 'down' : 'up';

      if (direction !== scrollDirection.current) {
        scrollDirection.current = direction;
        scrollStartY.current = current;
      }

      if (current <= 0) {
        setShowCategoryBar(true);
        scrollStartY.current = 0;
        lastScrollY.current = 0;
        return;
      }

      const scrollingDown = current > lastScrollY.current;

      if (scrollingDown) {
        if (showCategoryBar && current - scrollStartY.current > 40) {
          setShowCategoryBar(false);
          scrollStartY.current = current;
        }
      } else {
        if (!showCategoryBar && scrollStartY.current - current > 40) {
          setShowCategoryBar(true);
          scrollStartY.current = current;
        }
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showCategoryBar]);

  // scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.getAttribute('data-category')!);
          }
        });
      },
      { threshold: 0.4 },
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (category: string) => {
    sectionRefs.current[category]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Page>
      <Container>
        <Content>
          <NewsStickyHeader
            date={formatToday()}
            categories={categories}
            activeCategory={activeCategory}
            showCategoryBar={showCategoryBar}
            onCategoryClick={scrollToCategory}
          />

          {categories.map((category) => (
            <Section
              key={category.id}
              data-category={category.id}
              ref={(el) => {
                sectionRefs.current[category.id] = el;
              }}
            >
              <h3>{category.label}</h3>
              <div className="content">
                {newsData
                  .filter((n) => n.categoryId === category.id)
                  .map((item, index) =>
                    index === 0 ? (
                      <article key={item.id} className="newsFirstItem">
                        <img src={item.image} />
                        <div>
                          <span>{item.source}</span>
                          <p>{item.title}</p>
                          <span>{item.time}</span>
                        </div>
                      </article>
                    ) : (
                      <article key={item.id} className="newsItem">
                        <div>
                          <span>{item.source}</span>
                          <p>{item.title}</p>
                          <span>{item.time}</span>
                        </div>
                        <img src={item.image} />
                      </article>
                    ),
                  )}
              </div>
            </Section>
          ))}
        </Content>
      </Container>
    </Page>
  );
}
