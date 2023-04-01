import { css } from '@emotion/react';
import {
  Timeline,
  Text,
  useMantineTheme,
  Center,
  Title,
  List,
  Stack,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconAward, IconCertificate } from '@tabler/icons-react';
import type { NextPage } from 'next';
import { BackToTopButton } from '@/components/BackToTopButton/BackToTopButton';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';
import { Section, SectionTitle } from '@/components/Layout/Section';
import { TitleHeading } from '@/components/Layout/TitleHeading';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';
import { SimpleList, SimpleListItem } from '@/components/SimpleList/SimpleList';
import { DefaultLink } from '@/components/ui/DefaultLink';
import { Marker } from '@/components/ui/Marker';
import { SeeMoreContainer } from '@/components/ui/SeeMoreContainer';
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
        <TitleHeading>PROFILE</TitleHeading>

        <SectionTitle subtitle="ぼくのかんがえるさいきょうのしゃかい">
          VISION
        </SectionTitle>
        <Section>
          <SeeMoreContainer>
            <Stack
              spacing="sm"
              px="lg"
              css={css`
                @media screen and (${mobileMediaQuery}) {
                  font-size: 0.8rem;

                  ol {
                    font-size: 0.8rem;
                  }
                }
              `}
            >
              <Title order={3} my="xs">
                TL;DR
              </Title>
              <Text>
                ボクは「プログラミングをやりたい人全員が自由にプログラミングを学び、活用していける社会」を目指して活動しています
              </Text>
              <Title order={3} my="xs">
                背景
              </Title>
              <Text>
                突然ですけど、これを読んでいるあなたはプログラミングに興味がありますか？
              </Text>
              <Text>
                興味があると思ったあなた、少しでも触ったことはありますか？
              </Text>
              <Text>
                少しでも触ったことがあると思ったあなた、一通り勉強した (ex.
                入門書を一冊こなした) ことはありますか？
              </Text>
              <Text>
                一通り勉強したことがあるあなた、実際に自分で何かを作ってみた/実践で使ってみたことはありますか？
              </Text>
              <Text>最後までいった人は (割合としては) 多くないと思います</Text>
              <Text>どうしてでしょう？</Text>

              <Title order={3} my="xs">
                ビジョン
              </Title>
              <Text>
                背景で挙げたことには様々な理由があると思っていて、例えば
                <Marker>「難しそうに思えた (やってみて難しかった)」</Marker>
                「時間が確保できない」「飽きてしまった
                (興味がなくなった)」といった理由が挙げられるでしょう。
              </Text>
              <Text>
                他の2つはまだしも強調した1つはプログラミングに対してのイメージの悪さだったり、学習の方法だったりして、本質的じゃないと思うんですね
              </Text>
              <Text>
                つまり「プログラミングを学習する」という選択肢を偏見だったり学習方法によって奪われている
                = 自由ではない状態にある人が相当数いるということです
              </Text>
              <Text>
                そういうところを変えていく、誰もが自由にプログラミングを学べるようにする、というのがビジョンの1つです
              </Text>
              <Title order={3} my="xs">
                もっと具体的に
              </Title>
              <Text>
                プログラミングを自分で使いこなしていくためには、
                <Marker>3つの壁</Marker>を越える必要があると思っています
              </Text>
              <Text>その3つの壁とは、</Text>
              <List type="ordered" withPadding spacing="xs">
                <List.Item>
                  プログラミングに対する苦手意識を取り払う
                  (プログラミングを始めるまでの壁)
                </List.Item>
                <List.Item>
                  プログラミングを挫折せずに一通り学ぶ
                  (プログラミングを学習し終えるまでの壁)
                </List.Item>
                <List.Item>
                  プログラミングを使って自分で何かを作ってみる/実践で使ってみる
                  (プログラミングを活用していくまでの壁)
                </List.Item>
              </List>
              <Text>の3つです</Text>
              <Text>
                それぞれがそれなりに大きい壁だと思っていて、1人で越えていくのは難しいです。現に難しいからこそ多くの人が途中で諦めてしまいます
              </Text>
              <Text>
                ボクはそれを変えていきたいです。プログラミングを学びたいと思ったら学べるし、アプリを作りたいと思ったら作れるし、
                <Marker>やりたいことができる</Marker>
                というのを重視していきたいです
              </Text>
              <Title order={3} my="xs">
                やりたいこと
              </Title>
              <Text>
                まずプログラミングを学び始めるハードルを下げる、つまりプログラミングに対しての苦手意識を減らしていく、ということをやっていきたいです
              </Text>
              <Text>
                そのロールモデルの1つとして
                <DefaultLink href="https://www.youtube.com/@lambdatech">
                  ラムダ技術部
                </DefaultLink>
                が参考になるのかなと思ってます。プログラミングの面白さを発信するというのが1つプログラミングの難しい感というか忌避感を減らせるのかな、と
              </Text>
              <Text>
                そしてプログラミングを学び始めた後の段階でのフォローアップ、つまり挫折しないで学び続けられるようにしたいです
              </Text>
              <Text>
                (少なくともボクの周りにいる人の中では)
                今プログラミングをバリバリやっている人の多くは1人でどんどん学んでいけるようなタイプの人で、逆にそういうタイプでない人は淘汰されていっている印象を受けます
              </Text>
              <Text>
                やりたいと思っている人がその人の能力に関わらずできるようにする、というのがボクのビジョンなので、1人でもどんどん学んでいけるタイプじゃない人でも挫折せずに学び切れるような環境を整えたいです
              </Text>
              <Text>
                あとこれが結構大きいところなんですけど、
                <Marker>学習を一通り終えた後に自走していけるか</Marker>
                、ってプログラミングを活用していけるかどうかの分かれ道だと思うんですよね
              </Text>
              <Text>
                プログラミングに限らない話ですが、教科書で学んだだけで自分で使っていかないと身につかないです。自分で何かのアプリなりを作ってみる、あるいは競技プログラミングみたいなものをやってみるという実践のプロセスがプログラミングを身に付けるうえで必ず必要になるはずです。
              </Text>
              <Text>
                しかし実践できている人というのはそこまで多くない、その現状を変えたいと思っています
              </Text>
              <Title order={3} my="xs">
                さいごに
              </Title>
              <Text>
                これだけで1記事かけるんじゃないかってぐらい書いてしまったんですが、
                <Marker>このビジョンに共感してくれる人</Marker>がもしいたら
                <DefaultLink href="https://twitter.com/__cp20__">
                  ついった
                </DefaultLink>
                のDMにでもメッセージください！一緒にお話しましょう！！
              </Text>
            </Stack>
          </SeeMoreContainer>
        </Section>

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

        <Center mt={64}>
          <BackToTopButton />
        </Center>
      </Layout>
    </>
  );
};

export default Profile;
