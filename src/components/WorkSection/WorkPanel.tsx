import { css } from '@emotion/react';
import { AspectRatio, Card, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import type { FC } from 'react';
import { ClickablePanel } from '@/components/ClickablePanel/ClickablePanel';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import type { work } from '@/lib/works';

type WorkPanelProps = {
  work: work;
};

export const WorkPanel: FC<WorkPanelProps> = ({ work }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <ClickablePanel url={`works/${work}`}>
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
      <p
        css={css`
          margin-top: 16px;
          color: ${color(colors.gray[8], colors.gray[3])};
          font-weight: bold;
        `}
      >
        {work.name}
      </p>
      <p
        css={css`
          color: ${color(colors.gray[7], colors.gray[4])};
        `}
      >
        {work.description}
      </p>
    </ClickablePanel>
  );
};
