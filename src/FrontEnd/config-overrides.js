const path = require('path')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
module.exports = function override(config, env) {
  config.resolve.alias = {
    assets: path.resolve(__dirname, 'src/assets/'),
    css: path.resolve(__dirname, 'src/css/'),
    components: path.resolve(__dirname, 'src/components/'),
    context: path.resolve(__dirname, 'src/context/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    layouts: path.resolve(__dirname, 'src/layouts/'),
    pages: path.resolve(__dirname, 'src/pages/'),
    variables: path.resolve(__dirname, 'src/variables/')
  }
  return rewireReactHotLoader(config, env)
}
