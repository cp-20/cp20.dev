import type { FC } from 'react';
import { PresentationPanel } from '@/components/PresentationSection/PresentationPanel';
import { presentations } from '@/components/PresentationSection/presentations';
import { ResponsiveGrid } from '@/components/ResponsiveGrid/ResponsiveGrid';

export const PresentationPanels: FC = () => {
  return (
    <ResponsiveGrid>
      {presentations.map((presentation) => (
        <PresentationPanel
          key={presentation.title}
          presentation={presentation}
        />
      ))}
    </ResponsiveGrid>
  );
};
