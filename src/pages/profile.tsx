import { css } from '@emotion/react';
import { Timeline, Title, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconAward, IconCertificate } from '@tabler/icons-react';
import type { NextPage } from 'next';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';
import { Section, SectionTitle } from '@/components/Layout/Section';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import { SimpleList, SimpleListItem } from '@/components/SimpleList/SimpleList';
import { DefaultLink } from '@/components/ui/DefaultLink';
import { awards } from '@/lib/data/awards';
import { certification } from '@/lib/data/certifications';

const mobileMediaQuery = 'max-width: 480px' as const;

const Profile: NextPage = () => {
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();
  const mobile = useMediaQuery(`(${mobileMediaQuery})`);

  return (
    <>
      <Description
        title="プロフィール | cp20.dev"
        description="しーぴー君のプロフィール"
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
          PROFILE
        </Title>

        <SectionTitle subtitle="経歴">CAREER</SectionTitle>
        <Section>
          <Timeline
            active={2}
            maw={mobile ? '300px' : '380px'}
            mx="auto"
            bulletSize={mobile ? 15 : 20}
            lineWidth={mobile ? 3 : 4}
            css={css`
              .mantine-Timeline-itemTitle {
                @media screen and (${mobileMediaQuery}) {
                  font-size: 0.8rem;
                }
              }
            `}
            color="teal"
          >
            <Timeline.Item title="生誕">
              <Text color="dimmed" size="xs">
                2004/11/29
              </Text>
            </Timeline.Item>
            <Timeline.Item title="渋谷教育学園幕張中学校高等学校 (渋幕)">
              <Text color="dimmed" size="xs">
                2017/04～2023/03
              </Text>
            </Timeline.Item>
            <Timeline.Item
              title="東京工業大学 情報理工学院"
              lineVariant="dashed"
            >
              <Text color="dimmed" size="xs">
                2023/04～
              </Text>
            </Timeline.Item>
            <Timeline.Item title="???"></Timeline.Item>
          </Timeline>
        </Section>

        <SectionTitle subtitle="受賞歴">AWARDS</SectionTitle>
        <Section>
          <SimpleList
            css={css`
              max-width: 540px;
              margin: 0 auto;
            `}
            icon={<IconAward color={color(colors.yellow[5], 'gold')} />}
          >
            {awards.map((award) => (
              <SimpleListItem
                key={award.url}
                css={css`
                  @media screen and (max-width: 540px) {
                    font-size: 0.8rem;
                  }
                `}
                affix={award.date}
              >
                <DefaultLink href={award.url}>{award.name}</DefaultLink>
              </SimpleListItem>
            ))}
          </SimpleList>
        </Section>

        <SectionTitle subtitle="取得資格">CERTIFICATION</SectionTitle>
        <Section>
          <SimpleList
            css={css`
              max-width: 400px;
              margin: 0 auto;
            `}
            icon={<IconCertificate color={color(colors.yellow[5], 'gold')} />}
          >
            {certification.map((certification) => (
              <SimpleListItem
                key={certification.name}
                css={css`
                  @media screen and (max-width: 540px) {
                    font-size: 0.8rem;
                  }
                `}
                affix={certification.date}
              >
                <Text
                  component="span"
                  color={color(colors.gray[8], colors.gray[5])}
                >
                  {certification.name}
                </Text>
              </SimpleListItem>
            ))}
          </SimpleList>
        </Section>
      </Layout>
    </>
  );
};

export default Profile;
