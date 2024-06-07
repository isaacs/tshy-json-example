import json from './json.json'

type T = typeof json

//@ts-expect-error
export const t: T = { nope: 'not ok' }
