import { SimpleGrid } from '@mantine/core';
import type { FC } from 'react';
import { SkillPanel } from '@/components/SkillSection/SkillPanel';
import { SkillTransitionWrapper } from '@/components/SkillSection/SkillTransitonWrapper';
import type { skill } from '@/lib/skills';

type SkillPanelsProps = {
  skills: skill[];
};

export const SkillPanels: FC<SkillPanelsProps> = ({ skills }) => {
  return (
    <SimpleGrid
      cols={3}
      breakpoints={[
        { maxWidth: 1160, cols: 2 },
        { maxWidth: 800, cols: 1 },
      ]}
    >
      {skills.map((skill, i) => (
        <SkillTransitionWrapper key={skill.name} delay={0.03 * i + 0.1}>
          <SkillPanel skill={skill} />
        </SkillTransitionWrapper>
      ))}
    </SimpleGrid>
  );
};
