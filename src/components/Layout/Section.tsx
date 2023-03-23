import { css } from '@emotion/react';
import { Title, useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type SectionTitleProps = {
  children: ReactNode;
  subtitle?: ReactNode;
};

export const SectionTitle: FC<SectionTitleProps> = ({ children, subtitle }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <div
      css={css`
        padding: 4px 8px;
        margin: 64px 0 24px;
      `}
    >
      <Title
        order={2}
        css={css`
          border-bottom: solid ${color(colors.gray[3], colors.gray[7])} 1px;
          color: ${color(colors.gray[9], colors.gray[3])};
          font-family: Consolas, sans-serif;
          font-size: 2rem;
          text-align: center;
        `}
      >
        {children}
      </Title>
      <p
        css={css`
          margin-top: 8px;
          color: ${colors.gray[6]};
          font-size: 0.9rem;
          text-align: center;
        `}
      >
        {subtitle}
      </p>
    </div>
  );
};

type SectionProps = {
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return <div>{children}</div>;
};
