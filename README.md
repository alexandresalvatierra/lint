# @alesal/lint

ESLint + Prettier config for TypeScript/Node and React.

## Prerequisite

This package is for TypeScript projects only. Your project must already have TypeScript installed.

## Installation

**TypeScript (Node):**

```bash
pnpm add -D @alesal/lint
```

**React:**

```bash
pnpm add -D @alesal/lint react
```

## Usage

**Node/TypeScript** — in `eslint.config.js`:

```js
const { ignores, configs } = require('@alesal/lint');

module.exports = [...configs, { ignores: ignores() }];
```

**React** — in `eslint.config.js`:

```js
const { ignores, configs } = require('@alesal/lint/react');

module.exports = [...configs, { ignores: ignores() }];
```

## Prettier (optional)

To use the same formatting as this config, create a `.prettierrc.js` in your project:

```js
module.exports = require('@alesal/lint/prettier');
```

## Extra ignores

To add more ignore patterns:

```js
module.exports = [...configs, { ignores: ignores('**/out/**', 'coverage/**') }];
```

## Custom rules

You can override or add rules by passing a config object at the end:

```js
module.exports = [
  ...configs,
  {
    ignores: ignores(),
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
    }
  }
];
```
