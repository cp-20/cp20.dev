export type work = {
  id: string;
  name: string;
  description: string;
};

export const works: work[] = [
  {
    id: 'dicespec',
    name: 'ダイススペック',
    description:
      'ダイススペックはTRPGのちょっとしたツールを集めたサービスです。',
  },
  {
    id: 'no-log-chat',
    name: 'のーろぐちゃっと',
    description: 'ログが残らないチャットでみんなと会話しよう！',
  },
  {
    id: 'titech-lecture-list',
    name: '東工大講義リスト',
    description: '東工大の講義を検索できるサービスです。',
  },
];
