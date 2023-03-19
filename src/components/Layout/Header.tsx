import { ToggleColorSchemeButton } from '@/components/Layout/ToggleColorSchemeButton';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import { pagesPath } from '@/lib/$path';
import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import AvatarImage from '/public/avatar.png';

export const Header: FC = () => {
  const { color, colorScheme } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <header
      css={css`
        display: flex;
        align-items: center;
        padding: 0 16px;
        background-color: rgba(255, 255, 255, 0.05);

        ${colorScheme === 'light' &&
        `box-shadow: ${colors.gray[0]} 0 0 4px 4px;`}
      `}
    >
      <Link
        href={pagesPath.$url()}
        css={css`
          display: flex;
          align-items: center;
          padding: 8px 16px;
          color: inherit;
          text-decoration: none;
          transition: all 0.2s;

          &:hover {
            background-color: ${color(
              `${colors.teal[0]}99`,
              `${colors.teal[8]}11`,
            )};
          }

          &:active {
            background-color: ${color(
              `${colors.teal[1]}99`,
              `${colors.teal[8]}33`,
            )};
          }
        `}
      >
        <Image
          src={AvatarImage}
          alt=""
          width={32}
          height={32}
          css={css`
            border-radius: 50%;
          `}
        />
        <span
          css={css`
            margin-left: 4px;
            font-size: 1rem;
          `}
        >
          cp20.dev
        </span>
      </Link>

      <div
        css={css`
          margin-left: auto;
        `}
      >
        <ToggleColorSchemeButton />
      </div>
    </header>
  );
};