import { css } from '@emotion/react';
import { Title } from '@mantine/core';
import type { NextPage } from 'next';
import { ArticlePanels } from '@/components/ArticleSection/ArticlePanels';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';
import { Section, SectionTitle } from '@/components/Layout/Section';
import { PresentationPanels } from '@/components/PresentationSection/PresentationPanels';
import { Profile } from '@/components/ProfileSection/Profile';
import { SkillPanels } from '@/components/SkillSection/SkillPanels';
import { WorkPanels } from '@/components/WorkSection/WorkPanels';

const Home: NextPage = () => {
  return (
    <>
      <Description
        title="しーぴー"
        description="しーぴーくんの生態がわかるサイトです"
      />

      <Layout>
        <Title
          order={1}
          ff="Consolas"
          align="center"
          css={css`
            margin: 32px 0;
          `}
        >
          cp20.dev
        </Title>

        <SectionTitle subtitle="経歴やら自己紹介やら">PROFILE</SectionTitle>
        <Section>
          <Profile />
        </Section>

        <SectionTitle subtitle="技術スキル">SKILLS</SectionTitle>
        <Section>
          <SkillPanels />
        </Section>

        <SectionTitle subtitle="制作したものたち">WORKS</SectionTitle>
        <Section>
          <WorkPanels />
        </Section>

        <SectionTitle subtitle="執筆してきた記事たち">ARTICLES</SectionTitle>
        <Section>
          <ArticlePanels />
        </Section>

        <SectionTitle subtitle="登壇したイベントたち">
          PRESENTATIONS
        </SectionTitle>
        <Section>
          <PresentationPanels />
        </Section>
      </Layout>
    </>
  );
};

export default Home;
