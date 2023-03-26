import 'ress';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { MantineProviderWithColorScheme } from '@/components/MantineProvider/MantineProviderWithColorScheme';
import { PageTransitionWrapper } from '@/components/PageTransitionWrapper/PageTransitionWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProviderWithColorScheme>
        <PageTransitionWrapper>
          <Component {...pageProps} />
        </PageTransitionWrapper>
      </MantineProviderWithColorScheme>
    </>
  );
}

export default MyApp;
