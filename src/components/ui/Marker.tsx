import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type MarkerProps = {
  children: ReactNode;
};

export const Marker: FC<MarkerProps> = ({ children }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <span
      css={css`
        padding: 0 4px;
        background: linear-gradient(
          transparent 70%,
          ${color(`${colors.teal[3]}aa`, `${colors.teal[9]}66`)} 40%
        );
        font-weight: bold;
      `}
    >
      {children}
    </span>
  );
};
