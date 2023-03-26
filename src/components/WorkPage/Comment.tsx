import { css } from '@emotion/react';
import type { PaperProps } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Stack } from '@mantine/core';
import { Paper } from '@mantine/core';
import type { FC, HTMLAttributes } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type CommentProps = PaperProps & HTMLAttributes<HTMLDivElement>;

export const Comment: FC<CommentProps> = ({ children, ...props }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <Paper
      withBorder
      css={css`
        max-width: 720px;
        margin: 0 auto;
      `}
      radius="md"
      {...props}
    >
      <div
        css={css`
          padding: 8px 16px;
          border-radius: 0.5rem 0.5rem 0 0;
          background-color: ${color(colors.gray[7], colors.gray[3])};
          color: ${color(colors.gray[2], colors.gray[8])};
          font-family: Consolas, monospace;
          font-weight: bold;
        `}
      >
        COMMENT
      </div>
      <Stack spacing={8} p={16}>
        {children}
      </Stack>
    </Paper>
  );
};
