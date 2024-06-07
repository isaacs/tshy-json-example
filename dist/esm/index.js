//@ts-ignore
import json from './json.json' with { type: 'json' };
//@ts-expect-error
export const t = { nope: 'not ok' };
console.log(json);
import('./blah.json', { assert: { type: 'json' } }).then(result => {
    console.error(result);
});
//# sourceMappingURL=index.js.map