import { AspectRatio, Card } from '@mantine/core';
import dayjs from 'dayjs';
import type { FC } from 'react';
import { ClickablePanel } from '@/components/ClickablePanel/ClickablePanel';
import { PanelAffix } from '@/components/ClickablePanel/PanelAffix';
import { PanelTitle } from '@/components/ClickablePanel/PanelTitle';
import type { article } from '@/lib/articles';

type ArticlePanelProps = {
  article: article;
};

export const ArticlePanel: FC<ArticlePanelProps> = ({ article }) => {
  return (
    <ClickablePanel url={article.url}>
      <Card.Section>
        <AspectRatio ratio={1200 / 630}>
          <img
            src={`/api/fetch-og-image?url=${encodeURIComponent(article.url)}`}
            alt=""
          />
        </AspectRatio>
      </Card.Section>
      <PanelTitle>{article.title}</PanelTitle>
      <PanelAffix>{dayjs(article.created_at).format('YYYY/MM/DD')}</PanelAffix>
    </ClickablePanel>
  );
};
