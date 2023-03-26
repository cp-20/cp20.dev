import type { ActionIconProps } from '@mantine/core';
import { ActionIcon } from '@mantine/core';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { FC } from 'react';
import { useLink } from '@/components/ui/DefaultLink';

type ActionIconLinkProps = ActionIconProps & LinkProps;

export const ActionIconLink: FC<ActionIconLinkProps> = ({ href, ...props }) => {
  const hrefObject = useLink(href);
  return <ActionIcon component={Link} {...props} {...hrefObject} />;
};
