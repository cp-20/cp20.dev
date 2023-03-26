import { css } from '@emotion/react';
import type { TitleProps } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Title } from '@mantine/core';
import type { FC, HTMLAttributes } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type TitleHeadingProps = TitleProps & HTMLAttributes<HTMLHeadingElement>;

export const TitleHeading: FC<TitleHeadingProps> = (props) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <Title
      order={1}
      ff="Consolas"
      align="center"
      css={css`
        margin-bottom: 64px;
      `}
      color={color(colors.gray[9], colors.gray[2])}
      {...props}
    />
  );
};
