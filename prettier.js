const path = require('path')

const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  bracketSpacing: true,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  tailwindFunctions: ['tw', 'clsx'],
}

try {
  config.plugins = [require.resolve('prettier-plugin-tailwindcss')]
} catch (_e) {
  try {
    const lintDir = path.dirname(require.resolve('@alesal/lint/package.json'))
    config.plugins = [
      require.resolve('prettier-plugin-tailwindcss', { paths: [lintDir] }),
    ]
  } catch (_e) {
    config.plugins = []
  }
}

module.exports = config
