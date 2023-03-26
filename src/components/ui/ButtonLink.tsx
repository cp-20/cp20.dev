import type { ButtonProps } from '@mantine/core';
import { Button } from '@mantine/core';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type { FC } from 'react';
import { useLink } from '@/components/ui/DefaultLink';

type ButtonLinkProps = ButtonProps & LinkProps;

export const ButtonLink: FC<ButtonLinkProps> = ({ href, ...props }) => {
  const hrefObject = useLink(href);
  return <Button component={Link} {...props} {...hrefObject} />;
};
