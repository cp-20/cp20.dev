import { Center, Text } from '@mantine/core';
import type { NextPage } from 'next';
import { BackToTopButton } from '@/components/BackToTopButton/BackToTopButton';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';
import { TitleHeading } from '@/components/Layout/TitleHeading';
import { AppOverview } from '@/components/WorkPage/AppOverview';
import { Comment } from '@/components/WorkPage/Comment';
import { EyeCatchPanel } from '@/components/WorkPage/EyeCatchPanel';
import { staticPath } from '@/lib/$path';
import { workDetails } from '@/lib/data/workDetails';

const NoLogChatWork: NextPage = () => {
  const work = workDetails['titech-lecture-list'];
  return (
    <>
      <Description
        title="東工大講義リスト | cp20.dev"
        description="「ログが残らないチャットでみんなと会話しよう！」"
      />

      <Layout>
        <TitleHeading>東工大講義リスト</TitleHeading>

        <EyeCatchPanel
          url={work.url}
          imageSrc={staticPath.og_images.titech_lecture_list_png}
          ratio={1200 / 630}
        />

        <AppOverview work={work} />

        <Comment>
          <Text>
            公式のOCWの検索能力が低すぎる & 遅い +
            まともにフィルターできる機能はポータルにログインしないと使えないというゴミ仕様だったので、自分でOCWをスクレイピングして整形してデータベース(?)化しました
          </Text>
          <Text>
            とはいってもデータベースの使い方がわからなすぎて毎回クソデカJSONを読み込んでるので、結構遅いです。よくない
          </Text>
          <Text>近いうちに改善したいので有識者求む</Text>
        </Comment>

        <Center mt={64}>
          <BackToTopButton />
        </Center>
      </Layout>
    </>
  );
};

export default NoLogChatWork;
