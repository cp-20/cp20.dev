import { Center, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { BackToTopButton } from '@/components/BackToTopButton/BackToTopButton';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';
import { TitleHeading } from '@/components/Layout/TitleHeading';
import { AppOverview } from '@/components/WorkPage/AppOverview';
import { Comment } from '@/components/WorkPage/Comment';
import { EyeCatchPanel } from '@/components/WorkPage/EyeCatchPanel';
import { RelatedArticles } from '@/components/WorkPage/RelatedArticles';
import { DefaultLink } from '@/components/ui/DefaultLink';
import { staticPath } from '@/lib/$path';
import { workDetails } from '@/lib/data/workDetails';

const DiceSpecWork: NextPage = () => {
  const work = workDetails['dicespec'];

  return (
    <>
      <Description
        title="ダイススペック | cp20.dev"
        description="「ダイススペックはTRPGのちょっとしたツールを集めたサービスです。」"
      />

      <Layout>
        <TitleHeading>ダイススペック</TitleHeading>

        <EyeCatchPanel
          url={work.url}
          imageSrc={staticPath.og_images.dicespec_png}
          ratio={960 / 540}
        />

        <AppOverview work={work} />

        <Comment>
          <Text>個人開発のウェブアプリとしては初めてのものです</Text>
          <Text>
            ダイスの期待値を求められたら便利で面白いなーという発想から、1週間で作りきろう！と決めて作り始めました
          </Text>
          <Text>
            結局1週間ではギリ終わらなかったんですが、求めていたものをとりあえず作れたので満足です
          </Text>
          <Text>
            気が向いたときにリファクタやらアプデやらをやってるので、気になる人は
            <DefaultLink href="https://twitter.com/search?q=%23%E3%83%80%E3%82%A4%E3%82%B9%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF&f=live">
              #ダイススペック
            </DefaultLink>
            とかを観測してみるといいんじゃないでしょうか
          </Text>
          <Text>
            ダイスの期待値を求めるアルゴリズムは
            <DefaultLink href="https://qiita.com/cp20/items/89aa69111d631e8ac00f">
              関連記事のpart3
            </DefaultLink>
            で解説しているのでそちらもぜひ
          </Text>
        </Comment>

        <RelatedArticles articles={work.relatedArticles} />

        <Center mt={64}>
          <BackToTopButton />
        </Center>
      </Layout>
    </>
  );
};

export default DiceSpecWork;
