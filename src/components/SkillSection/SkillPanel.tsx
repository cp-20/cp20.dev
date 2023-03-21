import { css } from '@emotion/react';
import { Badge, Card, Group, Rating } from '@mantine/core';
import type { FC } from 'react';
import type { skill } from '@/lib/skill';

type SkillPanelProps = {
  skill: skill;
};

export const SkillPanel: FC<SkillPanelProps> = ({ skill }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md">
      <Badge color="teal" mb="8px">
        {skill.category}
      </Badge>
      <Group>
        <div
          css={css`
            position: relative;
            width: 64px;
            height: 64px;
          `}
        >
          {skill.icon}
        </div>
        <div>
          <p
            css={css`
              font-size: 1.5rem;
            `}
          >
            {skill.name}
          </p>
          <div
            css={css`
              margin-bottom: 8px;
            `}
          >
            <Rating value={skill.level} readOnly />
          </div>
          <Group
            spacing="8px"
            css={css`
              height: 20px;
            `}
          >
            {skill.tags.map((tag) => (
              <Badge key={tag} color="teal">
                {tag}
              </Badge>
            ))}
          </Group>
        </div>
      </Group>
    </Card>
  );
};
