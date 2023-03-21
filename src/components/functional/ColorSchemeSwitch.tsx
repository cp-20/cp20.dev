import type { FC, ReactElement } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type ColorSchemeSwitchProps = {
  light: ReactElement;
  dark: ReactElement;
};

export const ColorSchemeSwitch: FC<ColorSchemeSwitchProps> = ({
  light,
  dark,
}) => {
  const { colorScheme } = useColorScheme();

  if (colorScheme === 'light') {
    return light;
  } else {
    return dark;
  }
};
