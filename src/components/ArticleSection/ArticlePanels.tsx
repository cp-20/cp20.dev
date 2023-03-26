import { css } from '@emotion/react';
import { Center, Loader } from '@mantine/core';
import type { FC } from 'react';

import { ArticlePanel } from '@/components/ArticleSection/ArticlePanel';
import { ResponsiveGrid } from '@/components/ResponsiveGrid/ResponsiveGrid';
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
    <ResponsiveGrid>
      {articles.data.map((article) => (
        <ArticlePanel key={article.url} article={article} />
      ))}
    </ResponsiveGrid>
  );
};
