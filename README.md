# poseidon

yet another web components

```sh
git clone git@github.com:zcued/poseidon.git
cd poseidon
yarn install
yarn bootstrap
yarn build
cd site && yarn && yarn start
```

### Contributing

> 创建一个新的 package，比如 radio

- lerna create radio
  — cd packages/radio
- mkdir src

> 添加依赖 比如 radio 依赖 theme。 --scope 不声明的话，默认会给 packages 下的全部包安装依赖

- lerna add @zcool/theme --scope=@zcool/radio

> 测试组件功能

- leran run build
- cd site 修改 /components/mdx-layout.js 和 /components/layout.js
- yarn start

## TODO

- typings
- tests
