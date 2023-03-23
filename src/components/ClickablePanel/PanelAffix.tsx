import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type PanelAffixProps = {
  children: ReactNode;
};

export const PanelAffix: FC<PanelAffixProps> = ({ children }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <p
      css={css`
        padding-top: 8px;
        margin-top: auto;
        color: ${color(colors.gray[6], colors.gray[5])};
      `}
    >
      {children}
    </p>
  );
};
