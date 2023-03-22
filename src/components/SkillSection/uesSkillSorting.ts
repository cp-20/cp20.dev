import { useState } from 'react';
import type { skill } from '@/lib/skills';

type sortTabId = 'category' | 'level';

type sortFunction = (a: skill, b: skill) => number;

const getSortFunction = (sortTab: sortTabId): sortFunction => {
  switch (sortTab) {
    case 'category':
      return () => 1;
    case 'level':
      return (a, b) => b.level - a.level;
    default: {
      const _exhaustiveCheck: never = sortTab;
      throw new Error('exhaustiveCheck failed', sortTab);
    }
  }
};

type skillSortingObject = {
  sortTab: string;
  onChangeSortTab: (newTab: sortTabId) => void;
  sortedSkills: skill[];
};

export const useSKillSorting = (
  defaultTab: sortTabId,
  skills: skill[],
): skillSortingObject => {
  const [sortTab, setSortTab] = useState<sortTabId>(defaultTab);

  const sortedSkills = skills.slice().sort(getSortFunction(sortTab));

  const onChangeSortTab = (newTab: sortTabId) => {
    setSortTab(newTab);
  };

  return { sortTab, onChangeSortTab, sortedSkills };
};
