import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type PanelDescriptionProps = {
  children: ReactNode;
};

export const PanelDescription: FC<PanelDescriptionProps> = ({ children }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <p
      css={css`
        color: ${color(colors.gray[7], colors.gray[4])};
      `}
    >
      {children}
    </p>
  );
};
