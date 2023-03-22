import type { SafeParseSuccess } from 'zod';
import { z } from 'zod';
import type { article } from '@/lib/articles';

const envSchema = z.object({ QIITA_ACCESS_TOKEN: z.string() });
const { QIITA_ACCESS_TOKEN } = envSchema.parse(process.env);

const qiitaArticleSchema = z.object({
  title: z.string(),
  created_at: z.string(),
  url: z.string(),
});

type qiitaArticle = z.infer<typeof qiitaArticleSchema>;

export const fetchQiitaArticles = async (): Promise<article[]> => {
  const requestUrl = 'https://qiita.com/api/v2/users/cp20/items?per_page=100';

  try {
    const response = await fetch(requestUrl, {
      headers: { Authorization: `Bearer ${QIITA_ACCESS_TOKEN}` },
    });

    const rawArticles = await response.json();

    if (!Array.isArray(rawArticles)) return [];

    type safeParsedArticles = SafeParseSuccess<qiitaArticle>[];

    const parsedArticles = rawArticles
      .map((article) => qiitaArticleSchema.safeParse(article))
      .filter((article) => article.success) as safeParsedArticles;

    const qiitaArticles = parsedArticles.map((article) => article.data);

    const articles: article[] = qiitaArticles.map((article) => ({
      ...article,
      media: 'qiita',
    }));

    return articles;
  } catch (err) {
    console.error(err);
    return [];
  }
};
