const { remove } = require('diacritics')

module.exports = str => remove(str).toLowerCase().replace(/\s/g, '-').replace(/-+/g, '-')
