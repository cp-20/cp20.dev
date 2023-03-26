import type { NextPage } from 'next';
import { ArticlePanels } from '@/components/ArticleSection/ArticlePanels';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';
import { Section, SectionTitle } from '@/components/Layout/Section';
import { TitleHeading } from '@/components/Layout/TitleHeading';
import { PresentationPanels } from '@/components/PresentationSection/PresentationPanels';
import { Profile } from '@/components/ProfileSection/Profile';
import { SkillSection } from '@/components/SkillSection/SkillSection';
import { WorkPanels } from '@/components/WorkSection/WorkPanels';

const Home: NextPage = () => {
  return (
    <>
      <Description
        title="cp20.dev"
        description="しーぴーくんの生態がわかるサイトです"
      />

      <Layout>
        <TitleHeading>cp20.dev</TitleHeading>

        <SectionTitle subtitle="経歴やら自己紹介やら">PROFILE</SectionTitle>
        <Section>
          <Profile />
        </Section>

        <SectionTitle subtitle="技術スキル">SKILLS</SectionTitle>
        <Section>
          <SkillSection />
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
