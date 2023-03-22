import { css } from '@emotion/react';
import type { SegmentedControlItem } from '@mantine/core';
import { Center } from '@mantine/core';
import { SegmentedControl, SimpleGrid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMedal, IconTags } from '@tabler/icons-react';
import type { FC, ReactNode } from 'react';
import { SkillPanel } from '@/components/SkillSection/SkillPanel';
import { useSKillSorting } from '@/components/SkillSection/uesSkillSorting';
import { skills } from '@/lib/skills';

const LabelContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Center
      css={css`
        padding: 0 8px;
        gap: 4px;
      `}
    >
      {children}
    </Center>
  );
};

const sortTabData: SegmentedControlItem[] = [
  {
    value: 'category',
    label: (
      <LabelContainer>
        <IconTags size="1rem" />
        <span>Sort by Category</span>
      </LabelContainer>
    ),
  },
  {
    value: 'level',
    label: (
      <LabelContainer>
        <IconMedal size="1rem" />
        <span>Sort by Level</span>
      </LabelContainer>
    ),
  },
];

export const SkillPanels: FC = () => {
  const sp = useMediaQuery('(max-width: 360px)');
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
        orientation={sp ? 'vertical' : 'horizontal'}
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
