import { css } from '@emotion/react';
import {
  Avatar,
  Center,
  SimpleGrid,
  Space,
  useMantineTheme,
} from '@mantine/core';
import type { FC } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import { ProfileMessage } from '@/components/ProfileSection/ProfileMessage';
import { DefaultLink } from '@/components/ui/DefaultLink';
import { staticPath } from '@/lib/$path';

export const Profile: FC = () => {
  const { color, colorScheme } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 480, cols: 1 }]}
      css={css`
        max-width: 720px;
        margin: 0 auto;
      `}
    >
      <Center>
        <Avatar
          src={staticPath.avatar_png}
          radius="50%"
          bg="white"
          css={css`
            width: clamp(64px, 30vw, 266px);
            height: clamp(64px, 30vw, 266px);
            border: solid 2px ${color(colors.gray[3], colors.gray[6])};

            ${colorScheme === 'light' &&
            `box-shadow: 0 0 4px 4px ${colors.gray[0]}`};
          `}
        />
      </Center>
      <div
        css={css`
          display: flex;
          max-width: 320px;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;

          @media screen and (max-width: 480px) {
            text-align: center;
          }
        `}
      >
        <p
          css={css`
            color: ${color(colors.teal[5], colors.teal[6])};
            font-size: 2.5rem;

            @media screen and (max-width: 720px) {
              font-size: 2rem;
            }

            @media screen and (max-width: 480px) {
              text-align: center;
            }
          `}
        >
          しーぴー
        </p>
        <Space h="md" />
        <ProfileMessage
          label="所属"
          message={
            <span
              css={css`
                word-break: keep-all;
              `}
            >
              東京工業大学 情報理工学院 23B (学士1年)
            </span>
          }
        />
        <Space h="md" />
        <ProfileMessage label="好きな技術" message="Webフロント系全般" />
        <Space h="md" />
        <p
          css={css`
            color: ${colors.gray[6]};
            font-size: 0.8rem;
          `}
        >
          アイコンは
          <DefaultLink href="https://twitter.com/sora_douhu">
            空どうふ
          </DefaultLink>
          さんのをお借りしています
        </p>
      </div>
    </SimpleGrid>
  );
};
