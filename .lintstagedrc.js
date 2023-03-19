const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildFormatCommand = (filenames) => {
  return `pnpm format ${filenames.filter(
    (f) =>
      !['src/path/$path.ts']
        .includes(path.relative(process.cwd(), f))
        .map((f) => `"${f}"`)
        .join(' '),
  )}`;
};

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'pnpm stylelint'],
  '*.{js,jsx,ts,tsx,css,scss}': 'pnpm stylelint',
  '*.{css,scss,js,jsx,ts,tsx,json,md}': buildFormatCommand,
};
