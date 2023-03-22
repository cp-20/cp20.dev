import { Loader, SimpleGrid } from '@mantine/core';
import type { FC } from 'react';

import { ArticlePanel } from '@/components/ArticleSection/ArticlePanel';
import { useFetcher } from '@/components/functional/useFetcher';
import type { article } from '@/lib/articles';

export const ArticlePanels: FC = () => {
  const articles = useFetcher<article[]>('/api/articles');

  if (articles.data === undefined) {
    return (
      <div>
        <Loader color="teal" />
      </div>
    );
  }

  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1160, cols: 2 },
        { maxWidth: 800, cols: 1 },
      ]}
    >
      {articles.data.map((article) => (
        <ArticlePanel key={article.url} article={article} />
      ))}
    </SimpleGrid>
  );
};
