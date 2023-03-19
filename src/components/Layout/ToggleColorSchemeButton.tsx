import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import type { FC } from 'react';

export const ToggleColorSchemeButton: FC = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      variant="light"
      color="teal"
    >
      {colorScheme === 'light' ? (
        <IconSun size="1.125rem" />
      ) : (
        <IconMoon size="1.125rem" />
      )}
    </ActionIcon>
  );
};
