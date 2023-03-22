import Image from 'next/image';
import { ColorSchemeSwitch } from '@/components/functional/ColorSchemeSwitch';

const iconComponent = (src: string) => <Image src={src} alt="" fill />;
const colorSchemeComponent = (src: string) => (
  <ColorSchemeSwitch
    dark={iconComponent(url(`${src}-Dark`))}
    light={iconComponent(url(`${src}-Light`))}
  />
);

const url = (id: string) =>
  `https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/${id}.svg`;

// languages
export const HTML = iconComponent(url('HTML'));
export const CSS = iconComponent(url('CSS'));
export const Sass = iconComponent(url('Sass'));
export const JavaScript = iconComponent(url('JavaScript'));
export const TypeScript = iconComponent(url('TypeScript'));
export const GoLang = iconComponent(url('GoLang'));
export const Rust = iconComponent(url('Rust'));
export const Python = colorSchemeComponent('Python');
export const Regex = colorSchemeComponent('Regex');
export const GraphQL = colorSchemeComponent('GraphQL');
export const LaTeX = colorSchemeComponent('LaTeX');

// frameworks
export const React = colorSchemeComponent('React');
export const Vue = colorSchemeComponent('VueJS');
export const Svelte = iconComponent(url('Svelte'));
export const Astro = iconComponent(url('Astro'));
export const Vite = colorSchemeComponent('Vite');
export const SolidJS = colorSchemeComponent('SolidJS');
export const Electron = iconComponent(url('Electron'));
export const NextJS = colorSchemeComponent('NextJS');
export const NuxtJS = colorSchemeComponent('NuxtJS');

// libraries

export const Express = colorSchemeComponent('ExpressJS');

export const PyTorch = colorSchemeComponent('PyTorch');
export const TensorFlow = colorSchemeComponent('TensorFlow');
export const Jest = iconComponent(url('Jest'));
export const Prisma = iconComponent(url('Prisma'));

// editors
export const VSCode = colorSchemeComponent('VSCode');

// platforms
export const AWS = colorSchemeComponent('AWS');
export const Azure = colorSchemeComponent('Azure');
export const Vercel = colorSchemeComponent('Vercel');

// services
export const Supabase = colorSchemeComponent('Supabase');
export const Firebase = colorSchemeComponent('Firebase');
export const Figma = colorSchemeComponent('Figma');
export const GitHub = colorSchemeComponent('Github');

// runtimes
export const Deno = colorSchemeComponent('DENO');
export const NodeJS = colorSchemeComponent('NodeJS');

// softwares
export const Docker = iconComponent(url('Docker'));
export const Git = iconComponent(url('Git'));
export const Kubernetes = iconComponent(url('Kubernetes'));

// others
export const Linux = colorSchemeComponent('Linux');
