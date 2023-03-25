import type { ReactNode } from 'react';
import {
  Astro,
  AWS,
  Azure,
  CSS,
  Deno,
  Docker,
  Electron,
  Express,
  Figma,
  Firebase,
  Git,
  GitHub,
  GoLang,
  GraphQL,
  HTML,
  JavaScript,
  Jest,
  Kubernetes,
  LaTeX,
  Linux,
  NextJS,
  NodeJS,
  NuxtJS,
  Prisma,
  Python,
  PyTorch,
  React,
  Regex,
  Rust,
  Sass,
  SolidJS,
  Supabase,
  Svelte,
  TensorFlow,
  TypeScript,
  Vercel,
  Vite,
  VSCode,
  Vue,
} from '@/components/Icons/SkillIcons';

export type category =
  | 'language'
  | 'framework'
  | 'library'
  | 'editor'
  | 'platform'
  | 'service'
  | 'runtime'
  | 'software'
  | 'other';

export type tag =
  | 'web'
  | 'front-end'
  | 'back-end'
  | 'query'
  | 'ML'
  | 'native-app'
  | 'mobile-app'
  | 'robotics'
  | 'git';

export type level = 0 | 1 | 2 | 3 | 4;

export type skill = {
  icon: ReactNode;
  name: string;
  level: level;
  category: category;
  tags: tag[];
};

export const skills: skill[] = [
  // languages
  {
    icon: HTML,
    name: 'HTML',
    level: 4,
    category: 'language',
    tags: ['web', 'front-end'],
  },
  {
    icon: CSS,
    name: 'CSS',
    level: 4,
    category: 'language',
    tags: ['web', 'front-end'],
  },
  {
    icon: Sass,
    name: 'Sass',
    level: 3,
    category: 'language',
    tags: ['web', 'front-end'],
  },
  {
    icon: JavaScript,
    name: 'JavaScript',
    level: 4,
    category: 'language',
    tags: ['web', 'front-end'],
  },
  {
    icon: TypeScript,
    name: 'TypeScript',
    level: 4,
    category: 'language',
    tags: ['web', 'front-end'],
  },
  {
    icon: GoLang,
    name: 'Go',
    level: 2,
    category: 'language',
    tags: ['web', 'back-end'],
  },
  {
    icon: Rust,
    name: 'Rust',
    level: 0,
    category: 'language',
    tags: [],
  },
  {
    icon: Python,
    name: 'Python',
    level: 3,
    category: 'language',
    tags: ['ML'],
  },
  {
    icon: Regex,
    name: 'Regex',
    level: 3,
    category: 'language',
    tags: [],
  },
  {
    icon: GraphQL,
    name: 'GraphQL',
    level: 0,
    category: 'language',
    tags: ['web', 'query'],
  },
  {
    icon: LaTeX,
    name: 'LaTeX',
    level: 1,
    category: 'language',
    tags: [],
  },

  // frameworks
  {
    icon: React,
    name: 'React',
    level: 4,
    category: 'framework',
    tags: ['web', 'front-end'],
  },
  {
    icon: Vue,
    name: 'Vue',
    level: 0,
    category: 'framework',
    tags: ['web', 'front-end'],
  },
  {
    icon: Svelte,
    name: 'Svelte',
    level: 0,
    category: 'framework',
    tags: ['web', 'front-end'],
  },
  {
    icon: Astro,
    name: 'Astro',
    level: 1,
    category: 'framework',
    tags: ['web', 'front-end'],
  },
  {
    icon: Vite,
    name: 'Vite',
    level: 0,
    category: 'framework',
    tags: ['web', 'front-end'],
  },
  {
    icon: SolidJS,
    name: 'SolidJS',
    level: 0,
    category: 'framework',
    tags: ['web', 'front-end'],
  },
  {
    icon: Electron,
    name: 'Electron',
    level: 1,
    category: 'framework',
    tags: ['web', 'front-end', 'native-app'],
  },
  {
    icon: NextJS,
    name: 'Next.js',
    level: 4,
    category: 'framework',
    tags: ['web', 'front-end'],
  },
  {
    icon: NuxtJS,
    name: 'NuxtJS',
    level: 0,
    category: 'framework',
    tags: ['web', 'front-end'],
  },

  // libraries
  {
    icon: Express,
    name: 'Express',
    level: 3,
    category: 'library',
    tags: ['web', 'back-end'],
  },
  {
    icon: PyTorch,
    name: 'PyTorch',
    level: 0,
    category: 'library',
    tags: ['ML'],
  },
  {
    icon: TensorFlow,
    name: 'TensorFlow',
    level: 0,
    category: 'library',
    tags: ['ML'],
  },
  {
    icon: Jest,
    name: 'Jest',
    level: 3,
    category: 'library',
    tags: ['web', 'front-end'],
  },
  {
    icon: Prisma,
    name: 'Prisma',
    level: 0,
    category: 'library',
    tags: ['query'],
  },

  // editors
  {
    icon: VSCode,
    name: 'VS Code',
    level: 4,
    category: 'editor',
    tags: [],
  },

  // platforms
  {
    icon: AWS,
    name: 'AWS',
    level: 0,
    category: 'platform',
    tags: [],
  },
  {
    icon: Azure,
    name: 'Azure',
    level: 2,
    category: 'platform',
    tags: [],
  },
  {
    icon: Vercel,
    name: 'Vercel',
    level: 3,
    category: 'platform',
    tags: ['web', 'front-end'],
  },

  // services
  {
    icon: Supabase,
    name: 'Supabase',
    level: 0,
    category: 'service',
    tags: [],
  },
  {
    icon: Firebase,
    name: 'Firebase',
    level: 2,
    category: 'service',
    tags: [],
  },
  {
    icon: Figma,
    name: 'Figma',
    level: 1,
    category: 'service',
    tags: [],
  },
  {
    icon: GitHub,
    name: 'GitHub',
    level: 3,
    category: 'service',
    tags: ['git'],
  },

  // runtimes
  {
    icon: NodeJS,
    name: 'Node.js',
    level: 4,
    category: 'runtime',
    tags: [],
  },
  {
    icon: Deno,
    name: 'Deno',
    level: 3,
    category: 'runtime',
    tags: [],
  },

  // softwares
  {
    icon: Docker,
    name: 'Docker',
    level: 1,
    category: 'software',
    tags: [],
  },
  {
    icon: Git,
    name: 'Git',
    level: 3,
    category: 'software',
    tags: ['git'],
  },
  {
    icon: Kubernetes,
    name: 'Kubernetes',
    level: 0,
    category: 'software',
    tags: [],
  },

  // others
  {
    icon: Linux,
    name: 'Linux',
    level: 2,
    category: 'other',
    tags: [],
  },
];
