import { z } from 'zod';
import { fetchQiitaArticles } from '@/lib/articles/qiita';
import { fetchZennArticles } from '@/lib/articles/zenn';

export const articleSchema = z.object({
  media: z.union([z.literal('zenn'), z.literal('qiita')]),
  title: z.string(),
  created_at: z.string(),
  url: z.string(),
});

export type article = z.infer<typeof articleSchema>;

export const fetchArticles = async () => {
  const articles = (
    await Promise.all([fetchQiitaArticles(), fetchZennArticles()])
  ).flat();

  // sort by date (latest -> oldest)
  articles.sort(
    (a, b) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );

  return articles;
};
