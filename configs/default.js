const { fixupPluginRules } = require('@eslint/compat')
const pluginImport = require('eslint-plugin-import')
const pluginPrettier = require('eslint-plugin-prettier')
const pluginUnusedImports = require('eslint-plugin-unused-imports')

/** @type import('eslint').Linter.Config */
module.exports = {
  name: '@alesal/lint-default',
  settings: {
    'import/internal-regex': '^~',
  },
  plugins: {
    prettier: pluginPrettier,
    import: fixupPluginRules(pluginImport),
    'unused-imports': pluginUnusedImports,
  },
  languageOptions: {
    parserOptions: {
      ecmaVersion: 10,
      sourceType: 'module',
      ecmaFeatures: { modules: true, jsx: true },
    },
  },
  rules: {
    ...pluginPrettier.configs.recommended.rules,
    ...pluginImport.configs.recommended.rules,
    'no-restricted-globals': ['error'],
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['block-like', 'function'], next: '*' },
      { blankLine: 'always', prev: ['*'], next: ['block-like', 'function'] },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'any',
        prev: ['export', 'import'],
        next: ['export', 'import'],
      },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['export'] },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: "VariableDeclarator > Identifier[name='process']",
        message: 'process is a reserved name for NodeJS Environment',
      },
    ],
    'max-lines': ['error', 300],
    'max-len': ['off'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_?(err|error|e)$',
      },
    ],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-extra-semi': ['error'],
    'no-var': ['error'],
    quotes: ['error', 'single', { avoidEscape: true }],
    eqeqeq: 0,
    'quote-props': 'off',
    'no-useless-escape': 'off',
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/no-cycle': 'off',
    'import/no-deprecated': 'off',
    'import/no-unused-modules': 'off',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          ['external', 'internal'],
          ['parent', 'sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['react'],
        pathGroups: [
          { pattern: 'react**', group: 'builtin', position: 'before' },
          { pattern: '~/**', group: 'internal', position: 'after' },
          { pattern: '@/**', group: 'internal', position: 'after' },
        ],
      },
    ],
    'unused-imports/no-unused-imports': 'error',
  },
}
