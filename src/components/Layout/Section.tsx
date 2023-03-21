import type { FC, ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
};

export const SectionTitle: FC<SectionTitleProps> = ({ children }) => {
  return <h2>{children}</h2>;
};

type SectionProps = {
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return <div>{children}</div>;
};
