const configReact = require('./configs/react')
const ignores = require('./ignores')
const { configs } = require('./index')

module.exports = {
  ignores,
  configs: [...configs, configReact],
}
