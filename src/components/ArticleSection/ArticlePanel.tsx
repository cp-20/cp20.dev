import { css } from '@emotion/react';
import { AspectRatio, Card, useMantineTheme } from '@mantine/core';
import dayjs from 'dayjs';
import type { FC } from 'react';
import { ClickablePanel } from '@/components/ClickablePanel/ClickablePanel';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import type { article } from '@/lib/articles';

type ArticlePanelProps = {
  article: article;
};

export const ArticlePanel: FC<ArticlePanelProps> = ({ article }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

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
      <p
        css={css`
          margin-top: 16px;
          color: ${color(colors.gray[8], colors.gray[3])};
          font-weight: bold;
        `}
      >
        {article.title}
      </p>
      <p
        css={css`
          padding-top: 8px;
          margin-top: auto;
          color: ${color(colors.gray[6], colors.gray[5])};
        `}
      >
        {dayjs(article.created_at).format('YYYY/MM/DD')}
      </p>
    </ClickablePanel>
  );
};
