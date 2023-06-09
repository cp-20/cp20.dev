import type { MantineTheme } from '@mantine/core';

export const theme: Partial<MantineTheme> = {
  breakpoints: {
    xs: '360px',
    sm: '800px',
    md: '1000px',
    lg: '1200px',
    xl: '1400px',
  },

  globalStyles: (theme) => ({
    body: {
      ...theme.fn.fontStyles(),
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    },
  }),
};
