const path = require('path')
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra')
const colorsPath = path.resolve(__dirname, 'styles/colors.less')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      hack: `true; @import "${colorsPath}";`,
    }
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
)
