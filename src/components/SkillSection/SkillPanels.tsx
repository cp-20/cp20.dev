import { SimpleGrid } from '@mantine/core';
import type { FC } from 'react';
import { SkillPanel } from '@/components/SkillSection/SkillPanel';
import { skills } from '@/lib/skills';

export const SkillPanels: FC = () => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1160, cols: 2, spacing: 'md' },
        { maxWidth: 800, cols: 1, spacing: 'md' },
      ]}
    >
      {skills.map((skill) => (
        <SkillPanel key={skill.name} skill={skill} />
      ))}
    </SimpleGrid>
  );
};
