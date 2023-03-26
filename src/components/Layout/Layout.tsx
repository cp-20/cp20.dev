import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
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
  const { asPath } = useRouter();

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
        <motion.div
          key={asPath}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            duration: 0.5,
          }}
        >
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
        </motion.div>
      </div>
    </>
  );
};
