const execSync = require('child_process').execSync

const babel = `${__dirname}/../node_modules/.bin/babel`

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: { ...process.env, ...extraEnv }
  })

console.log('\nBuilding ES modules ...')
exec(`${babel} --root-mode upward src -d es --ignore *.test.js`, {
  BABEL_ENV: 'es'
})

console.log('Building CommonJS modules ...')
exec(`${babel} --root-mode upward src -d lib --ignore *.test.js`, {
  BABEL_ENV: 'cjs'
})
