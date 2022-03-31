;(function(g){typeof exports==="object"&&typeof module!=="undefined"?module.exports=stenum:((g?g:self).stenum=stenum);

function stenum(states, observer) {
  let current = 0
  let value = true
  function s(key) {
    return (v) => s[key] = v
  }

  states.forEach((key, i) =>
    Object.defineProperty(s, key, {
      enumerable: true,
      get: () => i === current
        ? value
        : undefined,
      set: (v => {
        current = i
        value = v
        typeof observer === 'function' && observer(key, value)
      })
    })
  )

  s.toString = s.valueOf = () => states[current]
  s.toJSON = () => ({ [states[current]]: value })

  return typeof Object.seal === 'function'
    ? Object.seal(s)
    : s
}
})(this);