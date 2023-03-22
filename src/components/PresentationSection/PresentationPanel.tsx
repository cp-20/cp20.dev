import { css } from '@emotion/react';
import { AspectRatio, Card } from '@mantine/core';
import Image from 'next/image';
import type { FC } from 'react';
import { ClickablePanel } from '@/components/ClickablePanel/ClickablePanel';
import type { presentation } from '@/components/PresentationSection/presentations';
type PresentationPanelProps = {
  presentation: presentation;
};

export const PresentationPanel: FC<PresentationPanelProps> = ({
  presentation,
}) => {
  return (
    <ClickablePanel url={presentation.url}>
      <Card.Section withBorder>
        <AspectRatio ratio={1200 / 600}>
          <Image src={presentation.imageUrl} alt="" fill />
        </AspectRatio>
      </Card.Section>
      <p
        css={css`
          margin-top: 16px;
          font-weight: bold;
        `}
      >
        {presentation.title}
      </p>
      <p
        css={css`
          padding-top: 8px;
          margin-top: auto;
        `}
      >
        {presentation.date}
      </p>
    </ClickablePanel>
  );
};
