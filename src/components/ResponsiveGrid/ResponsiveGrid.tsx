import type { SimpleGridProps } from '@mantine/core';
import { SimpleGrid } from '@mantine/core';
import type { FC, ReactNode, RefAttributes } from 'react';

type ResponsiveGridProps = SimpleGridProps &
  Omit<RefAttributes<HTMLDivElement>, 'children'> & { children: ReactNode[] };

export const Responsive3ColumnsGrid: FC<ResponsiveGridProps> = ({
  ...props
}) => (
  <SimpleGrid
    cols={3}
    breakpoints={[
      { maxWidth: 1160, cols: 2 },
      { maxWidth: 800, cols: 1 },
    ]}
    {...props}
  />
);

export const Responsive2ColumnsGrid: FC<ResponsiveGridProps> = (props) => (
  <SimpleGrid cols={2} breakpoints={[{ maxWidth: 800, cols: 1 }]} {...props} />
);

export const Responsive1ColumnsGrid: FC<ResponsiveGridProps> = (props) => (
  <SimpleGrid cols={1} {...props} />
);

export const ResponsiveGrid: FC<ResponsiveGridProps> = ({
  children,
  ...props
}) => {
  const Grid =
    children.length <= 1
      ? Responsive1ColumnsGrid
      : children.length === 2
      ? Responsive2ColumnsGrid
      : Responsive3ColumnsGrid;

  return <Grid {...props}>{children}</Grid>;
};
