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
import { staticPath } from '@/lib/$path';
import { workDetails } from '@/lib/data/workDetails';

const NoLogChatWork: NextPage = () => {
  const work = workDetails['no-log-chat'];
  return (
    <>
      <Description
        title="のーろぐちゃっと | cp20.dev"
        description="「ログが残らないチャットでみんなと会話しよう！」"
      />

      <Layout>
        <TitleHeading>のーろぐちゃっと</TitleHeading>

        <EyeCatchPanel
          url={work.url}
          imageSrc={staticPath.og_images.no_log_chat_png}
          ratio={960 / 540}
        />

        <AppOverview work={work} />

        <Comment>
          <Text>
            受験期真っ最中でプログラミングを封印していた時期に、耐えきれなくなって「ちょっとだけ、ちょっとだけならセーフ」という気持ちで作ったアプリ
          </Text>
          <Text>
            リリース直後にちょっとバズったんですが、どうしてもリアルタイム性が求められるという都合上アクティブユーザーがそれなりの数いないと成り立たないのでアクセス数はそれほど多くないですね
          </Text>
          <Text>
            アイデア自体は悪くないと思うので、リアルタイム性と何かをマッチさせていい感じにしてみたいという思い
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

export default NoLogChatWork;
