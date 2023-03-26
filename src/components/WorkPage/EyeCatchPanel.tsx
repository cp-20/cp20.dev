import { css } from '@emotion/react';
import { AspectRatio, Card } from '@mantine/core';
import Image from 'next/image';
import type { FC } from 'react';
import { ClickablePanel } from '@/components/ClickablePanel/ClickablePanel';

type EyeCatchPanelProps = {
  url: string;
  ratio: number;
  imageSrc: string;
};

export const EyeCatchPanel: FC<EyeCatchPanelProps> = ({
  url,
  ratio,
  imageSrc,
}) => {
  return (
    <div
      css={css`
        max-width: 480px;
        margin: 0 auto;
      `}
    >
      <ClickablePanel url={url}>
        <Card.Section>
          <AspectRatio
            ratio={ratio}
            css={css`
              position: relative;
              width: 100%;
            `}
          >
            <Image src={imageSrc} alt="" fill />
          </AspectRatio>
        </Card.Section>
      </ClickablePanel>
    </div>
  );
};
