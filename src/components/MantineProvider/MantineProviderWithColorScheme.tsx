import type { ColorScheme } from '@mantine/core';
import {
  MantineProvider,
  ColorSchemeProvider as MantineColorSchemeProvider,
} from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { theme } from '@/components/MantineProvider/theme';

type MantineProviderWithColorSchemeProps = {
  children: ReactNode;
};

export const MantineProviderWithColorScheme: FC<
  MantineProviderWithColorSchemeProps
> = ({ children }) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const osDark = matchMedia('(prefers-color-scheme: dark)');

    setColorScheme(osDark.matches ? 'dark' : 'light');

    const listener = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };
    osDark.addEventListener('change', listener);

    return () => {
      osDark.removeEventListener('change', listener);
    };
  }, []);

  return (
    <MantineColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          ...theme,
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {children}
      </MantineProvider>
    </MantineColorSchemeProvider>
  );
};
