import { SimpleGrid } from '@mantine/core';
import type { FC } from 'react';
import { PresentationPanel } from '@/components/PresentationSection/PresentationPanel';
import { presentations } from '@/components/PresentationSection/presentations';

export const PresentationPanels: FC = () => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1160, cols: 2 },
        { maxWidth: 800, cols: 1 },
      ]}
    >
      {presentations.map((presentation) => (
        <PresentationPanel
          key={presentation.title}
          presentation={presentation}
        />
      ))}
    </SimpleGrid>
  );
};
