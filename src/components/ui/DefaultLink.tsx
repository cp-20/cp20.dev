import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { AnchorHTMLAttributes, FC } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

export const useLink = (href: LinkProps['href']) => {
  const url = typeof href === 'string' ? href : href.pathname ?? '';
  const isExternalUrl = !url.startsWith('/');

  return {
    href,
    target: isExternalUrl ? '_blank' : undefined,
    rel: isExternalUrl ? 'noopener noreferrer' : undefined,
  };
};

type DefaultLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;

export const DefaultLink: FC<DefaultLinkProps> = ({ href, ...props }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  const hrefObject = useLink(href);

  return (
    <Link
      {...hrefObject}
      {...props}
      css={css`
        padding: 0 2px;
        color: ${color(colors.teal[6], colors.teal[6])};

        &:hover {
          color: ${color(colors.teal[5], colors.teal[7])};
        }

        &:active {
          color: ${color(colors.teal[4], colors.teal[8])};
        }
      `}
    />
  );
};
