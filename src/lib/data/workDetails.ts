import type { article } from '@/lib/articles';

export type workDetail = {
  name: string;
  productionPeriod: string;
  repositories: string[];
  techStack: string;
  relatedArticles?: article[];
  url?: string;
};

export const workDetails = {
  dicespec: {
    name: 'ダイススペック',
    url: 'https://dicespec.vercel.app/',
    productionPeriod: '2022/05/26 ～ 2022/06/04 + メンテ',
    repositories: ['https://github.com/cp-20/Dice-Spec'],
    techStack: 'Next.js, Chakra-UI, Tailwind CSS, Chart.js, etc...',
    relatedArticles: [
      {
        title:
          '唐突にダイスの期待値を計算するツールが欲しくなったから1週間で作ってリリースした part1',
        created_at: '2022-06-13T21:11:06+09:00',
        url: 'https://qiita.com/cp20/items/b475b6f6757be814846f',
        media: 'qiita',
      },
      {
        title:
          '唐突にダイスの期待値を計算するツールが欲しくなったから1週間で作ってリリースした part2',
        created_at: '2022-06-29T21:46:32+09:00',
        url: 'https://qiita.com/cp20/items/577665b3cc0da857e961',
        media: 'qiita',
      },
      {
        title:
          '唐突にダイスの期待値を計算するツールが欲しくなったから1週間で作ってリリースした part3',
        created_at: '2022-08-16T16:34:13+09:00',
        url: 'https://qiita.com/cp20/items/89aa69111d631e8ac00f',
        media: 'qiita',
      },
    ],
  },
  'no-log-chat': {
    name: 'のーろぐちゃっと',
    url: 'https://no-log-chat.vercel.app/',
    productionPeriod: '2023/01/05～2023/01/11',
    repositories: [
      'https://github.com/cp-20/no-log-chat',
      'https://github.com/cp-20/no-log-chat-server',
    ],
    techStack:
      'Next.js, Mantine UI, Jotai, WebSocket (クライアント) + Deno (サーバー)',
    relatedArticles: [
      {
        media: 'zenn',
        title:
          '【受験生が作る】リアルタイム性を重視した新感覚チャットアプリ「のーろぐちゃっと」 | Next.js + WebSocket',
        url: 'https://zenn.dev/cp20/articles/no-log-chat-app',
        created_at: '2023-01-11T09:07:40.960+09:00',
      },
    ],
  },
  'titech-lecture-list': {
    name: '東工大講義リスト',
    url: 'https://titech-lecture-list.vercel.app/',
    productionPeriod: '2022/06/05～2022/06/11',
    repositories: ['https://github.com/cp-20/titech-lecture-list'],
    techStack: 'Next.js, Mantine UI',
    relatedArticles: [],
  },
} satisfies Record<string, workDetail>;
