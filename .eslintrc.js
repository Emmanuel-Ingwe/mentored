const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src', 'app', 'shared'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react',
    'prettier',
    '@typescript-eslint',
    'autofix',
    'react-hooks',
    'sort-keys-fix',
  ],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'sort-keys-fix/sort-keys-fix': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-children-prop': 'error',
    'react/jsx-handler-names': 'error',
    'react/prefer-stateless-function': 'error',
    'no-lonely-if': 'error',
    'no-else-return': 'warn',
    'default-param-last': 'warn',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
        'react/react-in-jsx-scope': 'off',
        camelcase: 'error',
        'spaced-comment': 'error',
        quotes: ['error', 'single'],
        'no-console': 'warn',
        'no-redeclare': 'warn',
        'react/display-name': 'error',
        'react/jsx-key': 'warn',
        'arrow-body-style': ['error', 'always'],
        'react/self-closing-comp': ['error', { component: true, html: true }],
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          {
            prefer: 'type-imports',
          },
        ],
        'import/order': [
          'warn',
          {
            groups: ['builtin', 'external', 'internal', ['parent', 'sibling']],
            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
              {
                pattern: '~/**',
                group: 'internal',
                position: 'before',
              },
            ],
            pathGroupsExcludedImportTypes: ['react'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'no-restricted-imports': [
          'warn',
          {
            patterns: [],
          },
        ],
      },
    },
  ],
};
