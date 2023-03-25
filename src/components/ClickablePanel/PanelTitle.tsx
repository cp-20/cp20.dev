import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type PanelTitleProps = {
  children: ReactNode;
};

export const PanelTitle: FC<PanelTitleProps> = ({ children }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <p
      css={css`
        margin-top: 16px;
        color: ${color(colors.gray[8], colors.gray[4])};
        font-weight: bold;
      `}
    >
      {children}
    </p>
  );
};
