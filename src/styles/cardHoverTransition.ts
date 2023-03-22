import { css } from '@emotion/react';

export const cardHoverTransition = css`
  transition: all 0.1s;

  &:hover {
    box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05) 0 1.25rem 1.5625rem -0.3125rem,
      rgba(0, 0, 0, 0.04) 0 0.625rem 0.625rem -0.3125rem;
    translate: 0 -4px;
  }
`;
