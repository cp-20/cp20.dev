import { IconArrowBackUp } from '@tabler/icons-react';
import type { FC } from 'react';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { pagesPath } from '@/lib/$path';

export const BackToTopButton: FC = () => {
  return (
    <ButtonLink
      href={pagesPath.$url()}
      leftIcon={<IconArrowBackUp />}
      color="teal"
      variant="light"
    >
      元のページに戻る
    </ButtonLink>
  );
};
