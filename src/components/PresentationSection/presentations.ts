import { staticPath } from '@/lib/$path';

export type presentation = {
  title: string;
  url: string;
  imageUrl: string;
  date: string;
};

export const presentations: presentation[] = [
  {
    title: 'MS Tech Camp 2周年記念イベント@Microsoft Base 代官山＋Youtube',
    date: '2022/10/29',
    imageUrl: staticPath.presentation_images.mstechcamp_2th_anniversary_png,
    url: 'https://mspjp.connpass.com/event/260855/',
  },
  {
    title: 'MS Tech Camp #19 ~Imagine Cup PreEvent~',
    date: '2022/12/05',
    imageUrl: staticPath.presentation_images.mstechcamp_19_png,
    url: 'https://mspjp.connpass.com/event/264784/',
  },
];
