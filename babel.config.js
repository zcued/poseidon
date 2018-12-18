const BABEL_ENV = process.env.BABEL_ENV
const isEsModules = BABEL_ENV === 'es'

module.exports = {
  presets: [
    [
      'next',
      {
        loose: true,
        modules: isEsModules ? false : 'commonjs'
      }
    ]
  ]
}
