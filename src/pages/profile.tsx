import type { NextPage } from 'next';
import { Description } from '@/components/Description/Description';
import { Layout } from '@/components/Layout/Layout';

const Profile: NextPage = () => {
  return (
    <>
      <Description
        title="プロフィール | cp20.dev"
        description="しーぴー君のプロフィール"
      />

      <Layout>hello</Layout>
    </>
  );
};

export default Profile;
