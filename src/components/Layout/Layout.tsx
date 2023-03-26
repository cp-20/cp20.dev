import { css } from '@emotion/react';
import type { FC, ReactNode } from 'react';
import { Footer } from '@/components/Layout/Footer';
import { Header } from '@/components/Layout/Header';

type LayoutProps = {
  children: ReactNode;
};

export const maxWidth = css`
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        `}
      >
        <Header />
        <main
          css={css`
            flex: 1;
            padding: 64px 16px;
            ${maxWidth}
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};
