import { css } from '@emotion/react';
import { Text } from '@mantine/core';
import type { HTMLAttributes, FC, LiHTMLAttributes, ReactNode } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const listIconContext = createContext<ReactNode>(null);

type SimpleListProps = {
  children: ReactNode;
  icon?: ReactNode;
} & HTMLAttributes<HTMLUListElement>;

export const SimpleList: FC<SimpleListProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <ul
      css={css`
        display: flex;
        flex-direction: column;
        gap: 8px;
        list-style: none;
      `}
      {...props}
    >
      <listIconContext.Provider value={icon}>
        {children}
      </listIconContext.Provider>
    </ul>
  );
};

type SimpleListItemProps = {
  children: ReactNode;
  affix?: ReactNode;
  icon?: ReactNode;
} & LiHTMLAttributes<HTMLLIElement>;

export const SimpleListItem: FC<SimpleListItemProps> = ({
  children,
  affix,
  icon: iconProp,
  ...props
}) => {
  const listIcon = useContext(listIconContext);
  const icon = iconProp ?? listIcon;
  return (
    <li
      css={css`
        display: flex;
        gap: 8px;
      `}
      {...props}
    >
      {icon}
      <span
        css={css`
          display: flex;
          flex: 1;
          gap: 8px;
        `}
      >
        {children}
        {affix && (
          <Text
            component="span"
            color="dimmed"
            css={css`
              margin-left: auto;
            `}
          >
            {affix}
          </Text>
        )}
      </span>
    </li>
  );
};
