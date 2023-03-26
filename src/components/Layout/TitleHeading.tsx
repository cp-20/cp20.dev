import { css } from '@emotion/react';
import type { TitleProps } from '@mantine/core';
import { Title } from '@mantine/core';
import type { FC, HTMLAttributes } from 'react';

type TitleHeadingProps = TitleProps & HTMLAttributes<HTMLHeadingElement>;

export const TitleHeading: FC<TitleHeadingProps> = (props) => {
  return (
    <Title
      order={1}
      ff="Consolas"
      align="center"
      css={css`
        margin-bottom: 64px;
      `}
      {...props}
    />
  );
};
