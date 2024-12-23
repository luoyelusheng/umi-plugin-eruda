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
  plugins: [['umi-plugin-eruda']],
  eruda: {
    scale: 2,
    debug: true,
  },
};
```

## Options

<pre>
debug 为true时，eruda 才会生效，默认会取 ERUDA_DEBUG 环境变量作为默认值，可通过环境变量覆盖：
</pre>

```js
"scripts": {
  "start": "cross-env APP_ROOT=example ERUDA_DEBUG=true umi dev",
},
```

另外通过直接在 URL 中添加 ERUDA_DEBUG 也可以开启调试：

```js
http://www.dem.com?ERUDA_DEBUG=true
```

## LICENSE

MIT
