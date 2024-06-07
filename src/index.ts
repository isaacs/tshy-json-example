//@ts-ignore
import json from './json.json' with { type: 'json' }

type T = typeof json

//@ts-expect-error
export const t: T = { nope: 'not ok' }

console.log(json)

import('./blah.json', { assert: { type: 'json' } }).then(result => {
  console.error(result)
})
