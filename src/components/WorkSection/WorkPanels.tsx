import type { FC } from 'react';
import { ResponsiveGrid } from '@/components/ResponsiveGrid/ResponsiveGrid';
import { WorkPanel } from '@/components/WorkSection/WorkPanel';
import { works } from '@/lib/data/works';

export const WorkPanels: FC = () => {
  return (
    <ResponsiveGrid>
      {works.map((work) => (
        <WorkPanel key={work.id} work={work} />
      ))}
    </ResponsiveGrid>
  );
};
