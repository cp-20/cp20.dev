import { css } from '@emotion/react';
import { Title, useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type SectionTitleProps = {
  children: ReactNode;
};

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <Title
      order={2}
      css={css`
        padding: 4px 8px;
        border-bottom: solid ${color(colors.gray[3], colors.gray[7])} 1px;
        margin: 64px 0 24px;
      `}
    >
      {children}
    </Title>
  );
};

type SectionProps = {
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return <div>{children}</div>;
};
