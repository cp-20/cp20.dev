import { css } from '@emotion/react';
import { AspectRatio, Card } from '@mantine/core';
import Image from 'next/image';
import type { FC } from 'react';
import { ClickablePanel } from '@/components/ClickablePanel/ClickablePanel';
import { PanelDescription } from '@/components/ClickablePanel/PanelDescription';
import { PanelTitle } from '@/components/ClickablePanel/PanelTitle';
import type { work } from '@/lib/works';

type WorkPanelProps = {
  work: work;
};

export const WorkPanel: FC<WorkPanelProps> = ({ work }) => {
  return (
    <ClickablePanel url={`/works/${work.id}`}>
      <Card.Section withBorder>
        <AspectRatio
          ratio={960 / 540}
          css={css`
            position: relative;
            width: 100%;
          `}
        >
          <Image
            src={`/og-images/${work.id}.png`}
            alt=""
            fill
            css={css`
              object-fit: contain;
            `}
          />
        </AspectRatio>
      </Card.Section>
      <PanelTitle>{work.name}</PanelTitle>
      <PanelDescription>{work.description}</PanelDescription>
    </ClickablePanel>
  );
};
