import { gsap } from 'gsap';
import type { FC, ReactNode } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

type SkillTransitionWrapperProps = {
  delay: number;
  children: ReactNode;
};

export const SkillTransitionWrapper: FC<SkillTransitionWrapperProps> = ({
  delay,
  children,
}) => {
  const wrapperElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = gsap
      .timeline()
      .to(wrapperElement.current, {
        rotateX: -90,
        rotateZ: -10,
        autoAlpha: 0,
        ease: 'power4.out',
      })
      .to(wrapperElement.current, {
        delay,
        rotateX: 0,
        rotateZ: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power4.out',
      });
    return () => {
      timeline.kill();
    };
  });

  return <div ref={wrapperElement}>{children}</div>;
};
