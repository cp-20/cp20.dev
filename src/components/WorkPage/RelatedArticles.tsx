import type { FC } from 'react';
import { ArticlePanel } from '@/components/ArticleSection/ArticlePanel';
import { Section, SectionTitle } from '@/components/Layout/Section';
import { ResponsiveGrid } from '@/components/ResponsiveGrid/ResponsiveGrid';
import type { article } from '@/lib/articles';

type RelatedArticlesProps = {
  articles: article[];
};

export const RelatedArticles: FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <>
      <SectionTitle subtitle="関連する記事">RELATED ARTICLES</SectionTitle>
      <Section>
        <ResponsiveGrid>
          {articles.map((article) => (
            <ArticlePanel key={article.url} article={article} />
          ))}
        </ResponsiveGrid>
      </Section>
    </>
  );
};
