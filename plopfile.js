const fs = require('fs')
const path = require('path')

const SYMBOL = {
  caret: '^',
  tilde: '~',
  exact: ''
}

module.exports = plop => {
  plop.setGenerator('upgrade', {
    description: '批量修改组建中依赖版本',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入要修改的依赖包名称',
        default: 'react'
      },
      {
        type: 'input',
        name: 'version',
        message: '请输入要修改版本号',
        validate: input => {
          if (/^\d+(\.\d+){2}.*$/.test(input)) {
            return true
          }

          return '请输入正确的版本号，如：12.1.9'
        }
      },
      {
        type: 'list',
        name: 'symbol',
        message: '请选择版本号前缀',
        choices: [
          { name: 'caret', value: 'caret' },
          { name: 'tilde', value: 'tilde' },
          { name: 'exact', value: 'exact' }
        ]
      }
    ],
    actions: data => {
      const symbol = SYMBOL[data.symbol]
      const files = []
      const dir = './packages'
      const dirs = fs.readdirSync(dir)

      dirs.forEach(item => {
        const resolvePath = path.resolve(dir, item)
        const stat = fs.statSync(resolvePath)

        if (stat.isDirectory()) files.push(path.join(dir, item, 'package.json'))
      })

      return files.map(item => {
        return {
          type: 'modify',
          path: item,
          pattern: new RegExp(`"${data.name}": ".+"`),
          template: `"{{name}}": "${symbol}{{version}}"`
        }
      })
    }
  })
}
