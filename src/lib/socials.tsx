import {
  IconBrandDiscordFilled,
  IconBrandTwitterFilled,
} from '@tabler/icons-react';
import type { ReactNode } from 'react';
import { GitHubIcon, QiitaIcon, ZennIcon } from '@/components/Icons/SVGIcons';

export type social = {
  url: string;
  icon: ReactNode;
  color: string;
};

export const socials: social[] = [
  {
    icon: <ZennIcon size="1rem" />,
    url: 'https://zenn.dev/cp20',
    color: '#3ea8ff',
  },
  {
    icon: <QiitaIcon size="1rem" />,
    url: 'https://qiita.com/cp20',
    color: '#55c500',
  },
  {
    icon: <IconBrandTwitterFilled size="1.125rem" />,
    url: 'https://twitter.com/__cp20__',
    color: '#1da1f2',
  },
  {
    icon: <GitHubIcon size="1.125rem" />,
    url: 'https://github.com/cp-20',
    color: '191313',
  },
  {
    icon: <IconBrandDiscordFilled size="1.125rem" />,
    url: 'https://discord.gg/YQ7negGTUK',
    color: '#5865f2',
  },
];
