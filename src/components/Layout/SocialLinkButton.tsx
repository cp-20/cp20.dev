import { ActionIcon } from '@mantine/core';
import type { FC, ReactNode } from 'react';
import { useLink } from '@/components/ui/DefaultLink';

export type SocialLinkButtonProps = {
  href: string;
  children: ReactNode;
};

export const SocialLinkButton: FC<SocialLinkButtonProps> = ({
  href,
  children,
}) => {
  const hrefObject = useLink(href);

  return (
    <ActionIcon component="a" variant="filled" {...hrefObject}>
      {children}
    </ActionIcon>
  );
};
