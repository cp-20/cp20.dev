import { css } from '@emotion/react';
import { Center } from '@mantine/core';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { gsap } from 'gsap';
import type { FC, ReactNode } from 'react';
import { useRef } from 'react';

type SeeMoreContainerProps = {
  children: ReactNode;
};

export const SeeMoreContainer: FC<SeeMoreContainerProps> = ({ children }) => {
  const [open, handler] = useDisclosure(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpenHandler = () => {
    if (containerRef.current) {
      const maxContainerHeight = containerRef.current.scrollHeight;
      const destHeight = open ? 400 : maxContainerHeight;
      gsap.to(containerRef.current, {
        height: destHeight,
        duration: 1,
        ease: 'power4.out',
      });
      handler.toggle();
    }
  };

  return (
    <div>
      <div
        css={css`
          height: 400px;
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          ${open ||
          css`
            mask-image: -webkit-gradient(
              linear,
              left 50%,
              left bottom,
              from(rgba(0, 0, 0, 1)),
              to(rgba(0, 0, 0, 0))
            );
          `}
        `}
        ref={containerRef}
      >
        {children}
      </div>
      <Center mt={32}>
        <Button variant="default" onClick={toggleOpenHandler}>
          {open ? '閉じる' : 'もっと見る'}
        </Button>
      </Center>
    </div>
  );
};
