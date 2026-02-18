const { ignores, configs } = require('./index.js')

module.exports = [...configs, { ignores: ignores() }]
