import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import type { FC, ReactNode, TableHTMLAttributes } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type tableRow = {
  heading: ReactNode;
  content: ReactNode;
};

type Simple2ColumnsTableProps = {
  data: tableRow[];
} & TableHTMLAttributes<HTMLTableElement>;

export const Simple2ColumnsTable: FC<Simple2ColumnsTableProps> = ({
  data,
  ...props
}) => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  return (
    <table
      {...props}
      css={css`
        border-spacing: 8px;

        th {
          padding-right: 16px;
          color: ${color(colors.gray[7], colors.gray[3])};
          text-align: right;
        }

        @media screen and (max-width: 720px) {
          border-spacing: 16px;

          th {
            text-align: left;
          }

          th,
          td {
            display: block;
          }
        }
      `}
    >
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <th>{row.heading}</th>
            <td>{row.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
