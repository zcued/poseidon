module.exports = {
  env: {
    es: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false
          }
        ],
        '@babel/preset-react'
      ]
    },
    cjs: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: 'commonjs'
          }
        ],
        '@babel/preset-react'
      ]
    }
  }
}
