import { SimpleGrid } from '@mantine/core';
import type { FC } from 'react';
import { WorkPanel } from '@/components/WorkSection/WorkPanel';
import { works } from '@/lib/works';

export const WorkPanels: FC = () => {
  return (
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 800, cols: 1 }]}>
      {works.map((work) => (
        <WorkPanel key={work.id} work={work} />
      ))}
    </SimpleGrid>
  );
};
