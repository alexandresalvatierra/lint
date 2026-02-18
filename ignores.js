const fs = require('node:fs')

const { globSync } = require('glob')
const parse = require('parse-gitignore')

module.exports = function ignores(...extra) {
  const files = globSync('./**/.gitignore')
  const ignoresList = ['dist/**', 'build/**', 'node_modules/**']

  for (const file of files) {
    let content = ''
    const baseFolder = file.replace('.gitignore', '')

    try {
      content = fs.readFileSync(file, 'utf8')
    } catch (error) {
      continue
    }

    const parsed = parse(`${content}\n`)
    ignoresList.push(
      ...parsed.patterns.map(
        pattern =>
          `${pattern.startsWith('!') ? '!' : ''}${baseFolder}${pattern.replace(/^\!/im, '').replace(/^\//im, '')}`
      )
    )
  }

  return Array.from([...ignoresList, ...extra])
}
