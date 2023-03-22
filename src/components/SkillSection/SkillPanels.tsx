import { css } from '@emotion/react';
import { SegmentedControl, SimpleGrid } from '@mantine/core';
import type { FC } from 'react';
import { SkillPanel } from '@/components/SkillSection/SkillPanel';
import {
  sortTabData,
  useSKillSorting,
} from '@/components/SkillSection/uesSkillSorting';
import { skills } from '@/lib/skills';

export const SkillPanels: FC = () => {
  const { sortTab, onChangeSortTab, sortedSkills } = useSKillSorting(
    'category',
    skills,
  );

  return (
    <div>
      <SegmentedControl
        color="teal"
        value={sortTab}
        onChange={onChangeSortTab}
        data={sortTabData}
        css={css`
          margin-bottom: 16px;
        `}
      />

      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1160, cols: 2 },
          { maxWidth: 800, cols: 1 },
        ]}
      >
        {sortedSkills.map((skill) => (
          <SkillPanel key={skill.name} skill={skill} />
        ))}
      </SimpleGrid>
    </div>
  );
};
