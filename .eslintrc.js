module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'google',
    'prettier',
  ],
  plugins: [
    'react-hooks',
    'react',
    '@typescript-eslint',
    'import',
    'simple-import-sort',
  ],
  rules: {
    'require-jsdoc': ['off'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
    '@next/next/no-img-element': ['off'],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],
    'no-unused-vars': ['off'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' },
    ],
  },
};
