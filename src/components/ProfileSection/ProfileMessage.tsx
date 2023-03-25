import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type ProfileMessageProps = {
  label: ReactNode;
  message: ReactNode;
};

export const ProfileMessage: FC<ProfileMessageProps> = ({ label, message }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <div>
      <p
        css={css`
          color: ${color(colors.gray[7], colors.gray[6])};
          font-size: 0.8rem;
          font-weight: bold;
        `}
      >
        {label}
      </p>
      <p
        css={css`
          margin-top: 4px;
        `}
      >
        {message}
      </p>
    </div>
  );
};
