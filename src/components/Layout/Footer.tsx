import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import {
  IconBrandDiscordFilled,
  IconBrandGithubFilled,
  IconBrandTwitterFilled,
} from '@tabler/icons-react';
import type { FC } from 'react';
import { maxWidth } from '@/components/Layout/Layout';
import { SocialLinkButton } from '@/components/Layout/SocialLinkButton';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

export const Footer: FC = () => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <footer
      css={css`
        background-color: ${color(colors.gray[1], 'rgba(255,255,255, 0.05)')};
      `}
    >
      <div
        css={css`
          display: flex;
          padding: 16px;
          ${maxWidth}
        `}
      >
        <p>© 2023 cp20</p>
        <div
          css={css`
            display: flex;
            margin-left: auto;
            gap: 8px;
          `}
        >
          <SocialLinkButton href="https://twitter.com/__cp20__">
            <IconBrandTwitterFilled size="1.125rem" />
          </SocialLinkButton>
          <SocialLinkButton href="https://github.com/cp-20">
            <IconBrandGithubFilled size="1.125rem" />
          </SocialLinkButton>
          <SocialLinkButton href="https://discord.gg/YQ7negGTUK">
            <IconBrandDiscordFilled size="1.125rem" />
          </SocialLinkButton>
        </div>
      </div>
    </footer>
  );
};
