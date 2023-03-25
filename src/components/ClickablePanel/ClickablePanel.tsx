import { css } from '@emotion/react';
import type { CardProps } from '@mantine/core';
import { Card } from '@mantine/core';
import Link from 'next/link';
import type { FC, ReactNode } from 'react';
import { useLink } from '@/components/ui/DefaultLink';
import { cardHoverTransition } from '@/styles/cardHoverTransition';

type ClickablePanel = {
  url: string;
  children: ReactNode;
} & CardProps;

export const ClickablePanel: FC<ClickablePanel> = ({
  url,
  children,
  ...props
}) => {
  const hrefObject = useLink(url);

  return (
    <Link
      {...hrefObject}
      css={css`
        text-decoration: none;
      `}
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        css={css`
          display: flex;
          height: 100%;
          flex-direction: column;

          ${cardHoverTransition}
        `}
        {...props}
      >
        {children}
      </Card>
    </Link>
  );
};
