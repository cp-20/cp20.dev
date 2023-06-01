import { css } from '@emotion/react';
import { Button } from '@mantine/core';
import type { FC } from 'react';
import { DefaultLink } from '@/components/ui/DefaultLink';

export const ContactSection: FC = () => {
  return (
    <>
      <div
        css={css`
          max-width: 720px;
          margin: 0 auto;
        `}
      >
        <ul
          css={css`
            padding-left: 2rem;
            margin: 1rem 0;

            & > li:not(:last-child) {
              margin-bottom: 0.5rem;
            }
          `}
        >
          <li>
            <DefaultLink href="https://twitter.com/__cp20__">
              Twitter
            </DefaultLink>
            のDM (まぁまぁ見る・フォローしてない人だとびみょいかも)
          </li>
          <li>
            <DefaultLink href="https://discord.gg/YQ7negGTUK">
              Discord
            </DefaultLink>
            のDM (一番反応が早い)
          </li>
          <li>
            <DefaultLink href="https://discord.gg/YQ7negGTUK">
              しぴさば
            </DefaultLink>
            のチャット (ボクの作ったものに関する質問は全部ここで受け付けてます)
          </li>
        </ul>

        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 3rem;
          `}
        >
          <Button
            component="a"
            // @__cp20__ ひとことどうぞ！ (一緒にご飯を食べに行きたい、フォローして欲しいとかなんでも)
            href="https://twitter.com/intent/tweet?text=%40__cp20__%0A%E3%81%93%E3%81%93%E3%81%AB%E3%81%B2%E3%81%A8%E3%81%93%E3%81%A8%E3%81%A9%E3%81%86%E3%81%9E%EF%BC%81%20(%E4%B8%80%E7%B7%92%E3%81%AB%E3%81%94%E9%A3%AF%E3%82%92%E9%A3%9F%E3%81%B9%E3%81%AB%E8%A1%8C%E3%81%8D%E3%81%9F%E3%81%84%E3%80%81%E3%83%95%E3%82%A9%E3%83%AD%E3%83%BC%E3%81%97%E3%81%A6%E6%AC%B2%E3%81%97%E3%81%84%E3%81%A8%E3%81%8B%E3%81%AA%E3%82%93%E3%81%A7%E3%82%82)"
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="teal"
            css={css`
              margin-bottom: 1rem;
            `}
          >
            ひとことボタン
          </Button>
          <p>ボクに一言送れます</p>
          <p>
            一緒にご飯を食べに行きたい、フォローして欲しいとかなんでも送ってね
          </p>
        </div>
      </div>
    </>
  );
};
