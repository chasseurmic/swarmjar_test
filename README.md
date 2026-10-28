# swarmjar_test

## Utilities

### truncate(text, max)

Defined in `src/truncate.js` (CommonJS: `const { truncate } = require('./src/truncate');`).

Returns `text` unchanged if `text.length <= max`. Otherwise returns the first `max - 1` characters followed by the single character `…`, so the result length is exactly `max`.

Throws a `RangeError` if `max` is not a positive integer.

```js
truncate('hello', 10);       // 'hello'
truncate('hello world', 5);  // 'hell…'
truncate('abc', 3);          // 'abc'
truncate('abc', 0);          // throws RangeError
```

Run the tests with `npm test`.
