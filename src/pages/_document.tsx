import { ServerStyles, createStylesServer } from '@mantine/next';
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import {
  GoogleTagManager,
  GoogleTagManagerBody,
} from '@/components/Injection/GoogleTagManager';
import { staticPath } from '@/lib/$path';
import { generateCsp } from '@/lib/generateCsp';

const stylesServer = createStylesServer();

type DocumentProps = {
  csp: string;
  nonce: string;
};

export default class _Document extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    // CSP (Cross Site Policy) と nonce (number used once) を生成 (XSS対策)
    const { csp, nonce } = generateCsp();

    return {
      ...initialProps,
      csp,
      nonce,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }

  render() {
    const { csp, nonce } = this.props;
    return (
      <Html lang="ja">
        <Head nonce={nonce}>
          <meta httpEquiv="Content-Security-Policy" content={csp} />

          <GoogleTagManager nonce={nonce} />

          <link rel="icon" href={staticPath.favicon_ico} />
          <link rel="apple-touch-icon" href={staticPath.apple_touch_icon_png} />
          <link rel="manifest" href={staticPath.manifest_webmanifest} />
        </Head>
        <body>
          <GoogleTagManagerBody />
          <Main />
          <NextScript nonce={nonce} />
        </body>
      </Html>
    );
  }
}
