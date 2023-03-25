import { css } from '@emotion/react';
import type { SegmentedControlItem } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import { Rating } from '@mantine/core';
import { Group } from '@mantine/core';
import { Center } from '@mantine/core';
import { SegmentedControl } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconMedal, IconTags } from '@tabler/icons-react';
import type { FC, ReactNode } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
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
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();
  const sp = useMediaQuery('(max-width: 360px)');
  const { sortTab, onChangeSortTab, sortedSkills } = useSKillSorting(
    'category',
    skills,
  );

  return (
    <div>
      <div
        css={css`
          display: grid;
          max-width: 480px;
          margin: 0 auto 32px;
          color: ${color(colors.gray[7], colors.gray[5])};
          font-size: 0.9rem;
          grid-template-columns: 100px 1fr;
          row-gap: 4px;
          word-break: keep-all;
        `}
      >
        <Rating value={0} count={4} readOnly />
        <p>未経験 (興味のある技術)</p>
        <Rating value={1} count={4} readOnly />
        <p>初心者 (ちょっとだけ触ったことある)</p>
        <Rating value={2} count={4} readOnly />
        <p>完全に理解した (チュートリアル終わらせたぐらい)</p>
        <Rating value={3} count={4} readOnly />
        <p>何もわからない (その技術で何かをしたことがあるぐらい)</p>
        <Rating value={4} count={4} readOnly />
        <p>チョットデキル (その技術を完全に使いこなした状態)</p>
      </div>

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
