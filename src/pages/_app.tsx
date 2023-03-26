import 'ress';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { GoogleTagManager } from '@/components/Injection/GoogleTagManager';
import { MantineProviderWithColorScheme } from '@/components/MantineProvider/MantineProviderWithColorScheme';
import { PageTransitionWrapper } from '@/components/PageTransitionWrapper/PageTransitionWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleTagManager />
      <MantineProviderWithColorScheme>
        <PageTransitionWrapper>
          <Component {...pageProps} />
        </PageTransitionWrapper>
      </MantineProviderWithColorScheme>
    </>
  );
}

export default MyApp;
