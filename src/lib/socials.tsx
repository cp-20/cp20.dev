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

const sizeTable = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1.125rem',
  lg: '1.625rem',
  xl: '2.125rem',
} as const;

export const socials = (size: keyof typeof sizeTable): social[] => [
  {
    icon: <ZennIcon size={sizeTable[size]} />,
    url: 'https://zenn.dev/cp20',
    color: '#3ea8ff',
  },
  {
    icon: <QiitaIcon size={sizeTable[size]} />,
    url: 'https://qiita.com/cp20',
    color: '#55c500',
  },
  {
    icon: <IconBrandTwitterFilled size={sizeTable[size]} />,
    url: 'https://twitter.com/__cp20__',
    color: '#1da1f2',
  },
  {
    icon: <GitHubIcon size={sizeTable[size]} />,
    url: 'https://github.com/cp-20',
    color: '#191313',
  },
  {
    icon: <IconBrandDiscordFilled size={sizeTable[size]} />,
    url: 'https://discord.gg/YQ7negGTUK',
    color: '#5865f2',
  },
];
