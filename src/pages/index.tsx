import { css } from '@emotion/react';
import { Title } from '@mantine/core';
import type { NextPage } from 'next';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';
import { Section, SectionTitle } from '@/components/Layout/Section';
import { SkillPanels } from '@/components/SkillSection/SkillPanels';

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

        <SectionTitle>SKILLS</SectionTitle>
        <Section>
          <SkillPanels />
        </Section>
      </Layout>
    </>
  );
};

export default Home;
