import { css } from '@emotion/react';
import { Flex } from '@mantine/core';
import type { FC } from 'react';
import { Section, SectionTitle } from '@/components/Layout/Section';
import { Simple2ColumnsTable } from '@/components/Simple2ColumnsTable/Simple2ColumnsTable';
import { DefaultLink } from '@/components/ui/DefaultLink';
import type { workDetail } from '@/lib/data/workDetails';
import { excludeFalsy } from '@/lib/excludeFalsy';

type AppOverviewProps = {
  work: workDetail;
};

export const AppOverview: FC<AppOverviewProps> = ({ work }) => {
  const repositoriesPath = work.repositories.map(
    (repo) => repo.match(/https:\/\/github.com\/(.*\/.*)\/?/)?.[1] ?? repo,
  );

  return (
    <>
      <SectionTitle subtitle="アプリ概要">OVERVIEW</SectionTitle>
      <Section>
        <Simple2ColumnsTable
          data={excludeFalsy([
            work.url && {
              heading: 'ウェブサイト',
              content: <DefaultLink href={work.url}>{work.url}</DefaultLink>,
            },
            {
              heading: 'リポジトリ',
              content: (
                <Flex gap={8} wrap="wrap">
                  {work.repositories.map((repo, i) => (
                    <DefaultLink key={repo} href={repo}>
                      {repositoriesPath[i]}
                    </DefaultLink>
                  ))}
                </Flex>
              ),
            },
            { heading: '制作時期', content: work.productionPeriod },
            { heading: '使用技術', content: work.techStack },
          ])}
          css={css`
            margin: 32px auto;
          `}
        />
      </Section>
    </>
  );
};
