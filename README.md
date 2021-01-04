# umi-plugin-eruda

[![NPM version](https://img.shields.io/npm/v/umi-plugin-eruda.svg?style=flat)](https://npmjs.org/package/umi-plugin-eruda) [![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-eruda.svg?style=flat)](https://npmjs.org/package/umi-plugin-eruda)

config umi debug

## Install

```bash
# or yarn
$ npm install
```

```bash
$ npm run build --watch
$ npm run start
```

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-eruda'],
  ],
  eruda: {
    init: {},
    scale: 2,
    position: {},
    tools: [],
    hidden:false，
    debug: true
  },
}
```

## Options

<pre>
hidden 优先级最高，表示隐藏 eruda，同时设置 debug 默认无效
debug 在生产环境下打开调试 eruda，默认只在开发环境显示 eruda
</pre>

## LICENSE

MIT
