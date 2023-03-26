import { css } from '@emotion/react';
import { Title, useMantineTheme } from '@mantine/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { FC, ReactNode } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useColorScheme } from '@/components/MantineProvider/useColorScheme';

type SectionTitleProps = {
  children: string;
  subtitle?: ReactNode;
};

export const SectionTitle: FC<SectionTitleProps> = ({ children, subtitle }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { color } = useColorScheme();
  const { colors } = useMantineTheme();

  const id = children.replaceAll(' ', '_');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(`.section-title-char-${id}`, {
      y: -64,
      stagger: 0.05,
      ease: 'back.out',
      duration: 0.5,
      scrollTrigger: {
        trigger: titleRef.current,
        start: '50% 60%',
      },
    });

    gsap.to(subtitleRef.current, {
      y: 64,
      delay: id.length * 0.05 + 0.5,
      ease: 'power4.out',
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: '50% 60%',
      },
    });
  }, [id]);

  return (
    <div
      css={css`
        padding: 4px 8px;
        margin: 64px 0 24px;
      `}
    >
      <Title
        order={2}
        css={css`
          border-bottom: solid ${color(colors.gray[3], colors.gray[7])} 1px;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          color: ${color(colors.gray[9], colors.gray[3])};
          font-family: Consolas, monospace;
          font-size: 2rem;
          text-align: center;
        `}
      >
        <div
          ref={titleRef}
          css={css`
            transform: translateY(64px);

            span {
              display: inline-block;
            }
          `}
        >
          {children.split('').map((char, i) => (
            <span key={i} className={`section-title-char-${id}`}>
              {char}
            </span>
          ))}
        </div>
      </Title>
      <p
        css={css`
          margin-top: 8px;
          clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          color: ${colors.gray[6]};
          font-size: 0.9rem;
          text-align: center;
        `}
      >
        <span
          css={css`
            display: inline-block;
            transform: translateY(-64px);
          `}
        >
          <span
            ref={subtitleRef}
            css={css`
              display: inline-block;
            `}
          >
            {subtitle}
          </span>
        </span>
      </p>
    </div>
  );
};

type SectionProps = {
  children: ReactNode;
};

export const Section: FC<SectionProps> = ({ children }) => {
  return <div>{children}</div>;
};
