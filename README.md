# @depack/bundle-link

[![npm version](https://badge.fury.io/js/@depack/bundle-link.svg)](https://npmjs.org/package/@depack/bundle-link)

`@depack/bundle-link` is The Linked Package.

```sh
yarn add @depack/bundle-link
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`bundleLink(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@depack/bundle-link.Config`](#type-_@depack/bundle-linkconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import bundleLink from '@depack/bundle-link'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>bundleLink</ins>(</code><sub><br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/></sub><code>): <i>void</i></code>

Call this function to get the result you want.

<strong><a name="type-_@depack/bundle-linkconfig">`_@depack/bundle-link.Config`</a></strong>: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import bundleLink from '@depack/bundle-link'

(async () => {
  const res = await bundleLink({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright

(c) [Art Deco][1] 2019

[1]: https://artd.eco/depack

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>