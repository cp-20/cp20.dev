import { css } from '@emotion/react';
import { Center, Loader, SimpleGrid } from '@mantine/core';
import type { FC } from 'react';

import { ArticlePanel } from '@/components/ArticleSection/ArticlePanel';
import { useFetcher } from '@/components/functional/useFetcher';
import type { article } from '@/lib/articles';

export const ArticlePanels: FC = () => {
  const articles = useFetcher<article[]>('/api/articles');

  if (articles.data === undefined) {
    return (
      <Center
        css={css`
          height: 300px;
        `}
      >
        <Loader color="teal" />
      </Center>
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
