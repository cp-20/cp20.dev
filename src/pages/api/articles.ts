import type { NextApiHandler } from 'next';
import { fetchArticles } from '@/lib/articles';

const handler: NextApiHandler = async (_req, res) => {
  res.json(await fetchArticles());
};

export default handler;
