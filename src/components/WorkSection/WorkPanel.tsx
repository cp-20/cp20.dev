import { css } from '@emotion/react';
import { AspectRatio, Card, useMantineTheme } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import type { work } from '@/lib/works';

type WorkPanelProps = {
  work: work;
};

export const WorkPanel: FC<WorkPanelProps> = ({ work }) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <Link
      href={`works/${work}`}
      css={css`
        text-decoration: none;
      `}
    >
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        css={css`
          transition: all 0.1s;

          &:hover {
            box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05),
              rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem,
              rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem;
            translate: 0 -4px;
          }
        `}
      >
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
      </Card>
    </Link>
  );
};
