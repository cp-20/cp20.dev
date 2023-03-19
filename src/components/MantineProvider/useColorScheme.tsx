import type { ColorScheme } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';

export type colorSchemeObject = {
  color: <T, K>(light: T, dark: K) => T | K;
  colorScheme: ColorScheme;
};

export const useColorScheme = () => {
  const { colorScheme } = useMantineColorScheme();

  const color: colorSchemeObject['color'] = (light, dark) => {
    return colorScheme === 'light' ? light : dark;
  };

  return {
    color,
    colorScheme,
  };
};
