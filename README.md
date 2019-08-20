[![NPM version](https://img.shields.io/npm/v/stenum.svg)](https://www.npmjs.com/package/stenum)
[![Size](https://img.shields.io/bundlephobia/minzip/stenum.svg)]()
[![license](https://img.shields.io/github/license/porsager/stenum.svg)]()

# 📬 `stenum`

> Like enums where each one can contain a value

Stenum can help you make a quick state model with multiple properties that are mutually exclusive. Only one property can be set at a time.

## Simple usage example

[Live sample on flems.io](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgCsEAaEAYwHs0AXGWvCLAB0oAMaACOOtAVyycwAJ0qCA5D3oDxAHTTyqaHtxoY6nALyrpWABTJ5nTuKiUMAEwhoA5uJJGTw+Hyg17j8TGGjhctAC6AJTy8sx64gAqABYwQhDCKsyizN40AJ6cAO7QUJwWMGAYrlw0lJwcwnwwbEKUwpxKAG70EPTkMOIhaOGm5la29qrqMPhmltY23fI8I-jOcCVanMDcYjCITi5u4pwAvmERsvIAcpQ0EB2c4wM2nBBwnHxoBZBoMBZdh30TgyTDdDG-Um02UakB3l8y3eWU4AFEfPUIgB5aKcNCUeCcAC06POnBslEon26vWOaDOFyuCyWD3RrigXx6ERpO3+s0BrJoQRAewCeyAA)

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
