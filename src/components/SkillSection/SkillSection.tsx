import { css } from '@emotion/react';
import type { SegmentedControlItem } from '@mantine/core';
import { Group } from '@mantine/core';
import { Center } from '@mantine/core';
import { SegmentedControl } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMedal, IconTags } from '@tabler/icons-react';
import type { FC, ReactNode } from 'react';
import { SkillPanels } from '@/components/SkillSection/SkillPanels';
import { ViewRawDataButton } from '@/components/SkillSection/ViewRawDataButton';
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

export const SkillSection: FC = () => {
  const sp = useMediaQuery('(max-width: 360px)');
  const { sortTab, onChangeSortTab, sortedSkills } = useSKillSorting(
    'category',
    skills,
  );

  return (
    <div>
      <Group
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        `}
      >
        <SegmentedControl
          color="teal"
          value={sortTab}
          onChange={onChangeSortTab}
          data={sortTabData}
          orientation={sp ? 'vertical' : 'horizontal'}
        />
        <ViewRawDataButton skills={skills} variant="default">
          View JSON
        </ViewRawDataButton>
      </Group>

      <SkillPanels skills={sortedSkills} />
    </div>
  );
};
