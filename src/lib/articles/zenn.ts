import { z } from 'zod';
import type { article } from '@/lib/articles';

const zennArticlesSchema = z.object({
  articles: z.array(
    z.object({
      title: z.string(),
      path: z.string(),
      published_at: z.string(),
    }),
  ),
});

export const fetchZennArticles = async (): Promise<article[]> => {
  try {
    const response = await fetch(
      'https://zenn.dev/api/articles?username=cp20&count=100',
    );
    const jsonResponse = await response.json();

    const zennArticles = zennArticlesSchema.parse(jsonResponse);

    return zennArticles.articles.map((article) => ({
      media: 'zenn',
      title: article.title,
      url: `https://zenn.dev${article.path}`,
      created_at: article.published_at,
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
