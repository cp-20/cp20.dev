import type { ColorScheme } from '@mantine/core';
import {
  MantineProvider,
  ColorSchemeProvider as MantineColorSchemeProvider,
} from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { z } from 'zod';
import { theme } from '@/components/MantineProvider/theme';

const storageKey = 'color-scheme';

const colorSchemeSchema = z.union([z.literal('dark'), z.literal('light')]);

type MantineProviderWithColorSchemeProps = {
  children: ReactNode;
};

export const MantineProviderWithColorScheme: FC<
  MantineProviderWithColorSchemeProps
> = ({ children }) => {
  const [colorScheme, _setColorScheme] = useState<ColorScheme>('light');

  const setColorScheme = useCallback((scheme: ColorScheme) => {
    localStorage.setItem(storageKey, scheme);
    _setColorScheme(scheme);
  }, []);

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useEffect(() => {
    const storageScheme = colorSchemeSchema.safeParse(
      localStorage.getItem(storageKey),
    );
    const osDark = matchMedia('(prefers-color-scheme: dark)');
    const osScheme = osDark.matches ? 'dark' : 'light';

    setColorScheme(storageScheme.success ? storageScheme.data : osScheme);

    const listener = (e: MediaQueryListEvent) => {
      setColorScheme(e.matches ? 'dark' : 'light');
    };
    osDark.addEventListener('change', listener);

    return () => {
      osDark.removeEventListener('change', listener);
    };
  }, [setColorScheme]);

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
