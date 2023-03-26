import { Button, Center, SimpleGrid } from '@mantine/core';
import type { FC } from 'react';
import { useState } from 'react';
import { SkillPanel } from '@/components/SkillSection/SkillPanel';
import { SkillTransitionWrapper } from '@/components/SkillSection/SkillTransitionWrapper';
import type { skill } from '@/lib/data/skills';

type SkillPanelsProps = {
  skills: skill[];
  sortKey: string;
};

export const SkillPanels: FC<SkillPanelsProps> = ({ skills, sortKey }) => {
  const [shownItemsCount, setShownItemsCount] = useState(10);

  const showMoreItems = () => {
    setShownItemsCount((count) => count + 10);
  };

  return (
    <>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1160, cols: 2 },
          { maxWidth: 800, cols: 1 },
        ]}
      >
        {skills
          .filter((_, i) => i < shownItemsCount)
          .map((skill, i) => (
            <SkillTransitionWrapper
              key={`${sortKey}-${skill.name}`}
              delay={0.03 * i}
            >
              <SkillPanel skill={skill} />
            </SkillTransitionWrapper>
          ))}
      </SimpleGrid>
      {shownItemsCount < skills.length && (
        <Center mt={32}>
          <Button variant="light" color="teal" onClick={showMoreItems}>
            もっと表示する
          </Button>
        </Center>
      )}
    </>
  );
};
