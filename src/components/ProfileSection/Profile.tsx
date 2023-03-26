import { css } from '@emotion/react';
import { Avatar, Center, Group, Space, useMantineTheme } from '@mantine/core';
import type { FC } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import { ProfileMessage } from '@/components/ProfileSection/ProfileMessage';
import { ResponsiveGrid } from '@/components/ResponsiveGrid/ResponsiveGrid';
import { ActionIconLink } from '@/components/ui/ActionIconLink';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { DefaultLink } from '@/components/ui/DefaultLink';
import { pagesPath, staticPath } from '@/lib/$path';
import { socials } from '@/lib/data/socials';

export const Profile: FC = () => {
  const { color, colorScheme } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <ResponsiveGrid
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
        <Group
          spacing="xs"
          css={css`
            @media screen and (max-width: 480px) {
              justify-content: center;
            }
          `}
        >
          {socials('lg').map((social) => (
            <ActionIconLink
              key={social.url}
              href={social.url}
              variant="light"
              size="lg"
              css={css`
                ${colorScheme === 'light' && `color: ${social.color}`};
              `}
            >
              {social.icon}
            </ActionIconLink>
          ))}
        </Group>
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
        <ProfileMessage
          label="趣味"
          message="アニメ / 漫画 / ボカロ / マイクラ"
        />
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
        <Space h="md" />
        <ButtonLink
          href={pagesPath.profile.$url()}
          variant="subtle"
          color="teal"
        >
          もっと見る
        </ButtonLink>
      </div>
    </ResponsiveGrid>
  );
};
