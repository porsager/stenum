[![NPM version](https://img.shields.io/npm/v/stenum.svg)](https://www.npmjs.com/package/stenum)
[![Size](https://img.shields.io/bundlephobia/minzip/stenum.svg)]()
[![license](https://img.shields.io/github/license/porsager/stenum.svg)]()

# 🗿 `stenum`

> Like enums where each one can contain a value

Stenum can help you make a quick state model with multiple properties that are mutually exclusive. Only one property can be set at a time.

## Simple usage example

[Live sample on flems.io](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgCsEAaEAYwHs0AXGWvCLAB0oCcaACOOtAVyycwbSoIDkPegLEAdNHKpoe3GhjqcAvCqlYAFMjmdOYqJQwATCGgDmYkoeNt4fKDTsOxMNiLay0AXQBKOTlmXTEAFQALGCEINmVmEWYvGgBPTgB3aChOcxgwDBcuGkpOAAMaNj4YcqF2TkUAN3oIenIYMWC0MJMzSxs7FTUYfFMLK2tuuR4R-Cc4Ys1OYG5RGERHZ1cxTgBfUPCZOQA5ShoIDs5xgetOCDhOPjR8yDQYcy7DsQXiodm6PNtjRur0bpN-qpAeCbNMlFDRl4fMt3plOABRbzscIAeSinDQlHgnAAtATzpxrJRKJ9QUdTudLrFfq57o9+FAoF8euEWW4SMNAXzAiAyHAYLByBdqAhECAAAyIABMADYQHt-HsgA)

```js
import stenum from 'stenum'

const s = stenum([
  'loading',
  'result',
  'error'
], (key, value) =>
  console.log(key, 'changed to', value)
)

s.loading = true
s.result = { some: 'result' } // s.loading === undefined
s.error = new Error('Oh noes - not good') // s.result === undefined
```

### `stenum(keys, [observer])`

The `stenum` creator can take multiple arguments, where each will be a group of properties that become mutually exclusive.

The observer function is optional and will be called with `(key, value)` anytime a property is changed.

### `stenum.property = 'some value'`

Setting one of the specified properties will set the rest to undefined.

### `stenum('property')`

The `stenum` instance itself is a function that returns a setter for any value passed to it. This is very useful if supplying it as a callback for promises and the like.
