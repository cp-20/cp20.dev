import 'ress';
import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { MantineProviderWithColorScheme } from '@/components/MantineProvider/MantineProviderWithColorScheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProviderWithColorScheme>
        <Component {...pageProps} />
      </MantineProviderWithColorScheme>
    </>
  );
}

export default MyApp;
