import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC } from 'react';
import { maxWidth } from '@/components/Layout/Layout';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import { ActionIconLink } from '@/components/ui/ActionIconLink';
import { socials } from '@/lib/socials';

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
          {socials('md').map((social) => (
            <ActionIconLink key={social.url} href={social.url} variant="filled">
              {social.icon}
            </ActionIconLink>
          ))}
        </div>
      </div>
    </footer>
  );
};
