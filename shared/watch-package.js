const exec = require('child_process').exec

const babel = `${__dirname}/../node_modules/.bin/babel`

const execute = (command, extraEnv) =>
  exec(command, {
    stdio: 'inherit',
    env: { ...process.env, ...extraEnv }
  })

console.log('\nBuilding ES modules ...')
execute(`${babel} --root-mode upward src --watch -d es --ignore *.test.js`, {
  BABEL_ENV: 'es'
})

console.log('Building CommonJS modules ...')
execute(`${babel} --root-mode upward src --watch -d lib --ignore *.test.js`, {
  BABEL_ENV: 'cjs'
})
