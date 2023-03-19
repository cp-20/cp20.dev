import { ActionIcon } from '@mantine/core';
import type { FC, ReactNode } from 'react';

export type SocialLinkButtonProps = {
  href: string;
  children: ReactNode;
};

export const SocialLinkButton: FC<SocialLinkButtonProps> = ({
  href,
  children,
}) => {
  return (
    <ActionIcon
      component="a"
      href={href}
      variant="filled"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </ActionIcon>
  );
};
