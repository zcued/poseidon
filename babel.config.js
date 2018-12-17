module.exports = {
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties'
  ],
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
