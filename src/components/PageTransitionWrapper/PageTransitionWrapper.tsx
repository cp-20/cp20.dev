import { AnimatePresence } from 'framer-motion';
import type { FC, ReactNode } from 'react';

type PageTransitionWrapperProps = {
  children: ReactNode;
};

export const PageTransitionWrapper: FC<PageTransitionWrapperProps> = ({
  children,
}) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
};
