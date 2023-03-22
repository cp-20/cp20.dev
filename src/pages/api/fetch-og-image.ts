import type { NextApiHandler } from 'next';
import { parse } from 'node-html-parser';
import { z } from 'zod';

const querySchema = z.object({
  url: z.string(),
});

const handler: NextApiHandler = async (req, res) => {
  const query = querySchema.safeParse(req.query);

  if (!query.success) {
    return res.status(400).end();
  }

  try {
    const response = await fetch(query.data.url);
    const responseText = await response.text();

    const content = parse(responseText);

    const ogImageElement = content.querySelector('meta[property="og:image"]');
    const ogImageUrl = ogImageElement && ogImageElement.getAttribute('content');

    if (!ogImageUrl) {
      console.log(query.data.url, responseText);

      return res.status(500).end();
    }

    const imageRes = await fetch(ogImageUrl);
    const blob = await imageRes.blob();
    const arrayBuffer = await blob.arrayBuffer();
    const contentType = imageRes.headers.get('Content-Type');

    res.setHeader('content-Type', contentType ?? 'image/png');

    return res.send(Buffer.from(arrayBuffer));
  } catch (err) {
    console.error(err);
    return res.status(500).end();
  }
};

export default handler;
