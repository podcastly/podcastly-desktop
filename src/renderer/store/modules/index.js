const lowerCase = require('lodash/lowerCase')
const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  if (key === './index.js') return
  const namespace = key.replace(/(\.\/|\.js)/g, '')
  modules[lowerCase(namespace)] = files(key).default
})

export default modules
