import globals from 'globals';
import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      '@typescript-eslint': ts,
      prettier: prettierPlugin, // Enable Prettier plugin
    },
    rules: {
      ...ts.configs.recommended.rules,
      'prettier/prettier': 'error', // Prettier as a rule
    },
  },
  js.configs.recommended,
  prettier, // Disable conflicting ESLint rules
];
