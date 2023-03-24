import type { ButtonProps } from '@mantine/core';
import { Modal } from '@mantine/core';
import { Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Prism } from '@mantine/prism';
import type { ButtonHTMLAttributes, FC } from 'react';
import type { skill } from '@/lib/skills';

type ViewRawDataButtonProps = {
  skills: skill[];
} & ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const ViewRawDataButton: FC<ViewRawDataButtonProps> = ({
  skills,
  onClick,
  ...props
}) => {
  const [modalOpen, modalHandlers] = useDisclosure(false);

  const handleClick: ViewRawDataButtonProps['onClick'] = (...args) => {
    modalHandlers.open();
    onClick?.(...args);
  };

  const formattedSkillsJSON = JSON.stringify(
    skills.map((skill) => {
      const { icon: _, ...serializedSkill } = skill;
      return serializedSkill;
    }),
    null,
    2,
  );

  return (
    <>
      <Modal opened={modalOpen} onClose={modalHandlers.close} title="SKILLS">
        <Prism language="json" withLineNumbers>
          {formattedSkillsJSON}
        </Prism>
      </Modal>
      <Button {...props} onClick={handleClick} />
    </>
  );
};
